const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const path = require('path');

// All credentials come from env vars — no secrets in source
const CLIENT_ID     = process.env.GOOGLE_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const REPORT_PATH   = process.env.REPORT_PATH || '/tmp/cwd_seo_report.txt';
const SITE_URL      = 'https://canadianwebdesigns.ca/';
const GA4_PROPERTY  = '413609630';

function getTokens() {
  if (process.env.GSC_CWD_TOKENS) return JSON.parse(process.env.GSC_CWD_TOKENS);
  const tokFile = '/tmp/gsc-tool/tokens.json';
  if (fs.existsSync(tokFile)) return JSON.parse(fs.readFileSync(tokFile, 'utf8'));
  throw new Error('No GSC tokens found. Set GSC_CWD_TOKENS env var.');
}

if (!CLIENT_ID || !CLIENT_SECRET) throw new Error('GOOGLE_CLIENT_ID / GOOGLE_CLIENT_SECRET env vars required');

const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, 'http://localhost:8080');
oauth2Client.setCredentials(getTokens());

function daysAgo(n) {
  const d = new Date(); d.setDate(d.getDate() - n);
  return d.toISOString().split('T')[0];
}
function httpGet(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'CWD-SEO-Bot/2.0' } }, (res) => {
      let data = ''; res.on('data', c => data += c); res.on('end', () => resolve({ status: res.statusCode, body: data })); res.on('error', () => resolve({ status: 0, body: '' }));
    }).on('error', () => resolve({ status: 0, body: '' }));
  });
}
async function fetchPSI(pageUrl, strategy) {
  const { body } = await httpGet(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(pageUrl)}&strategy=${strategy}`);
  try {
    const j = JSON.parse(body); const cats = j.lighthouseResult?.categories || {}; const a = j.lighthouseResult?.audits || {};
    return { score: Math.round((cats.performance?.score || 0) * 100), lcp: a['largest-contentful-paint']?.displayValue || 'N/A', tbt: a['total-blocking-time']?.displayValue || 'N/A', cls: a['cumulative-layout-shift']?.displayValue || 'N/A', fcp: a['first-contentful-paint']?.displayValue || 'N/A' };
  } catch { return { score: 0, lcp: 'N/A', tbt: 'N/A', cls: 'N/A', fcp: 'N/A' }; }
}
async function getGSCPerformance(sc) {
  const endDate = daysAgo(1);
  const [cur7, prev7, cur28, prev28, topPages, topQueries, allPages] = await Promise.all([
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(8),  endDate, dimensions: [], rowLimit: 1 } }),
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(15), endDate: daysAgo(9), dimensions: [], rowLimit: 1 } }),
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(29), endDate, dimensions: [], rowLimit: 1 } }),
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(57), endDate: daysAgo(30), dimensions: [], rowLimit: 1 } }),
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(29), endDate, dimensions: ['page'],  rowLimit: 30, orderBy: [{ fieldName: 'impressions', sortOrder: 'DESCENDING' }] } }),
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(29), endDate, dimensions: ['query'], rowLimit: 50, orderBy: [{ fieldName: 'impressions', sortOrder: 'DESCENDING' }] } }),
    sc.searchanalytics.query({ siteUrl: SITE_URL, requestBody: { startDate: daysAgo(29), endDate, dimensions: ['page'],  rowLimit: 100, orderBy: [{ fieldName: 'impressions', sortOrder: 'DESCENDING' }] } }),
  ]);
  const allPageRows = allPages.data.rows || [];
  return {
    cur7: cur7.data.rows?.[0]  || { clicks:0, impressions:0, ctr:0, position:0 },
    prev7: prev7.data.rows?.[0] || {},
    cur28: cur28.data.rows?.[0] || {},
    prev28: prev28.data.rows?.[0] || {},
    topPages: topPages.data.rows || [],
    topQueries: topQueries.data.rows || [],
    nearPage1: allPageRows.filter(r => r.position >= 11 && r.position <= 30 && r.impressions > 50).sort((a,b)=>b.impressions-a.impressions).slice(0,25),
    lowCtrPages: allPageRows.filter(r => r.ctr < 0.01 && r.impressions > 100).sort((a,b)=>b.impressions-a.impressions).slice(0,20),
  };
}
async function getGA4Data() {
  try {
    const api = google.analyticsdata({ version: 'v1beta', auth: oauth2Client });
    const [summary, pageDetail] = await Promise.all([
      api.properties.runReport({ property: `properties/${GA4_PROPERTY}`, requestBody: { dateRanges:[{startDate:'7daysAgo',endDate:'yesterday'}], metrics:[{name:'sessions'},{name:'activeUsers'},{name:'bounceRate'}] } }),
      api.properties.runReport({ property: `properties/${GA4_PROPERTY}`, requestBody: { dateRanges:[{startDate:'7daysAgo',endDate:'yesterday'}], metrics:[{name:'sessions'},{name:'bounceRate'}], dimensions:[{name:'pagePath'}], limit:25, orderBys:[{metric:{metricName:'sessions'},desc:true}] } }),
    ]);
    return { summary, pageDetail };
  } catch(e) { return { error: e.message }; }
}
function pct(a,b) { a=parseFloat(a); b=parseFloat(b); if(!b)return ''; const d=((a-b)/b*100).toFixed(1); return parseFloat(d)>0?`(+${d}%)`:`(${d}%)`; }
async function main() {
  const sc = google.searchconsole({ version:'v1', auth:oauth2Client });
  console.log('Pulling SEO data for canadianwebdesigns.ca...');
  const [gsc, robots, sitemap, psiMob, psiDesk, ga4] = await Promise.all([
    getGSCPerformance(sc),
    httpGet('https://canadianwebdesigns.ca/robots.txt'),
    httpGet('https://canadianwebdesigns.ca/sitemap.xml'),
    fetchPSI('https://canadianwebdesigns.ca/','mobile'),
    fetchPSI('https://canadianwebdesigns.ca/','desktop'),
    getGA4Data(),
  ]);
  const today = new Date().toLocaleDateString('en-CA',{timeZone:'America/Toronto',year:'numeric',month:'long',day:'numeric'});
  const time  = new Date().toLocaleTimeString('en-CA',{timeZone:'America/Toronto',hour:'2-digit',minute:'2-digit'});
  const {cur7,prev7,cur28,topPages,topQueries,nearPage1,lowCtrPages} = gsc;
  let r = '';
  r += `================================================================\n  CWD DAILY SEO REPORT — canadianwebdesigns.ca\n  ${today} | ${time} ET\n================================================================\n\n`;
  r += `GSC LAST 7 DAYS vs previous 7:\n`;
  r += `  Clicks: ${cur7.clicks} ${pct(cur7.clicks,prev7.clicks)} | Impressions: ${cur7.impressions} ${pct(cur7.impressions,prev7.impressions)}\n`;
  r += `  CTR: ${(cur7.ctr*100).toFixed(2)}% | Avg Position: ${cur7.position?.toFixed(1)}\n\n`;
  r += `GSC LAST 28 DAYS:\n  Clicks: ${cur28.clicks} | Impressions: ${cur28.impressions} | CTR: ${(cur28.ctr*100).toFixed(2)}% | Pos: ${cur28.position?.toFixed(1)}\n\n`;
  r += `TOP 30 PAGES (28d, by impressions):\n`;
  topPages.forEach(row => { const pg=(row.keys[0].replace('https://canadianwebdesigns.ca','')||'/').substring(0,49); r+=`  ${pg.padEnd(50)} clicks:${String(row.clicks).padStart(5)} impr:${String(row.impressions).padStart(6)} ctr:${(row.ctr*100).toFixed(1).padStart(4)}% pos:${row.position.toFixed(1).padStart(5)}\n`; });
  r += `\nTOP 50 KEYWORDS (28d):\n`;
  topQueries.forEach(row => { r+=`  ${row.keys[0].substring(0,54).padEnd(55)} clicks:${String(row.clicks).padStart(4)} impr:${String(row.impressions).padStart(6)} pos:${row.position.toFixed(1).padStart(5)}\n`; });
  r += `\nNEAR PAGE 1 (pos 11-30, impr>50) — PRIORITY OPTIMIZE:\n`;
  nearPage1.forEach(row => { const pg=(row.keys[0].replace('https://canadianwebdesigns.ca','')||'/').substring(0,49); r+=`  ${pg.padEnd(50)} impr:${String(row.impressions).padStart(5)} pos:${row.position.toFixed(1).padStart(5)}\n`; });
  r += `\nLOW CTR (CTR<1%, impr>100) — OPTIMIZE TITLE/META:\n`;
  lowCtrPages.forEach(row => { const pg=(row.keys[0].replace('https://canadianwebdesigns.ca','')||'/').substring(0,49); r+=`  ${pg.padEnd(50)} impr:${String(row.impressions).padStart(5)} CTR:${(row.ctr*100).toFixed(2).padStart(5)}%\n`; });
  r += `\nPAGESPEED:\n  Mobile:  ${psiMob.score}/100 | LCP:${psiMob.lcp} | TBT:${psiMob.tbt} | CLS:${psiMob.cls}\n  Desktop: ${psiDesk.score}/100 | LCP:${psiDesk.lcp} | TBT:${psiDesk.tbt} | CLS:${psiDesk.cls}\n\n`;
  if (!ga4.error) {
    const cur=ga4.summary?.data?.rows?.[0]?.metricValues;
    if (cur) { r+=`GA4 LAST 7 DAYS:\n  Sessions: ${cur[0]?.value} | Users: ${cur[1]?.value} | Bounce: ${(parseFloat(cur[2]?.value||0)*100).toFixed(1)}%\n\n`; }
    const highBounce=(ga4.pageDetail?.data?.rows||[]).filter(row=>parseFloat(row.metricValues[1]?.value||0)>0.55&&parseInt(row.metricValues[0]?.value||0)>=3);
    if (highBounce.length) { r+=`GA4 HIGH BOUNCE (>55%):\n`; highBounce.sort((a,b)=>parseFloat(b.metricValues[1].value)-parseFloat(a.metricValues[1].value)).forEach(row=>{ r+=`  ${row.dimensionValues[0].value.substring(0,44).padEnd(45)} bounce:${(parseFloat(row.metricValues[1].value)*100).toFixed(1)}%\n`; }); r+='\n'; }
  }
  r += `ROBOTS.TXT: HTTP ${robots.status}\n${robots.body.substring(0,300)}\n\nSITEMAP: HTTP ${sitemap.status} | ${(sitemap.body.match(/<loc>/g)||[]).length} URLs\n`;
  const dir=path.dirname(REPORT_PATH); if(!fs.existsSync(dir))fs.mkdirSync(dir,{recursive:true});
  fs.writeFileSync(REPORT_PATH,r,'utf8');
  console.log(`[Report saved to ${REPORT_PATH}]`);
  console.log(r.substring(0,600));
}
main().catch(e=>{ console.error('Fatal:',e.message); process.exit(1); });