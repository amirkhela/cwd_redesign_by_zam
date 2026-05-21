// Run with: node scripts/take-screenshots.js
const { execSync, exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const OUT_DIR = path.resolve(__dirname, "../public/portfolio");

// Only sites WITHOUT a local image already
const SITES = [
  { name: "mclaren-masonry",             url: "https://mclarenmasonry.ca" },
  { name: "heavy-iron-plant",            url: "https://heavyironplant.com" },
  { name: "emergency-plumbing-toronto",  url: "https://emergencyplumbingtoronto.com" },
  { name: "emergency-plumbing-markham",  url: "https://emergencyplumbingmarkham.com" },
  { name: "north-5-contracting",         url: "https://north5contracting.ca" },
  { name: "amac-stucco",                 url: "https://amacstucco.ca" },
  { name: "d-squared-construction",      url: "https://dsquaredconstruction.ca" },
  { name: "awash-roofing",               url: "https://awashroofing.ca" },
  { name: "awash-construction",          url: "https://awashconstruction.com" },
  { name: "ad-plumbing-services",        url: "https://adplumbingservices.ca" },
  { name: "stainless-industries",        url: "https://stainless-ind.com" },
  { name: "pd-door-systems",             url: "https://pddoorsystems.com" },
  { name: "meganet-electric",            url: "https://meganetelectric.ca" },
  { name: "tank-x",                      url: "https://tankx.ca" },
  { name: "springview-window-cleaning",  url: "https://springviewwindowcleaning.com" },
  { name: "nicagon-cleaning-services",   url: "https://nicagoncleaningservices.ca" },
  { name: "homestone",                   url: "https://homestone.ca" },
  { name: "bird-sitting-brampton",       url: "https://birdsittingbrampton.ca" },
  { name: "speed-boards",                url: "https://speedboards.ca" },
  { name: "accelicare",                  url: "https://accelicare.com" },
  { name: "cloud-pharmacy",              url: "https://cloudpharmacy.ca" },
  { name: "medtech-diy",                 url: "https://medtechdiy.ca" },
  { name: "timely-cares",               url: "https://timelycares.com" },
  { name: "gently-touch-spa",            url: "https://gentlytouchspa.ca" },
  { name: "serenity-saffron",            url: "https://serenitysaffron.com" },
  { name: "kozak-food",                  url: "https://kozakfood.com" },
  { name: "sufra-nuts",                  url: "https://sufranuts.com" },
  { name: "tealicious-tea",              url: "https://tealiciousteabouteaque.com" },
  { name: "amx-kitchens",               url: "https://amxkitchens.com" },
  { name: "taxi-halifax-airport",        url: "https://taxihalifaxairport.com" },
  { name: "transnet-canada",             url: "https://transnetcanada.ca" },
  { name: "director-tms",               url: "https://directortms.com" },
  { name: "worldwide-white-glove",       url: "https://worldwidewhiteglove.ca" },
  { name: "lhc-group",                   url: "https://lhcgroup.ca" },
  { name: "instrumentum-group",          url: "https://instrumentumgroup.com" },
  { name: "shahgaldi-research-group",    url: "https://shahgaldiresearchgroup.ca" },
  { name: "fos-consulting",              url: "https://fosconsulting.ca" },
  { name: "toren-associates",            url: "https://torenassociates.com" },
  { name: "hi-rise-financial",           url: "https://hirise-fp.com" },
  { name: "mr-bailiff-inc",             url: "https://mrbailiffinc.ca" },
  { name: "canada-tenant",              url: "https://canadatenant.ca" },
  { name: "cilco",                       url: "https://cilco.ca" },
  { name: "contact-oscar",              url: "https://contactoscar.ca" },
  { name: "nicagon-security",            url: "https://nicagonsecurityservices.ca" },
  { name: "vibe-lube",                   url: "https://vibelube.com" },
  { name: "royal-crown-plywood",         url: "https://royalcrownplywood.com" },
  { name: "walopus",                     url: "https://walopus.com" },
  { name: "kratom-delivery-canada",      url: "https://kratomdeliverycanada.ca" },
  { name: "vape-central",               url: "https://vapecentral.ca" },
  { name: "tresolz",                     url: "https://tresolz.com" },
  { name: "rebirth-con",                url: "https://rebirthcon.com" },
  { name: "palazzo-talenti",             url: "https://palazzotalenti.ca" },
  { name: "sima-flower-designer",        url: "https://simaflowerdesigner.com" },
  { name: "social-global-studies",       url: "https://socialglobalstudies.com" },
  { name: "kapmi-academy",              url: "https://kapmiacademy.com" },
  { name: "girl-impact",               url: "https://girlimpact.ca" },
  { name: "jin-pin-sen",               url: "https://jinpinsen.com" },
  { name: "art-of-ronnie-simon",        url: "https://theartofronniesimon.ca" },
  { name: "victoria-shuter",            url: "https://victoriashuter.com" },
];

async function screenshot(site) {
  const out = path.join(OUT_DIR, `${site.name}.jpg`);
  if (fs.existsSync(out)) {
    console.log(`  SKIP  ${site.name} (already exists)`);
    return;
  }
  const tmp = path.join(OUT_DIR, `${site.name}.png`);
  const cmd = `"${EDGE}" --headless=new --disable-gpu --window-size=1280,800 --screenshot="${tmp}" "${site.url}"`;
  return new Promise((resolve) => {
    exec(cmd, { timeout: 20000 }, (err) => {
      if (err || !fs.existsSync(tmp)) {
        console.log(`  FAIL  ${site.name}: ${err ? err.message.split("\n")[0] : "no file"}`);
        resolve();
        return;
      }
      // Rename .png → .jpg (Edge outputs PNG despite extension)
      fs.renameSync(tmp, out.replace(".jpg", ".png"));
      // Update the name to .png
      const finalOut = out.replace(".jpg", ".png");
      console.log(`  OK    ${site.name} → ${path.basename(finalOut)}`);
      resolve();
    });
  });
}

(async () => {
  console.log(`Taking ${SITES.length} screenshots...\n`);
  for (const site of SITES) {
    process.stdout.write(`  ... ${site.name}`);
    await screenshot(site);
  }
  console.log("\nDone. Now update PortfolioGrid.tsx localImage paths to use .png where needed.");
})();
