/**
 * The Google reviews this site quotes, moved out of GoogleReviews.tsx so that
 * the carousel and /reviews read ONE array. `text` is verbatim from the Google
 * listing -- never edited, never truncated; the carousel clamps lines with CSS,
 * it does not shorten the string. A paragraph break in a review is rendered as
 * one space, and that is the only difference.
 *
 * RE-READ WORD FOR WORD 2026-09-14 from Google's own full review text in the
 * Business Profile manager for the Toronto listing (cid 1764590269626849918).
 * The previous array had been tidied: commas added, the reviewers' own typos
 * corrected ("w websites", "streesed", "more then fair"), long reviews condensed,
 * a sentence one reviewer never wrote appended ("Great experience overall."), and
 * a review that is no longer on the listing kept. Names are as Google shows them
 * ("K", "Cristina carpio"). `reviewCount` is how many Google reviews that
 * reviewer has written, as shown the same day. There is deliberately no date
 * field: the old relative dates ("6 days ago") were frozen in May and read as
 * fresh for months.
 *
 * GOOGLE_PROFILE_URL is the public Maps place card (the cid), the same anchor
 * cwd-config.ts carries in `entityProfiles` and layout.tsx emits as sameAs.
 * It is NOT the Google search URL the carousel button opens, and it is NOT the
 * GBP dashboard id (see the note in cwd-config.ts: the dashboard id renders a
 * blank pin).
 */
export type GoogleReview = {
  name: string;
  initials: string;
  reviewCount: number;
  text: string;
};

export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=1764590269626849918";

export const REVIEWS: GoogleReview[] = [
  {
    name: "Amass Market Today",
    initials: "AM",
    reviewCount: 1,
    text: "Working with Zam was a great experience from start to finish. Communication was clear, responsive, and professional throughout the entire website project. They were cooperative, easy to work with, and helped make the process smooth and efficient. I truly appreciate the trust and collaboration, and I’d be happy to work with Zam again in the future.",
  },
  {
    name: "K",
    initials: "K",
    reviewCount: 1,
    text: "We chose to use Canada Web Design because they were easily contactable via phone and email. Our business was looking to create a business website and a logo. Ahmed was assigned to our project and he contacted us immediately, kept us up to date almost everyday, and asked all the questions one would expect to be asked when creating a multi page business website. The pricing was more then fair, well within what one would expect and to be very honest, much lower then I had budgeted for the project. But what did we get for the money?? Well we got a website that not only meet our needs fully but actually blew me away the first time I saw the finished project. Well above expectations. The logo design was top notch and several choices were given to us to choose the design that best met our needs. Hats off to Ahmed and the folks at Canadian Web Design. Could not be a happier customer then I am today. Looking forward to doing more business I'm the near future!! Would strongly recommend using these folks!",
  },
  {
    name: "Vibtthesh",
    initials: "V",
    reviewCount: 1,
    text: "Dear zam, Thank you for your help building my website! I'm so happy with how it turned out.",
  },
  {
    name: "Mai Abu-Taleb",
    initials: "MA",
    reviewCount: 29,
    text: "Zam did an excellent job building my website in a short period of time. Everything was completed exactly as requested, with great attention to detail and clear communication throughout. I’m very happy with the result and highly recommend their services!",
  },
  {
    name: "Justin Pham",
    initials: "JP",
    reviewCount: 6,
    text: "Got to work with a developer her name is Zam. She was amazing to work with. Keen eye for detail . Most impressive thing was with every request we had even if she didn’t know how to do it she found a solution. That was worth the experience.",
  },
  {
    name: "Cristina carpio",
    initials: "CC",
    reviewCount: 1,
    text: "I’ve really enjoyed working with Canadian Web Design. Zam is an absolute professional. She’s always prompt in answering questions, and any requests are handled quickly and efficiently. I truly appreciate their attention to detail and the high level of service they provide. I highly recommend Canadian Web Design to anyone looking for reliable, responsive, and top-quality work.",
  },
  {
    name: "Sean Samura",
    initials: "SS",
    reviewCount: 4,
    text: "I recently had the pleasure of using Zam Hareera of the Canadian Web Designs for my Websites, and I must say, she exceeded my expectations! The user interface is incredibly intuitive, making navigation a breeze. I found exactly what I was looking for in just a few clicks. The content is well-organized and informative, providing valuable insights that are easy to understand. I particularly appreciated the interactive tools, comprehensive resources and the Layout, which enhanced my learning experience. Customer support is also top-notch. I had a question regarding some concern, and Zam response was prompt and helpful. It’s clear that the she is dedicated in providing an excellent user experience. Overall, I highly recommend Zam of Canadian Web Designs to anyone looking for Website Design Hosting or Developing a website. It’s a fantastic Web Design Company that I will definitely be using again! Thank you Zam Hareera of Canadian Web Design",
  },
  {
    name: "Kebreab",
    initials: "K",
    reviewCount: 15,
    text: "John at Canadian Web Designs was referred by a friend who is also a contractor. They designed w websites for me and did a great job. We ran into a few issues during design which streesed me out but John and his team were always patient and available to address my concerns and issues.",
  },
  {
    name: "Nick Tsimidis",
    initials: "NT",
    reviewCount: 5,
    text: "Great work. Calm and patient",
  },
];
