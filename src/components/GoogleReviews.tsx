import StarRating from "@/components/StarRating";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Canadian+Web+Designs/@43.657264,-79.4582459,17z/data=!4m8!3m7!1s0x882b35d0a8234b79:0x14ce8a76a14c2ae7!8m2!3d43.657264!4d-79.4582459!9m1!1b1";

const REVIEWS = [
  {
    name: "Sharanya K.",
    location: "Toronto, ON",
    initials: "SK",
    text: "Canadian Web Designs completely transformed our online presence. Professional, responsive, and delivered a stunning website that exceeded expectations. Our leads have increased significantly since launch!",
  },
  {
    name: "Shawn M.",
    location: "Brampton, ON",
    initials: "SM",
    text: "Best web design agency in Canada! They built our e-commerce site from scratch and the results have been incredible. The SEO work has us ranking on the first page of Google. Highly recommend.",
  },
  {
    name: "Dorota W.",
    location: "Mississauga, ON",
    initials: "DW",
    text: "I was blown away by the quality of work and speed of delivery. Canadian Web Designs understood our brand perfectly and created a website that truly represents who we are. Great value for money!",
  },
  {
    name: "Matthew R.",
    location: "Vancouver, BC",
    initials: "MR",
    text: "Working with Canadian Web Designs was a fantastic experience from start to finish. Their attention to detail and commitment to customer satisfaction is unmatched. Our business has dramatically improved.",
  },
  {
    name: "Priya S.",
    location: "Calgary, AB",
    initials: "PS",
    text: "Hired them for a full redesign and SEO package. Within 3 months our organic traffic doubled. The team communicates clearly and delivers on time. Best investment we've made for our business.",
  },
  {
    name: "James T.",
    location: "Ottawa, ON",
    initials: "JT",
    text: "Exceptional service and a beautiful final product. They took our old, outdated website and turned it into a modern, fast, mobile-friendly experience. Couldn't be happier with the results.",
  },
  {
    name: "Fatima A.",
    location: "Toronto, ON",
    initials: "FA",
    text: "The social media management they provide has been incredible. Our Instagram following grew by 400% in 6 months and we're getting real qualified leads. These guys actually know digital marketing.",
  },
  {
    name: "Carlos M.",
    location: "Edmonton, AB",
    initials: "CM",
    text: "From the initial consultation to launch, everything was smooth. The team really listened to what we wanted. Our website looks better than our competitors' and it converts visitors into clients.",
  },
  {
    name: "Jennifer L.",
    location: "Brampton, ON",
    initials: "JL",
    text: "We hired CWD for our restaurant's website and Google Ads campaign. The ads brought us 3x more reservations in the first month. Best investment we've made for our business by far!",
  },
  {
    name: "David K.",
    location: "Winnipeg, MB",
    initials: "DK",
    text: "Professional, prompt, and passionate about their craft. The logo design and branding package was exactly what I envisioned, delivered faster than expected. Our brand finally looks as premium as our service.",
  },
];

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div
      className="bg-white rounded-2xl p-8 card-hover shrink-0"
      style={{
        width: 340,
        boxShadow: "0 4px 24px rgba(0,170,223,0.07)",
      }}
    >
      <div
        className="text-6xl font-black leading-none mb-3"
        style={{ color: "rgba(0,170,223,0.15)" }}
      >
        &ldquo;
      </div>
      <StarRating rating={5} size="sm" />
      <blockquote className="text-dark leading-relaxed mt-4 mb-6 text-sm italic" style={{ color: "#18181b" }}>
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
          style={{ background: "linear-gradient(135deg, #00AADF, #0077B6)" }}
        >
          {review.initials}
        </div>
        <div>
          <p className="font-bold text-sm" style={{ color: "#18181b" }}>{review.name}</p>
          <p className="text-xs text-gray-400">{review.location}</p>
        </div>
      </div>
    </div>
  );
}

export default function GoogleReviews() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section style={{ background: "#f8f7fc" }} className="py-20">
      <style>{`
        @keyframes cwd-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cwd-reviews-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: cwd-scroll 60s linear infinite;
        }
        .cwd-reviews-track:hover { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .cwd-reviews-track { animation: none; }
        }
        .cwd-reviews-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 16px 32px;
          border: 2px solid #00AADF;
          color: #00AADF;
          font-weight: 700;
          border-radius: 12px;
          transition: all 0.3s;
          text-decoration: none;
          background: transparent;
        }
        .cwd-reviews-btn:hover {
          background: #00AADF;
          color: #fff;
        }
      `}</style>

      {/* Header — matches homepage testimonials section exactly */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span
            className="inline-block text-sm font-bold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#00AADF" }}
          >
            Reviews
          </span>
          <h2 className="text-4xl lg:text-5xl font-black mb-4" style={{ color: "#18181b" }}>
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-3">
            <StarRating rating={5} size="lg" />
            <span className="ml-1" style={{ color: "#52525b" }}>
              {config.rating}/5 from {config.reviewCount}+ verified reviews
            </span>
          </div>
        </div>
      </div>

      {/* Scrolling review cards */}
      <div style={{ overflow: "hidden", padding: "8px 0 16px" }}>
        <div className="cwd-reviews-track pl-6">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>

      {/* CTA — matches "View All Reviews" button style */}
      <div className="text-center mt-10 reveal">
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="cwd-reviews-btn"
        >
          See all reviews on Google
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    </section>
  );
}
