import type { Metadata } from "next";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import QuoteFormSection from "@/components/QuoteFormSection";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import GoogleReviews from "@/components/GoogleReviews";

const config = getConfig();

const cityContent: Record<string, {
  blurb: string;
  facts: string[];
  industries: string[];
  faq: { q: string; a: string }[];
}> = {
  toronto: {
    blurb: `Toronto is Canada's most competitive digital market — with over 3 million people and hundreds of thousands of businesses all fighting for the same Google searches. A generic website won't cut it here. Canadian Web Designs builds custom, conversion-focused websites for Toronto businesses that are engineered to rank, load fast, and turn visitors into paying customers. From Etobicoke to Scarborough, from Yorkville boutiques to North York clinics, we understand the Toronto market deeply. Our local SEO strategies are tailored to Toronto's neighbourhoods and business verticals — so you're not just getting traffic, you're getting the right traffic. With ${config.reviewCount}+ five-star reviews and clients across every major Toronto industry, we're the agency that Toronto businesses trust to grow online.`,
    facts: ["Canada's largest city — most competitive SEO market in the country", "3M+ residents and hundreds of thousands of SMBs all competing on Google", "Google local pack and map listings are critical for Toronto service businesses", "Mobile-first searches dominate — 70%+ of Toronto searches happen on smartphones"],
    industries: ["Healthcare & Clinics", "Law Firms", "Real Estate", "Restaurants & Hospitality", "Contractors & Trades", "Retail & eCommerce"],
    faq: [
      { q: "How long does it take to rank in Toronto?", a: "For competitive Toronto keywords ('web design toronto', 'lawyer toronto'), expect 4–8 months of consistent SEO. For less competitive long-tail terms and location-specific searches, we often see movement in 6–12 weeks." },
      { q: "Do you work with small businesses in Toronto?", a: "Absolutely — the majority of our clients are small to mid-size Toronto businesses. Every project is fully custom and SEO-ready from day one. Contact us for a free quote." },
      { q: "Can you help my Toronto business show up in Google Maps?", a: "Yes. Google Business Profile optimization is included in all our Toronto SEO packages. We optimize your listing, build local citations, and help you generate more reviews to dominate the local pack." },
      { q: "What does web design cost for a Toronto business?", a: "Pricing depends on your project scope — number of pages, features, and whether you add ongoing SEO. We give you a flat-rate quote with no hidden fees after a free consultation." },
      { q: "Can you help a Toronto startup build their first website?", a: "Yes — we work with Toronto startups at all stages, from pre-revenue to Series A. We deliver a professional, conversion-ready web presence quickly and can scale your site as your business grows." },
    ],
  },
  burnaby: {
    blurb: `Burnaby is home to some of BC's largest employers — from tech giants like Electronic Arts and BCIT to a thriving small business community in Metrotown, Brentwood, and beyond. With Metro Vancouver's massive consumer base on your doorstep, web design and local SEO are the single most powerful growth tools available to Burnaby businesses. Canadian Web Designs builds fast, mobile-optimized websites for Burnaby companies that rank on Google and convert visitors into booked appointments, phone calls, and sales. We understand the Burnaby market — the competition from Vancouver, the opportunity in hyper-local searches, and the need to stand out in BC's most diverse suburban economy. Whether you're a trades contractor, a health clinic, a restaurant, or a retail shop, we build websites that work as hard as you do.`,
    facts: ["Burnaby has one of BC's most diverse business ecosystems — tech, retail, healthcare, trades", "Metro Vancouver's digital market is highly competitive but Burnaby-specific searches have low difficulty", "Metrotown is BC's second-largest shopping destination — retail businesses need strong local SEO", "BCIT and SFU create a young, tech-savvy consumer base with high online purchase intent"],
    industries: ["Tech & Software", "Retail & Shopping", "Healthcare & Wellness", "Restaurants & Food", "Contractors & Construction", "Education & Training"],
    faq: [
      { q: "Why should I choose a web design agency that knows Burnaby?", a: "Local market knowledge matters. We know that Burnaby searches often compete with Vancouver results — so we build geo-targeted content and local citations specifically for Burnaby neighbourhoods like Brentwood, Metrotown, and Lougheed." },
      { q: "What's the cost of a website for a Burnaby small business?", a: "Cost depends on your scope — number of pages, features, and integrations. We provide free, no-obligation quotes with no hidden fees, and all sites include SEO optimization from day one." },
      { q: "How quickly can you rank my Burnaby business on Google?", a: "Burnaby has relatively low keyword difficulty compared to Vancouver. Most of our Burnaby clients see meaningful ranking improvements within 30–60 days for location-specific searches." },
      { q: "How much does web design cost in Burnaby?", a: "Cost depends on your project scope, but every Burnaby build includes mobile optimization, SEO setup, and Google Analytics from day one — no hidden fees. Contact us for a free scope and quote." },
      { q: "Do you work with Burnaby tech and software companies?", a: "Absolutely — tech and SaaS are common Burnaby verticals. We build product sites and corporate pages optimized for Metro Vancouver and BC-wide searches, with technical SEO that ranks for both Burnaby-specific and broader industry keywords." },
    ],
  },
  surrey: {
    blurb: `Surrey is one of Canada's fastest-growing cities — and one of BC's most exciting markets for small business. With over 600,000 residents and growing, Surrey's economy spans real estate, construction, retail, healthcare, and a booming professional services sector. But growth also means competition: Surrey businesses are fighting for the same Google searches, and only the websites with strong local SEO win. Canadian Web Designs builds websites for Surrey businesses that are engineered for performance — mobile-fast, Google-optimized, and designed to generate consistent leads. We create city-specific content, optimize your Google Business Profile, and build the local authority your Surrey business needs to rank above competitors. From Newton to Cloverdale, from South Surrey to Guildford, we know the Surrey market.`,
    facts: ["Surrey is BC's second-largest city by population with 600,000+ residents and growing fast", "Real estate, construction, and trades are the dominant business categories — all highly searchable", "South Surrey/White Rock is a premium market — professional services businesses thrive here", "Surrey searches often have lower difficulty than Vancouver but similar buyer intent"],
    industries: ["Real Estate & Mortgage", "Construction & Trades", "Healthcare & Clinics", "Restaurants & Catering", "Law Firms", "Retail & Services"],
    faq: [
      { q: "Can you help my Surrey business rank above competitors in Google?", a: "Yes — Surrey keywords like 'web design surrey' and '[service] surrey' have relatively low difficulty. With proper on-page optimization and local SEO, most Surrey businesses see page 1 movement within 60–90 days." },
      { q: "Do you build websites for Surrey trades and contractors?", a: "Trades are one of our most common Surrey clients. We build fast-loading, mobile-first sites with click-to-call, quote forms, and Google Maps integration — everything a Surrey contractor needs to win more jobs online." },
      { q: "Do you offer ongoing SEO for Surrey businesses?", a: "Yes — we offer monthly SEO retainers that include ranking reports, content updates, citation building, and Google Business Profile management for Surrey businesses. Contact us for a custom quote." },
      { q: "What's included in your Surrey web design packages?", a: "All Surrey packages include custom design, mobile-first development, on-page SEO, Google Analytics setup, and 30 days of post-launch support — plus local schema markup and sitemap submission for faster Google indexing. Contact us for a detailed quote with no hidden fees." },
      { q: "Do you work with Surrey real estate agents and mortgage brokers?", a: "Yes — real estate is a common Surrey vertical. We build IDX-integrated agent sites, mortgage broker sites with lead capture forms, and investor sites optimized for Surrey neighbourhood searches in Clayton Heights, South Surrey, Cloverdale, and Guildford." },
    ],
  },
  kitchener: {
    blurb: `Kitchener-Waterloo is Canada's fastest-growing tech ecosystem — home to Google, Shopify alumni, and hundreds of startups — but it's also a city of manufacturers, trades, healthcare providers, restaurants, and professional services businesses all competing online. Whether you're a KW-area startup or an established Kitchener SMB, a fast, well-optimized website is your most valuable growth asset. Canadian Web Designs builds conversion-focused websites for Kitchener businesses that rank in Google, load in under 2 seconds, and turn visits into inquiries. We specialize in local SEO for the KW corridor — optimizing for neighbourhood-specific searches in Kitchener, Waterloo, Cambridge, and surrounding communities. Our clients in KW consistently see 3–5x more organic traffic within the first 6 months.`,
    facts: ["The KW tech corridor is one of Canada's most innovative business environments", "Google, Shopify, and dozens of Fortune 500 companies have Waterloo offices", "Manufacturing, trades, and professional services remain the backbone of Kitchener's economy", "KW has lower keyword difficulty than Toronto — same buyer intent, easier to rank"],
    industries: ["Tech & SaaS", "Manufacturing & Engineering", "Healthcare & Clinics", "Professional Services", "Retail & Restaurants", "Contractors & Trades"],
    faq: [
      { q: "Is web design in Kitchener-Waterloo competitive?", a: "Less so than Toronto — keyword difficulty for KW searches is significantly lower, meaning a well-optimized website can reach page 1 faster and with less budget than major urban centres." },
      { q: "Do you work with KW startups and tech companies?", a: "Yes — we work with early-stage startups through to established Kitchener-Waterloo companies. We build scalable web platforms that grow with your business, from MVP landing pages to full enterprise sites." },
      { q: "Can you help my Kitchener business appear in Google Maps?", a: "Absolutely. Local pack visibility is critical for Kitchener service businesses. We optimize your Google Business Profile, build local citations across Canadian directories, and help generate authentic reviews." },
      { q: "How much does web design cost in Kitchener-Waterloo?", a: "Every KW build is the same quality as our Toronto projects, often with faster results due to lower market competition. Flat-rate pricing scoped to your project, with no hidden fees. Contact us for a free quote." },
      { q: "Do you work with Kitchener manufacturers and engineering firms?", a: "Yes — manufacturing and engineering are common KW verticals. We build B2B websites for manufacturers, engineering firms, and industrial companies that rank for industry searches and generate qualified leads from procurement teams." },
    ],
  },
  london: {
    blurb: `London, Ontario is a city with remarkable diversity — university students and professors, healthcare workers at one of Canada's largest hospital networks, manufacturers, trades professionals, lawyers, and entrepreneurs. Every one of these groups searches Google before making a buying decision. Canadian Web Designs builds websites for London, Ontario businesses that capture that search traffic and convert it into real customers. Our London SEO strategies target the keywords your ideal clients are actually searching — 'web design london ontario', '[your service] london ontario' — and we build the on-page and off-page authority to rank for them. We've helped London businesses in healthcare, professional services, trades, and retail consistently grow their organic traffic and inbound leads.`,
    facts: ["London is home to Western University, Fanshawe College, and one of Ontario's largest hospital networks", "Healthcare, education, manufacturing, and professional services are London's dominant sectors", "'London ontario' qualifier is essential — differentiating from London, UK in search", "London has significantly lower keyword difficulty than Toronto — ideal for aggressive SEO growth"],
    industries: ["Healthcare & Medical", "Legal Services", "Education & Training", "Manufacturing", "Contractors & Trades", "Retail & Hospitality"],
    faq: [
      { q: "How important is it to include 'Ontario' in SEO for London businesses?", a: "Critical. Google often confuses London, ON with London, UK. We build geo-signals into every page — using 'London, Ontario', schema markup with province data, and local citations — to ensure your site ranks in the right market." },
      { q: "Do you work with healthcare businesses in London, ON?", a: "Yes — healthcare is one of our most common London verticals. We understand PIPEDA compliance requirements and build clinic, dental, and medical websites that are professional, accessible, and optimized for local search." },
      { q: "What does a website cost for a London Ontario small business?", a: "Every project is scoped individually. We provide detailed quotes with no surprise costs — and all sites include mobile optimization, SEO foundation, and Google Analytics setup." },
      { q: "Can you help my London Ontario business rank above Toronto-based competitors?", a: "Absolutely. Many Toronto agencies target London, ON searches — but local relevance signals matter. We build London, Ontario-specific schema markup, geo-targeted content, and local citations that give your London business an advantage over non-local competitors." },
      { q: "Do you build websites for London Ontario law firms and legal professionals?", a: "Yes — legal is a common London, ON vertical. We build professional, credibility-first websites for law firms, barristers, and paralegals that rank for practice-area searches in London and across Southwestern Ontario." },
    ],
  },
  brampton: {
    blurb: `Brampton is one of Canada's most diverse and fastest-growing cities — a hub for trucking and logistics, healthcare, food manufacturing, retail, and a booming small business community. With Pearson Airport nearby and Highway 410 running through the city, Brampton businesses serve both local customers and the broader GTA market. Canadian Web Designs has deep roots in Brampton — we've built websites for dozens of Brampton businesses across trucking companies, healthcare clinics, food businesses, and professional services. We build fast, mobile-first websites with local SEO baked in from day one — because Brampton customers search on their phones, and your website needs to be ready. Our Brampton clients consistently rank in Google's top 3 for their core service keywords.`,
    facts: ["Brampton is the 9th-largest city in Canada with one of the country's most diverse business communities", "Trucking, logistics, healthcare, and food manufacturing are dominant Brampton industries", "\"Brampton seo\" gets 480 searches a month at a difficulty of just 7 — one of the easiest, highest-value keywords we track anywhere in the GTA", "The majority of Brampton searches happen on mobile — fast-loading sites are non-negotiable"],
    industries: ["Trucking & Logistics", "Healthcare & Clinics", "Food Manufacturing & Retail", "Professional Services", "Trades & Construction", "Auto & Mechanical"],
    faq: [
      { q: "Do you build websites for trucking and logistics companies in Brampton?", a: "Yes — trucking is one of our most common Brampton verticals. We build professional websites for carriers, freight brokers, and logistics companies that rank for Brampton and GTA-wide searches." },
      { q: "How does SEO work differently in Brampton vs Toronto?", a: "Brampton-specific keywords have significantly lower competition than Toronto keywords. A Brampton business with a well-optimized website can rank on page 1 faster and maintain that ranking with less ongoing effort." },
      { q: "Can you help my Brampton clinic or healthcare practice get more patients online?", a: "Absolutely — we've built websites for medical clinics, dental practices, physiotherapy, and mental health providers in Brampton. We understand healthcare SEO and patient privacy requirements." },
      { q: "What does a website cost for a Brampton business?", a: "Brampton builds are the same quality as our Toronto work with no GTA premium — flat-rate pricing scoped to your project, with no hidden fees. Every package includes local SEO foundations, mobile optimization, and Google Analytics. Contact us for a free quote." },
      { q: "Do you build websites for Brampton South Asian and multicultural businesses?", a: "Yes — Brampton's diverse business community is something we know well. We build multilingual sites and culturally appropriate designs for businesses serving South Asian, Caribbean, and other multicultural communities across Brampton." },
      { q: "Is SEO worth it for a Brampton business?", a: "Very much so — \"brampton seo\" and \"seo brampton\" each get around 480 searches a month at a difficulty score of just 7, among the easiest, highest-opportunity local SEO keywords we track anywhere in the GTA. A modest ongoing SEO investment goes further in Brampton than in almost any neighbouring city." },
    ],
  },
  calgary: {
    blurb: `Calgary is Alberta's economic engine — a city reinventing itself from energy-dependent to tech-forward, with a growing startup ecosystem, booming construction, strong professional services, and one of Canada's most active real estate markets. Businesses in Calgary need digital strategies that reflect the city's ambition and pace. Canadian Web Designs builds websites for Calgary businesses that load fast, rank in Google, and convert visitors into clients. We understand the Calgary market — the energy sector, the real estate boom, the growing tech community, and the city's entrepreneurial spirit. Our local SEO strategies are calibrated for Calgary's search landscape, helping you rank for the keywords your ideal clients are searching right now.`,
    facts: ["Calgary has one of Canada's highest average household incomes — buyers have strong purchasing power", "Energy, real estate, tech, and construction are Calgary's dominant growth sectors", "\"Web design calgary\" gets 480 monthly searches, and \"calgary seo\" gets 990 — both moderate difficulty and a major opportunity", "Calgary businesses often need to rank province-wide (Alberta) AND locally — our SEO covers both"],
    industries: ["Energy & Engineering", "Real Estate & Mortgage", "Construction & Trades", "Tech & Software", "Professional Services", "Healthcare & Wellness"],
    faq: [
      { q: "Do you work with energy sector companies in Calgary?", a: "Yes — we've built websites for oil field services companies, environmental consultants, and engineering firms in Calgary. We understand the professional standards expected in the energy sector." },
      { q: "How competitive is web design SEO in Calgary?", a: "\"Web design calgary\" gets about 480 searches a month at moderate difficulty — more achievable than Toronto but still competitive. \"Calgary SEO\" is an even bigger opportunity at roughly 990 searches a month. Our Calgary clients typically reach page 1 within 90–120 days with our full SEO program." },
      { q: "Can you help my Calgary real estate business rank on Google?", a: "Real estate is one of our Calgary specialties. We build IDX-integrated real estate websites with hyperlocal SEO targeting Calgary neighbourhoods — Beltline, Kensington, Inglewood, Mission, and beyond." },
      { q: "What does web design cost for a Calgary business?", a: "Custom web design starts from $299, with ongoing maintenance available from $99/month. Pricing is flat-rate with no hidden fees and scoped to your project. Every Calgary build includes local SEO foundations, mobile-first design, and Google Analytics. We also offer Alberta-wide SEO retainers for businesses targeting Edmonton, Red Deer, and Lethbridge in addition to Calgary. Get a free quote to scope your project." },
      { q: "Do you build websites for Calgary tech startups and software companies?", a: "Yes — Calgary's growing tech scene is something we're actively building for. We create clean, conversion-focused websites for SaaS companies, app developers, and tech startups that position you credibly for both Calgary and national/international markets." },
      { q: "Should a Calgary business target \"web design calgary\" or \"calgary seo\" first?", a: "If you're launching a new site, \"web design calgary\" matches that intent directly. But \"calgary seo\" has roughly double the search volume at similar difficulty — so once your site is live, an ongoing local SEO program targeting that term is usually the higher-leverage next step." },
    ],
  },
  winnipeg: {
    blurb: `Winnipeg is Manitoba's beating heart — a city of manufacturers, agricultural businesses, government contractors, healthcare providers, retailers, and a fast-growing tech scene. But Winnipeg businesses often fly under the radar online: the competition for local Google searches is lower here than in Toronto or Vancouver, which means a well-optimized website can reach page 1 faster and with less effort. Canadian Web Designs builds websites for Winnipeg businesses that are fast, mobile-first, and engineered to rank for local searches. Whether you're a Winnipeg trades company, a healthcare clinic on McPhillips, a restaurant on Corydon, or a professional services firm downtown, we build the digital presence that puts you in front of Winnipeg customers when they search for your services.`,
    facts: ["Winnipeg has one of Canada's lowest cost-per-click and keyword difficulty scores — massive opportunity", "Manufacturing, agriculture, healthcare, and government are Manitoba's strongest sectors", "Web design Winnipeg gets 590 searches/month — most local businesses have weak online presences", "Winnipeg is a bilingual market — English and French language signals matter for local SEO"],
    industries: ["Manufacturing & Industrial", "Agriculture & Food", "Healthcare & Clinics", "Government & Non-Profit", "Retail & Hospitality", "Professional Services"],
    faq: [
      { q: "Is it worth investing in SEO for a Winnipeg business?", a: "Absolutely — and arguably more so than in Toronto or Vancouver. Winnipeg keyword difficulty is low, meaning your investment goes further. Most Winnipeg businesses see page 1 results for core service keywords within 60–90 days." },
      { q: "Do you build websites for Winnipeg manufacturing and agricultural businesses?", a: "Yes — industrial and agricultural clients are a specialty. We build professional, authoritative websites for Winnipeg manufacturers, agricultural suppliers, and food processing companies." },
      { q: "Can you help my Winnipeg business show up in Google Maps?", a: "Yes — Google Business Profile optimization is part of every Winnipeg SEO package. We build your local citations, optimize your listing, and help generate reviews so you appear in the Winnipeg local pack." },
      { q: "What does web design cost for a Winnipeg business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. We include local SEO setup, mobile-first design, and Google Analytics in every build. Most Winnipeg small businesses see ROI within the first 2–3 months of launch. Get a free quote today." },
      { q: "Do you build bilingual or multicultural websites for Winnipeg businesses?", a: "Yes — Winnipeg has a significant French-speaking community and growing newcomer population. We build bilingual English/French sites with proper hreflang tags, and we can accommodate other language requirements for multicultural Winnipeg businesses." },
    ],
  },
  hamilton: {
    blurb: `Hamilton is one of Ontario's most exciting cities for business — a post-industrial city reinventing itself with a booming arts scene, a growing tech and creative economy, a strong healthcare and education sector anchored by McMaster University, and a thriving trades and manufacturing base. Hamilton businesses are increasingly aware that a strong online presence is essential to compete — not just locally, but with Toronto businesses that target Hamilton searches. Canadian Web Designs builds websites for Hamilton businesses that are designed to win: fast-loading, mobile-optimized, and rank-ready for local Google searches. We know the Hamilton market from Stoney Creek to Dundas, and we build digital strategies that connect you with Hamilton customers at the exact moment they're searching.`,
    facts: ["McMaster University and Hamilton Health Sciences make healthcare and education dominant sectors", "Hamilton's steel and manufacturing heritage is evolving — tech and creative industries are growing fast", "Hamilton is within an hour of Toronto — businesses compete with GTA companies for the same searches", "Hamilton keyword difficulty is low — strong opportunity for businesses willing to invest in SEO"],
    industries: ["Healthcare & Medical", "Manufacturing & Steel", "Education & Training", "Arts & Creative", "Trades & Construction", "Restaurants & Hospitality"],
    faq: [
      { q: "How does Hamilton web design SEO compare to Toronto?", a: "Hamilton searches have significantly lower keyword difficulty than Toronto — which means your website can rank faster and maintain rankings with less ongoing investment. It's one of Ontario's best-value SEO markets." },
      { q: "Do you work with McMaster-affiliated businesses and startups in Hamilton?", a: "Yes — we work with university spin-offs, student entrepreneurs, and McMaster-affiliated health and research businesses. We understand the academic and startup environment and build sites that grow with early-stage companies." },
      { q: "What industries do you serve in Hamilton?", a: "Our Hamilton clients span healthcare, trades, restaurants, professional services, manufacturing, and creative industries. If you're a Hamilton business that wants more customers from Google, we can help." },
      { q: "What does web design cost for a Hamilton business?", a: "Hamilton builds use the same flat-rate pricing as our Toronto work with no GTA premium. Every site includes mobile-first design, on-page SEO, Google Analytics, and a 30-day support window. We also offer Hamilton-specific SEO retainers. Get a free quote." },
      { q: "Can you help my Hamilton restaurant or food business rank on Google?", a: "Yes — hospitality and food are among our most common Hamilton verticals. We build visually compelling websites for Hamilton restaurants, cafes, bakeries, and catering companies that rank for 'best [food type] in Hamilton' and similar high-intent searches." },
    ],
  },
  mississauga: {
    blurb: `Mississauga is Ontario's second-largest city with over 700,000 residents and one of Canada's most important business hubs. Home to Canadian head offices for Microsoft, Walmart, Hershey, and dozens of Fortune 500 firms, Mississauga combines enterprise-grade demand with a thriving community of local businesses across City Centre, Port Credit, Streetsville, Erin Mills, and Meadowvale. Yet most Mississauga businesses still have outdated websites and weak Google presences — making it one of the highest-opportunity SEO markets in the GTA. Canadian Web Designs builds fast, conversion-focused websites for Mississauga businesses that rank in Google and turn local searches into booked appointments and phone calls. We understand Mississauga's distinct communities and build hyper-local strategies for each: the corporate corridors near Square One, the boutique shops of Port Credit, the family services market in Erin Mills, and beyond.`,
    facts: [
      "Mississauga is Ontario's 2nd-largest city and 6th largest in Canada — 700,000+ residents with strong purchasing power",
      "Home to Canadian HQs for Microsoft, Walmart, Hershey, and hundreds of Fortune 500 companies — enterprise buyers are here",
      "Mississauga keyword difficulty is significantly lower than downtown Toronto — faster and cheaper to rank",
      "Square One is one of Canada's busiest shopping destinations — retail and service businesses need strong local SEO to compete",
      "\"Web designer mississauga\" gets 170 searches a month — the highest-volume Mississauga search we track — and we optimize for it alongside \"web design mississauga\"",
    ],
    industries: ["Corporate & Enterprise", "Retail & eCommerce", "Healthcare & Clinics", "Financial Services", "Tech & Software", "Real Estate & Mortgage"],
    faq: [
      { q: "How competitive is SEO in Mississauga vs. Toronto?", a: "Mississauga keywords typically have difficulty scores of 15–30 vs 40–60+ for the same categories in downtown Toronto. This means a well-optimized Mississauga website can reach page 1 within 45–90 days — faster and with less budget than comparable Toronto campaigns. It's one of the best-value SEO markets in the GTA." },
      { q: "Do you work with Mississauga corporate and enterprise businesses?", a: "Yes — corporate clients are one of our most common Mississauga verticals. We build enterprise-grade websites for head offices, professional services firms, and B2B companies that need to project credibility to large clients and partners. We understand the polished, professional standard expected in Mississauga's corporate market." },
      { q: "Can you help my Mississauga business rank in the Google local pack?", a: "Absolutely — Google Business Profile optimization is central to every Mississauga SEO package. We optimize your listing for City Centre, Port Credit, Streetsville, and other Mississauga communities, build local citations across 50+ Canadian directories, and run a review generation program. Mississauga's local pack is competitive but very winnable with the right strategy." },
      { q: "Do you build websites for Mississauga startups and tech companies?", a: "Yes — Mississauga's tech and innovation ecosystem is growing rapidly, and we work with early-stage startups through to established SMBs. We build clean, credibility-first websites that position Mississauga tech companies for both local business development and national visibility." },
      { q: "What does web design cost for a Mississauga business?", a: "Mississauga builds are the same quality as our downtown Toronto work at a flat rate with no hidden fees, scoped to your project. We offer Mississauga-specific SEO retainers that target Square One, Port Credit, Erin Mills, and Meadowvale neighbourhoods. Get a free quote today." },
      { q: "Should I search for a \"web design\" company or a \"web designer\" in Mississauga?", a: "Both terms lead to us — but \"web designer mississauga\" is actually the higher-volume search, so we optimize for both phrasings. Whichever way you search, you'll find a fully custom, mobile-first, SEO-ready build, not a template." },
    ],
  },
  "richmond-hill": {
    blurb: `Richmond Hill is one of the GTA's fastest-growing communities — a diverse, affluent suburb north of Toronto with a booming business ecosystem spanning healthcare, real estate, professional services, retail, and technology. With over 220,000 residents and a high average household income, Richmond Hill customers are actively searching for local businesses online — and the competition for Google's first page is fierce but winnable. Canadian Web Designs builds custom, conversion-focused websites for Richmond Hill businesses that rank on Google, load fast on mobile, and turn visitors into paying clients. From Yonge Street to Major Mackenzie Drive, we know the Richmond Hill market and understand how to position your business to capture high-intent local searches. Our Richmond Hill clients in healthcare, real estate, professional services, and trades consistently see 3–5× growth in inbound leads within the first 6 months of launch.`,
    facts: [
      "Richmond Hill has one of Ontario's highest average household incomes — buyers have real purchasing power",
      "Healthcare, real estate, professional services, and retail are the dominant Richmond Hill business sectors",
      "Richmond Hill-specific keywords have low difficulty vs Toronto — faster, cheaper to rank",
      "High mobile search volume — a fast, mobile-first website is essential for Richmond Hill businesses",
    ],
    industries: ["Healthcare & Clinics", "Real Estate & Mortgage", "Professional Services", "Retail & Restaurants", "Contractors & Trades", "Technology & IT"],
    faq: [
      {
        q: "How quickly can a Richmond Hill business rank on Google?",
        a: "Richmond Hill keywords have significantly lower difficulty than downtown Toronto searches. Most of our Richmond Hill clients see meaningful movement on location-specific searches within 30–60 days of launch, with stronger city-wide rankings following in months 3–6.",
      },
      {
        q: "Do you build websites for Richmond Hill healthcare and medical businesses?",
        a: "Yes — healthcare is one of our most common Richmond Hill verticals. We build PIPEDA-compliant websites for medical clinics, dental practices, physiotherapy, chiropractic, and mental health providers in Richmond Hill, optimized for Google Maps visibility and patient trust.",
      },
      {
        q: "What does web design cost for a Richmond Hill small business?",
        a: "Pricing depends on your project scope — from a simple mobile-optimized site to a full growth package with SEO retainer. We provide detailed quotes with no hidden fees — contact us for a free consultation.",
      },
      {
        q: "Can you help my Richmond Hill real estate or mortgage business get more leads online?",
        a: "Yes — real estate and mortgage are among our most common Richmond Hill verticals. We build IDX-integrated real estate websites, mortgage broker sites, and investment property pages with hyperlocal SEO targeting Richmond Hill, Oak Ridges, and Langstaff — helping you capture home buyers and sellers before they contact a competitor.",
      },
      {
        q: "Do you build websites for Richmond Hill Persian and multicultural businesses?",
        a: "Absolutely — Richmond Hill has one of Canada's largest Persian-speaking communities and a highly diverse business landscape. We build multilingual sites, culturally appropriate designs, and community-specific local SEO strategies for Richmond Hill's multicultural business owners.",
      },
    ],
  },
  "north-york": {
    blurb: `North York is one of Toronto's most densely populated and commercially active districts — with major business corridors along Yonge Street, Sheppard Avenue, and Wilson Avenue. From Yonge-Eglinton to Bayview Village, North York businesses compete intensely for local customers who search Google before spending. Canadian Web Designs builds websites for North York businesses that are optimized for hyper-local searches — 'web design north york', '[service] north york' — so you appear when customers near you are looking. We combine fast, conversion-focused web design with a local SEO strategy specifically tuned to North York's diverse business landscape: medical clinics, law firms, restaurants, contractors, and retail shops.`,
    facts: ["North York is one of Toronto's most commercially active districts — Yonge-Sheppard, Wilson, and Bayview corridors are major business hubs", "North York web design has difficulty of just 9 — one of the easiest local keywords to rank for in the GTA", "Dense residential population means strong foot traffic intent — local searches are high-converting", "Competition from downtown Toronto agencies makes local positioning critical for North York businesses"],
    industries: ["Healthcare & Clinics", "Law Firms", "Restaurants & Food", "Contractors & Trades", "Real Estate", "Retail & Services"],
    faq: [
      { q: "Why is hyper-local SEO important for North York businesses?", a: "North York searches are often neighbourhood-specific — 'dentist near Yonge and Sheppard', 'contractor North York', etc. We optimize for these hyper-local queries that have high buyer intent and lower competition than broad Toronto keywords." },
      { q: "How fast can a North York business rank on Google?", a: "North York keywords have very low difficulty — we've seen new clients reach page 1 for North York-specific searches within 30–45 days of launch with proper on-page SEO and Google Business Profile optimization." },
      { q: "Do you offer website packages for North York small businesses?", a: "Yes — we build fully custom websites for North York businesses that include custom design, mobile optimization, local SEO setup, and Google Analytics. No hidden fees — contact us for a free quote." },
      { q: "What does web design cost for a North York business?", a: "Pricing is flat-rate with no GTA premium and scoped to your project. We include on-page SEO for North York-specific keywords, mobile-first design, and Google Analytics in every build. Contact us for a free quote and same-day turnaround on estimates." },
      { q: "Do you build websites for North York medical clinics and dental practices?", a: "Yes — healthcare is one of our most active North York verticals. We build PIPEDA-compliant websites for medical clinics, dental offices, physiotherapy practices, and mental health providers along Yonge-Sheppard and the Wilson corridor, with strong Google Maps optimization to win new patient searches." },
    ],
  },
  edmonton: {
    blurb: `Edmonton is Alberta's capital and one of Canada's largest cities — a dynamic economy built on energy, government, healthcare, construction, and a fast-growing tech sector. With over one million residents in the metro area and a business community that spans industries from oil-field services to craft breweries, Edmonton businesses face real competition online. Canadian Web Designs builds websites for Edmonton businesses that are fast, mobile-first, and engineered to rank for local Google searches. We understand the Edmonton market: the influence of the energy sector, the government procurement landscape, the University of Alberta's innovation ecosystem, and the city's entrepreneurial spirit. Our Edmonton clients consistently outrank local competitors within 60–90 days.`,
    facts: ["Edmonton has over 1 million metro residents — one of Canada's largest and fastest-growing markets", "Energy, government, healthcare, and construction are Edmonton's dominant industries", "Edmonton keyword difficulty is lower than Calgary or Vancouver — easier and faster to rank", "Government procurement and B2B sales drive a significant share of Edmonton's commercial activity"],
    industries: ["Energy & Engineering", "Government & Non-Profit", "Healthcare & Medical", "Construction & Trades", "Retail & Hospitality", "Tech & Startups"],
    faq: [
      { q: "How competitive is web design SEO in Edmonton?", a: "Edmonton has lower keyword difficulty than Calgary and significantly lower than Toronto. A well-optimized Edmonton website can typically reach page 1 for core service keywords within 60–90 days of launch — faster and more affordable than comparable campaigns in larger cities." },
      { q: "Do you work with Edmonton energy and engineering companies?", a: "Yes — oil and gas services, engineering firms, and environmental consultants are among our most common Edmonton clients. We build professional, authoritative websites that meet the standards expected in Alberta's energy sector." },
      { q: "Can you help my Edmonton business appear in Google Maps?", a: "Absolutely. Google Business Profile optimization is included in every Edmonton SEO package. We build local citations across Canadian directories, optimize your listing for Edmonton-specific searches, and run a review generation program to improve your local pack visibility." },
      { q: "What does web design cost for an Edmonton business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. Every Edmonton build includes local SEO foundations targeting the Edmonton metro area, mobile-first design, and Google Analytics. We also offer Alberta-wide retainers covering both Edmonton and Calgary. Get a free quote today." },
      { q: "Do you build websites for Edmonton government contractors and public sector businesses?", a: "Yes — government and public sector clients are a significant part of our Edmonton work. We build professional, credibility-forward websites for consulting firms, IT companies, and service providers that bid on provincial and federal government contracts in Alberta." },
    ],
  },
  ottawa: {
    blurb: `Ottawa is Canada's capital city — a unique market shaped by government, technology, healthcare, education, and a vibrant French-English bilingual culture. Home to the National Capital Region's 1.4 million residents, Ottawa businesses compete for a sophisticated, educated customer base that does thorough online research before spending. Canadian Web Designs builds websites for Ottawa businesses that rank in Google, load fast, and convert government contacts, tech buyers, and local consumers alike. We understand Ottawa's bilingual landscape, the government procurement cycle, the Kanata tech park ecosystem, and the importance of appearing in local search when Ottawa residents are ready to buy. Our Ottawa clients range from IT consultancies and law firms to restaurants and retail businesses.`,
    facts: ["Ottawa is Canada's 4th largest city — 1.4M metro residents with high average household income", "Government, tech, healthcare, and education dominate Ottawa's economy — high B2B demand", "Bilingual market (English/French) — websites benefit from bilingual content signals for local SEO", "Kanata is one of Canada's most important tech corridors — B2B tech companies compete intensely online"],
    industries: ["Government & Public Sector", "Technology & IT", "Healthcare & Medical", "Legal Services", "Restaurants & Hospitality", "Education & Training"],
    faq: [
      { q: "Do you build bilingual (English/French) websites for Ottawa businesses?", a: "Yes — bilingual websites are a competitive advantage in Ottawa. We build dual-language sites with proper hreflang tags, separate URL structures for each language, and SEO optimization for both English and French keywords." },
      { q: "Do you work with Ottawa government suppliers and IT companies?", a: "Absolutely — government and B2B IT clients are among our most common Ottawa verticals. We understand the professional standards, security requirements, and credibility signals needed to win government contracts and enterprise clients online." },
      { q: "How quickly can an Ottawa business rank on Google?", a: "Ottawa keyword difficulty is moderate — lower than Toronto but competitive in tech and government sectors. Most Ottawa clients see meaningful ranking movement within 60–90 days for location-specific and long-tail searches." },
      { q: "What does web design cost for an Ottawa business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. We offer bilingual builds (English + French) and government-ready designs. Get a free quote and we'll scope the right package for your Ottawa business goals." },
      { q: "Do you build websites for Ottawa restaurants, retail, and hospitality businesses?", a: "Yes — beyond the tech and government sectors, we work extensively with Ottawa's hospitality scene. We build visually compelling, mobile-first websites for ByWard Market restaurants, Glebe boutiques, Centretown bars, and tourism businesses that rank for Ottawa-specific searches and convert foot traffic intent." },
    ],
  },
  vaughan: {
    blurb: `Vaughan is one of the GTA's fastest-growing cities — a booming suburb north of Toronto with a thriving business community spanning construction, manufacturing, healthcare, professional services, and retail. With over 350,000 residents and one of Ontario's most active commercial real estate markets at the VMC (Vaughan Metropolitan Centre), Vaughan businesses have a massive local opportunity. Canadian Web Designs builds websites for Vaughan businesses that are designed to win local Google searches — capturing customers the moment they search for your services in Vaughan, Woodbridge, Maple, and Kleinburg. Our Vaughan clients in trades, healthcare, professional services, and real estate consistently see 3–5x growth in inbound leads within 6 months.`,
    facts: ["Vaughan is one of Ontario's fastest-growing cities with 350,000+ residents and rising", "The Vaughan Metropolitan Centre (VMC) is a major commercial hub attracting head offices and tech companies", "Construction, trades, healthcare, and professional services are Vaughan's dominant business sectors", "Vaughan keywords have lower competition than Toronto — ideal for aggressive SEO growth with faster ROI"],
    industries: ["Construction & Trades", "Healthcare & Clinics", "Real Estate & Mortgage", "Professional Services", "Manufacturing", "Retail & Restaurants"],
    faq: [
      { q: "Why should Vaughan businesses invest in local SEO?", a: "Vaughan's population growth means more local searches every year — and most Vaughan businesses have weak online presences. A well-optimized website can capture a dominant share of local search traffic before competition catches up." },
      { q: "Do you build websites for Vaughan trades and construction companies?", a: "Yes — trades and construction are our most common Vaughan verticals. We build fast, mobile-first sites with click-to-call buttons, quote forms, and project galleries that help Vaughan contractors win more jobs from Google." },
      { q: "How quickly can a Vaughan business rank on Google?", a: "Vaughan-specific keywords have significantly lower difficulty than Toronto keywords. Most Vaughan clients see first-page movement for location-specific searches within 30–60 days with our full SEO package." },
      { q: "What does web design cost for a Vaughan business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. We include local SEO targeting Vaughan, Woodbridge, Maple, and Kleinburg, mobile-first design, and Google Analytics. Contact us for a free quote and same-day estimate." },
      { q: "Do you build websites for Vaughan healthcare and medical practices?", a: "Yes — healthcare is one of our fastest-growing Vaughan verticals. We build PIPEDA-compliant websites for Vaughan medical clinics, dental practices, physiotherapy, and wellness centres, with Google Maps optimization to capture 'near me' healthcare searches in the VMC and surrounding communities." },
    ],
  },
  victoria: {
    blurb: `Victoria, BC is one of Canada's most beautiful and livable cities — and one of its most interesting business markets. With over 400,000 residents in the Capital Regional District, a thriving tourism and hospitality sector, a strong government presence, and a growing tech community, Victoria businesses compete for a sophisticated, values-driven consumer base that researches thoroughly online. Canadian Web Designs builds websites for Victoria businesses that rank on Google, reflect the quality and professionalism that Victoria customers expect, and convert visitors into booked appointments and phone calls. We understand the Victoria market — from the Oak Bay boutique to the James Bay restaurant, from the Langford contractor to the downtown law firm.`,
    facts: ["Victoria CRD has 400,000+ residents — a compact but highly educated, affluent consumer market", "Tourism, government, healthcare, and tech are Victoria's dominant industries", "Victoria keyword difficulty is low — similar buyer intent to Vancouver but much easier to rank", "Mobile searches dominate in Victoria — a fast, mobile-first website is essential to compete"],
    industries: ["Tourism & Hospitality", "Government & Public Sector", "Healthcare & Wellness", "Technology & IT", "Retail & Boutique", "Contractors & Trades"],
    faq: [
      { q: "How competitive is web design SEO in Victoria, BC?", a: "Victoria keyword difficulty is significantly lower than Vancouver — 'web design victoria bc' and similar searches are very achievable within 45–90 days with proper on-page SEO. It's one of BC's best-value SEO markets." },
      { q: "Do you build websites for Victoria tourism and hospitality businesses?", a: "Yes — tourism is one of our most common Victoria verticals. We build professional, visually compelling websites for hotels, restaurants, tour operators, and experience businesses that convert both local and international visitors." },
      { q: "Can you help my Victoria business rank in Google Maps?", a: "Absolutely. Google Business Profile optimization is part of every Victoria SEO package. We optimize your listing, build local citations for the Capital Regional District, and run a review generation program to improve local pack visibility." },
      { q: "What does web design cost for a Victoria BC business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. We include local SEO targeting Victoria and the Capital Regional District, mobile-first design, and Google Analytics. Contact us for a free quote — no obligation, same-day response." },
      { q: "Do you build websites for Victoria BC government and public sector businesses?", a: "Yes — government and public sector work is part of our Victoria practice. We build professional, accessibility-compliant websites for Victoria-based consultants, non-profits, and public sector service providers that need to project credibility to BC and federal government clients." },
    ],
  },
  oshawa: {
    blurb: `Oshawa is the economic heart of the Durham Region — a city defined by its automotive heritage but rapidly diversifying into healthcare, education, manufacturing, retail, and professional services. Home to Ontario Tech University and a growing young population, Oshawa is a city in transition — and its businesses need strong digital presences to capture a customer base that is increasingly searching Google before spending. Canadian Web Designs builds websites for Oshawa businesses that are fast, mobile-optimized, and engineered to rank for local searches in Oshawa, Whitby, Ajax, and across Durham Region. Our Oshawa clients in trades, healthcare, automotive, and professional services consistently see more inbound leads within 60–90 days of launch.`,
    facts: ["Oshawa is home to Ontario Tech University — 10,000+ students create strong demand for local services", "Durham Region has 700,000+ residents — Oshawa businesses can rank for the entire region", "Automotive, manufacturing, healthcare, and education are Oshawa's dominant sectors", "Oshawa keyword difficulty is very low — one of Ontario's best-value SEO markets"],
    industries: ["Automotive & Trades", "Healthcare & Clinics", "Manufacturing & Industrial", "Education & Training", "Retail & Restaurants", "Professional Services"],
    faq: [
      { q: "Is SEO worth it for an Oshawa small business?", a: "Absolutely — and arguably more so than in Toronto. Oshawa and Durham Region keyword difficulty is very low, meaning your website investment goes much further. Most Oshawa businesses see page 1 results within 45–60 days with our SEO program." },
      { q: "Do you build websites for Oshawa automotive and trades businesses?", a: "Yes — automotive and trades are among our most common Oshawa verticals. We build mobile-first sites with click-to-call, online booking, and Google Maps integration specifically designed for service businesses." },
      { q: "Can you rank my Oshawa business across all of Durham Region?", a: "Yes — we build geo-targeted content strategies that rank your site for Oshawa, Whitby, Ajax, Pickering, and Clarington — capturing the entire Durham Region market with a single optimized site." },
      { q: "What does web design cost for an Oshawa business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. Every Oshawa build includes local SEO, mobile-first design, and Google Analytics. We offer Durham Region-wide retainers that cover Oshawa, Whitby, Ajax, and Pickering. Get a free quote today." },
      { q: "Do you work with Oshawa businesses near Ontario Tech University?", a: "Yes — we work with student-facing businesses, university spin-offs, and service providers around Ontario Tech. We understand the Oshawa student market and build websites that rank for campus-adjacent searches and attract the young, mobile-first demographic." },
    ],
  },
  windsor: {
    blurb: `Windsor is Ontario's southernmost city — a border town with a uniquely binational economy shaped by its proximity to Detroit, a strong manufacturing and automotive heritage, a growing healthcare sector, and a lively entertainment and restaurant scene. Windsor businesses serve both local customers and cross-border traffic from Michigan, which means a strong online presence is essential for capturing both markets. Canadian Web Designs builds websites for Windsor businesses that rank in Canadian and local Google searches, load fast on mobile, and convert visitors into bookings, calls, and sales. We understand Windsor's distinctive market — the auto industry, the casino corridor, the University of Windsor student market, and the growing professional services sector.`,
    facts: ["Windsor is Canada's southernmost city with a binational economy linking to Detroit and Michigan", "Automotive manufacturing, healthcare, and tourism/entertainment are Windsor's dominant industries", "University of Windsor creates strong demand for student-facing services and local businesses", "Windsor keyword difficulty is very low — ideal for aggressive SEO growth with fast ROI"],
    industries: ["Automotive & Manufacturing", "Healthcare & Medical", "Restaurants & Hospitality", "Legal Services", "Retail & Shopping", "Construction & Trades"],
    faq: [
      { q: "Do you build websites for Windsor automotive and manufacturing companies?", a: "Yes — automotive and manufacturing clients are a specialty in Windsor. We build professional, B2B-ready websites for tier-1 and tier-2 suppliers, dealerships, and industrial businesses that rank for Windsor and regional searches." },
      { q: "Can a Windsor business rank on both Canadian and US Google?", a: "Yes — we build geo-targeted sites that can rank for both Windsor, Ontario searches and Detroit/Michigan-area searches where relevant. Proper hreflang, schema, and content signals help Google understand which market each page targets." },
      { q: "How quickly can a Windsor business rank on Google?", a: "Windsor keyword difficulty is very low — most of our Windsor clients reach page 1 for core service keywords within 30–60 days of launch. It's one of Ontario's fastest-ranking SEO markets." },
      { q: "What does web design cost for a Windsor Ontario business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. We include local SEO targeting Windsor and Essex County, mobile-first design, and Google Analytics. Contact us for a free quote and same-day estimate." },
      { q: "Can you help my Windsor entertainment, casino, or hospitality business rank online?", a: "Yes — entertainment and hospitality are important Windsor verticals given the city's casino corridor and tourism economy. We build engaging, mobile-first websites for Windsor bars, restaurants, hotels, and event venues that rank for 'things to do in Windsor' and related high-intent searches." },
    ],
  },
  saskatoon: {
    blurb: `Saskatoon is Saskatchewan's largest city — a prairie hub with a diverse economy spanning agriculture, mining, energy, healthcare, education, and a growing tech sector centred around innovation districts like Innovation Place. With over 280,000 residents and some of Canada's lowest keyword competition, Saskatoon is a golden opportunity for businesses willing to invest in web design and SEO. Most Saskatoon businesses still have outdated websites and weak online presences — which means a well-built, properly optimized site can rapidly dominate local Google searches. Canadian Web Designs builds websites for Saskatoon businesses that load fast, rank locally, and convert the right customers. We've helped clients across agriculture, professional services, healthcare, and trades grow their inbound leads consistently.`,
    facts: ["Saskatoon has 280,000+ residents — Saskatchewan's largest city and commercial centre", "Agriculture, mining, energy, and healthcare are the dominant Saskatoon industries", "Innovation Place and the University of Saskatchewan create a growing tech and research ecosystem", "Saskatoon keyword difficulty is extremely low — one of Canada's best-value SEO markets"],
    industries: ["Agriculture & Agri-Tech", "Mining & Energy", "Healthcare & Clinics", "Education & Research", "Professional Services", "Retail & Hospitality"],
    faq: [
      { q: "Is SEO worth it for a Saskatoon business?", a: "More than almost anywhere else in Canada. Saskatoon keyword difficulty is extremely low, meaning a modest investment in SEO can put your business on page 1 faster and keep it there with less ongoing effort than in larger cities." },
      { q: "Do you build websites for Saskatoon agriculture and agri-tech companies?", a: "Yes — agriculture and agri-tech are a specialty in Saskatchewan. We build professional websites for farms, co-ops, input suppliers, and agri-tech companies that rank for Saskatchewan-specific and national agricultural searches." },
      { q: "How quickly can a Saskatoon business rank on Google?", a: "Saskatoon keyword difficulty is among the lowest in Canada. Most of our Saskatoon clients reach page 1 for core service keywords within 30–45 days of launch — some of the fastest ranking timelines we see anywhere." },
      { q: "What does web design cost for a Saskatoon business?", a: "Pricing is flat-rate with no hidden fees and scoped to your project. We include local SEO targeting Saskatoon and surrounding Saskatchewan communities, mobile-first design, and Google Analytics. Given Saskatoon's low keyword difficulty, ROI on web design investment is among the highest in Canada. Get a free quote today." },
      { q: "Do you build websites for Saskatoon University of Saskatchewan businesses and startups?", a: "Yes — the University of Saskatchewan and Innovation Place create a strong startup and research ecosystem, and we work with spin-offs, student entrepreneurs, and innovation district businesses. We build credibility-first websites that position Saskatoon startups for both local and national audiences." },
    ],
  },
  barrie: {
    blurb: `Barrie sits on the shores of Lake Simcoe, about an hour north of Toronto — the gateway to Muskoka and Ontario's cottage country. It's one of Ontario's fastest-growing mid-size cities, with an economy built on manufacturing, healthcare, retail, and a growing base of tourism and recreation businesses serving both year-round residents and the seasonal cottage crowd. Canadian Web Designs builds fast, mobile-first websites for Barrie businesses that need to capture two very different audiences: local searches from Barrie and Innisfil residents, and seasonal traffic from GTA visitors heading north for the weekend. We build local SEO strategies tuned to both — so your Barrie business shows up whether the search is happening down the street or from a phone on the 400 heading up from Toronto.`,
    facts: ["Barrie is one of Ontario's fastest-growing mid-size cities and the gateway to Muskoka cottage country", "GO Train service to Toronto means many Barrie searchers also compare against GTA-based competitors", "Manufacturing, healthcare, and retail are Barrie's core sectors, alongside a growing tourism and recreation economy", "Barrie web design keywords run in the high-40s for difficulty — more competitive than smaller Simcoe County towns but far more approachable than downtown Toronto"],
    industries: ["Manufacturing & Industrial", "Healthcare & Clinics", "Retail & Hospitality", "Tourism & Recreation", "Real Estate & Mortgage", "Professional Services"],
    faq: [
      { q: "How much does SEO cost for a Barrie business?", a: "Barrie SEO packages are scoped to your keyword competitiveness, target page count, and growth goals. Every package includes keyword research, on-page optimization, local citation building, and Google Business Profile management. Contact us for a free Barrie SEO audit and custom quote." },
      { q: "How long does it take to rank a Barrie business on Google?", a: "Barrie keyword difficulty sits in the high-40s — more competitive than the surrounding Simcoe County towns, but most of our Barrie clients see meaningful movement within 60–90 days of launch with a full on-page and local SEO program." },
      { q: "Do you build websites for Barrie tourism and cottage-country businesses?", a: "Yes — tourism and recreation are a core Barrie vertical for us. We build visually driven, mobile-first sites for marinas, rental properties, outfitters, and hospitality businesses that need to convert both local searches and seasonal GTA traffic heading up Highway 400." },
      { q: "Can you help my Barrie business rank in Google Maps?", a: "Yes — Google Business Profile optimization is included in every Barrie package. We optimize your listing, build citations across Canadian directories, and run a review generation strategy so your business shows up in Barrie's local map pack." },
      { q: "What does a website cost for a Barrie business?", a: "Pricing depends on your project scope — page count, e-commerce needs, and design complexity. Every website includes mobile optimization, on-page SEO, Google Analytics, and 30 days of post-launch support. Contact us for a free, no-obligation quote." },
    ],
  },
  halifax: {
    blurb: `Halifax is Atlantic Canada's largest city and its financial, government, and technology hub — home to Dalhousie and Saint Mary's University, the Port of Halifax, the Halifax Shipyard, and one of Canada's most diverse regional economies. With the Halifax Regional Municipality now approaching half a million residents, local businesses are competing for a growing population that increasingly starts every purchase decision with a Google search. Canadian Web Designs builds fast, mobile-first websites for Halifax businesses across finance, healthcare, tech, and the ocean economy — engineered to rank locally and convert visitors into calls, bookings, and sales. We build the local SEO signals that matter in a market where East Coast businesses often compete against national and Ontario-based firms for the same searches.`,
    facts: ["Halifax Regional Municipality's population is approaching 500,000 — Atlantic Canada's largest and fastest-growing market", "Halifax is Atlantic Canada's financial hub, with strong IT, life sciences, ocean economy, and transportation & logistics sectors alongside it", "Dalhousie University, Saint Mary's University, the Port of Halifax, and the Halifax Shipyard anchor major employment across the region", "Halifax web design keywords carry moderate difficulty (mid-40s), with easier long-tail terms like 'website design halifax' offering a faster path to page 1"],
    industries: ["Financial Services", "Healthcare & Life Sciences", "Marine & Ocean Economy", "Government & Public Sector", "Education & Research", "Tourism & Hospitality"],
    faq: [
      { q: "How much does SEO cost for a Halifax business?", a: "Halifax SEO packages are scoped to your keyword competitiveness, number of target pages, and growth goals. Every package includes keyword research, on-page optimization, local citation building, and Google Business Profile management. Contact us for a free Halifax SEO audit and custom quote." },
      { q: "How long does it take to rank a Halifax business on Google?", a: "Halifax keyword difficulty runs in the mid-40s for core terms, with several long-tail Halifax searches carrying much lower difficulty. Most of our Halifax clients see meaningful ranking movement within 60–90 days of launch with a full SEO program." },
      { q: "Do you build websites for Halifax financial services and professional firms?", a: "Yes — finance and professional services are core Halifax verticals for us. As Atlantic Canada's financial hub, Halifax firms need websites that project credibility to both local clients and businesses across the Maritimes. We build clean, trust-focused sites tuned for that market." },
      { q: "Can you help my Halifax business rank in Google Maps?", a: "Yes — Google Business Profile optimization is part of every Halifax package. We optimize your listing, build citations across Canadian directories, and run a review generation strategy so your business shows up in Halifax's local map pack." },
      { q: "Do you work with Halifax's ocean economy and marine businesses?", a: "Yes — with the Port of Halifax and Halifax Shipyard anchoring the region's marine sector, we've built sites for logistics, marine services, and ocean-economy businesses that need to rank for both local Halifax searches and broader Atlantic Canada shipping and logistics terms." },
    ],
  },
};

function getCityBySlug(slug: string) {
  return config.cities.find((c) => c.slug === slug);
}

export function generateStaticParams() {
  return config.cities.map((c) => ({ city: c.slug }));
}

const cityMeta: Record<string, { title: string; description: string }> = {
  "richmond-hill": {
    title: "Web Design Richmond Hill | Custom Sites That Rank | Canadian Web Designs",
    description: `Richmond Hill web design — Oak Ridges, Langstaff & Yonge St. Custom-built sites that rank and convert local searches. Free quote.`,
  },
  toronto: {
    title: "Web Design Toronto | Custom Sites That Rank | Canadian Website Design",
    description: `Toronto web design agency — Yorkville, Etobicoke & Scarborough. Custom sites that rank, backed by 200+ five-star reviews. Free quote.`,
  },
  mississauga: {
    title: "Web Design Mississauga | Canadian Web Designs",
    description: `Mississauga web design & web designer services — Square One, Port Credit, Erin Mills. 200+ five-star reviews. Free quote.`,
  },
  edmonton: {
    title: "Web Design Edmonton | Sites That Rank | Canadian Web Designs",
    description: `Edmonton web design — energy, healthcare & trades specialists. Custom sites built to rank locally, full SEO included. Free quote.`,
  },
  brampton: {
    title: "Web Design Brampton | Sites That Rank | Canadian Web Designs",
    description: `Brampton web design — trucking, healthcare & pro services specialists. Sites built to rank locally. Free quote: (647) 689-6069.`,
  },
  london: {
    title: "Web Design London Ontario | Custom Sites That Rank | Canadian Website Design",
    description: `London Ontario web design — healthcare, legal & trades experts. Custom-built sites that outrank non-local agencies on Google. Free quote.`,
  },
  ottawa: {
    title: "Web Design Ottawa | Bilingual EN/FR | Canadian Web Designs",
    description: `Ottawa bilingual web design — Kanata, Glebe & ByWard Market. Custom EN/FR sites that rank, backed by 200+ five-star reviews. Free quote.`,
  },
  vaughan: {
    title: "Web Design Vaughan | Custom Sites That Convert | Canada Website Design",
    description: `Vaughan web design — Woodbridge, Maple & the VMC. Custom-built sites that rank and convert local searches, full SEO included. Free quote.`,
  },
  victoria: {
    title: "Web Design Victoria BC | Custom Sites That Rank | Canadian Web Designs",
    description: `Victoria BC web design — Oak Bay, Langford & James Bay. Custom sites built to rank across the Capital Region. Free audit.`,
  },
  kitchener: {
    title: "Web Design Kitchener-Waterloo | KW Tech Experts | Canadian Website Design",
    description: `Kitchener-Waterloo web design — tech, manufacturing & healthcare specialists. Custom sites built to rank locally, fast. Free quote.`,
  },
  oshawa: {
    title: "Web Design Oshawa | Durham Region Specialists | Canada Web Designs",
    description: `Oshawa & Durham Region web design — Whitby, Ajax & Pickering coverage. Custom sites built to rank locally. Free quote.`,
  },
  windsor: {
    title: "Web Design Windsor Ontario | Local + Detroit Reach | Canada Website Design",
    description: `Windsor Ontario web design — downtown, Walkerville & South Windsor. Custom sites built to rank and capture cross-border traffic. Free quote.`,
  },
  calgary: {
    title: "Web Design Calgary | Sites That Rank | Canadian Web Designs",
    description: `Calgary web design — energy, real estate & construction specialists. Sites built to rank across Alberta. Free quote: (647) 689-6069.`,
  },
  saskatoon: {
    title: "Web Design Saskatoon | Custom Sites That Rank | Canadian Website Design",
    description: `Saskatoon web design — agriculture, mining & healthcare specialists. Custom sites built to rank in a low-competition market. Free quote.`,
  },
  vancouver: {
    title: "Vancouver Web Design | Custom Sites That Rank | Canada Web Designs",
    description: `Vancouver web design — Yaletown, Kitsilano & Mount Pleasant. Custom sites that rank across Metro Vancouver, 200+ reviews. Free quote.`,
  },
  surrey: {
    title: "Web Design Surrey BC | Custom Sites That Rank | Canada Website Design",
    description: `Surrey BC web design — Newton, Cloverdale & South Surrey. Custom sites built to rank across Metro Vancouver. Free quote.`,
  },
  burnaby: {
    title: "Web Design Burnaby BC | Metrotown Specialists | Canadian Web Designs",
    description: `Burnaby web design — Metrotown, Brentwood & Lougheed. Custom sites built to rank across Metro Vancouver. Free quote.`,
  },
  "north-york": {
    title: "Web Design North York | Yonge-Sheppard Experts | Canadian Website Design",
    description: `North York web design — Yonge-Sheppard, Wilson & Bayview. Custom sites built to rank faster than downtown Toronto. Free quote.`,
  },
  hamilton: {
    title: "Web Design Hamilton | Custom Sites That Rank | Canada Web Designs",
    description: `Hamilton web design — Stoney Creek, Dundas & Westdale. Custom sites built to rank in one of Ontario's best-value markets. Free quote.`,
  },
  winnipeg: {
    title: "Web Design Winnipeg | Manitoba Web Experts | Canada Website Design",
    description: `Winnipeg web design — Corydon, Exchange District & St. Vital. Custom sites built to rank in a low-competition market. Free quote.`,
  },
  barrie: {
    title: "Web Design Barrie | Sites That Rank | Canadian Web Designs",
    description: `Barrie web design — Lake Simcoe, Innisfil & cottage country. Custom sites built to rank locally. Free quote: 647-689-6069.`,
  },
  halifax: {
    title: "Web Design Halifax | Sites That Rank | Canadian Web Designs",
    description: `Halifax web design — Atlantic Canada's finance & tech hub. Custom sites built to rank in HRM. Free quote: 647-689-6069.`,
  },
};

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const cityData = getCityBySlug(params.city);
  const cityName = cityData?.name ?? params.city;
  const custom = cityMeta[params.city];
  const title = custom?.title ?? `Web Design ${cityName} | Custom Sites That Rank | Canadian Web Designs`;
  const description = custom?.description ?? `Custom web design & SEO in ${cityName} — sites built to rank and convert. ${config.reviewCount}+ five-star reviews. Free quote: ${config.phone}.`;
  const url = `https://${config.domain}/locations/${params.city}`;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `/locations/${params.city}` },
    // Page-specific OG/Twitter so social shares show the city page, not the homepage.
    openGraph: { title, description, url, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default function LocationPage({ params }: { params: { city: string } }) {
  const cityData = getCityBySlug(params.city);
  const city = cityData?.name ?? params.city;
  const province = cityData?.province ?? "ON";
  const content = cityContent[params.city];
  const primaryAddress = Object.values(config.addresses)[0];

  const defaultBlurb = `${city} businesses rely on us for custom websites, local SEO, and digital marketing that drives real leads. We've served clients across ${province} and all of Canada — and we know what it takes to rank locally and convert visitors into customers.`;
  const blurb = content?.blurb ?? defaultBlurb;
  const facts = content?.facts ?? [`${city} businesses need fast, mobile-optimized websites to compete online`, "Local SEO puts you in front of customers actively searching for your services", "Google Business Profile optimization drives calls and map traffic", "All our sites are built with SEO and conversions as the primary goals"];
  const industries = content?.industries ?? ["Professional Services", "Healthcare", "Retail", "Trades & Construction", "Restaurants", "Technology"];
  const faq = content?.faq ?? [
    { q: `How long does it take to rank in ${city}?`, a: `Most ${city} businesses start seeing meaningful ranking movement within 60–90 days of launch with our full SEO program. Less competitive keywords often move faster.` },
    { q: "What's included in your website packages?", a: "All our packages include custom design, mobile optimization, SEO foundation setup, Google Analytics, and ongoing support. We never use templates — every site is built specifically for your business." },
    { q: `Do you serve businesses across ${province}?`, a: `Yes — we serve businesses across ${province} and all of Canada. While we have offices in Toronto and Brampton, we work remotely with clients from coast to coast.` },
  ];

  const services = [
    { title: "Web Design", desc: `Custom, conversion-focused websites built for ${city} businesses. Mobile-first, fast, and SEO-ready from day one.` },
    { title: "Local SEO", desc: `Rank on the first page of Google in ${city}. Local SEO strategies that drive real leads and phone calls.` },
    { title: "Digital Marketing", desc: `Full-service digital marketing in ${city} — social media, Google Ads, content, and more.` },
    { title: "Graphic Design", desc: `Logos, branding, and print collateral that make your ${city} business stand out from the crowd.` },
    { title: "Website Maintenance", desc: `Keep your site fast, secure, and up-to-date with our monthly maintenance packages.` },
    { title: "AI Consultation", desc: `Leverage AI tools to automate operations and grow your ${city} business smarter and faster.` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Locations", href: "/locations/toronto" }, { name: city, href: `/locations/${params.city}` }]} />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image src="/blog/web-design-company.png" alt={`Web design services for ${city} businesses`} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">{city}, {province} — {config.reviewCount}+ Five-Star Reviews</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5" style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}>
              Web Design in{" "}<span className="gradient-text-animated">{city}</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-8">
              Custom websites, local SEO & digital marketing for {city} businesses. Results guaranteed — or we keep working until you see them.
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
          </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm source={`location-${params.city}`} />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES GRID ─── */}
      <section className="py-14 relative" style={{ background: "#ffffff" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">What We Offer in {city}</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Everything Your {city} Business Needs to Grow Online</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {services.map((s, i) => (
              <div key={s.title}
                className="group bg-white rounded-2xl p-7 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-gray-900 font-black text-lg mb-2 group-hover:text-[#00AADF] transition-colors duration-200">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              {[{ value: `${config.reviewCount}+`, label: "Five-Star Reviews" }, { value: `${config.cities.length}+`, label: "Cities Served" }, { value: "100%", label: "Results Guaranteed" }].map((s) => (
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

      {/* ─── CITY CONTENT ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">About {city}</span>
              <h2 className="text-3xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.15 }}>
                Web Design & SEO for {city} Businesses
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{blurb}</p>
              <h3 className="text-xl font-black text-gray-900 mb-4">Industries We Serve in {city}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-gray-100"
                    style={{ boxShadow: "0 1px 6px rgba(0,0,0,0.04)" }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#00AADF" }} />
                    <span className="text-sm font-semibold text-gray-700">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal delay-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h3 className="text-gray-900 font-black text-xl mb-5">Why {city} Businesses Choose CWD</h3>
                <div className="space-y-4">
                  {facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                        style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon–Fri: 8:00 AM – 6:00 PM EST</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link href="/contact"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 hover:opacity-90"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}>
                    Get a Free {city} Quote
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="py-14" style={{ background: "#f8fafc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Pricing</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">{city} Web Design Packages</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto text-base">Transparent pricing — no hidden fees. Every package is built mobile-first and SEO-optimized from day one.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <p className="text-sm font-bold text-[#00AADF] tracking-widest uppercase mb-3">Starter</p>
              <p className="text-4xl font-black text-gray-900 mb-1">$299</p>
              <p className="text-gray-400 text-sm mb-6">One-time investment</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Up to 5 pages", "Mobile-responsive design", "On-page SEO basics", "Contact form", "Google Analytics setup", "3-week delivery"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00AADF] font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/contact" className="block mt-8 text-center py-3 rounded-xl border-2 border-[#00AADF] text-[#00AADF] font-bold text-sm hover:bg-[#00AADF] hover:text-white transition-all duration-200">Get Started</a>
            </div>
            <div className="rounded-2xl p-8 reveal text-white relative" style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)", boxShadow: "0 8px 32px rgba(0,170,223,0.35)" }}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
              <p className="text-sm font-bold tracking-widest uppercase mb-3 text-blue-100">Growth</p>
              <p className="text-4xl font-black mb-1">$599</p>
              <p className="text-blue-200 text-sm mb-1">Ongoing SEO available</p>
              <p className="text-blue-200 text-xs mb-6">One-time build + monthly retainer</p>
              <ul className="space-y-3 text-sm text-blue-50">
                {["Up to 12 pages", "Custom UI/UX design", "Full on-page & technical SEO", "Local SEO + Google Business Profile", "Monthly rank tracking & reporting", "Ongoing content updates"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-yellow-300 font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/contact" className="block mt-8 text-center py-3 rounded-xl bg-white text-[#003B6F] font-black text-sm hover:bg-blue-50 transition-all duration-200">Start Growing</a>
            </div>
            <div className="bg-white rounded-2xl p-8 reveal border border-gray-100" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <p className="text-sm font-bold text-[#00AADF] tracking-widest uppercase mb-3">Enterprise</p>
              <p className="text-4xl font-black text-gray-900 mb-1">Custom</p>
              <p className="text-gray-400 text-sm mb-6">Scoped to your goals</p>
              <ul className="space-y-3 text-sm text-gray-600">
                {["Unlimited pages", "E-commerce / booking systems", "Multi-location SEO strategy", "Custom integrations & APIs", "Dedicated account manager", "SLA-backed support"].map(f => (
                  <li key={f} className="flex items-center gap-2"><span className="text-[#00AADF] font-bold">✓</span>{f}</li>
                ))}
              </ul>
              <a href="/contact" className="block mt-8 text-center py-3 rounded-xl border-2 border-[#00AADF] text-[#00AADF] font-bold text-sm hover:bg-[#00AADF] hover:text-white transition-all duration-200">Let&apos;s Talk</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Timeline</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">What {city} SEO Looks Like Month by Month</h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">A realistic roadmap so you know exactly what to expect — from first audit to first-page rankings.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { month: "Month 1", title: "Foundation & Audit", desc: `Full technical SEO audit, keyword mapping tailored to ${city}&apos;s search landscape, Google Business Profile optimization, and citation cleanup.` },
              { month: "Months 2–3", title: "On-Page & Content", desc: "Optimized service and landing pages, schema markup for local business signals, and initial link outreach to relevant local publications and directories." },
              { month: "Months 3–6", title: "Authority Building", desc: `Guest posts, backlink acquisition from ${city}-region directories, and competitive gap analysis against top-ranking local competitors in your industry.` },
              { month: "Month 6+", title: "Rankings & ROI", desc: "First-page visibility for neighbourhood and service-area keywords. More competitive city-wide terms typically follow by months 9–12 with consistent execution." },
            ].map((t, i) => (
              <div key={i} className="reveal bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-sm font-black text-[#00AADF] uppercase tracking-widest mb-2">{t.month}</div>
                <h3 className="font-black text-gray-900 text-base mb-2">{t.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">FAQs</span>
            <h2 className="text-3xl font-black text-gray-900">Common Questions from {city} Businesses</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faq.map(({ q, a }, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-7 reveal border border-gray-100">
                <h3 className="font-black text-gray-900 text-lg mb-3">{q}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED CITIES ─── */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-5">Also serving across Canada — including our primary market:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {params.city !== "toronto" && (
              <Link
                href="/locations/toronto"
                className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
              >
                Web Design Toronto ↗
              </Link>
            )}
            {[
              { name: "Mississauga", slug: "mississauga" },
              { name: "Brampton", slug: "brampton" },
              { name: "Vancouver", slug: "vancouver" },
              { name: "Calgary", slug: "calgary" },
              { name: "Ottawa", slug: "ottawa" },
              { name: "Edmonton", slug: "edmonton" },
            ].filter((c) => c.slug !== params.city).map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="px-4 py-2 rounded-xl text-sm font-semibold text-[#00AADF] border border-[#00AADF]/30 hover:bg-[#00AADF] hover:text-white transition-all duration-200"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
        <Image src="/blog/seo-services-london-ontario.png" alt={`Grow your ${city} business online with Canadian Web Designs`} fill className="object-cover object-center" />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.92) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.80) 100%)" }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-black text-white mb-6 reveal" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Ready to Grow Your{" "}<span className="gradient-text-animated">{city} Business?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Free consultation, no commitment. We&apos;ll show you exactly how we&apos;ll get you more customers from Google.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}>
              Get Your Free Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
          </div>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": `https://${config.domain}/locations/${params.city}`,
          name: `${config.businessName} — ${city} Web Design`,
          description: `Professional web design, SEO, and digital marketing for businesses in ${city}, ${province}`,
          url: `https://${config.domain}/locations/${params.city}`,
          telephone: config.phone,
          email: config.emails.sales,
          areaServed: { "@type": "City", name: city, containedInPlace: { "@type": "AdministrativeArea", name: province } },
          address: primaryAddress ? {
            "@type": "PostalAddress",
            streetAddress: primaryAddress.street,
            addressLocality: primaryAddress.city,
            addressRegion: primaryAddress.province,
            postalCode: primaryAddress.postalCode,
            addressCountry: "CA",
          } : undefined,
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "18:00",
          },
          priceRange: "$$",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(config.rating),
            reviewCount: String(config.reviewCount),
          },
          sameAs: config.socialLinks.map((link) => link.href),
        }),
      }} />

      <QuoteFormSection source={`location-${params.city}`} mobileOnly />
    </>
  );
}
