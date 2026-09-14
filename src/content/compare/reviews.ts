import type { QuotedReview, ReviewsPage } from "./types";
import { REVIEWS } from "@/lib/google-reviews";

/**
 * /reviews -- the Google reviews the site quotes, word for word.
 *
 * The strings come from src/lib/google-reviews.ts so this page and the
 * carousel can never drift apart. Google does not give us a per-review deep
 * link for this listing, so every quote points at the business's public Maps
 * place card (the cid, verified in a browser 2026-09-05 -- see cwd-config.ts).
 * That source is checked by a person, not a robot: Maps is JS-rendered and a
 * plain fetch cannot see the reviews.
 *
 * RE-CHECKED 2026-09-14 AGAINST GOOGLE'S OWN FULL REVIEW TEXT, and the first
 * version failed: seven of the ten quotes had been tidied -- commas added,
 * typos corrected, long reviews condensed, one sentence the reviewer never wrote
 * appended -- and one review was no longer on the listing at all. The nine that
 * remain are Google's text exactly (see google-reviews.ts), all on the Toronto
 * listing; the Brampton listing has no reviews.
 *
 * No score and no count live here. The rating is Google's to state; this page
 * links to the listing rather than restating it.
 */
export const REVIEWS_PAGE: ReviewsPage = {
  kind: "reviews",
  slug: "reviews",
  h1: "Canadian Web Designs reviews, quoted word for word",
  metaTitle: "Client Reviews, Quoted Word for Word | Canadian Web Designs",
  metaDescription:
    "Google reviews of Canadian Web Designs, quoted word for word with the reviewer's name and a link to the listing they were left on. Nothing edited, nothing trimmed.",
  intro:
    "These are real Google reviews left by clients of Canadian Web Designs, reproduced exactly as they were written. We have not edited, shortened or reordered the wording. Each one links to the Google listing it was left on so you can read it there, alongside every other review we have received.",
  profileUrl: "https://maps.google.com/?cid=1764590269626849918",
  reviews: REVIEWS.map((r): QuotedReview => ({
    author: r.name,
    text: r.text,
    source: { platform: "google", url: "https://maps.google.com/?cid=1764590269626849918", checkedOn: "2026-09-14" },
    context: "web-design",
  })),
  faqs: [
    {
      q: "Are these reviews edited?",
      a: "No. Each review is quoted exactly as the client wrote it on Google, including their punctuation and the way they spelled our name. We do not shorten them, and we do not pick out a flattering sentence and drop the rest.",
    },
    {
      q: "Why is there no star score with these quotes?",
      a: "Because the score belongs to Google, not to us. It changes as reviews come in, and a number typed onto our own page could quietly fall out of date. The link above opens our Google listing, where the current score, the review count and every review are shown by Google itself.",
    },
    {
      q: "Where do these reviews come from?",
      a: "All nine are from our Google Business Profile for Toronto. We chose Google because it is a platform we do not control: we cannot remove a review we dislike, and a reviewer has to hold a Google account to leave one.",
    },
    {
      q: "How do I leave a review?",
      a: "Open our Google listing from the link on this page and choose Write a review. If something went wrong with your project, we would rather hear it directly first, but we will never ask you to soften what you write.",
    },
  ],
  reviewedOn: "2026-09-14",
};
