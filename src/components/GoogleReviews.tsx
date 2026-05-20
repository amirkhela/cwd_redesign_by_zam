const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Canadian+Web+Designs/@43.657264,-79.4582459,17z/data=!4m8!3m7!1s0x882b35d0a8234b79:0x14ce8a76a14c2ae7!8m2!3d43.657264!4d-79.4582459!9m1!1b1";

const REVIEWS = [
  {
    name: "Sharanya K.",
    location: "Toronto, ON",
    date: "2 months ago",
    text: "Canadian Web Designs completely transformed our online presence. The team was professional, responsive, and delivered a stunning website that exceeded our expectations. Our leads have increased significantly since launch!",
    color: "#7C3AED",
  },
  {
    name: "Shawn M.",
    location: "Brampton, ON",
    date: "3 months ago",
    text: "Best web design agency in Canada! They built our e-commerce site from scratch and the results have been incredible. The SEO work has us ranking on the first page of Google. Highly recommend.",
    color: "#0369A1",
  },
  {
    name: "Dorota W.",
    location: "Mississauga, ON",
    date: "1 month ago",
    text: "I was blown away by the quality of work and speed of delivery. Canadian Web Designs understood our brand perfectly and created a website that truly represents who we are. Great value for money!",
    color: "#B45309",
  },
  {
    name: "Matthew R.",
    location: "Vancouver, BC",
    date: "4 months ago",
    text: "Working with Canadian Web Designs was a fantastic experience from start to finish. Their attention to detail and commitment to customer satisfaction is unmatched. Our new website has dramatically improved our business.",
    color: "#065F46",
  },
  {
    name: "Priya S.",
    location: "Calgary, AB",
    date: "3 weeks ago",
    text: "Hired them for a full redesign and SEO package. Within 3 months our organic traffic doubled. The team communicates clearly and delivers on time. Honestly the best investment we've made for our business.",
    color: "#9D174D",
  },
  {
    name: "James T.",
    location: "Ottawa, ON",
    date: "5 months ago",
    text: "Exceptional service and a beautiful final product. They took our old, outdated website and turned it into a modern, fast, and mobile-friendly experience. Couldn't be happier with the results.",
    color: "#1E40AF",
  },
  {
    name: "Fatima A.",
    location: "Toronto, ON",
    date: "6 weeks ago",
    text: "The social media management they provide has been incredible. Our Instagram following grew by 400% in 6 months and we're getting real qualified leads from it. These guys actually know digital marketing.",
    color: "#7C3AED",
  },
  {
    name: "Carlos M.",
    location: "Edmonton, AB",
    date: "2 months ago",
    text: "From the initial consultation to launch, everything was smooth. The team really listened to what we wanted. Our website looks better than our competitors' and it converts visitors into clients.",
    color: "#0369A1",
  },
  {
    name: "Jennifer L.",
    location: "Brampton, ON",
    date: "1 month ago",
    text: "We hired CWD for our restaurant's website and Google Ads campaign. The ads brought us 3x more reservations in the first month. Best investment we've made for our business by far!",
    color: "#065F46",
  },
  {
    name: "David K.",
    location: "Winnipeg, MB",
    date: "7 weeks ago",
    text: "Professional, prompt, and passionate about their craft. The logo design and branding package was exactly what I envisioned, delivered faster than expected. Our brand finally looks as premium as our service.",
    color: "#B45309",
  },
  {
    name: "Amara O.",
    location: "Hamilton, ON",
    date: "5 weeks ago",
    text: "I needed a website for my healthcare practice and they delivered something truly professional — fast, accessible, and beautiful. My patients constantly comment on how easy the site is to use.",
    color: "#9D174D",
  },
  {
    name: "Michael B.",
    location: "Scarborough, ON",
    date: "3 months ago",
    text: "The website maintenance plan is worth every penny. They keep our site updated, secure, and running fast. Customer service is always responsive whenever we need changes. Truly a top-tier agency.",
    color: "#1E40AF",
  },
  {
    name: "Tanya S.",
    location: "North York, ON",
    date: "2 weeks ago",
    text: "We've worked with a few web agencies before but none compare to Canadian Web Designs. They actually care about your results, not just the deliverable. Our conversion rate increased by 60% within 90 days.",
    color: "#065F46",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#FBBC04">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 48 48" width="40" height="40">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function ReviewCard({ review }: { review: typeof REVIEWS[0] }) {
  return (
    <div
      style={{
        minWidth: 300,
        maxWidth: 300,
        background: "#ffffff",
        border: "1px solid #e8eef8",
        borderRadius: 16,
        padding: "20px 22px",
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            background: review.color,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 18,
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {review.name[0]}
        </div>
        <div>
          <p style={{ fontWeight: 700, fontSize: 14, color: "#111827", lineHeight: 1.3 }}>{review.name}</p>
          <p style={{ fontSize: 12, color: "#6B7280" }}>{review.location} · {review.date}</p>
        </div>
      </div>
      <Stars />
      <p style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.65 }}>{review.text}</p>
    </div>
  );
}

export default function GoogleReviews() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <section style={{ background: "#f8faff", borderTop: "1px solid #e8eef8", padding: "64px 0 56px" }}>
      <style>{`
        @keyframes cwd-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .cwd-reviews-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: cwd-scroll 55s linear infinite;
        }
        .cwd-reviews-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .cwd-reviews-track { animation: none; }
        }
        .cwd-reviews-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 10px;
          border: 2px solid #00AADF;
          color: #00AADF;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
          background: transparent;
        }
        .cwd-reviews-btn:hover {
          background: #00AADF;
          color: #fff;
        }
      `}</style>

      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <div className="flex items-center gap-4">
            <GoogleG />
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>
                Google Reviews
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: "#111827", lineHeight: 1 }}>4.9</span>
                <Stars />
                <span style={{ fontSize: 14, color: "#6B7280" }}>· 180+ reviews</span>
              </div>
            </div>
          </div>
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
      </div>

      {/* Scrolling ticker */}
      <div style={{ overflow: "hidden", padding: "8px 0" }}>
        <div className="cwd-reviews-track">
          {doubled.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
