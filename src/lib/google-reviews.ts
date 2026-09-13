/**
 * The ten Google reviews this site quotes, moved out of GoogleReviews.tsx so
 * that the carousel and /reviews read ONE array. `text` is verbatim from the
 * Google listing -- never edited, never truncated; the carousel clamps lines
 * with CSS, it does not shorten the string.
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
  time: string;
  text: string;
};

export const GOOGLE_PROFILE_URL = "https://maps.google.com/?cid=1764590269626849918";

export const REVIEWS: GoogleReview[] = [
  {
    name: "Amass Market Today",
    initials: "AM",
    reviewCount: 1,
    time: "6 days ago",
    text: "Working with Zam was a great experience from start to finish. Communication was clear, responsive, and professional throughout the entire website project. They were cooperative, easy to work with, and helped make the process smooth and efficient. I truly appreciate the trust and collaboration, and I'd be happy to work with Zam again in the future.",
  },
  {
    name: "K.",
    initials: "K",
    reviewCount: 1,
    time: "1 week ago",
    text: "We chose to use Canada Web Design because they were easily contactable via phone and email. Ahmed was assigned to our project and he contacted us immediately, kept us up to date almost everyday, and asked all the right questions. The pricing was more than fair — much lower than I had budgeted. But the website not only met our needs fully, it actually blew me away the first time I saw the finished project. Well above expectations. The logo design was top notch. Hats off to Ahmed and the folks at Canadian Web Design!",
  },
  {
    name: "Mohamad Harb",
    initials: "MH",
    reviewCount: 7,
    time: "4 weeks ago",
    text: "I had a great experience working with this company. Zam, the website developer, was patient, attentive, and delivered exactly what I needed for both of my websites.",
  },
  {
    name: "Vibtthesh",
    initials: "V",
    reviewCount: 1,
    time: "2 months ago",
    text: "Thank you for your help building my website! I'm so happy with how it turned out.",
  },
  {
    name: "Mai Abu-Taleb",
    initials: "MA",
    reviewCount: 27,
    time: "4 months ago",
    text: "Zam did an excellent job building my website in a short period of time. Everything was completed exactly as requested, with great attention to detail and clear communication throughout. I'm very happy with the result and highly recommend their services!",
  },
  {
    name: "Justin Pham",
    initials: "JP",
    reviewCount: 6,
    time: "6 months ago",
    text: "Got to work with a developer, her name is Zam. She was amazing to work with. Keen eye for detail. Most impressive thing was with every request we had, even if she didn't know how to do it, she found a solution. That was worth the experience.",
  },
  {
    name: "Cristina Carpio",
    initials: "CC",
    reviewCount: 1,
    time: "7 months ago",
    text: "I've really enjoyed working with Canadian Web Design. Zam is an absolute professional. She's always prompt in answering questions, and any requests are handled quickly and efficiently. I truly appreciate their attention to detail and the high level of service they provide. I highly recommend Canadian Web Design to anyone looking for reliable, responsive, and top-quality work.",
  },
  {
    name: "Sean Samura",
    initials: "SS",
    reviewCount: 4,
    time: "7 months ago",
    text: "I recently had the pleasure of using Zam Hareera of Canadian Web Designs for my websites, and I must say, she exceeded my expectations! The user interface is incredibly intuitive. Customer support is also top-notch — Zam's response was prompt and helpful. It's clear that she is dedicated to providing an excellent user experience. I highly recommend Canadian Web Designs to anyone looking for website design or development!",
  },
  {
    name: "Kebreab",
    initials: "K",
    reviewCount: 12,
    time: "7 months ago",
    text: "John at Canadian Web Designs was referred by a friend who is also a contractor. They designed websites for me and did a great job. We ran into a few issues during design which stressed me out, but John and his team were always patient and available to address my concerns. Great experience overall.",
  },
  {
    name: "Nick Tsimidis",
    initials: "NT",
    reviewCount: 5,
    time: "9 months ago",
    text: "Great work. Calm and patient.",
  },
];
