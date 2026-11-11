// Desktop mega-menu panels (and grouped mobile menu), keyed by the top-level
// nav label in cwd-config `navigation`. A top-level item with children but no
// entry here falls back to the plain dropdown in Header.tsx.

export interface MegaLink {
  label: string;
  href: string;
  /** Styled as a "see all" link at the bottom of a column. */
  all?: boolean;
}

export interface MegaColumn {
  heading: string;
  href?: string;
  links: MegaLink[];
}

export interface MegaPanel {
  /** "wide" = full-width panel (4 columns), "compact" = narrow 2-column panel. */
  size: "wide" | "compact";
  columns: MegaColumn[];
  promo: {
    icon: "browser" | "star" | "tag";
    text: string;
    cta: { label: string; href: string };
  };
}

export const megaMenu: Record<string, MegaPanel> = {
  "Who We Are": {
    size: "compact",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "Who We Are", href: "/who-we-are" },
          { label: "Our Story", href: "/our-story" },
          { label: "Careers", href: "/careers" },
          { label: "FAQ", href: "/faq" },
        ],
      },
      {
        heading: "Our Work",
        links: [
          { label: "Portfolio", href: "/portfolio" },
          { label: "Reviews", href: "/reviews" },
          { label: "Testimonials", href: "/testimonials" },
          { label: "Blog", href: "/blog" },
        ],
      },
    ],
    promo: {
      icon: "star",
      text: "Built in Toronto. Trusted across Canada.",
      cta: { label: "Meet the Team", href: "/who-we-are" },
    },
  },
  "What We Do": {
    size: "wide",
    columns: [
      {
        heading: "Web Design",
        href: "/services/web-design-development",
        links: [
          { label: "Web Design & Development", href: "/services/web-design-development" },
          { label: "WordPress Website Design", href: "/services/wordpress-website-design" },
          { label: "Shopify Website Design", href: "/services/shopify-website-design" },
          { label: "Wix Website Design", href: "/services/wix-website-design" },
          { label: "eCommerce Website Design", href: "/ecommerce-website-design-toronto" },
          { label: "Web App Development", href: "/services/web-app-development" },
          { label: "Website Maintenance", href: "/services/website-maintenance" },
        ],
      },
      {
        heading: "SEO & Marketing",
        href: "/services/seo",
        links: [
          { label: "Search Engine Optimization", href: "/services/seo" },
          { label: "Google Ads Management", href: "/services/google-ads-management" },
          { label: "Social Media Optimization", href: "/services/social-media-optimization" },
          { label: "Graphic Design", href: "/services/graphic-design" },
          { label: "App Development", href: "/services/app-development" },
          { label: "AI Consultation", href: "/services/ai-consultation" },
        ],
      },
      {
        heading: "Industries",
        href: "/industries",
        links: [
          { label: "Dentists", href: "/web-design-for-dentists" },
          { label: "Medical Clinics", href: "/web-design-for-medical-clinics" },
          { label: "Lawyers", href: "/web-design-for-lawyers" },
          { label: "Contractors", href: "/web-design-for-contractors" },
          { label: "Realtors", href: "/web-design-for-realtors" },
          { label: "Restaurants", href: "/web-design-for-restaurants" },
          { label: "All industries", href: "/industries", all: true },
        ],
      },
      {
        heading: "Locations",
        href: "/web-design-company",
        links: [
          { label: "Web Design Company Canada", href: "/web-design-company" },
          { label: "Toronto", href: "/locations/toronto" },
          { label: "Mississauga", href: "/locations/mississauga" },
          { label: "Brampton", href: "/locations/brampton" },
          { label: "Vaughan", href: "/locations/vaughan" },
          { label: "Ottawa", href: "/locations/ottawa" },
          { label: "Vancouver", href: "/locations/vancouver" },
          { label: "SEO by city", href: "/seo", all: true },
        ],
      },
    ],
    promo: {
      icon: "browser",
      text: "Start your new website with us",
      cta: { label: "Get a Free Quote", href: "/contact" },
    },
  },
  Pricing: {
    size: "compact",
    columns: [
      {
        heading: "Packages",
        links: [
          { label: "Web Design Packages", href: "/web-design-packages" },
          { label: "SEO Packages", href: "/seo-packages" },
          { label: "Maintenance Plans", href: "/maintenance" },
        ],
      },
      {
        heading: "Compare",
        links: [
          { label: "Agency vs Freelancer", href: "/agency-vs-freelancer" },
          { label: "Wix Alternative", href: "/wix-alternative" },
          { label: "Squarespace Alternative", href: "/squarespace-alternative" },
          { label: "GoDaddy Builder Alternative", href: "/godaddy-website-builder-alternative" },
        ],
      },
    ],
    promo: {
      icon: "tag",
      text: "Not sure which package fits?",
      cta: { label: "Ask Us", href: "/contact" },
    },
  },
};
