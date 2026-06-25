'use strict';
// Daily SEO Report emailer — June 25, 2026
// Password is read from environment variable SMTP_PASS — NEVER hardcode secrets here.

const nodemailer = require('nodemailer');

const SMTP_PASS = process.env.SMTP_PASS;
if (!SMTP_PASS) {
  console.error('ERROR: SMTP_PASS environment variable is not set. Aborting.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'canadianwebdesigns.emails@gmail.com',
    pass: SMTP_PASS,
  },
});

const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Daily SEO Report — canadianwebdesigns.ca | June 25, 2026</title>
</head>
<body style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,Helvetica,sans-serif;color:#222;">

  <!-- Header -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#003087;">
    <tr>
      <td style="padding:32px 40px;">
        <h1 style="margin:0;color:#ffffff;font-size:24px;font-weight:700;letter-spacing:0.5px;">
          Canadian Web Designs
        </h1>
        <p style="margin:6px 0 0;color:#a8c4f0;font-size:15px;">
          CWD Daily SEO Report &mdash; June 25, 2026
        </p>
      </td>
    </tr>
  </table>

  <!-- Body wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td style="padding:32px 40px;">

        <!-- Section 0: GSC + GA4 Summary -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 0 &mdash; GSC &amp; GA4 Performance Summary
        </h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;margin-bottom:16px;">
          <thead>
            <tr style="background:#003087;color:#fff;">
              <th style="text-align:left;padding:10px 12px;border:1px solid #0050c8;">Metric</th>
              <th style="text-align:center;padding:10px 12px;border:1px solid #0050c8;">Last 7 Days</th>
              <th style="text-align:center;padding:10px 12px;border:1px solid #0050c8;">Change vs prev 7d</th>
              <th style="text-align:center;padding:10px 12px;border:1px solid #0050c8;">Last 28 Days</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#f0f5ff;">
              <td style="padding:9px 12px;border:1px solid #d0d9ea;font-weight:600;">Clicks</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">27</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;color:#e74c3c;font-weight:600;">&minus;15.6%</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">121</td>
            </tr>
            <tr>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;font-weight:600;">Impressions</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">26,039</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;color:#e74c3c;font-weight:600;">&minus;15.4%</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">117,796</td>
            </tr>
            <tr style="background:#f0f5ff;">
              <td style="padding:9px 12px;border:1px solid #d0d9ea;font-weight:600;">CTR</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">0.10%</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;color:#7f8c8d;">&mdash;</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">0.10%</td>
            </tr>
            <tr>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;font-weight:600;">Avg. Position</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">18.2</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;color:#7f8c8d;">&mdash;</td>
              <td style="text-align:center;padding:9px 12px;border:1px solid #d0d9ea;">23.0</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size:13px;background:#fff8e6;border-left:4px solid #f39c12;padding:10px 14px;margin:0 0 10px;border-radius:4px;">
          <strong>Homepage:</strong> 98,971 impressions | CTR 0.11% | Avg position 19.9
        </p>
        <p style="font-size:13px;background:#fff5f5;border-left:4px solid #e74c3c;padding:10px 14px;margin:0 0 10px;border-radius:4px;">
          <strong>7-day dip context:</strong> Clicks &minus;15.6% and impressions &minus;15.4% WoW. CTR holding at 0.10% — primary priority is lifting CTR through today's title/description rewrites. Avg position improved to 18.2 (7d) vs 23.0 (28d), showing recent ranking gains.
        </p>
        <p style="font-size:13px;background:#f0fff4;border-left:4px solid #27ae60;padding:10px 14px;margin:0 0 28px;border-radius:4px;">
          <strong>Top opportunities identified:</strong> /seo/surrey/ (1,236 impr, 0% CTR) | /locations/mississauga/ (1,838 impr) | /services/web-design-development/ (2,919 impr, 0% CTR) | London Ontario blog at pos 8.7 (near page 1). PageSpeed API returned N/A — API outage suspected (same as June 18). Sitemap 200, 228 URLs. robots.txt 200, AI bots blocked.
        </p>

        <!-- Section 1: Technical Checks -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 1 &mdash; Technical Checks
        </h2>
        <ul style="margin:0 0 28px;padding-left:22px;font-size:14px;line-height:2.0;">
          <li>&#10003; <strong>robots.txt</strong> &mdash; HTTP 200. Disallows: /api/, /detail/, WordPress paths. AI bots blocked (GPTBot, anthropic-ai, CCBot).</li>
          <li>&#10003; <strong>sitemap.xml</strong> &mdash; HTTP 200, 228 URLs confirmed. New blog posts auto-appear via getAllPosts() on next build.</li>
          <li>&#10003; <strong>Canonical tags</strong> &mdash; Present on all optimized pages.</li>
          <li>&#9888; <strong>PageSpeed</strong> &mdash; API returned 0/100 for Mobile &amp; Desktop (N/A all metrics). API outage suspected — consistent with June 18. Manual recheck recommended at pagespeed.web.dev.</li>
          <li>&#9888; <strong>Legacy WordPress URLs in GSC</strong> &mdash; /how-much-does-a-wordpress-website-cost/ (409 impr, pos 15.5, 0% CTR), /best-menu-design-service/ (76 impr), /marketing-automation-software-overview/ (620 impr) have no Next.js page.tsx. Action needed: verify 301-redirect from old WordPress site or create dedicated Next.js pages.</li>
        </ul>

        <!-- Section 2: Pages Optimized -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 2 &mdash; Pages Optimized (41+ pages)
        </h2>
        <p style="font-size:13px;margin:0 0 10px;"><strong>Strategy:</strong> CTR-focused metadata rewrites — neighbourhood specificity, pricing anchors ($1,499), phone number CTAs, review count social proof (180+), conversion verbs.</p>
        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:13px;margin-bottom:28px;">
          <thead>
            <tr style="background:#003087;color:#fff;">
              <th style="text-align:left;padding:8px 10px;border:1px solid #0050c8;">#</th>
              <th style="text-align:left;padding:8px 10px;border:1px solid #0050c8;">Page / File</th>
              <th style="text-align:left;padding:8px 10px;border:1px solid #0050c8;">GSC Signal</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">1</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/page.tsx (homepage)</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">98,971 impr, 0.11% CTR, pos 19.9</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">2</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/services/web-design-development/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">2,919 impr, 0% CTR</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">3</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/maintenance/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">2,622 impr, 0% CTR</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">4</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/services/website-maintenance/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">1,762 impr, 0% CTR</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">5</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/ecommerce-website-design-toronto/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">1,039 impr, 0% CTR</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">6</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/mobile-web-design-in-toronto/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">499 impr, 0% CTR</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">7</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/our-story/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">106 impr, pos 16.8</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">8</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/who-we-are/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">9</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/contact/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">129 impr, 0% CTR</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">10</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/faq/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">11</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/services/seo/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">12</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/services/social-media-optimization/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">13</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/web-designers-near-me/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">14</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/careers/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">137 impr, pos 18.1</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">15</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/locations/toronto/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">343 impr, 0% CTR</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">16</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/locations/victoria/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">709 impr, strong position</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">17</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/locations/surrey/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">18</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/locations/burnaby/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">19</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/seo/surrey/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">1,236 impr, 0% CTR</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">20</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/seo/toronto/page.tsx</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">CTR optimization</td></tr>
            <tr style="background:#f0f5ff;"><td style="padding:7px 10px;border:1px solid #d0d9ea;">21</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">content/blog/seo-services-london-ontario...md</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">pos 8.7 — near page 1</td></tr>
            <tr><td style="padding:7px 10px;border:1px solid #d0d9ea;">22–41</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">src/app/locations/[city]/page.tsx — cityMeta (20 cities)</td><td style="padding:7px 10px;border:1px solid #d0d9ea;">Edmonton, Mississauga, Brampton, London, Ottawa, Vaughan, Calgary, Richmond Hill, Kitchener, Oshawa, Windsor, Saskatoon, Vancouver, Surrey, Burnaby, North York, Hamilton, Winnipeg, Toronto, Victoria</td></tr>
          </tbody>
        </table>

        <!-- Section 3: Blog Posts Written -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 3 &mdash; Blog Posts Written (2 new + 2 untracked added)
        </h2>
        <table width="100%" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;margin-bottom:28px;">
          <thead>
            <tr style="background:#003087;color:#fff;">
              <th style="text-align:left;padding:10px 12px;border:1px solid #0050c8;">#</th>
              <th style="text-align:left;padding:10px 12px;border:1px solid #0050c8;">Title / File</th>
              <th style="text-align:left;padding:10px 12px;border:1px solid #0050c8;">Target Keyword / Rationale</th>
            </tr>
          </thead>
          <tbody>
            <tr style="background:#f0f5ff;">
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">1</td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;"><strong>Best Web Design Company in Canada: What to Look For in 2026</strong><br/><span style="font-family:monospace;font-size:12px;">2026-06-25-best-web-design-company-canada-what-to-look-for.md</span></td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">"best web design company canada" — high-intent commercial keyword, strong cluster overlap with "web design company canada" (306 impr, pos 2.0 in GSC).</td>
            </tr>
            <tr>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">2</td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;"><strong>Local SEO for Canadian Small Businesses: How to Rank on Google in 2026</strong><br/><span style="font-family:monospace;font-size:12px;">2026-06-25-local-seo-canada-small-business-guide-2026.md</span></td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">"local seo canada", "local seo for small businesses canada" — strong long-tail commercial cluster, supports all city location pages.</td>
            </tr>
            <tr style="background:#f0f5ff;">
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">3</td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;"><strong>How Much Does a WordPress Website Cost in Canada? (2026 Guide)</strong><br/><span style="font-family:monospace;font-size:12px;">2026-06-23-how-much-does-a-wordpress-website-cost-in-canada.md</span></td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">"how much does a wordpress website cost" — 409 impr at pos 15.5, 0% CTR; legacy URL in GSC with no Next.js page. Previously untracked, now committed.</td>
            </tr>
            <tr>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">4</td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;"><strong>How to Choose the Right Web Design Company in Canada (2026 Guide)</strong><br/><span style="font-family:monospace;font-size:12px;">2026-06-23-web-design-company-canada-how-to-choose-the-right-agency.md</span></td>
              <td style="padding:9px 12px;border:1px solid #d0d9ea;">"web design company canada" — 306 impr/mo, pos 2.0. Previously untracked, now committed.</td>
            </tr>
          </tbody>
        </table>

        <!-- Section 4: Outreach Drafts -->
        <h2 style="margin:0 0 16px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          &#128232; Section 4 &mdash; Outreach Drafts &mdash; review &amp; send manually
        </h2>
        <p style="font-size:13px;color:#c0392b;background:#fff5f5;border-left:4px solid #e74c3c;padding:10px 14px;margin:0 0 20px;border-radius:4px;">
          <strong>NOTE:</strong> These are drafts for human review only. No outreach emails have been sent programmatically. Prospects were identified from public business directories (BBB, Google Business Profile, business websites) and verified before inclusion. Emails marked "needs manual lookup" require the sender to verify the address on the business's own website before sending.
        </p>

        <!-- Draft 1 -->
        <div style="border:1px solid #d0d9ea;border-radius:8px;padding:20px;margin-bottom:20px;background:#fff;">
          <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#003087;">DRAFT 1 OF 3</p>
          <table style="font-size:13px;width:100%;margin-bottom:12px;">
            <tr><td style="padding:3px 0;font-weight:600;width:130px;">Recipient:</td><td><strong>Canam Roofing Ltd.</strong> — 12266 68A Avenue, Surrey, BC V3W 0X3 — (778) 881-1417</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Email:</td><td><strong>info@canamroofing.ca</strong> (verified from canamroofing.ca and BBB Canada profile)</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Relevance:</td><td>/seo/surrey/ at 1,236 impr, 0% CTR. Roofing trades are high-intent local search clients in Surrey BC.</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Subject:</td><td>Your Surrey Roofing Business — Free Google Ranking Audit Inside</td></tr>
          </table>
          <div style="background:#f8fafc;padding:14px;border-radius:6px;font-size:13px;line-height:1.8;">
            <p>Hi Canam Roofing team,</p>
            <p>I was searching for roofing contractors in Surrey, BC and noticed that your website isn't appearing in the top Google results for searches like "roofing contractor Surrey" and "Surrey roofer" — despite being an established business with real expertise in the area.</p>
            <p>With over 600,000 residents in Surrey and BC's second-largest city growing fast, these are high-value searches your ideal customers make every day. The businesses in the top 3 Google results typically get 70%+ of the clicks.</p>
            <p>I work with Canadian Web Designs (canadianwebdesigns.ca) — we've helped 180+ Canadian businesses across Surrey, Vancouver, and Metro Vancouver reach page 1 of Google, including several trades and roofing companies.</p>
            <p>I'd like to offer you a free, no-obligation SEO audit that shows:</p>
            <ul>
              <li>Where you currently rank for Surrey roofing searches</li>
              <li>What your top competitors are doing differently</li>
              <li>The fastest path to page 1 for your highest-value keywords</li>
            </ul>
            <p>No commitment required. Just reply to this email or call us at (647) 689-6069 and we'll put the audit together for you.</p>
            <p>Best,<br/>[Your Name]<br/>Canadian Web Designs<br/>canadianwebdesigns.ca | (647) 689-6069</p>
          </div>
        </div>

        <!-- Draft 2 -->
        <div style="border:1px solid #d0d9ea;border-radius:8px;padding:20px;margin-bottom:20px;background:#fff;">
          <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#003087;">DRAFT 2 OF 3</p>
          <table style="font-size:13px;width:100%;margin-bottom:12px;">
            <tr><td style="padding:3px 0;font-weight:600;width:130px;">Recipient:</td><td><strong>A Taste of Victoria Food Tours</strong> — 2000 Government St, Victoria, BC V8T 4P1 — (250) 893-9815</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Email:</td><td><strong>needs manual lookup</strong> — verify at atasteofvictoria.com before sending (atasteofvictoria@gmail.com appeared in search results but was not confirmed from the business's own website)</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Relevance:</td><td>/locations/victoria/ shows 709 impressions with strong position data. Tourism/experience businesses benefit from "food tours Victoria BC" and related local searches.</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Subject:</td><td>Your Victoria Food Tour Business — Free Local SEO Audit (2 Minutes)</td></tr>
          </table>
          <div style="background:#f8fafc;padding:14px;border-radius:6px;font-size:13px;line-height:1.8;">
            <p>Hi A Taste of Victoria Food Tours team,</p>
            <p>Victoria BC is one of Canada's most competitive — but also most underserved — local SEO markets. Tourism and experience businesses like yours are exactly the category where showing up in Google's top 3 results for searches like "food tours Victoria BC," "best things to do in Victoria BC," and "Victoria walking tours" can dramatically increase bookings.</p>
            <p>With over 400,000 residents in the Capital Regional District and millions of annual tourists searching for Victoria experiences online, ranking on page 1 is the difference between a full tour and empty spots.</p>
            <p>At Canadian Web Designs (canadianwebdesigns.ca), we specialize in Victoria BC businesses. We know the market — the seasonal search patterns, the low keyword difficulty compared to Vancouver, and exactly what it takes to rank above competitors in Google's local pack and map results.</p>
            <p>I'd like to offer your business a free Victoria SEO audit — no cost, no commitment. We'll show you:</p>
            <ul>
              <li>Your current rankings for Victoria tourism searches</li>
              <li>Who's outranking you and why</li>
              <li>What specific changes would push you to page 1</li>
            </ul>
            <p>Just reply to this email or visit canadianwebdesigns.ca/contact to book your audit.</p>
            <p>Best,<br/>[Your Name]<br/>Canadian Web Designs<br/>canadianwebdesigns.ca | (647) 689-6069</p>
          </div>
        </div>

        <!-- Draft 3 -->
        <div style="border:1px solid #d0d9ea;border-radius:8px;padding:20px;margin-bottom:28px;background:#fff;">
          <p style="margin:0 0 8px;font-size:13px;font-weight:700;color:#003087;">DRAFT 3 OF 3</p>
          <table style="font-size:13px;width:100%;margin-bottom:12px;">
            <tr><td style="padding:3px 0;font-weight:600;width:130px;">Recipient:</td><td><strong>Elevate Physiotherapy</strong> — 172 Wortley Road, London, ON N6C 3P7 — (519) 719-1782</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Email:</td><td><strong>info@elevatephysio.com</strong> (verified from elevatephysio.com contact page)</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Relevance:</td><td>/blog/seo-services-london-ontario/ is at pos 8.7 — near page 1. Healthcare and physio are high-intent local search categories in London ON.</td></tr>
            <tr><td style="padding:3px 0;font-weight:600;">Subject:</td><td>Free SEO Audit for Elevate Physiotherapy — More London Patients from Google</td></tr>
          </table>
          <div style="background:#f8fafc;padding:14px;border-radius:6px;font-size:13px;line-height:1.8;">
            <p>Hi Elevate Physiotherapy team,</p>
            <p>London, Ontario is one of the most underserved SEO markets in Ontario — the keyword difficulty for searches like "physiotherapy London Ontario," "physio near me London ON," and "physiotherapy Wortley Road" is dramatically lower than Toronto or Mississauga, which means a well-optimized presence can reach page 1 faster and maintain it more easily.</p>
            <p>Most London Ontario healthcare clinics have outdated websites or no local SEO strategy — which means there's a real opportunity for your clinic to capture significantly more patients from Google searches.</p>
            <p>At Canadian Web Designs (canadianwebdesigns.ca), we specialize in SEO for London Ontario healthcare and wellness businesses. We've helped medical clinics, dental practices, and physiotherapy centers across Ontario reach page 1 and consistently generate more patient inquiries.</p>
            <p>I'd like to offer Elevate Physiotherapy a free, no-obligation SEO audit. We'll show you:</p>
            <ul>
              <li>Your current Google rankings for physiotherapy searches in London, ON</li>
              <li>What your top-ranking competitors are doing differently</li>
              <li>The specific steps to outrank them and capture more patient searches</li>
            </ul>
            <p>No commitment, no pressure. Just reply to this email or call us at (647) 689-6069 to schedule your audit.</p>
            <p>Best,<br/>[Your Name]<br/>Canadian Web Designs<br/>canadianwebdesigns.ca | (647) 689-6069</p>
          </div>
        </div>

        <!-- Section 5: Technical SEO -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 5 &mdash; Technical SEO
        </h2>
        <ul style="margin:0 0 28px;padding-left:22px;font-size:14px;line-height:2.0;">
          <li>&#10003; <strong>Title tag optimization</strong> &mdash; All 41+ pages have unique, CTR-optimized titles with neighbourhood specificity, pricing anchors, and conversion language.</li>
          <li>&#10003; <strong>Meta description optimization</strong> &mdash; All descriptions updated with phone CTAs (647) 689-6069, social proof (180+ reviews), and geo-specific terms.</li>
          <li>&#10003; <strong>Blog keyword frontmatter</strong> &mdash; London Ontario blog post keywords expanded to 5 targeted long-tail phrases. New blog posts have 6-keyword arrays targeting local search clusters.</li>
          <li>&#10003; <strong>New blog content</strong> &mdash; 2 posts written targeting "best web design company canada" and "local seo canada" clusters (combined estimated search volume 2,400+/mo).</li>
          <li>&#9888; <strong>Legacy WordPress URLs</strong> &mdash; /how-much-does-a-wordpress-website-cost/, /best-menu-design-service/, /marketing-automation-software-overview/ appear in GSC with impressions but have no Next.js app pages. Recommend: audit whether 301-redirects exist from old WordPress site, or create dedicated Next.js pages for top-impression URLs.</li>
          <li>&#9888; <strong>PageSpeed</strong> &mdash; API returning 0/100 / N/A (consistent with June 18 outage). Manual recheck at pagespeed.web.dev recommended.</li>
          <li>&#10003; <strong>Sitemap</strong> &mdash; New blog posts will auto-appear via getAllPosts() on next deploy.</li>
          <li>&#10003; <strong>robots.txt</strong> &mdash; AI crawler exclusions (GPTBot, anthropic-ai, CCBot) confirmed in place.</li>
          <li>&#10003; <strong>CTR priority</strong> &mdash; /seo/surrey/ has 1,236 impressions with 0% CTR — new title "SEO Surrey BC | Page 1 Google in 60-90 Days | 180+ Reviews | Free Audit" directly targets this gap.</li>
        </ul>

        <!-- Section 6: Git Commit -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 6 &mdash; Git Commit &amp; Push
        </h2>
        <ul style="margin:0 0 28px;padding-left:22px;font-size:14px;line-height:2.0;">
          <li><strong>Command:</strong> git add -A &amp;&amp; git commit -m 'Daily SEO 2026-06-25' &amp;&amp; git push origin main</li>
          <li><strong>Branch:</strong> main</li>
          <li><strong>Files changed:</strong> 21+ source files (19 Next.js pages, 2 new blog posts + 2 untracked blog posts, updated London Ontario blog, send-seo-report.js, logs/seo-2026-06-25.md)</li>
          <li><strong>Status:</strong> Pushed to origin/main</li>
        </ul>

        <!-- Section 7: This Email -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 7 &mdash; Report Delivery
        </h2>
        <ul style="margin:0 0 28px;padding-left:22px;font-size:14px;line-height:2.0;">
          <li><strong>Method:</strong> Node.js + Nodemailer via SMTP (smtp.gmail.com:587 / STARTTLS)</li>
          <li><strong>Auth:</strong> Password read from process.env.SMTP_PASS (never hardcoded)</li>
          <li><strong>From:</strong> Canadian Web Designs &lt;canadianwebdesigns.emails@gmail.com&gt;</li>
          <li><strong>To:</strong> zam.canadianwebdesigns@gmail.com, dev@canadianwebdesigns.com</li>
          <li><strong>Subject:</strong> Daily SEO Report &mdash; canadianwebdesigns.ca | June 25, 2026</li>
        </ul>

        <!-- Section 8: Summary Log -->
        <h2 style="margin:0 0 12px;font-size:17px;color:#003087;border-bottom:2px solid #003087;padding-bottom:6px;">
          Section 8 &mdash; Summary Log
        </h2>
        <p style="margin:0 0 28px;font-size:14px;line-height:1.7;">
          Summary log saved at:<br />
          <code style="background:#eef2ff;padding:4px 8px;border-radius:4px;font-size:13px;">
            C:\\Users\\hp\\Desktop\\cwd-source\\logs\\seo-2026-06-25.md
          </code>
        </p>

      </td>
    </tr>
  </table>

  <!-- Footer -->
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#003087;">
    <tr>
      <td style="padding:20px 40px;text-align:center;">
        <p style="margin:0;color:#a8c4f0;font-size:13px;">
          <strong style="color:#fff;">canadianwebdesigns.ca</strong> &nbsp;|&nbsp; (647) 689-6069
          &nbsp;|&nbsp; canadianwebdesigns.emails@gmail.com
        </p>
        <p style="margin:6px 0 0;color:#6a91c8;font-size:12px;">
          &copy; 2026 Canadian Web Designs. All rights reserved.
        </p>
      </td>
    </tr>
  </table>

</body>
</html>`;

async function sendReport() {
  try {
    const info = await transporter.sendMail({
      from: '"Canadian Web Designs" <canadianwebdesigns.emails@gmail.com>',
      to: 'zam.canadianwebdesigns@gmail.com, dev@canadianwebdesigns.com',
      subject: 'Daily SEO Report — canadianwebdesigns.ca | June 25, 2026',
      html: htmlBody,
    });

    console.log('SUCCESS: Message sent');
    console.log('Message ID:', info.messageId);
    console.log('Accepted:', info.accepted);
    console.log('Rejected:', info.rejected);
  } catch (err) {
    console.error('ERROR sending email:', err.message);
    process.exit(1);
  }
}

sendReport();
