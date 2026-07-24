#!/usr/bin/env node
// Minimal MCP-over-HTTP client for the SE Ranking MCP endpoint.
// Usage: node automation/seranking.mjs <toolName> '<jsonArgs>'
//   e.g. node automation/seranking.mjs DATA_getKeywordsMetrics '{"source":"ca","keywords":["web design toronto"]}'
// Requires env SERANKING_API_KEY. Prints the tool result JSON to stdout.

const ENDPOINT = "https://api.seranking.com/mcp";
const KEY = process.env.SERANKING_API_KEY;
if (!KEY) {
  console.error("SERANKING_API_KEY env var is required");
  process.exit(1);
}

const [tool, argsJson] = process.argv.slice(2);
if (!tool) {
  console.error("Usage: node seranking.mjs <toolName> '<jsonArgs>'");
  process.exit(1);
}
const toolArgs = argsJson ? JSON.parse(argsJson) : {};

function parseBody(text) {
  // Streamable HTTP may answer as plain JSON or as an SSE stream of `data:` lines.
  const t = text.trim();
  if (t.startsWith("{")) return JSON.parse(t);
  const events = t.split("\n").filter((l) => l.startsWith("data:")).map((l) => l.slice(5).trim());
  for (const e of events.reverse()) {
    try {
      const j = JSON.parse(e);
      if (j.id !== undefined || j.result || j.error) return j;
    } catch { /* skip non-JSON events */ }
  }
  throw new Error("No JSON-RPC payload in response: " + t.slice(0, 300));
}

async function rpc(body, sessionId) {
  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json, text/event-stream",
    "X-Api-Key": KEY,
  };
  if (sessionId) headers["Mcp-Session-Id"] = sessionId;
  const res = await fetch(ENDPOINT, { method: "POST", headers, body: JSON.stringify(body) });
  const newSession = res.headers.get("mcp-session-id") || sessionId;
  const text = await res.text();
  if (!res.ok) throw new Error(`HTTP ${res.status}: ${text.slice(0, 300)}`);
  return { payload: text ? parseBody(text) : null, sessionId: newSession };
}

const init = await rpc({
  jsonrpc: "2.0", id: 1, method: "initialize",
  params: {
    protocolVersion: "2025-03-26",
    capabilities: {},
    clientInfo: { name: "cwd-seo-automation", version: "1.0" },
  },
});
// Fire-and-forget per spec; some servers require it before tools/call.
try {
  await rpc({ jsonrpc: "2.0", method: "notifications/initialized" }, init.sessionId);
} catch { /* optional */ }

const call = await rpc(
  { jsonrpc: "2.0", id: 2, method: "tools/call", params: { name: tool, arguments: toolArgs } },
  init.sessionId
);

if (call.payload.error) {
  console.error(JSON.stringify(call.payload.error));
  process.exit(1);
}
const content = call.payload.result?.content;
const textPart = Array.isArray(content) ? content.find((c) => c.type === "text")?.text : null;
console.log(textPart ?? JSON.stringify(call.payload.result));
