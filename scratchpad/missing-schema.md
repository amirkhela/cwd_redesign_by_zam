# Missing schema blocks - canadianwebdesigns.ca

All blocks are minified single line, plain ASCII, no priceRange, no smart quotes, 'and' instead of '&'.
Each goes in a <script type="application/ld+json"> tag.

## 1. SITEWIDE - base layout (every page, replaces the current LocalBusiness + WebSite + generic Service blocks)

Fixed ids: https://canadianwebdesigns.ca/#organization and https://canadianwebdesigns.ca/#website. Everything else references these two.

```
{"@context":"https://schema.org","@graph":[{"@type":["Organization","LocalBusiness","ProfessionalService"],"@id":"https://canadianwebdesigns.ca/#organization","name":"Canadian Web Designs","url":"https://canadianwebdesigns.ca","logo":"https://canadianwebdesigns.ca/logos/logo.webp","image":"https://canadianwebdesigns.ca/images/hero-leading-web-design.jpg","description":"Canadian Web Designs is Toronto's top-rated web design agency offering custom websites, local SEO, Google Ads, graphic design, social media, and AI consultation for businesses across Canada.","telephone":"647-689-6069","email":"support@canadianwebdesigns.ca","hasMap":"https://www.google.com/maps/search/Canadian+Web+Designs+Toronto","contactPoint":{"@type":"ContactPoint","telephone":"647-689-6069","contactType":"customer service","areaServed":"CA","availableLanguage":"English"},"address":{"@type":"PostalAddress","streetAddress":"2967 Dundas St W #718","addressLocality":"Toronto","addressRegion":"ON","postalCode":"M6P 1Z2","addressCountry":"CA"},"geo":{"@type":"GeoCoordinates","latitude":43.6532,"longitude":-79.3832},"branchLocation":{"@type":"LocalBusiness","name":"Canadian Web Designs - Brampton","address":{"@type":"PostalAddress","streetAddress":"5 Cherrycrest Drive #202","addressLocality":"Brampton","addressRegion":"ON","postalCode":"L6P 3W4","addressCountry":"CA"}},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday"],"opens":"08:00","closes":"18:00"}],"aggregateRating":{"@type":"AggregateRating","ratingValue":"4.9","reviewCount":"200","bestRating":"5","worstRating":"1"},"founder":{"@type":"Person","name":"Amir Khela"},"foundingDate":"2014","numberOfEmployees":{"@type":"QuantitativeValue","value":25},"sameAs":["https://facebook.com/canadianwebdesigns","https://instagram.com/canadianwebdesigns","https://youtube.com/canadianwebdesigns","https://x.com/canadianwebdesigns","https://linkedin.com/company/canadianwebdesigns","https://amazon.com/author/canadianwebdesigns"],"areaServed":[{"@type":"City","name":"Toronto"},{"@type":"City","name":"North York"},{"@type":"City","name":"Scarborough"},{"@type":"City","name":"Etobicoke"},{"@type":"City","name":"Brampton"},{"@type":"City","name":"Mississauga"},{"@type":"City","name":"Vancouver"},{"@type":"City","name":"Calgary"},{"@type":"AdministrativeArea","name":"Canada"}]},{"@type":"WebSite","@id":"https://canadianwebdesigns.ca/#website","name":"Canadian Web Designs","url":"https://canadianwebdesigns.ca/","publisher":{"@id":"https://canadianwebdesigns.ca/#organization"},"potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://canadianwebdesigns.ca/blog?q={search_term_string}"},"query-input":"required name=search_term_string"}}]}
```

## 2. PER PAGE - WebPage node with the correct subtype, referencing the fixed ids

### /  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/#webpage","url":"https://canadianwebdesigns.ca/","name":"Canadian Web Designs - Web Design and Digital Marketing Agency","description":"Custom web design, local SEO, Google Ads, graphic design and AI consultation for businesses across Canada.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /who-we-are  (AboutPage)
```
{"@context":"https://schema.org","@type":"AboutPage","@id":"https://canadianwebdesigns.ca/who-we-are#webpage","url":"https://canadianwebdesigns.ca/who-we-are","name":"Who We Are - Canadian Web Designs","description":"Meet the team behind Canadian Web Designs, a Toronto based web design and digital marketing agency serving businesses across Canada.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /our-story  (AboutPage)
```
{"@context":"https://schema.org","@type":"AboutPage","@id":"https://canadianwebdesigns.ca/our-story#webpage","url":"https://canadianwebdesigns.ca/our-story","name":"Our Story - Canadian Web Designs","description":"How Canadian Web Designs grew into one of Canada's top rated web design and SEO agencies.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /contact  (ContactPage)
```
{"@context":"https://schema.org","@type":"ContactPage","@id":"https://canadianwebdesigns.ca/contact#webpage","url":"https://canadianwebdesigns.ca/contact","name":"Contact Canadian Web Designs","description":"Get a free quote for web design, SEO or digital marketing. Call 647-689-6069 or send us a message.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /portfolio  (CollectionPage)
```
{"@context":"https://schema.org","@type":"CollectionPage","@id":"https://canadianwebdesigns.ca/portfolio#webpage","url":"https://canadianwebdesigns.ca/portfolio","name":"Portfolio - Canadian Web Designs","description":"Recent web design and development projects delivered for Canadian businesses.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /testimonials  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/testimonials#webpage","url":"https://canadianwebdesigns.ca/testimonials","name":"Testimonials - Canadian Web Designs","description":"Reviews from Canadian businesses that trust Canadian Web Designs with their websites and SEO.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /careers  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/careers#webpage","url":"https://canadianwebdesigns.ca/careers","name":"Careers at Canadian Web Designs","description":"Open remote roles in web design, development, SEO and marketing at Canadian Web Designs.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /faq  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/faq#webpage","url":"https://canadianwebdesigns.ca/faq","name":"FAQ - Canadian Web Designs","description":"Answers to common questions about our web design, SEO and digital marketing services.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /maintenance  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/maintenance#webpage","url":"https://canadianwebdesigns.ca/maintenance","name":"Website Maintenance Services","description":"Ongoing website maintenance, updates, security and support plans for Canadian businesses.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /web-design-company  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/web-design-company#webpage","url":"https://canadianwebdesigns.ca/web-design-company","name":"Web Design Company in Canada","description":"Why Canadian businesses choose Canadian Web Designs as their web design company.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /web-design-agency  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/web-design-agency#webpage","url":"https://canadianwebdesigns.ca/web-design-agency","name":"Web Design Agency in Canada","description":"Full service web design agency building fast, SEO ready websites for Canadian businesses.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /web-designers-near-me  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/web-designers-near-me#webpage","url":"https://canadianwebdesigns.ca/web-designers-near-me","name":"Web Designers Near Me","description":"Local web designers serving Toronto, the GTA and cities across Canada.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /mobile-web-design-in-toronto  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/mobile-web-design-in-toronto#webpage","url":"https://canadianwebdesigns.ca/mobile-web-design-in-toronto","name":"Mobile Web Design in Toronto","description":"Mobile first web design services for Toronto businesses.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /ecommerce-website-design-toronto  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/ecommerce-website-design-toronto#webpage","url":"https://canadianwebdesigns.ca/ecommerce-website-design-toronto","name":"eCommerce Website Design Toronto","description":"Online store design and development for Toronto and GTA businesses.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /seo  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/seo#webpage","url":"https://canadianwebdesigns.ca/seo","name":"SEO Services - Canadian Web Designs","description":"Local SEO, technical SEO and content strategy that puts Canadian businesses on page one.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /sitemap  (WebPage)
```
{"@context":"https://schema.org","@type":"WebPage","@id":"https://canadianwebdesigns.ca/sitemap#webpage","url":"https://canadianwebdesigns.ca/sitemap","name":"Sitemap - Canadian Web Designs","description":"Every page on the Canadian Web Designs site in one place.","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /services/<slug>  (Service + WebPage) - template, one per service page
```
{"@context":"https://schema.org","@graph":[{"@type":"Service","@id":"https://canadianwebdesigns.ca/services/<SLUG>#service","name":"<SERVICE TITLE, 'and' not '&'>","description":"<SERVICE DESCRIPTION>","provider":{"@id":"https://canadianwebdesigns.ca/#organization"},"areaServed":"Canada","url":"https://canadianwebdesigns.ca/services/<SLUG>"},{"@type":"WebPage","@id":"https://canadianwebdesigns.ca/services/<SLUG>#webpage","url":"https://canadianwebdesigns.ca/services/<SLUG>","name":"<PAGE TITLE>","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/services/<SLUG>#service"},"inLanguage":"en-CA"}]}
```

### /locations/<city>  (LocalBusiness branch + WebPage) - template
```
{"@context":"https://schema.org","@graph":[{"@type":["LocalBusiness","ProfessionalService"],"@id":"https://canadianwebdesigns.ca/locations/<CITY>#business","name":"Canadian Web Designs - <CITY NAME> Web Design","parentOrganization":{"@id":"https://canadianwebdesigns.ca/#organization"},"url":"https://canadianwebdesigns.ca/locations/<CITY>","telephone":"647-689-6069","areaServed":{"@type":"City","name":"<CITY NAME>"}},{"@type":"WebPage","@id":"https://canadianwebdesigns.ca/locations/<CITY>#webpage","url":"https://canadianwebdesigns.ca/locations/<CITY>","name":"Web Design <CITY NAME>","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/locations/<CITY>#business"},"inLanguage":"en-CA"}]}
```

### /blog and /blog/<category>  (CollectionPage) - already present; add the id references
```
{"@context":"https://schema.org","@type":"CollectionPage","@id":"https://canadianwebdesigns.ca/blog#webpage","url":"https://canadianwebdesigns.ca/blog","name":"Blog - Canadian Web Designs","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"},"about":{"@id":"https://canadianwebdesigns.ca/#organization"},"inLanguage":"en-CA"}
```

### /blog/<slug>  (BlogPosting) - template; posts already have BlogPosting, change publisher and add isPartOf so they reference the fixed ids
```
{"@context":"https://schema.org","@type":"BlogPosting","@id":"https://canadianwebdesigns.ca/blog/<SLUG>#article","headline":"<POST TITLE>","image":"<POST IMAGE URL>","datePublished":"<YYYY-MM-DD>","dateModified":"<YYYY-MM-DD>","author":{"@type":"Person","name":"Amir Khela"},"publisher":{"@id":"https://canadianwebdesigns.ca/#organization"},"mainEntityOfPage":{"@type":"WebPage","@id":"https://canadianwebdesigns.ca/blog/<SLUG>","isPartOf":{"@id":"https://canadianwebdesigns.ca/#website"}},"inLanguage":"en-CA"}
```
