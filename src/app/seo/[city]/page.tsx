import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

type CityData = {
  name: string;
  province: string;
  blurb: string;
  population: string;
  difficulty: string;
  volume: string;
  neighbourhoods: string[];
  industries: string[];
  faq: { q: string; a: string }[];
};

const cities: Record<string, CityData> = {
  surrey: {
    name: "Surrey",
    province: "BC",
    blurb: "Surrey is BC's second-largest city with 600,000+ residents and one of Canada's fastest-growing economies. Dominated by real estate, construction, healthcare, and professional services, Surrey's businesses compete directly with Vancouver in search results — without Vancouver's keyword authority. SEO in Surrey means building city-specific signals: Surrey-targeted content, Surrey citations, and Google Business Profile optimization for Cloverdale, Newton, South Surrey, and Guildford neighbourhoods. The keyword difficulty is significantly lower than Vancouver, making Surrey one of BC's best SEO opportunities for businesses willing to invest.",
    population: "600,000+",
    difficulty: "Low-Med",
    volume: "700+",
    neighbourhoods: ["Newton", "Guildford", "Cloverdale", "South Surrey", "White Rock", "Fleetwood", "Whalley", "Panorama Ridge"],
    industries: ["Real Estate & Mortgage", "Construction & Trades", "Healthcare & Clinics", "Law Firms", "Restaurants & Catering", "Retail & Services"],
    faq: [
      { q: "How long does SEO take in Surrey?", a: "Surrey keyword difficulty is lower than Vancouver — most neighbourhood-specific searches like 'seo company surrey' see page 1 movement in 60–90 days. Broader terms like 'surrey seo' typically take 3–4 months with consistent optimization." },
      { q: "Why do Surrey businesses need local SEO?", a: "Surrey sits in Metro Vancouver's search pool by default. Without Surrey-specific content, citations, and GBP signals, Google ranks you against all Vancouver-area businesses. Local SEO for Surrey carves out your geographic relevance and captures searches from buyers specifically looking for Surrey businesses." },
      { q: "Do you serve all of Surrey including South Surrey and White Rock?", a: "Yes — we build neighbourhood-specific content and citation strategies for all Surrey areas: Newton, Guildford, Cloverdale, South Surrey/White Rock, Fleetwood, Whalley, and Panorama Ridge. Each neighbourhood has distinct search patterns worth targeting." },
    ],
  },
  halifax: {
    name: "Halifax",
    province: "NS",
    blurb: "Halifax is Atlantic Canada's largest city and Nova Scotia's economic hub — home to Dalhousie University, the Canadian Forces, a major port, and a growing technology sector. For businesses across retail, hospitality, healthcare, professional services, and tech, Google search is the primary discovery channel. Halifax SEO has lower keyword difficulty than Toronto or Vancouver: 'seo services halifax' draws 390 monthly searches at a difficulty of 33, 'web design halifax' and 'seo halifax' each see 210 searches (difficulty 46 and 30 respectively), while 'halifax seo' is the most accessible of the group at difficulty 19. With Dalhousie, SMU, and NSCC creating a young consumer base and the city's 450,000+ metro population growing steadily, strong Halifax SEO delivers durable results.",
    population: "450,000+",
    difficulty: "Low",
    volume: "390+",
    neighbourhoods: ["Downtown Halifax", "North End", "South End", "West End", "Dartmouth", "Bedford", "Clayton Park", "Sackville"],
    industries: ["Government & Defence", "Technology & IT", "Healthcare & Clinics", "Restaurants & Tourism", "Law Firms & Legal", "Retail & Services"],
    faq: [
      { q: "How competitive is Halifax SEO?", a: "Halifax keyword difficulty is low compared to major Canadian metros. 'Halifax seo' sits at just 19, 'seo halifax' at 30, and 'seo services halifax' at 33 with 390 monthly searches — the highest-volume term in the group. A well-built Halifax SEO program can reach page 1 for key searches in 45–75 days, faster than almost any other Canadian city of similar size." },
      { q: "Do you serve Dartmouth and Bedford as well as Halifax?", a: "Yes — we build location-specific content and citations for all HRM areas: Halifax Peninsula, Dartmouth, Bedford, Sackville, and Cole Harbour. HRM's geographic spread means neighbourhood-specific targeting captures searches others miss entirely." },
      { q: "Is there enough search volume for Halifax SEO to be worthwhile?", a: "Absolutely. 'Seo services halifax' alone sees 390 monthly searches, plus 210 more each for 'web design halifax', 'seo halifax', and 'halifax seo'. The low competition means your investment goes much further than in Toronto or Vancouver. Halifax businesses that rank page 1 for their category often capture a dominant share of local search traffic with minimal ongoing effort." },
      { q: "Should I target 'web design halifax' or 'seo halifax' first?", a: "It depends on your goals, but 'halifax seo' (difficulty 19) and 'seo halifax' (difficulty 30) are the most accessible starting points. 'Web design halifax' has more competition (difficulty 46) despite similar search volume, so we often sequence SEO-first campaigns to build authority before tackling harder web-design terms." },
      { q: "Do you work with Halifax's government and defence-sector adjacent businesses?", a: "Yes — professional services and contractors that serve Halifax's government, defence, and port-related sectors are a strong fit for local SEO, since procurement research and vendor searches increasingly start on Google." },
      { q: "How does Halifax SEO compare to Toronto or Vancouver SEO in cost-effectiveness?", a: "Halifax's difficulty scores (19–46 across our core tracked terms) are dramatically lower than Toronto ('seo toronto' at 65) or Vancouver equivalents. That means the same monthly SEO investment produces faster, more durable ranking movement in Halifax." },
    ],
  },
  oshawa: {
    name: "Oshawa",
    province: "ON",
    blurb: "Oshawa is Durham Region's largest city and one of Ontario's most dynamic manufacturing and healthcare hubs. Home to Ontario Tech University, Lakeridge Health, and the legacy of GM Canada, Oshawa's business landscape spans automotive supply, healthcare, education, retail, and professional services. As part of the GTA's eastern corridor, Oshawa businesses face the same challenge as other GTA cities: without Oshawa-specific SEO signals, Google ranks them against the broader Toronto metro. The numbers back up the opportunity: 'website design oshawa' and 'web design oshawa' each draw 260 monthly searches, while pure-SEO terms like 'seo oshawa' and 'oshawa seo' sit at an easy difficulty of 16–17 with 90 searches each — making Oshawa one of the best-value SEO markets in the GTA.",
    population: "170,000+",
    difficulty: "Low",
    volume: "260+",
    neighbourhoods: ["Downtown Oshawa", "McLaughlin", "Vanier", "Lakeview", "Kedron", "Windfields", "Samac", "Pinecrest"],
    industries: ["Automotive & Manufacturing", "Healthcare & Clinics", "Education & Training", "Retail & Restaurants", "Contractors & Trades", "Professional Services"],
    faq: [
      { q: "Is Oshawa a good market for SEO?", a: "Oshawa has low keyword difficulty and a growing population — the combination means your SEO investment goes further than in Toronto. 'Seo oshawa' and 'oshawa seo' each sit at difficulty 16–17 with 90 monthly searches, so a properly built local SEO program can dominate category searches within 60–90 days." },
      { q: "Do you serve all of Durham Region?", a: "Yes — we build location-specific content and citations for Oshawa, Whitby, Ajax, Pickering, and Clarington. Durham Region's growth corridor is one of Ontario's most active for small business, and our strategies target each municipality's specific search intent." },
      { q: "How long does Oshawa SEO take?", a: "Given the low keyword difficulty on core SEO terms, most Oshawa businesses see page 1 movement for neighbourhood-specific and category+city searches within 45–75 days. Broader Durham Region terms take 2–3 months." },
      { q: "Should an Oshawa business target SEO or web design keywords first?", a: "'Website design oshawa' and 'web design oshawa' carry the most volume (260 searches/month each) but moderate difficulty (39–48), while 'seo oshawa' and 'oshawa seo' are far easier (difficulty 16–17) at 90 searches each. Businesses selling web design should lead with the design terms; pure SEO providers get faster wins starting with the SEO terms." },
      { q: "Is there enough search volume in Oshawa to be worth the investment?", a: "Yes — combined web design and SEO searches for Oshawa total well over 500 monthly searches across our tracked terms, and Oshawa's low competition means a smaller SEO budget goes noticeably further than the same spend in Toronto or Vancouver." },
    ],
  },
  ottawa: {
    name: "Ottawa",
    province: "ON",
    blurb: "Ottawa is Canada's capital and one of its most economically stable cities — home to the federal government, a world-class technology sector (Shopify, Kinaxis, Nokia), Carleton University, the University of Ottawa, and a diverse service economy. With 1M+ residents across the National Capital Region, Ottawa businesses compete in a bilingual, highly educated market where Google search is the dominant discovery channel. Ottawa keyword difficulty is actually one of the more accessible among major Canadian capitals — 'seo company ottawa' draws close to 600 monthly searches at a difficulty of just 17, well below Toronto and Calgary equivalents.",
    population: "1,000,000+",
    difficulty: "Low-Med",
    volume: "590+",
    neighbourhoods: ["Downtown Ottawa", "Kanata", "Barrhaven", "Gloucester", "Nepean", "Gatineau", "Orleans", "Westboro"],
    industries: ["Government & Public Sector", "Technology & IT", "Healthcare & Medical", "Law Firms & Legal", "Restaurants & Tourism", "Real Estate & Mortgage"],
    faq: [
      { q: "How competitive is Ottawa SEO?", a: "Ottawa SEO is more accessible than its size suggests — 'seo company ottawa' has a difficulty score of just 17 with close to 600 monthly searches, and 'seo services ottawa' isn't far behind at 390 searches and difficulty 30. A well-structured local SEO program targets Kanata tech, Barrhaven residential, and downtown Ottawa commercial searches separately, capturing each segment efficiently." },
      { q: "Do you serve Gatineau and Orleans as well as Ottawa?", a: "Yes — we build location-specific content and citation strategies for the entire National Capital Region: Ottawa proper, Gatineau (French-language SEO), Orleans, Barrhaven, Kanata, Nepean, and Gloucester. Bilingual markets require extra care with keyword research — we handle both English and French intent." },
      { q: "Is bilingual SEO necessary for Ottawa businesses?", a: "For businesses serving the Quebec side of the NCR, yes — French-language keyword research, content, and citations are important. For businesses primarily serving Ottawa proper, English SEO is usually sufficient. We assess this during the free audit and recommend accordingly." },
    ],
  },
  barrie: {
    name: "Barrie",
    province: "ON",
    blurb: "Barrie is one of Ontario's fastest-growing cities — from 135,000 to 160,000+ in recent years, with rapid residential expansion pushing that number higher every year. Located at the southern tip of Georgian Bay and less than 90 minutes from Toronto, Barrie attracts businesses serving both local residents and the GTA cottage country corridor. Healthcare (Royal Victoria Regional Health Centre), trades, construction, retail, and professional services dominate the local economy. Barrie keyword difficulty is genuinely low — 'seo barrie' draws 210 monthly searches at a difficulty of just 24, and 'seo services barrie' runs as low as 12 — making it one of Ontario's most achievable SEO markets before the city's growth increases competition.",
    population: "160,000+",
    difficulty: "Low",
    volume: "210+",
    neighbourhoods: ["Downtown Barrie", "Allandale", "Painswick", "Holly", "Ardagh Bluffs", "Innisfil", "Angus", "Essa"],
    industries: ["Contractors & Construction", "Healthcare & Clinics", "Retail & Restaurants", "Professional Services", "Real Estate & Mortgage", "Tourism & Recreation"],
    faq: [
      { q: "Is Barrie a good market for SEO investment?", a: "Barrie is one of Ontario's best-value SEO markets — 'seo barrie' has a difficulty score of just 24 with 210 monthly searches, and 'seo services barrie' is even easier at difficulty 12. Most category + city combinations are still wide open for businesses that invest in local SEO now, before the city's growth drives competition up." },
      { q: "Do you serve surrounding areas like Innisfil and Angus?", a: "Yes — we build location-specific strategies for Barrie and the surrounding South Georgian Bay corridor: Innisfil, Angus, Essa, Cookstown, and Collingwood. Cottage country and rural searches have distinct keyword patterns worth targeting separately from Barrie proper." },
      { q: "How quickly does Barrie SEO produce results?", a: "Given the low keyword difficulty, most Barrie businesses see page 1 movement in 30–60 days for category + city searches. Barrie is one of the fastest-moving SEO markets we work in — competition is minimal and even basic optimization produces visible ranking improvements quickly." },
    ],
  },
  vaughan: {
    name: "Vaughan",
    province: "ON",
    blurb: "Vaughan is York Region's fastest-growing municipality — home to 340,000+ residents, Vaughan Mills (one of Canada's largest shopping centres), Canada's Wonderland, major business parks, and a large and affluent Italian-Canadian community. Vaughan's economy spans retail, professional services, construction, healthcare, and technology. Like other GTA cities, Vaughan businesses compete in Toronto's massive search pool by default — without Vaughan-specific SEO, Google ranks them well below businesses that have built city-specific content, citations, and GBP signals. 'Seo vaughan' draws 210 monthly searches at a difficulty of just 25, and 'website design vaughan' / 'web design vaughan' each see 140 searches at difficulty 19–25 — genuinely achievable numbers for a GTA municipality this size.",
    population: "340,000+",
    difficulty: "Low-Med",
    volume: "210+",
    neighbourhoods: ["Woodbridge", "Maple", "Concord", "Thornhill", "Kleinburg", "Vellore", "Patterson", "Islington-Jane"],
    industries: ["Retail & Shopping", "Construction & Trades", "Professional Services", "Healthcare & Clinics", "Real Estate & Mortgage", "Restaurants & Hospitality"],
    faq: [
      { q: "Why does a Vaughan business need local SEO instead of Toronto SEO?", a: "Vaughan-specific searches like 'seo vaughan' (210 monthly searches, difficulty 25) have far less competition than Toronto equivalents (difficulty 65) — yet they capture buyers who are specifically looking for Vaughan businesses. Targeting both Vaughan and Toronto terms gives you two keyword clusters to rank for instead of competing only in the most crowded pool." },
      { q: "Do you serve Woodbridge, Maple, and Thornhill?", a: "Yes — all major Vaughan neighbourhoods: Woodbridge, Maple, Concord, Thornhill, Kleinburg, Vellore, and Patterson. Neighbourhood targeting captures long-tail searches from buyers who identify with a specific area." },
      { q: "How long does Vaughan SEO take to produce results?", a: "Most Vaughan businesses see page 1 movement for neighbourhood-specific and category + city searches within 60–90 days. Broad Vaughan terms take 3–4 months with consistent optimization." },
      { q: "Should a Vaughan business target SEO or web design keywords first?", a: "'Seo vaughan' is the easier starting point at difficulty 25 with 210 monthly searches. 'Website design vaughan' and 'web design vaughan' carry similar volume (140 searches each) at comparable difficulty (19–25), so businesses selling web design services can lead with either cluster — we typically sequence both into the same content calendar." },
      { q: "Is there enough search volume in Vaughan to justify ongoing SEO investment?", a: "Yes — combined SEO and web-design searches for Vaughan total 490+ monthly searches across our tracked terms, and Vaughan's moderate difficulty (19–25) means a properly optimized GBP and city-specific content can realistically compete for most of that volume within two to three quarters." },
    ],
  },
  windsor: {
    name: "Windsor",
    province: "ON",
    blurb: "Windsor is Canada's southernmost city and one of its most unique markets — sharing a border with Detroit, Michigan, making it the only Canadian city directly connected to a major US metro. Windsor's economy spans automotive manufacturing (Ford, Stellantis, and their supply chains), healthcare, tourism (casinos, border crossing traffic), education (University of Windsor), and a growing professional services sector. Windsor keyword difficulty is very low — 'windsor seo' and 'seo windsor' each draw 140 monthly searches at a difficulty of just 4–11, and 'website design windsor' / 'web design windsor' see the same 140 searches at difficulty 30–34 — among the most accessible numbers of any Ontario market we track. Businesses that rank on page 1 in Windsor often capture both local search traffic and cross-border visitors searching for Canadian services.",
    population: "230,000+",
    difficulty: "Very Low",
    volume: "140+",
    neighbourhoods: ["Downtown Windsor", "South Windsor", "East Windsor", "Forest Glade", "Riverside", "Tecumseh", "LaSalle", "Essex"],
    industries: ["Automotive & Manufacturing", "Healthcare & Medical", "Tourism & Hospitality", "Legal Services", "Retail & Restaurants", "Contractors & Trades"],
    faq: [
      { q: "Is Windsor SEO worth the investment?", a: "Windsor has very low keyword difficulty — 'seo windsor' sits at just 4 and 'windsor seo' at 11 — and minimal optimized competition across most business categories. A Windsor business that ranks page 1 for its category often dominates search entirely — we see this in healthcare, legal, restaurants, and trades especially. ROI on Windsor SEO is among the highest of any Ontario market." },
      { q: "Does Windsor's border location affect SEO strategy?", a: "Yes — Windsor attracts both Canadian and American searchers, particularly for healthcare, dental, and professional services. We factor in cross-border search intent and can optimize for both 'windsor ontario' and general Canadian searches to maximize reach." },
      { q: "How quickly does Windsor SEO produce results?", a: "Windsor's low difficulty means page 1 movement is typically seen within 45–75 days for category + city searches. It's one of Ontario's fastest-moving SEO markets because competition among optimized local businesses is minimal." },
      { q: "Should a Windsor business target SEO or web design keywords first?", a: "Both clusters carry identical volume (140 monthly searches), but 'seo windsor' (difficulty 4) and 'windsor seo' (difficulty 11) are far easier entry points than 'website design windsor' or 'web design windsor' (difficulty 30–34). We usually recommend starting with the SEO terms to build fast wins, then layering in web-design content." },
      { q: "Do you factor in Windsor's cross-border Detroit traffic for citations?", a: "Yes — we submit to standard Canadian directories (Google Business Profile, Bing Places, Yellow Pages Canada) plus Windsor-specific and Essex County listings, while writing content that speaks to both Windsor residents and the cross-border commuter and tourist audience searching from the Detroit side." },
    ],
  },
  "richmond-hill": {
    name: "Richmond Hill",
    province: "ON",
    blurb: "Richmond Hill is one of York Region's most affluent and culturally diverse municipalities — home to 220,000+ residents with one of Canada's highest median household incomes and a large Chinese-Canadian community that shapes local retail, healthcare, and professional services demand. Bayview Avenue, Yonge Street, and Highway 7 corridor businesses compete in the GTA's northern suburban market. Richmond Hill keyword difficulty is low to moderate — lower than Toronto but competitive for specific professional services categories. Businesses in healthcare, real estate, law, and retail that invest in Richmond Hill SEO often become category leaders within 3–4 months.",
    population: "220,000+",
    difficulty: "Low-Med",
    volume: "400+",
    neighbourhoods: ["Bayview Hill", "Oak Ridges", "Jefferson", "Langstaff", "Crosby", "Doncrest", "Mill Pond", "Rouge Woods"],
    industries: ["Healthcare & Medical Clinics", "Real Estate & Mortgage", "Legal Services", "Retail & Restaurants", "Professional Services", "Contractors & Trades"],
    faq: [
      { q: "Why does a Richmond Hill business need local SEO?", a: "Richmond Hill sits inside the GTA, meaning Google's default ranking puts you in competition with thousands of Toronto businesses. Richmond Hill-specific SEO signals — city-targeted content, Richmond Hill citations, GBP optimized for Oak Ridges and Bayview Hill — differentiate your business geographically and capture lower-competition local searches." },
      { q: "Do you account for the large Chinese-Canadian community in Richmond Hill?", a: "Yes — Richmond Hill's demographics mean certain service categories (healthcare, financial services, real estate) have high search intent from Chinese-Canadian residents. We build content and citations that reflect local cultural context and can advise on multilingual SEO where applicable." },
      { q: "How long does Richmond Hill SEO take?", a: "For neighbourhood-specific searches and category + city combinations, most clients see page 1 movement in 60–90 days. Competitive professional services terms take 3–5 months with consistent optimization." },
    ],
  },
  kitchener: {
    name: "Kitchener",
    province: "ON",
    blurb: "Kitchener-Waterloo is Canada's fastest-growing tech ecosystem outside Toronto — home to Google, Shopify alumni, Manulife, and hundreds of tech startups, plus traditional manufacturers, healthcare providers, and a thriving small business community. The University of Waterloo and Wilfrid Laurier University create a young, tech-savvy talent pool and consumer base. KW keyword difficulty is significantly lower than Toronto for most searches — 'website design kitchener' and 'web design kitchener' each draw 390 monthly searches at a moderate difficulty of 29–32, while 'seo kitchener' and 'kitchener seo' see 170 searches at an easier difficulty of 22. Businesses in tech, healthcare, trades, retail, and professional services that rank page 1 in Kitchener-Waterloo benefit from meaningfully less competition than Toronto equivalents.",
    population: "240,000+",
    difficulty: "Low-Med",
    volume: "390+",
    neighbourhoods: ["Downtown Kitchener", "Uptown Waterloo", "Forest Heights", "Chicopee", "Stanley Park", "Laurentian Hills", "Cambridge", "Guelph"],
    industries: ["Technology & Software", "Manufacturing & Engineering", "Healthcare & Clinics", "Professional Services", "Retail & Restaurants", "Contractors & Trades"],
    faq: [
      { q: "Is Kitchener-Waterloo a good market for SEO?", a: "KW is one of Ontario's best SEO markets — 'seo kitchener' and 'kitchener seo' both sit at difficulty 22, well below Toronto equivalents, with a strong and growing consumer base. The tech ecosystem also means local businesses are comfortable with digital marketing, making SEO a natural investment." },
      { q: "Do you serve Cambridge and Guelph as well as Kitchener-Waterloo?", a: "Yes — we build location-specific strategies for the entire KW corridor: Kitchener, Waterloo, Cambridge, Guelph, and surrounding communities. Each has distinct keyword patterns worth targeting separately." },
      { q: "How quickly does Kitchener SEO produce results?", a: "For lower-difficulty terms like 'seo kitchener' (difficulty 22), most KW businesses see page 1 movement within 60–90 days. 'Website design kitchener' and 'web design kitchener' carry slightly more competition (difficulty 29–32) with similarly strong search volume (390/month), so we typically budget 3–4 months for web-design-specific campaigns." },
      { q: "Should a Kitchener business prioritize SEO or web design keywords?", a: "'Website design kitchener' and 'web design kitchener' each draw 390 searches/month — the highest volume in our KW keyword set — so businesses primarily selling web design services should lead with those terms. Pure SEO service providers get faster, cheaper wins from 'seo kitchener' and 'kitchener seo' at difficulty 22." },
      { q: "Is Kitchener SEO cheaper than Toronto SEO?", a: "Kitchener's lower keyword difficulty across the board (22–32 vs. Toronto's 65 for 'seo toronto') means the same monthly SEO spend produces faster ranking movement, which generally translates into a lower effective cost per lead over a campaign's first 6–12 months." },
    ],
  },
  edmonton: {
    name: "Edmonton",
    province: "AB",
    blurb: "Edmonton is Alberta's capital and one of Canada's most dynamic cities — home to 1M+ residents, the University of Alberta, a massive healthcare network (Alberta Health Services), and an economy diversifying rapidly beyond oil and gas into technology, logistics, and professional services. Edmonton keyword competition is genuinely mixed: 'web designer edmonton' draws 590 monthly searches but a tough difficulty of 62, while 'edmonton seo' sees 220 searches at a far more accessible difficulty of 14. That gap matters — a well-built Edmonton SEO program targets the accessible terms first (building authority and traffic quickly) before taking on the harder web-design keywords Calgary-based agencies also compete for. Edmonton businesses face intense search competition from Calgary in some categories but have a strong local market with distinct Edmonton-specific search intent.",
    population: "1,000,000+",
    difficulty: "Medium",
    volume: "590+",
    neighbourhoods: ["Downtown Edmonton", "Whyte Avenue", "Oliver", "Glenora", "Strathcona", "Sherwood Park", "St. Albert", "Leduc"],
    industries: ["Oil & Gas Services", "Healthcare & Medical", "Technology & IT", "Construction & Trades", "Retail & Restaurants", "Professional Services"],
    faq: [
      { q: "How competitive is Edmonton SEO?", a: "Edmonton keyword difficulty varies significantly by term. 'Web designer edmonton' is a tough 62 given 590 monthly searches, while 'edmonton seo' is a much easier 14 at 220 searches. Professional services, healthcare, and retail categories generally offer more accessible page 1 positions than trades and construction. We assess difficulty term-by-term during the free audit to recommend realistic timelines." },
      { q: "Do you serve Sherwood Park and St. Albert?", a: "Yes — we build location-specific strategies for Edmonton proper and the Capital Region: Sherwood Park, St. Albert, Leduc, Spruce Grove, and Fort Saskatchewan. Each area has distinct search patterns worth targeting separately." },
      { q: "How long does Edmonton SEO take?", a: "For lower-difficulty Edmonton terms like 'edmonton seo' (difficulty 14), page 1 movement typically takes 3–4 months. Higher-difficulty terms like 'web designer edmonton' (difficulty 62) can take 5–8 months. Edmonton's large population means the payoff is substantial — page 1 for a competitive Edmonton term drives significant lead volume." },
      { q: "Should an Edmonton business target 'web design edmonton' or 'edmonton seo' first?", a: "It depends on your service mix, but for pure SEO clients we usually recommend starting with 'edmonton seo' (220 searches, difficulty 14) and related low-difficulty terms to build fast wins and domain authority, then layering in higher-difficulty web-design terms once the site has earned more trust with Google." },
      { q: "Is Edmonton SEO worth it given the competition from Calgary?", a: "Yes — Edmonton and Calgary are separate search markets with separate local packs. Google shows Edmonton-specific results to Edmonton searchers regardless of how competitive Calgary's SEO scene is. Building Edmonton-specific content, citations, and GBP signals captures that local intent directly." },
      { q: "What industries see the best SEO results in Edmonton?", a: "Healthcare, professional services, and retail typically see faster page 1 movement given lower keyword difficulty. Oil & gas services and construction/trades are more competitive categories in Edmonton, so those campaigns are scoped with longer, more realistic timelines." },
    ],
  },
  vancouver: {
    name: "Vancouver",
    province: "BC",
    blurb: "Vancouver is Canada's third-largest city and one of its most competitive digital markets — a 2.5M+ metro with a dominant tech sector (Amazon, Microsoft, EA, Hootsuite), massive real estate industry, film and media production, tourism, and one of the country's most diverse economies. Pure SEO terms are moderately competitive rather than sky-high: 'vancouver seo' and 'seo vancouver' each draw 80 monthly searches at a difficulty of 25–34, while 'web designer vancouver' is the highest-volume related term at 480 searches (difficulty 30). Despite the competition, Vancouver SEO is critical for local businesses because search intent is extremely high — Vancouver residents search Google before making almost every service or purchase decision. The payoff for ranking page 1 in Vancouver is exceptional.",
    population: "2,500,000+",
    difficulty: "Med-High",
    volume: "80+",
    neighbourhoods: ["Downtown Vancouver", "Kitsilano", "Mount Pleasant", "Commercial Drive", "Yaletown", "West End", "Burnaby", "Richmond"],
    industries: ["Technology & Software", "Real Estate & Mortgage", "Film & Media", "Healthcare & Wellness", "Restaurants & Tourism", "Professional Services"],
    faq: [
      { q: "Is Vancouver SEO worth investing in given the competition?", a: "Yes — 'vancouver seo' and 'seo vancouver' each carry a moderate difficulty of 25–34, and search intent is extremely high in this market. The businesses that invest consistently in Vancouver SEO build durable page 1 positions that competitors struggle to displace. We recommend starting with neighbourhood-specific searches (Kitsilano, Mount Pleasant) and service+city long-tail terms before targeting broad Vancouver keywords." },
      { q: "How long does Vancouver SEO take?", a: "Vancouver is one of Canada's more competitive markets, though pure-SEO terms (difficulty 25–34) are more accessible than related web-design terms like 'web design vancouver' (difficulty 55). Neighbourhood-specific and long-tail searches can see page 1 movement in 3–5 months; higher-difficulty web-design terms typically take 6–12 months of consistent optimization. We set realistic timelines and focus on traffic-driving terms first." },
      { q: "Do you serve Richmond, Burnaby, and Surrey as well as Vancouver?", a: "Yes — we have dedicated SEO programs for Metro Vancouver cities: Burnaby, Surrey, Richmond, and North Vancouver. Each has distinct keyword difficulty and search patterns. We recommend city-specific targeting rather than broad Vancouver targeting for most small businesses." },
      { q: "Should a Vancouver business target SEO or web design keywords first?", a: "'Vancouver seo' and 'seo vancouver' (difficulty 25–34) are more accessible than 'web design vancouver' (difficulty 55) despite lower individual search volume. 'Web designer vancouver', however, carries strong volume (480 searches/month) at a friendlier difficulty of 30 — often the best first target for web design providers specifically." },
      { q: "Is there enough SEO search volume in Vancouver to be worth it?", a: "Yes — while individual pure-SEO terms show modest reported volume (80/month each for 'vancouver seo' and 'seo vancouver'), Vancouver's 2.5M+ population and high service-search intent mean the addressable long-tail and neighbourhood-specific volume is far larger than head-term numbers alone suggest." },
    ],
  },
  saskatoon: {
    name: "Saskatoon",
    province: "SK",
    blurb: "Saskatoon is Saskatchewan's largest city — 280,000+ residents, the University of Saskatchewan, a growing tech sector, and an economy rooted in agriculture, mining, potash, and healthcare. Saskatoon's core SEO terms are genuinely wide open: 'seo saskatoon' and 'saskatoon seo' each draw 210 monthly searches at a difficulty of just 7, and 'seo services saskatoon' sees 30 searches at difficulty 9 — among the most accessible numbers of any Canadian city we track. Web design terms carry more competition (difficulty 36–44 on lower volume), so Saskatoon businesses selling SEO services see the fastest wins. With Saskatoon's economy diversifying and population growing, early SEO investment builds category-leading rankings before competition increases.",
    population: "280,000+",
    difficulty: "Very Low",
    volume: "210+",
    neighbourhoods: ["Downtown Saskatoon", "Stonebridge", "Evergreen", "Willowgrove", "University Heights", "Nutana", "Riversdale", "Confederation Park"],
    industries: ["Agriculture & Agribusiness", "Mining & Resources", "Healthcare & Medical", "Technology & IT", "Retail & Restaurants", "Professional Services"],
    faq: [
      { q: "Is Saskatoon a good SEO market?", a: "Saskatoon is one of Canada's best SEO value markets — 'seo saskatoon' and 'saskatoon seo' both sit at a difficulty of just 7 with 210 monthly searches each. A Saskatoon business with a properly built local SEO program can reach page 1 for its primary category searches within 30–60 days and dominate that position for years." },
      { q: "Does Saskatoon have enough search volume for SEO to be worthwhile?", a: "Yes — 'seo saskatoon' and 'saskatoon seo' combine for 420 monthly searches, plus 30 more for 'seo services saskatoon', and every local business category has meaningful local search volume beyond these tracked terms. With low competition, your investment goes much further per dollar than in Toronto or Vancouver." },
      { q: "How quickly does Saskatoon SEO produce results?", a: "Saskatoon is one of the fastest-moving SEO markets we work in. With core terms sitting at difficulty 7–9, most clients see measurable ranking improvements within 30–45 days and page 1 positions for target searches within 60–90 days." },
      { q: "Should a Saskatoon business prioritize SEO or web design keywords?", a: "Lead with SEO — 'seo saskatoon' and 'saskatoon seo' are both difficulty 7, dramatically easier than 'web design saskatoon' and 'website design saskatoon' (difficulty 36–44). Businesses that need a new site first should still expect a longer runway on the design-specific terms." },
      { q: "Do you serve businesses outside Saskatoon proper, like Warman or Martensville?", a: "Yes — we build location-specific content and citations for Saskatoon and the surrounding bedroom communities, including Warman, Martensville, and Rosthern, tailoring strategy to each area's distinct search patterns." },
    ],
  },
  calgary: {
    name: "Calgary",
    province: "AB",
    blurb: "Calgary is Alberta's largest city — 1.3M+ residents, a diversifying economy moving beyond oil and gas into technology, finance, and professional services, a major film and creative industry, and one of Canada's highest median household incomes. Calgary businesses compete in a large and increasingly digital-first market where Google search drives substantial lead volume across every service category. ‘Calgary seo’ itself gets close to 1,000 monthly searches with moderate difficulty (33) — broad web design terms run higher (40s–50s), while exact-match ‘seo company calgary’ is the toughest term to crack. The shift away from oil dependence has made Calgary's business community among the most entrepreneurial in Canada.",
    population: "1,300,000+",
    difficulty: "Medium",
    volume: "990+",
    neighbourhoods: ["Downtown Calgary", "Beltline", "Kensington", "Mission", "Inglewood", "Airdrie", "Cochrane", "Okotoks"],
    industries: ["Energy & Oil Services", "Technology & IT", "Financial Services", "Healthcare & Clinics", "Real Estate & Mortgage", "Restaurants & Hospitality"],
    faq: [
      { q: "How competitive is Calgary SEO?", a: "Calgary has moderate keyword difficulty overall — 'calgary seo' sits around 33, while exact-match 'seo company calgary' runs closer to 69. Neighbourhood-specific searches (Kensington, Mission, Beltline) and long-tail category+city combinations have much less competition. We start with accessible terms to build traffic and authority, then target broader Calgary keywords as domain strength grows." },
      { q: "Do you serve Airdrie, Cochrane, and surrounding communities?", a: "Yes — we build location-specific strategies for Calgary and the Calgary metro: Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. Each community has its own keyword patterns and competitive landscape." },
      { q: "How long does Calgary SEO take?", a: "Neighbourhood-specific and long-tail Calgary searches typically see page 1 movement in 3–4 months. Highly competitive Calgary terms take 5–8 months of consistent optimization. With 'calgary seo' alone drawing close to 1,000 monthly searches, the traffic payoff for businesses that reach and hold page 1 is substantial." },
    ],
  },
  montreal: {
    name: "Montréal",
    province: "QC",
    blurb: "Montréal is Canada's second-largest city — a 4M+ metro and one of North America's most distinctive markets. A uniquely bilingual city where French dominates daily life and commerce, Montréal businesses operate in a dual-language search environment where keyword research, content, and Google Business Profile optimization must address both French and English intent. On the English-language side, the numbers are more accessible than Montréal's size suggests: 'seo services montreal' and 'seo company montreal' each draw 320 monthly searches at a moderate difficulty of 25–32, and 'website design montreal' matches that volume at essentially open competition. 'Web design montreal' is the toughest of the group at difficulty 56. Montréal's economy spans technology, aerospace, gaming, film, fashion, finance, and a massive hospitality and tourism sector — but generic, English-only SEO consistently underperforms here without a French-language layer.",
    population: "4,000,000+",
    difficulty: "Low-Med",
    volume: "320+",
    neighbourhoods: ["Downtown Montréal", "Plateau-Mont-Royal", "Mile End", "Rosemont", "Westmount", "Laval", "Longueuil", "Brossard"],
    industries: ["Technology & Gaming", "Aerospace & Manufacturing", "Film & Creative", "Financial Services", "Restaurants & Tourism", "Healthcare & Medical"],
    faq: [
      { q: "Does SEO in Montréal require French content?", a: "Yes — French is the primary language for most Montréal searches. Businesses targeting Francophone customers need French-language keyword research, French content, and French-language citations. We build bilingual SEO strategies for Montréal clients covering both French (dominant) and English markets." },
      { q: "How competitive is Montréal SEO?", a: "More accessible than you'd expect for Canada's second-largest city. On the English side, 'seo services montreal' and 'seo company montreal' sit at a moderate difficulty of 25–32 with 320 monthly searches each, and 'website design montreal' has essentially open competition (difficulty near 0) at the same volume. 'Web design montreal' is the hardest term we track here, at difficulty 56." },
      { q: "How long does Montréal SEO take?", a: "For the more accessible English-language terms — 'seo services montreal' and 'website design montreal' — most clients see first page movement in 2–4 months. Montréal's bilingual complexity means a full French+English strategy takes longer to set up properly, typically 4–6 months to first meaningful French-language movement." },
      { q: "Should a Montréal business start with SEO or web design keywords?", a: "Start with SEO — 'seo services montreal' and 'seo company montreal' (difficulty 25–32) are meaningfully easier than 'web design montreal' (difficulty 56), at the same or better search volume." },
      { q: "Do you serve Laval, Longueuil, and the wider Montréal metro?", a: "Yes — we build location-specific strategies for the full Montréal metro area: Laval, Longueuil, Brossard, and the West Island, in addition to Montréal proper. Each municipality has distinct French/English search patterns worth targeting separately." },
    ],
  },
  london: {
    name: "London",
    province: "ON",
    blurb: "London, Ontario is a city of 400,000+ with remarkable diversity — Western University, Fanshawe College, one of Canada's largest hospital networks (London Health Sciences Centre), manufacturers, trades professionals, lawyers, and entrepreneurs. London's SEO-specific terms are genuinely accessible: 'seo london' and 'london seo' each draw 260 monthly searches at a difficulty of just 19–24, while 'seo company london' sees 90 searches at difficulty 50. Web design terms carry more competition — 'web design london' and 'website design london' see 170 searches each at difficulty 54–59 — so SEO-led campaigns move faster than web-design-led ones. The 'london ontario' geographic qualifier is essential in all SEO work to differentiate from London, UK searches. Businesses in healthcare, legal, trades, retail, and professional services consistently see strong results from London, Ontario SEO.",
    population: "400,000+",
    difficulty: "Low-Med",
    volume: "260+",
    neighbourhoods: ["Downtown London", "Old North", "Byron", "Lambeth", "White Oaks", "Argyle", "Hyde Park", "Masonville"],
    industries: ["Healthcare & Medical", "Legal Services", "Education & Training", "Manufacturing", "Contractors & Trades", "Retail & Hospitality"],
    faq: [
      { q: "Why does London Ontario SEO need the 'Ontario' qualifier?", a: "London, Ontario competes with London, UK in global search results. Without the Ontario qualifier in your SEO strategy — in content, titles, schema markup, and citations — Google may not confidently identify your business as serving London, Ontario specifically. We bake the Ontario qualifier into all optimization work." },
      { q: "How competitive is London Ontario SEO?", a: "'Seo london' and 'london seo' each sit at a difficulty of 19–24 with 260 monthly searches — genuinely accessible. 'Seo company london' is a bit tougher at difficulty 50 with 90 searches. Most business categories have realistic page 1 positions, particularly for neighbourhood-specific searches and category + 'london ontario' combinations." },
      { q: "Should a London business target SEO or web design keywords first?", a: "SEO terms are the faster win — 'seo london' and 'london seo' (difficulty 19–24) are considerably more accessible than 'web design london' and 'website design london' (difficulty 54–59), even though the design terms carry solid volume at 170 searches/month each." },
      { q: "Do you serve St. Thomas, Strathroy, and other surrounding communities?", a: "Yes — we build location-specific strategies for London and the surrounding region: St. Thomas, Strathroy, Woodstock, Ingersoll, and Middlesex County. Each community has its own keyword landscape worth targeting separately from London proper." },
      { q: "How long does London Ontario SEO take to show results?", a: "For the more accessible SEO-specific terms (difficulty 19–24), most clients see page 1 movement in 60–90 days. The higher-difficulty web-design terms (54–59) typically take 4–6 months of consistent optimization." },
    ],
  },
  ladner: {
    name: "Ladner",
    province: "BC",
    blurb: "Ladner is a historic community in Delta, BC — part of Metro Vancouver but with a distinct small-town character and strong local business community. Ladner businesses serve both local residents and South Delta's growing population, including Tsawwassen. Ladner itself is too small a search market for SE Ranking to track dedicated keyword data — but the broader Delta terms it sits within do have measurable, low-competition volume: 'local seo delta bc' and 'web design delta' each see 10 monthly searches at difficulty scores of just 5 and 9. As part of Metro Vancouver, Ladner businesses compete in a large search pool by default. Building Ladner-specific SEO signals — Ladner content, local citations, GBP optimization — captures the lower-competition local searches that larger Vancouver agencies don't target specifically, while Delta-wide terms extend that reach further.",
    population: "30,000+",
    difficulty: "Very Low",
    volume: "10+ (Delta terms)",
    neighbourhoods: ["Ladner Village", "Tsawwassen", "North Delta", "South Delta", "Delta"],
    industries: ["Retail & Restaurants", "Healthcare & Clinics", "Contractors & Trades", "Professional Services", "Agriculture & Fishing", "Real Estate"],
    faq: [
      { q: "Is Ladner big enough to warrant local SEO?", a: "Yes — Ladner and Delta's combined population of 100,000+ generates meaningful local search demand, and the competition for optimized local SEO positions is very low: 'local seo delta bc' has a difficulty score of just 5. A Ladner business with a properly optimized GBP and local citations can dominate category searches in the area within 30–60 days." },
      { q: "Do you serve Tsawwassen and North Delta as well as Ladner?", a: "Yes — we build location-specific strategies for all of Delta: Ladner, Tsawwassen, and North Delta. Each area has distinct demographics and search patterns worth targeting separately." },
      { q: "How does Ladner fit into a broader Metro Vancouver SEO strategy?", a: "We recommend a two-tier approach: optimize for Ladner and Delta-specific searches first (fast wins, near-zero competition), then layer in broader South Delta and Metro Vancouver terms as domain authority grows. This builds sustainable rankings without competing against Vancouver's full SEO market from day one." },
      { q: "Why isn't there dedicated 'Ladner SEO' search volume data?", a: "Ladner is a community within Delta rather than its own municipality, so most local searches use 'Delta' or neighbourhood names like 'Tsawwassen' rather than 'Ladner' specifically. We target the Delta-wide terms that do have measurable volume — like 'local seo delta bc' and 'web design delta' — while writing content and building citations that speak directly to Ladner as a place, which captures the map-pack and 'near me' searches that keyword tools under-report." },
      { q: "What does a low-difficulty market like Ladner/Delta mean for my SEO budget?", a: "With difficulty scores as low as 5–9, Ladner and Delta businesses typically don't need the sustained, high-volume link building that competitive markets like Vancouver or Toronto require. A leaner, consistent local SEO program — GBP optimization, citations, and Ladner/Delta-specific content — is usually enough to reach and hold page 1." },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(cities).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = cities[city];
  if (!data) return {};
  return {
    title: { absolute: `SEO ${data.name} | SEO Company & Services | Canadian Web Designs` },
    description: `Rank page 1 in ${data.name} in 60–90 days — local SEO, GBP optimization & citation building. ${config.reviewCount}+ five-star reviews. Free audit: (647) 689-6069.`,
    alternates: { canonical: `/seo/${city}` },
    openGraph: {
      title: `SEO ${data.name} | SEO Company & Services | Canadian Web Designs`,
      description: `${data.name} SEO that ranks — local keyword strategy, GBP optimization & citation building. ${config.reviewCount}+ reviews. Free audit: (647) 689-6069.`,
      url: `https://canadianwebdesigns.ca/seo/${city}`,
      images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: `SEO ${data.name} — Canadian Web Designs` }],
    },
  };
}

export default async function SeoCityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = cities[city];
  if (!data) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `https://canadianwebdesigns.ca/seo/${city}`,
    name: `Canadian Web Designs — SEO ${data.name}`,
    description: `Expert SEO services for ${data.name} businesses. Rank on Google page 1 and get more local leads.`,
    url: `https://canadianwebdesigns.ca/seo/${city}`,
    telephone: "(647) 689-6069",
    email: "info@canadianwebdesigns.ca",
    areaServed: [
      { "@type": "City", name: data.name, containedInPlace: { "@type": "AdministrativeArea", name: data.province } },
      ...data.neighbourhoods.slice(0, 4).map((n) => ({ "@type": "Neighborhood", name: n })),
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    priceRange: "$$",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: String(config.reviewCount) },
  };

  const services = [
    { title: `Local SEO ${data.name}`, desc: `Rank for '${city.replace("-", " ")} seo', 'seo company ${city.replace("-", " ")}', and neighbourhood searches across ${data.neighbourhoods.slice(0, 3).join(", ")}.`, icon: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" },
    { title: "Google Business Profile", desc: `Dominate ${data.name}'s local pack. GBP optimization with ${data.name}-specific service areas, keyword-rich descriptions, weekly posts, and a review generation system.`, icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
    { title: "On-Page SEO", desc: `Every page optimized for ${data.name} keyword intent — title tags, meta descriptions, content depth, schema markup, and internal linking that signals geo-relevance to Google.`, icon: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" },
    { title: "Citation Building", desc: `50+ Canadian and ${data.province}-specific directory submissions. Consistent NAP data across authoritative sites is one of the top three local ranking factors for ${data.name} searches.`, icon: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" },
    { title: "Content Marketing", desc: `${data.name}-specific blog posts and service pages targeting ${data.neighbourhoods.slice(0, 3).join(", ")} buyers. Content that builds topical authority and captures long-tail searches.`, icon: "M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" },
    { title: "Technical SEO Audit", desc: `Full site crawl identifying speed issues, indexing errors, mobile usability problems, and Core Web Vitals failures that are suppressing your ${data.name} rankings.`, icon: "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.364 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" },
  ];

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Services", href: "/services/seo" }, { name: `SEO ${data.name}`, href: `/seo/${city}` }]} />

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden py-14 md:py-20 flex items-center" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/posts/SEARCH-ENGINE-OPTIMIZATION-1.png" alt={`Expert SEO services for ${data.name} businesses`} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">{data.name}, {data.province} — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.05 }}>
              {data.name}{" "}<span className="gradient-text-animated">SEO Services</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Rank on the first page of Google in {data.name}. Get more calls, leads, and customers
              from organic search — for less than the cost of one paid click per day.
            </p>
            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <a href={`tel:${config.phone}`}
                className="btn-shimmer inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.45)" }}>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                {config.phone}
              </a>
              <Link href="/portfolio"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300">
                View Our Work
              </Link>
            </div>
            <div className="hero-fade-up-3 flex flex-wrap gap-5 mt-8">
              {[`${config.reviewCount}+ Google Reviews`, "Custom-Quoted Packages", "No Lock-In Contracts"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  {t}
                </div>
              ))}
            </div>
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source={`seo-${city}`} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section className="py-14 bg-white relative">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">{data.name} SEO Services</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Everything Your {data.name} Business Needs to Rank</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">Results-focused SEO for {data.name} businesses — neighbourhood-specific strategies that drive real leads.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div key={s.title} className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={s.icon} /></svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "200+", label: "Five-Star Reviews" },
                { value: data.population, label: `${data.name} Population` },
                { value: data.difficulty, label: "Keyword Difficulty" },
                { value: "60–120", label: "Days to Page 1" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <GoogleReviews />

      {/* ─── ABOUT ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">SEO in {data.name}</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>Why {data.name} Businesses Need Hyper-Local SEO</h2>
              <p className="text-gray-600 text-base leading-relaxed mb-8">{data.blurb}</p>

              <h3 className="text-xl font-black text-gray-900 mb-4">{data.name} Neighbourhoods We Target</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {data.neighbourhoods.map((n) => (
                  <span key={n} className="px-3 py-1.5 bg-white rounded-lg text-sm font-semibold text-gray-700 border border-gray-100" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>{n}</span>
                ))}
              </div>

              <h3 className="text-xl font-black text-gray-900 mb-4">{data.name} Industries We Serve</h3>
              <div className="grid grid-cols-2 gap-3">
                {data.industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100" style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{ind}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 mb-5" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-5">Pricing</h3>
                {[
                  { name: "Starter SEO", price: "$199/mo", desc: "Local SEO + GBP + citations" },
                  { name: "Growth SEO", price: "$399/mo", desc: "Full SEO + content + link building" },
                  { name: "Enterprise", price: "Custom", desc: "Multi-location + e-commerce" },
                ].map((pkg) => (
                  <div key={pkg.name} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                    <div><p className="text-sm font-bold text-gray-900">{pkg.name}</p><p className="text-xs text-gray-500">{pkg.desc}</p></div>
                    <span className="text-sm font-black text-[#00AADF]">{pkg.price}</span>
                  </div>
                ))}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <Link href="/contact" className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get Your Free {data.name} SEO Audit
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">{data.name} SEO — Common Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {data.faq.map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Also serving SEO across Canada:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/locations/toronto" className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>Web Design Toronto ↗</Link>
            {[
              { name: "SEO Toronto", slug: "toronto" },
              { name: "SEO Surrey", slug: "surrey" },
              { name: "SEO Burnaby", slug: "burnaby" },
              { name: "SEO Victoria", slug: "victoria" },
              { name: "SEO Halifax", slug: "halifax" },
              { name: "SEO Kitchener", slug: "kitchener" },
              { name: "SEO Barrie", slug: "barrie" },
            ].filter((c) => c.slug !== city).map((c) => (
              <Link key={c.slug} href={`/seo/${c.slug}`} className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200">{c.name}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative overflow-hidden py-20" style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/posts/SEARCH-ENGINE-OPTIMIZATION-1.png" alt={`Expert SEO for ${data.name} businesses`} fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb" style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Rank Your {data.name} Business{" "}<span className="gradient-text-animated">on Page 1?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free SEO audit, no commitment. We&apos;ll show you exactly where you rank today, who&apos;s beating you in {data.name}, and how we&apos;ll get you to page 1.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact" className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300" style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free {data.name} SEO Audit
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
            <a href="tel:6476896069" className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
              (647) 689-6069
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      <QuoteFormSection source={`seo-${city}`} mobileOnly />
    </>
  );
}
