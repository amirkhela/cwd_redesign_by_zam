// Relays the newest automation run log to the team portal (which emails the
// daily report), after live-verifying every URL the run shipped.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const KEY = process.env.TEAM_LOG_KEY;
if (!KEY) {
  console.error("TEAM_LOG_KEY secret is not set — cannot relay report.");
  process.exit(1);
}

const dir = "automation/logs";
const files = readdirSync(dir).filter((f) => f.endsWith(".json"));
if (!files.length) {
  console.log("No run logs found — nothing to relay.");
  process.exit(0);
}
// "2026-07-24-2.json" must sort AFTER "2026-07-24.json" ("-" < "." in ASCII,
// so a plain sort picks the wrong file — this bug ate the Day 1 report).
const sortKey = (f) => {
  const m = f.match(/^(\d{4}-\d{2}-\d{2})(?:-(\d+))?\.json$/);
  return m ? `${m[1]}-${String(m[2] || 1).padStart(3, "0")}` : f;
};
const latest = files.sort((a, b) => sortKey(a).localeCompare(sortKey(b))).pop();
const report = JSON.parse(readFileSync(join(dir, latest), "utf8"));
console.log(`Relaying ${latest} (status: ${report.status})`);

// Every URL in the report must be absolute so the portal/email show full links.
const SITE = "https://canadianwebdesigns.ca";
const abs = (u) => (u && !u.startsWith("http") ? SITE + u : u);
for (const p of report.pagesOptimized || []) p.url = abs(p.url);
for (const b of report.blogs || []) b.url = abs(b.url) || `${SITE}/blog/${b.slug}`;
for (const n of report.newPages || []) n.url = abs(n.url);

// Live-verify every shipped URL (the cloud agent usually can't).
const urls = new Set();
for (const p of report.pagesOptimized || []) if (p.url) urls.add(p.url);
for (const b of report.blogs || []) urls.add(b.url);
for (const n of report.newPages || []) if (n.url) urls.add(n.url);

if (urls.size) {
  const checks = [];
  for (const u of urls) {
    try {
      const res = await fetch(u, { method: "GET", redirect: "manual" });
      checks.push({ url: u.replace(SITE, ""), http: res.status });
      console.log(`  ${res.status} ${u}`);
    } catch (e) {
      checks.push({ url: u.replace(SITE, ""), http: 0 });
      console.log(`  FAIL ${u}: ${e.message}`);
    }
  }
  report.liveVerification = checks;
}

const res = await fetch("https://team.canadianwebdesigns.ca/api/automations/seo-report", {
  method: "POST",
  headers: { "Content-Type": "application/json", "x-log-key": KEY },
  body: JSON.stringify(report),
});
console.log(`Portal relay: HTTP ${res.status}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
