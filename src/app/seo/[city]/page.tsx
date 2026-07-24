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
    blurb: "Halifax is Atlantic Canada's largest city and Nova Scotia's economic hub — home to Dalhousie University, the Canadian Forces, a major port, and a growing technology sector. For businesses across retail, hospitality, healthcare, professional services, and tech, Google search is the primary discovery channel. Halifax SEO has lower keyword difficulty than Toronto or Vancouver, making it one of Canada's most accessible markets for ambitious small businesses. With Dalhousie, SMU, and NSCC creating a young consumer base and the city's 450,000+ metro population growing steadily, strong Halifax SEO delivers durable results.",
    population: "450,000+",
    difficulty: "Low",
    volume: "400+",
    neighbourhoods: ["Downtown Halifax", "North End", "South End", "West End", "Dartmouth", "Bedford", "Clayton Park", "Sackville"],
    industries: ["Government & Defence", "Technology & IT", "Healthcare & Clinics", "Restaurants & Tourism", "Law Firms & Legal", "Retail & Services"],
    faq: [
      { q: "How competitive is Halifax SEO?", a: "Halifax keyword difficulty is low compared to major Canadian metros — many local searches have almost no optimized competition. A well-built Halifax SEO program can reach page 1 for key searches in 45–75 days, faster than almost any other Canadian city of similar size." },
      { q: "Do you serve Dartmouth and Bedford as well as Halifax?", a: "Yes — we build location-specific content and citations for all HRM areas: Halifax Peninsula, Dartmouth, Bedford, Sackville, and Cole Harbour. HRM's geographic spread means neighbourhood-specific targeting captures searches others miss entirely." },
      { q: "Is there enough search volume for Halifax SEO to be worthwhile?", a: "Absolutely. 'Seo halifax' and related terms see 400+ monthly searches, and the low competition means your investment goes much further than in Toronto or Vancouver. Halifax businesses that rank page 1 for their category often capture a dominant share of local search traffic with minimal ongoing effort." },
    ],
  },
  oshawa: {
    name: "Oshawa",
    province: "ON",
    blurb: "Oshawa is Durham Region's largest city and one of Ontario's most dynamic manufacturing and healthcare hubs. Home to Ontario Tech University, Lakeridge Health, and the legacy of GM Canada, Oshawa's business landscape spans automotive supply, healthcare, education, retail, and professional services. As part of the GTA's eastern corridor, Oshawa businesses face the same challenge as other GTA cities: without Oshawa-specific SEO signals, Google ranks them against the broader Toronto metro. Oshawa keyword difficulty is low — one of the best-value SEO markets in the GTA.",
    population: "170,000+",
    difficulty: "Low",
    volume: "350+",
    neighbourhoods: ["Downtown Oshawa", "McLaughlin", "Vanier", "Lakeview", "Kedron", "Windfields", "Samac", "Pinecrest"],
    industries: ["Automotive & Manufacturing", "Healthcare & Clinics", "Education & Training", "Retail & Restaurants", "Contractors & Trades", "Professional Services"],
    faq: [
      { q: "Is Oshawa a good market for SEO?", a: "Oshawa has low keyword difficulty and a growing population — the combination means your SEO investment goes further than in Toronto. Most Oshawa-specific searches have minimal optimized competition, so a properly built local SEO program can dominate category searches within 60–90 days." },
      { q: "Do you serve all of Durham Region?", a: "Yes — we build location-specific content and citations for Oshawa, Whitby, Ajax, Pickering, and Clarington. Durham Region's growth corridor is one of Ontario's most active for small business, and our strategies target each municipality's specific search intent." },
      { q: "How long does Oshawa SEO take?", a: "Given the low keyword difficulty, most Oshawa businesses see page 1 movement for neighbourhood-specific and category+city searches within 45–75 days. Broader Durham Region terms take 2–3 months." },
    ],
  },
  ottawa: {
    name: "Ottawa",
    province: "ON",
    blurb: "Ottawa is Canada's capital and one of its most economically stable cities — home to the federal government, a world-class technology sector (Shopify, Kinaxis, Nokia), Carleton University, the University of Ottawa, and a diverse service economy. With 1M+ residents across the National Capital Region, Ottawa businesses compete in a bilingual, highly educated market where Google search is the dominant discovery channel. Ottawa keyword difficulty is moderate — lower than Toronto but competitive given the city's density of professional services businesses all targeting the same local searches.",
    population: "1,000,000+",
    difficulty: "Medium",
    volume: "500+",
    neighbourhoods: ["Downtown Ottawa", "Kanata", "Barrhaven", "Gloucester", "Nepean", "Gatineau", "Orleans", "Westboro"],
    industries: ["Government & Public Sector", "Technology & IT", "Healthcare & Medical", "Law Firms & Legal", "Restaurants & Tourism", "Real Estate & Mortgage"],
    faq: [
      { q: "How competitive is Ottawa SEO?", a: "Ottawa SEO difficulty is moderate — lower than Toronto but higher than smaller Ontario cities. The federal government presence means many businesses are competing for the same professional services searches. A well-structured local SEO program targets Kanata tech, Barrhaven residential, and downtown Ottawa commercial searches separately, capturing each segment efficiently." },
      { q: "Do you serve Gatineau and Orleans as well as Ottawa?", a: "Yes — we build location-specific content and citation strategies for the entire National Capital Region: Ottawa proper, Gatineau (French-language SEO), Orleans, Barrhaven, Kanata, Nepean, and Gloucester. Bilingual markets require extra care with keyword research — we handle both English and French intent." },
      { q: "Is bilingual SEO necessary for Ottawa businesses?", a: "For businesses serving the Quebec side of the NCR, yes — French-language keyword research, content, and citations are important. For businesses primarily serving Ottawa proper, English SEO is usually sufficient. We assess this during the free audit and recommend accordingly." },
    ],
  },
  barrie: {
    name: "Barrie",
    province: "ON",
    blurb: "Barrie is one of Ontario's fastest-growing cities — from 135,000 to 160,000+ in recent years, with rapid residential expansion pushing that number higher every year. Located at the southern tip of Georgian Bay and less than 90 minutes from Toronto, Barrie attracts businesses serving both local residents and the GTA cottage country corridor. Healthcare (Royal Victoria Regional Health Centre), trades, construction, retail, and professional services dominate the local economy. Barrie keyword difficulty is low, making it one of Ontario's most achievable SEO markets — early movers build durable page 1 rankings before the city's growth increases competition.",
    population: "160,000+",
    difficulty: "Low",
    volume: "300+",
    neighbourhoods: ["Downtown Barrie", "Allandale", "Painswick", "Holly", "Ardagh Bluffs", "Innisfil", "Angus", "Essa"],
    industries: ["Contractors & Construction", "Healthcare & Clinics", "Retail & Restaurants", "Professional Services", "Real Estate & Mortgage", "Tourism & Recreation"],
    faq: [
      { q: "Is Barrie a good market for SEO investment?", a: "Barrie is one of Ontario's best-value SEO markets — low difficulty, fast-growing population, and minimal competition from optimized local businesses. Most category + city combinations are still wide open for businesses that invest in local SEO now, before the city's growth drives competition up." },
      { q: "Do you serve surrounding areas like Innisfil and Angus?", a: "Yes — we build location-specific strategies for Barrie and the surrounding South Georgian Bay corridor: Innisfil, Angus, Essa, Cookstown, and Collingwood. Cottage country and rural searches have distinct keyword patterns worth targeting separately from Barrie proper." },
      { q: "How quickly does Barrie SEO produce results?", a: "Given the low keyword difficulty, most Barrie businesses see page 1 movement in 30–60 days for category + city searches. Barrie is one of the fastest-moving SEO markets we work in — competition is minimal and even basic optimization produces visible ranking improvements quickly." },
    ],
  },
  vaughan: {
    name: "Vaughan",
    province: "ON",
    blurb: "Vaughan is York Region's fastest-growing municipality — home to 340,000+ residents, Vaughan Mills (one of Canada's largest shopping centres), Canada's Wonderland, major business parks, and a large and affluent Italian-Canadian community. Vaughan's economy spans retail, professional services, construction, healthcare, and technology. Like other GTA cities, Vaughan businesses compete in Toronto's massive search pool by default — without Vaughan-specific SEO, Google ranks them well below businesses that have built city-specific content, citations, and GBP signals. Vaughan keyword difficulty is low to moderate, making it very achievable to rank page 1.",
    population: "340,000+",
    difficulty: "Low-Med",
    volume: "500+",
    neighbourhoods: ["Woodbridge", "Maple", "Concord", "Thornhill", "Kleinburg", "Vellore", "Patterson", "Islington-Jane"],
    industries: ["Retail & Shopping", "Construction & Trades", "Professional Services", "Healthcare & Clinics", "Real Estate & Mortgage", "Restaurants & Hospitality"],
    faq: [
      { q: "Why does a Vaughan business need local SEO instead of Toronto SEO?", a: "Vaughan-specific searches like 'seo vaughan' and '[service] vaughan' have far less competition than Toronto equivalents — yet they capture buyers who are specifically looking for Vaughan businesses. Targeting both Vaughan and Toronto terms gives you two keyword clusters to rank for instead of competing only in the most crowded pool." },
      { q: "Do you serve Woodbridge, Maple, and Thornhill?", a: "Yes — all major Vaughan neighbourhoods: Woodbridge, Maple, Concord, Thornhill, Kleinburg, Vellore, and Patterson. Neighbourhood targeting captures long-tail searches from buyers who identify with a specific area." },
      { q: "How long does Vaughan SEO take to produce results?", a: "Most Vaughan businesses see page 1 movement for neighbourhood-specific and category + city searches within 60–90 days. Broad Vaughan terms take 3–4 months with consistent optimization." },
    ],
  },
  windsor: {
    name: "Windsor",
    province: "ON",
    blurb: "Windsor is Canada's southernmost city and one of its most unique markets — sharing a border with Detroit, Michigan, making it the only Canadian city directly connected to a major US metro. Windsor's economy spans automotive manufacturing (Ford, Stellantis, and their supply chains), healthcare, tourism (casinos, border crossing traffic), education (University of Windsor), and a growing professional services sector. Windsor keyword difficulty is low, and the city's cross-border position creates unique search intent patterns. Businesses that rank on page 1 in Windsor often capture both local search traffic and cross-border visitors searching for Canadian services.",
    population: "230,000+",
    difficulty: "Low",
    volume: "350+",
    neighbourhoods: ["Downtown Windsor", "South Windsor", "East Windsor", "Forest Glade", "Riverside", "Tecumseh", "LaSalle", "Essex"],
    industries: ["Automotive & Manufacturing", "Healthcare & Medical", "Tourism & Hospitality", "Legal Services", "Retail & Restaurants", "Contractors & Trades"],
    faq: [
      { q: "Is Windsor SEO worth the investment?", a: "Windsor has low keyword difficulty and minimal optimized competition across most business categories. A Windsor business that ranks page 1 for its category often dominates search entirely — we see this in healthcare, legal, restaurants, and trades especially. ROI on Windsor SEO is among the highest of any Ontario market." },
      { q: "Does Windsor's border location affect SEO strategy?", a: "Yes — Windsor attracts both Canadian and American searchers, particularly for healthcare, dental, and professional services. We factor in cross-border search intent and can optimize for both 'windsor ontario' and general Canadian searches to maximize reach." },
      { q: "How quickly does Windsor SEO produce results?", a: "Windsor's low difficulty means page 1 movement is typically seen within 45–75 days for category + city searches. It's one of Ontario's fastest-moving SEO markets because competition among optimized local businesses is minimal." },
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
    blurb: "Kitchener-Waterloo is Canada's fastest-growing tech ecosystem outside Toronto — home to Google, Shopify alumni, Manulife, and hundreds of tech startups, plus traditional manufacturers, healthcare providers, and a thriving small business community. The University of Waterloo and Wilfrid Laurier University create a young, tech-savvy talent pool and consumer base. KW keyword difficulty is significantly lower than Toronto for most searches — meaning the same SEO investment produces faster results. Businesses in tech, healthcare, trades, retail, and professional services that rank page 1 in Kitchener-Waterloo typically see 3–5x more organic leads within 6 months.",
    population: "240,000+",
    difficulty: "Low-Med",
    volume: "400+",
    neighbourhoods: ["Downtown Kitchener", "Uptown Waterloo", "Forest Heights", "Chicopee", "Stanley Park", "Laurentian Hills", "Cambridge", "Guelph"],
    industries: ["Technology & Software", "Manufacturing & Engineering", "Healthcare & Clinics", "Professional Services", "Retail & Restaurants", "Contractors & Trades"],
    faq: [
      { q: "Is Kitchener-Waterloo a good market for SEO?", a: "KW is one of Ontario's best SEO markets — lower keyword difficulty than Toronto, strong and growing consumer base, and minimal competition from optimized local businesses across most categories. The tech ecosystem also means local businesses are comfortable with digital marketing, making SEO a natural investment." },
      { q: "Do you serve Cambridge and Guelph as well as Kitchener-Waterloo?", a: "Yes — we build location-specific strategies for the entire KW corridor: Kitchener, Waterloo, Cambridge, Guelph, and surrounding communities. Each has distinct keyword patterns worth targeting separately." },
      { q: "How quickly does Kitchener SEO produce results?", a: "Most KW businesses see page 1 movement for category + city searches within 60–90 days. Kitchener has lower difficulty than Toronto, so the same content and citation investment moves rankings faster." },
    ],
  },
  edmonton: {
    name: "Edmonton",
    province: "AB",
    blurb: "Edmonton is Alberta's capital and one of Canada's most dynamic cities — home to 1M+ residents, the University of Alberta, a massive healthcare network (Alberta Health Services), and an economy diversifying rapidly beyond oil and gas into technology, logistics, and professional services. Edmonton businesses face intense search competition from Calgary in some categories but have a strong local market with distinct Edmonton-specific search intent. Edmonton keyword difficulty varies by category — trades and construction are competitive, while professional services and healthcare offer accessible page 1 opportunities.",
    population: "1,000,000+",
    difficulty: "Medium",
    volume: "600+",
    neighbourhoods: ["Downtown Edmonton", "Whyte Avenue", "Oliver", "Glenora", "Strathcona", "Sherwood Park", "St. Albert", "Leduc"],
    industries: ["Oil & Gas Services", "Healthcare & Medical", "Technology & IT", "Construction & Trades", "Retail & Restaurants", "Professional Services"],
    faq: [
      { q: "How competitive is Edmonton SEO?", a: "Edmonton keyword difficulty varies significantly by category. Trades and construction keywords are competitive given the city's size. Professional services, healthcare, and retail categories offer more accessible page 1 positions. We assess difficulty category-by-category during the free audit to recommend realistic timelines." },
      { q: "Do you serve Sherwood Park and St. Albert?", a: "Yes — we build location-specific strategies for Edmonton proper and the Capital Region: Sherwood Park, St. Albert, Leduc, Spruce Grove, and Fort Saskatchewan. Each area has distinct search patterns worth targeting separately." },
      { q: "How long does Edmonton SEO take?", a: "For lower-competition Edmonton categories, page 1 movement typically takes 3–4 months. Highly competitive categories (trades, real estate) can take 5–8 months. Edmonton's large population means the payoff is substantial — page 1 for a competitive Edmonton term drives significant lead volume." },
    ],
  },
  vancouver: {
    name: "Vancouver",
    province: "BC",
    blurb: "Vancouver is Canada's third-largest city and one of its most competitive digital markets — a 2.5M+ metro with a dominant tech sector (Amazon, Microsoft, EA, Hootsuite), massive real estate industry, film and media production, tourism, and one of the country's most diverse economies. Vancouver keyword difficulty is among the highest in Canada, comparable to Toronto. Despite the competition, Vancouver SEO is critical for local businesses because search intent is extremely high — Vancouver residents search Google before making almost every service or purchase decision. The payoff for ranking page 1 in Vancouver is exceptional.",
    population: "2,500,000+",
    difficulty: "High",
    volume: "1,000+",
    neighbourhoods: ["Downtown Vancouver", "Kitsilano", "Mount Pleasant", "Commercial Drive", "Yaletown", "West End", "Burnaby", "Richmond"],
    industries: ["Technology & Software", "Real Estate & Mortgage", "Film & Media", "Healthcare & Wellness", "Restaurants & Tourism", "Professional Services"],
    faq: [
      { q: "Is Vancouver SEO worth investing in given the competition?", a: "Yes — Vancouver's high keyword difficulty is matched by high search volume and buyer intent. The businesses that invest consistently in Vancouver SEO build durable page 1 positions that competitors struggle to displace. We recommend starting with neighbourhood-specific searches (Kitsilano, Mount Pleasant) and service+city long-tail terms before targeting broad Vancouver keywords." },
      { q: "How long does Vancouver SEO take?", a: "Vancouver is one of Canada's most competitive markets. Neighbourhood-specific and long-tail searches can see page 1 movement in 3–5 months. Broad Vancouver keywords like 'web design vancouver' typically take 6–12 months of consistent optimization. We set realistic timelines and focus on traffic-driving terms first." },
      { q: "Do you serve Richmond, Burnaby, and Surrey as well as Vancouver?", a: "Yes — we have dedicated SEO programs for Metro Vancouver cities: Burnaby, Surrey, Richmond, and North Vancouver. Each has distinct keyword difficulty and search patterns. We recommend city-specific targeting rather than broad Vancouver targeting for most small businesses." },
    ],
  },
  saskatoon: {
    name: "Saskatoon",
    province: "SK",
    blurb: "Saskatoon is Saskatchewan's largest city — 280,000+ residents, the University of Saskatchewan, a growing tech sector, and an economy rooted in agriculture, mining, potash, and healthcare. Saskatoon keyword difficulty is very low, making it one of Canada's most accessible SEO markets. Most business categories in Saskatoon have minimal page 1 competition — businesses that invest in local SEO typically reach top positions faster than almost any other major Canadian city. With Saskatoon's economy diversifying and population growing, early SEO investment builds category-leading rankings before competition increases.",
    population: "280,000+",
    difficulty: "Very Low",
    volume: "250+",
    neighbourhoods: ["Downtown Saskatoon", "Stonebridge", "Evergreen", "Willowgrove", "University Heights", "Nutana", "Riversdale", "Confederation Park"],
    industries: ["Agriculture & Agribusiness", "Mining & Resources", "Healthcare & Medical", "Technology & IT", "Retail & Restaurants", "Professional Services"],
    faq: [
      { q: "Is Saskatoon a good SEO market?", a: "Saskatoon is one of Canada's best SEO value markets — very low keyword difficulty and minimal competition from optimized businesses. A Saskatoon business with a properly built local SEO program can reach page 1 for its primary category searches within 30–60 days and dominate that position for years." },
      { q: "Does Saskatoon have enough search volume for SEO to be worthwhile?", a: "Saskatoon generates 250+ monthly searches for SEO-related terms alone, and every local business category has meaningful local search volume. The key is that with low competition, your investment goes much further per dollar than in Toronto or Vancouver — and local pack positions drive consistent call and inquiry volume." },
      { q: "How quickly does Saskatoon SEO produce results?", a: "Saskatoon is one of the fastest-moving SEO markets we work in. Most clients see measurable ranking improvements within 30–45 days and page 1 positions for target searches within 60–90 days. The low competition environment means even basic optimization produces visible results." },
    ],
  },
  calgary: {
    name: "Calgary",
    province: "AB",
    blurb: "Calgary is Alberta's largest city — 1.3M+ residents, a diversifying economy moving beyond oil and gas into technology, finance, and professional services, a major film and creative industry, and one of Canada's highest median household incomes. Calgary businesses compete in a large and increasingly digital-first market where Google search drives substantial lead volume across every service category. Calgary keyword difficulty is high for broad terms but moderate to low for neighbourhood-specific and long-tail searches. The shift away from oil dependence has made Calgary's business community among the most entrepreneurial in Canada.",
    population: "1,300,000+",
    difficulty: "Medium-High",
    volume: "800+",
    neighbourhoods: ["Downtown Calgary", "Beltline", "Kensington", "Mission", "Inglewood", "Airdrie", "Cochrane", "Okotoks"],
    industries: ["Energy & Oil Services", "Technology & IT", "Financial Services", "Healthcare & Clinics", "Real Estate & Mortgage", "Restaurants & Hospitality"],
    faq: [
      { q: "How competitive is Calgary SEO?", a: "Calgary has medium-to-high keyword difficulty for broad terms, but neighbourhood-specific searches (Kensington, Mission, Beltline) and long-tail category+city combinations have much less competition. We start with accessible terms to build traffic and authority, then target broader Calgary keywords as domain strength grows." },
      { q: "Do you serve Airdrie, Cochrane, and surrounding communities?", a: "Yes — we build location-specific strategies for Calgary and the Calgary metro: Airdrie, Cochrane, Okotoks, Chestermere, and Strathmore. Each community has its own keyword patterns and competitive landscape." },
      { q: "How long does Calgary SEO take?", a: "Neighbourhood-specific and long-tail Calgary searches typically see page 1 movement in 3–4 months. Highly competitive Calgary terms take 5–8 months of consistent optimization. The large population means substantial traffic payoff for businesses that reach and hold page 1." },
    ],
  },
  montreal: {
    name: "Montréal",
    province: "QC",
    blurb: "Montréal is Canada's second-largest city — a 4M+ metro and one of North America's most distinctive markets. A uniquely bilingual city where French dominates daily life and commerce, Montréal businesses operate in a dual-language search environment where keyword research, content, and Google Business Profile optimization must address both French and English intent. Montréal's economy spans technology, aerospace, gaming, film, fashion, finance, and a massive hospitality and tourism sector. SEO in Montréal requires cultural and linguistic specificity — generic Canadian SEO approaches consistently underperform in the Québec market.",
    population: "4,000,000+",
    difficulty: "High",
    volume: "900+",
    neighbourhoods: ["Downtown Montréal", "Plateau-Mont-Royal", "Mile End", "Rosemont", "Westmount", "Laval", "Longueuil", "Brossard"],
    industries: ["Technology & Gaming", "Aerospace & Manufacturing", "Film & Creative", "Financial Services", "Restaurants & Tourism", "Healthcare & Medical"],
    faq: [
      { q: "Does SEO in Montréal require French content?", a: "Yes — French is the primary language for most Montréal searches. Businesses targeting Francophone customers need French-language keyword research, French content, and French-language citations. We build bilingual SEO strategies for Montréal clients covering both French (dominant) and English markets." },
      { q: "How competitive is Montréal SEO?", a: "Montréal is one of Canada's most competitive SEO markets, especially in French. Neighbourhood-specific searches (Plateau, Mile End) and long-tail terms have more accessible competition. English-language Montréal searches have lower difficulty than French equivalents." },
      { q: "How long does Montréal SEO take?", a: "Montréal's bilingual complexity means strategy takes longer to set up properly. Most clients see first page movement in 4–6 months for their primary target searches. French-language optimization is essential for meaningful Montréal traffic — we handle both languages in every engagement." },
    ],
  },
  london: {
    name: "London",
    province: "ON",
    blurb: "London, Ontario is a city of 400,000+ with remarkable diversity — Western University, Fanshawe College, one of Canada's largest hospital networks (London Health Sciences Centre), manufacturers, trades professionals, lawyers, and entrepreneurs. Every category of business depends on local customers finding them on Google, and London's keyword difficulty is low to moderate — making it one of Ontario's most achievable SEO markets. The 'london ontario' geographic qualifier is essential in all SEO work to differentiate from London, UK searches. Businesses in healthcare, legal, trades, retail, and professional services consistently see strong results from London, Ontario SEO.",
    population: "400,000+",
    difficulty: "Low-Med",
    volume: "500+",
    neighbourhoods: ["Downtown London", "Old North", "Byron", "Lambeth", "White Oaks", "Argyle", "Hyde Park", "Masonville"],
    industries: ["Healthcare & Medical", "Legal Services", "Education & Training", "Manufacturing", "Contractors & Trades", "Retail & Hospitality"],
    faq: [
      { q: "Why does London Ontario SEO need the 'Ontario' qualifier?", a: "London, Ontario competes with London, UK in global search results. Without the Ontario qualifier in your SEO strategy — in content, titles, schema markup, and citations — Google may not confidently identify your business as serving London, Ontario specifically. We bake the Ontario qualifier into all optimization work." },
      { q: "How competitive is London Ontario SEO?", a: "London Ontario keyword difficulty is low to moderate. Most business categories have accessible page 1 positions — particularly for neighbourhood-specific searches and category + 'london ontario' combinations. The hospital network and university create strong, consistent demand in healthcare, legal, and professional services." },
      { q: "Do you serve St. Thomas, Strathroy, and other surrounding communities?", a: "Yes — we build location-specific strategies for London and the surrounding region: St. Thomas, Strathroy, Woodstock, Ingersoll, and Middlesex County. Each community has its own keyword landscape worth targeting separately from London proper." },
    ],
  },
  ladner: {
    name: "Ladner",
    province: "BC",
    blurb: "Ladner is a historic community in Delta, BC — part of Metro Vancouver but with a distinct small-town character and strong local business community. Ladner businesses serve both local residents and South Delta's growing population, including Tsawwassen. As part of Metro Vancouver, Ladner businesses compete in a large search pool by default. Building Ladner-specific SEO signals — Ladner content, local citations, GBP optimization — captures the lower-competition local searches that larger Vancouver agencies don't target specifically.",
    population: "30,000+",
    difficulty: "Very Low",
    volume: "150+",
    neighbourhoods: ["Ladner Village", "Tsawwassen", "North Delta", "South Delta", "Delta"],
    industries: ["Retail & Restaurants", "Healthcare & Clinics", "Contractors & Trades", "Professional Services", "Agriculture & Fishing", "Real Estate"],
    faq: [
      { q: "Is Ladner big enough to warrant local SEO?", a: "Yes — Ladner and Delta's combined population of 100,000+ generates meaningful local search volume, and the competition for optimized local SEO positions is very low. A Ladner business with a properly optimized GBP and local citations can dominate category searches in the area within 30–60 days." },
      { q: "Do you serve Tsawwassen and North Delta as well as Ladner?", a: "Yes — we build location-specific strategies for all of Delta: Ladner, Tsawwassen, and North Delta. Each area has distinct demographics and search patterns worth targeting separately." },
      { q: "How does Ladner fit into a broader Metro Vancouver SEO strategy?", a: "We recommend a two-tier approach: optimize for Ladner and Delta-specific searches first (fast wins, low competition), then layer in broader South Delta and Metro Vancouver terms as domain authority grows. This builds sustainable rankings without competing against Vancouver's full SEO market from day one." },
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
