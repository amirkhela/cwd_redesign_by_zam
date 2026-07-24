// Dead-man's switch: if the daily SEO run pushed no log for today, email a
// missed-run alert via the portal. Runs from .github/workflows/seo-heartbeat.yml.
import { readdirSync, readFileSync } from "node:fs";

const KEY = process.env.TEAM_LOG_KEY;
if (!KEY) {
  console.error("TEAM_LOG_KEY secret is not set — cannot send alerts.");
  process.exit(1);
}

const date = process.env.CHECK_DATE || new Date().toISOString().slice(0, 10);
const logs = readdirSync("automation/logs").filter((f) => f.startsWith(date) && f.endsWith(".json"));

if (logs.length) {
  console.log(`Heartbeat OK — run log present for ${date}: ${logs.join(", ")}`);
  process.exit(0);
}

console.log(`No run log for ${date} — sending missed-run alert.`);

let day = "?", title = "";
try {
  day = JSON.parse(readFileSync("automation/state.json", "utf8")).nextDay;
  const plan = JSON.parse(readFileSync("automation/plan.json", "utf8"));
  title = plan.days.find((d) => d.day === day)?.title || "";
} catch {}

const res = await fetch("https://team.canadianwebdesigns.ca/api/automations/seo-report", {
  method: "POST",
  headers: { "Content-Type": "application/json", "x-log-key": KEY },
  body: JSON.stringify({
    runId: `${date}-heartbeat-missed`,
    date,
    status: "error",
    dayNumber: day,
    dayTitle: `MISSED RUN — heartbeat alert${title ? ` (was due: ${title})` : ""}`,
    notes:
      `HEARTBEAT ALERT: the daily SEO run pushed NO log for ${date} — the 6PM PKT cloud session ` +
      `appears to have died silently before shipping anything (no commits, no report). ` +
      `Nothing was optimized or published today. ` +
      `Action: check the routine's session transcript at https://claude.ai/code/routines/trig_011KKLvBKdULkEtm62NC73UX ` +
      `and re-trigger the run manually if needed. The day counter was not advanced, so the next run will retry Day ${day}.`,
  }),
});
console.log(`Alert relay: HTTP ${res.status}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
