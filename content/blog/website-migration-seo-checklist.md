---
title: "Website Migration SEO Checklist: Don't Lose Your Rankings"
slug: "website-migration-seo-checklist"
date: "2026-07-30"
updated: "2026-07-30"
author: "Amir Khela"
description: "A practical website migration SEO checklist for domain changes, platform switches, and URL restructures — the redirect and technical steps that protect existing rankings."
keywords: ["website migration seo", "site migration checklist", "domain migration seo", "platform migration seo"]
category: "SEO"
featuredImage: "/blog/website-migration-seo-checklist/website-migration-seo-checklist.png"
faq:
  - q: "What counts as a website migration for SEO purposes?"
    a: "Any change that alters your URLs, domain, hosting platform, or site structure at scale: switching CMS platforms (WordPress to Shopify or vice versa), moving to a new domain, changing from HTTP to HTTPS, restructuring your URL patterns, or consolidating multiple sites into one. A visual redesign that keeps the same URLs is not a migration in this sense — it's a redesign, and it carries much lower SEO risk."
  - q: "What's the single biggest cause of ranking loss during a migration?"
    a: "Missing or incorrect 301 redirects. When an old URL that Google has indexed and ranked returns a 404 instead of redirecting to its new location, you lose the accumulated authority of that page entirely rather than transferring it. A complete, verified redirect map is the single highest-leverage step in any migration."
  - q: "How long does it take for rankings to recover after a migration?"
    a: "With a clean migration (correct redirects, updated sitemap, no lingering technical errors), most sites see rankings stabilize within 2–8 weeks as Google recrawls and re-indexes the new URLs. A messy migration with broken redirects or duplicate content can extend that recovery to several months, or cause permanent losses on pages that were never properly redirected."
  - q: "Do I need to migrate everything at once, or can it be done in phases?"
    a: "Phased migrations are often safer for large sites — moving a subset of pages, confirming redirects and rankings hold, then continuing. For smaller sites, a single well-planned cutover with a complete redirect map is usually simpler to execute and verify. The riskiest approach is migrating without a documented plan for either."
  - q: "Should I migrate on a Friday or before a weekend?"
    a: "No — migrate early in the week so your team can actively monitor crawl errors, redirect issues, and traffic drops during business hours, and respond quickly if something goes wrong. A weekend migration often means problems go unnoticed for two extra days."
---

<p>A website migration is one of the few times a business can lose years of accumulated Google rankings in a single afternoon — not because the new site is worse, but because of a handful of technical steps that get skipped under launch-day pressure. Whether you're switching from WordPress to Shopify, moving to a new domain, or restructuring your URLs for a rebrand, the SEO risk is the same: every indexed page that doesn't correctly redirect to its new location loses the ranking authority it built up, rather than transferring it.</p>

<p>This is a practical checklist for protecting your existing search visibility through a migration — not a general redesign guide, but specifically the steps that prevent the ranking drop that catches so many businesses off guard.</p>

<h2>Before you touch anything: audit and map your existing URLs</h2>

<p>You cannot redirect what you haven't inventoried. Before any migration work begins, pull a complete list of every indexed URL on the current site — your XML sitemap is a starting point, but it won't catch orphaned pages that still rank despite not being in the sitemap. Cross-reference against Google Search Console's indexed pages report and your analytics' top-landing-pages report, so you capture every URL actually receiving organic traffic, not just the ones you remembered to list.</p>

<h2>Build a complete, one-to-one redirect map</h2>

<p>Every old URL needs a specific new destination — not a blanket redirect of the entire old site to the new homepage. A blanket homepage redirect tells Google that hundreds of specific pages no longer exist and have been replaced by one generic page, which discards the topical relevance that let each page rank for its specific keywords in the first place. Map old-URL to new-URL individually, and where a page genuinely has no replacement, redirect it to the most topically relevant surviving page rather than the homepage by default.</p>

<h2>Use 301s, not 302s</h2>

<p>A 301 redirect tells search engines the move is permanent and to transfer the old page's ranking signals to the new URL. A 302 signals a temporary move and search engines are far more conservative about transferring authority through it. This is one of the most common migration mistakes — developers sometimes default to 302s during testing and forget to switch them to 301s before the real cutover.</p>

<h2>Update your XML sitemap and submit it immediately</h2>

<p>Your sitemap should reflect only the new URL structure the moment the migration goes live — not the old URLs, and not a stale cached version. Submit the updated sitemap in Google Search Console (and Bing Webmaster Tools) as soon as the new site is live, to accelerate how quickly Google discovers and recrawls the new structure instead of waiting on its normal crawl schedule.</p>

<h2>Preserve your internal linking structure</h2>

<p>Internal links pass authority between pages on your own site, and a migration is a common moment for that structure to quietly break — navigation menus rebuilt from scratch, footer links pointing at old URLs, blog posts linking to pages that moved. Crawl the new site with a tool like Screaming Frog immediately after launch and fix any internal links still pointing at pre-migration URLs; leaving them creates unnecessary redirect chains that dilute link equity.</p>

<h2>Check canonical tags and hreflang carefully</h2>

<p>If your migration involves URL structure changes, every page's canonical tag needs to point at its own correct new URL — a leftover canonical pointing at an old URL can tell Google to ignore the new page entirely in favour of a URL that no longer exists. For bilingual or multi-region sites, hreflang tags need the same careful audit, since a broken hreflang setup can cause the wrong language version to rank in the wrong market.</p>

<h2>Monitor Search Console daily for the first two weeks</h2>

<p>The Coverage and Page Indexing reports in Google Search Console are your earliest warning system after a migration — a spike in "Not Found (404)" or "Redirect error" entries points directly at gaps in your redirect map that need fixing before they cost meaningful ranking ground. Checking daily for the first one to two weeks, rather than waiting for a monthly report, is what catches a fixable problem before it becomes a permanent loss.</p>

<h2>Don't change your URLs and your content at the same time</h2>

<p>Where possible, separate a platform or domain migration from a content rewrite. Changing both at once makes it far harder to diagnose whether a ranking drop came from a technical redirect issue or from weaker content on the new page — and it doubles your risk in a single launch window. If a content refresh is also planned, consider sequencing it a few weeks after the technical migration has stabilized.</p>

<h2>Platform switches carry extra risk worth planning for</h2>

<p>Moving between fundamentally different platforms — WordPress to Shopify, a custom build to a page-builder CMS, or vice versa — often changes more than just the domain or URL slugs. Each platform has its own default URL conventions (Shopify's <code>/products/</code> and <code>/collections/</code> structure versus a flat WordPress permalink, for example), its own way of handling pagination, and its own approach to canonical tags and structured data. A redirect map built for a domain-only change doesn't automatically account for these structural differences. Budget extra time to map how the new platform's URL patterns differ from your current one, not just where each individual page is moving to.</p>

<h2>If rankings do drop, diagnose before you panic</h2>

<p>Even a carefully planned migration can see a temporary dip while Google recrawls and re-evaluates the new site — this is normal and usually resolves within a few weeks. The distinction that matters is between an expected, temporary dip and a real, unresolved problem. Check Search Console's Coverage report first for a spike in errors; check that your redirect map is actually live and returning 301s (not still pointing at a staging environment); and confirm the new pages have equivalent or better content than what replaced them. Most "the migration killed our rankings" situations trace back to one of these three causes, and each is fixable once identified — a genuine, permanent ranking loss from a well-executed migration is rare.</p>

<h2>A quick pre-launch checklist</h2>

<ul>
<li>Complete inventory of every indexed URL, cross-referenced with Search Console and analytics</li>
<li>One-to-one 301 redirect map — no blanket homepage redirects</li>
<li>Updated XML sitemap submitted to Search Console and Bing Webmaster Tools on launch day</li>
<li>Internal links crawled and fixed to point at new URLs, not old ones</li>
<li>Canonical tags and hreflang (if applicable) verified on the new structure</li>
<li>Migration scheduled early in the week, with daily Search Console monitoring for two weeks after</li>
</ul>

<h2>The bottom line</h2>

<p>A website migration doesn't have to cost you rankings — but it requires treating SEO as a launch requirement, not an afterthought handled once the new site looks right. The businesses that come through a migration without a ranking dip are the ones that mapped every redirect before launch and watched Search Console closely in the weeks after, not the ones that hoped the new site was similar enough to carry the old rankings over automatically. Google's own guidance on site moves is a useful technical reference alongside this checklist: <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes" target="_blank" rel="noopener noreferrer">Site moves with URL changes</a>.</p>

<p>If you're planning a redesign that keeps your current URLs, see our guide to <a href="/blog/website-redesign-without-losing-seo">website redesign without losing SEO</a> — a lower-risk project than a full migration. For a platform switch or domain move handled end-to-end, our <a href="/services/seo">SEO team</a> can build and verify the redirect map alongside your <a href="/services/website-maintenance">ongoing maintenance</a> plan, or <a href="/contact">contact us</a> for a free migration audit before you commit to a launch date.</p>
