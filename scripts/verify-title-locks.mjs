#!/usr/bin/env node
/**
 * verify-title-locks.mjs -- every page in scripts/title-locks.json still SERVES its locked
 * <title> and meta description, and still carries a favicon that loads.
 *
 *   node scripts/verify-title-locks.mjs                          # https://canadianwebdesigns.ca
 *   node scripts/verify-title-locks.mjs http://127.0.0.1:3000    # a local `next start`
 *
 * Exits 0 when every locked page matches, 1 otherwise, and names the page and the field.
 *
 * WHY THIS EXISTS. The ten titles in the lock file were hand-written on 2026-10-28 from the
 * Search Console queries each page is shown for, and their click-through rate is measured
 * 28 days later against the 28 days before. A title that quietly changes in between turns
 * that measurement into noise, so the lock has to be checkable, not just written down.
 *
 * FIVE RULES:
 *
 * 1. IT PARSES SERVED HTML, NEVER THE SOURCE -- the same rule as verify-seo.mjs. Several of
 *    these titles are template literals (rating, review count, the Google Ads price), so
 *    only the rendered page says what Google sees.
 * 2. A PAGE THAT CANNOT BE READ IS A FAILURE, NOT A PASS (verify-seo.mjs rule 4).
 * 3. THE NUMBERS THAT MOVE ON THEIR OWN ARE NORMALISED, NOTHING ELSE IS. The Google rating
 *    ("4.8★") and the rounded-down counts ("190+", "20+") come from src/lib/cwd-config.ts and
 *    change when reviews arrive; a new review must never fail the lock. Every other
 *    character must match exactly.
 * 4. THE HOUSE LIMITS ARE CHECKED ON WHAT IS SERVED: title at most 60 characters with every
 *    word capitalised, meta description at most 155.
 * 5. A FAVICON TAG IS NOT A FAVICON. The first icon link is fetched once; a 404 fails.
 */

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const BASE = (process.argv.find((a) => a.startsWith("http")) || "https://canadianwebdesigns.ca").replace(/\/$/, "");
const LOCKS = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), "title-locks.json"), "utf8"));
const UA = "Mozilla/5.0 (compatible; cwd-verify-title-locks/1.0)";
const TITLE_MAX = 60;
const DESC_MAX = 155;

const failures = [];
const fail = (where, msg) => failures.push(`${where}: ${msg}`);

function decode(s) {
  return String(s)
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .trim();
}

// Rule 3: the rating before a star, and any rounded-down "NN+" count.
export function normalise(s) {
  return String(s).replace(/\b\d(?:\.\d)?(?=★)/g, "R").replace(/\b\d{2,}\+/g, "N+");
}

// Rule 4: every word starts with a capital (the house rule for titles) -- a word is what
// follows a space, a slash, a hyphen or an opening bracket, as CSS `capitalize` sees it.
export function lowerWords(title) {
  return String(title).split(/[\s/\-(]+/).filter((w) => /^[a-z]/.test(w));
}

function metaContent(html, name) {
  for (const m of html.matchAll(/<meta\b[^>]*>/gi)) {
    const tag = m[0];
    if (new RegExp(`\\bname=["']${name}["']`, "i").test(tag)) {
      const c = tag.match(/\bcontent=(["'])([\s\S]*?)\1/i);
      return c ? decode(c[2]) : "";
    }
  }
  return null;
}

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow", signal: AbortSignal.timeout(30000) });
  return { status: res.status, body: await res.text() };
}

let faviconChecked = false;

async function checkPage(path, lock) {
  let r;
  try { r = await get(BASE + path); }
  catch (e) { return fail(path, `unreachable - ${e.message}`); }
  if (r.status !== 200) return fail(path, `HTTP ${r.status}`);
  const html = r.body;

  const tm = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = tm ? decode(tm[1]) : "";
  if (!title) fail(path, "no <title>");
  else if (normalise(title) !== normalise(lock.title)) fail(path, `title is "${title}", locked "${lock.title}"`);
  if (title.length > TITLE_MAX) fail(path, `title is ${title.length} characters (max ${TITLE_MAX})`);
  const lower = lowerWords(title);
  if (lower.length) fail(path, `title words not capitalised: ${lower.join(", ")}`);

  const desc = metaContent(html, "description");
  if (desc === null) fail(path, "no meta description");
  else {
    if (normalise(desc) !== normalise(lock.description)) fail(path, `description is "${desc}", locked "${lock.description}"`);
    if (desc.length > DESC_MAX) fail(path, `description is ${desc.length} characters (max ${DESC_MAX})`);
  }

  const icon = html.match(/<link\b[^>]*\brel=["'](?:shortcut )?icon["'][^>]*>/i);
  if (!icon) return fail(path, "no favicon <link rel=\"icon\">");
  if (!faviconChecked) {
    faviconChecked = true;
    const href = (icon[0].match(/\bhref=["']([^"']+)["']/i) || [])[1];
    if (!href) return fail(path, "favicon link has no href");
    try {
      const f = await fetch(new URL(decode(href), BASE + "/").toString(), { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(30000) });
      if (f.status !== 200) fail(path, `favicon ${href} answers HTTP ${f.status}`);
    } catch (e) { fail(path, `favicon ${href} unreachable - ${e.message}`); }
  }
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  const pages = Object.entries(LOCKS.pages || {});
  console.log(`verify-title-locks: ${BASE} - ${pages.length} locked pages`);
  if (!pages.length) fail("title-locks.json", "no pages listed");
  for (const [path, lock] of pages) {
    await checkPage(path, lock);
    process.stdout.write(".");
  }
  process.stdout.write("\n");
  if (failures.length) {
    console.log(`FAIL - ${failures.length} problem(s):`);
    for (const f of failures) console.log(`  ${f}`);
    process.exit(1);
  }
  console.log(`PASS - ${pages.length} pages serve their locked title and description, favicon loads`);
}
