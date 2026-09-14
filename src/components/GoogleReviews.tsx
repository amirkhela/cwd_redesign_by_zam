"use client";

import { useState } from "react";
import { getConfig } from "@/lib/client-config";
import { REVIEWS } from "@/lib/google-reviews";

const config = getConfig();

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?sca_esv=7cb5a2c0938f91b5&sxsrf=AE3TifNVRInV8cLPiyXZkNVTBmZTuDcI2A:1764181967881&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E4ANFCn-s5tGym7fWOnvrekDwyaJXe9kVmC58TfStVuDllEdaVzPCLJ_aF8sOGbdgqU6vBD-BTu76PcuUVcv8FswaRuJbmZU-tWhnw9EWY1PSSa3Ig%3D%3D&q=Canadian+Web+Designs+Reviews&sa=X&ved=2ahUKEwiT6Y78uZCRAxU4IDQIHTijNvcQ0bkNegQIMhAE&biw=1600&bih=732&dpr=1.2";

const AVATAR_COLORS = [
  "#4285F4",
  "#EA4335",
  "#34A853",
  "#FBBC05",
  "#FF6D00",
  "#9C27B0",
  "#0097A7",
  "#E91E63",
  "#00BCD4",
  "#FF5722",
];

// REVIEWS lives in src/lib/google-reviews.ts so /reviews quotes the same ten strings.

const CARD_WIDTH = 290;
const CARD_GAP = 20;
const CARDS_PER_VIEW = 4;
const STRIDE = CARD_WIDTH + CARD_GAP;
const MAX_INDEX = REVIEWS.length - CARDS_PER_VIEW;

function GoogleIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

function Stars({ size = 16 }: { size?: number }) {
  return (
    <div style={{ display: "flex", gap: 1 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#FBBC05" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, colorIdx }: { review: typeof REVIEWS[0]; colorIdx: number }) {
  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e8eaed",
        borderRadius: 12,
        padding: "20px",
        width: CARD_WIDTH,
      minWidth: CARD_WIDTH,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        boxShadow: "0 1px 3px rgba(60,64,67,0.08)",
      }}
    >
      {/* Avatar + name + Google icon */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: AVATAR_COLORS[colorIdx % AVATAR_COLORS.length],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              flexShrink: 0,
              letterSpacing: "0.5px",
            }}
          >
            {review.initials}
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: "#202124", lineHeight: 1.3 }}>
              {review.name}
            </p>
            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#70757a", lineHeight: 1.3 }}>
              {review.reviewCount} reviews
            </p>
          </div>
        </div>
        <GoogleIcon size={20} />
      </div>

      {/* Stars */}
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <Stars size={15} />
      </div>

      {/* Review text */}
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: "#3c4043",
          lineHeight: 1.65,
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 5,
          WebkitBoxOrient: "vertical" as const,
        }}
      >
        {review.text}
      </p>
    </div>
  );
}

export default function GoogleReviews() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(MAX_INDEX, i + 1));

  return (
    <section style={{ background: "#f8f9fa", padding: "80px 0" }}>
      <style>{`
        .cwd-g-nav:not(:disabled):hover {
          box-shadow: 0 2px 10px rgba(60,64,67,0.22) !important;
          border-color: #bdc1c6 !important;
        }
        .cwd-g-cta:hover {
          background: #f1f3f4 !important;
          box-shadow: 0 2px 8px rgba(60,64,67,0.14) !important;
        }
      `}</style>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <GoogleIcon size={30} />
            <span style={{ fontSize: 22, fontWeight: 700, color: "#202124", letterSpacing: "-0.01em" }}>
              Google Reviews
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <span style={{ fontSize: 48, fontWeight: 800, color: "#202124", lineHeight: 1 }}>4.9</span>
            <div style={{ textAlign: "left" }}>
              <Stars size={24} />
              <p style={{ margin: "5px 0 0", fontSize: 13, color: "#70757a" }}>
                Based on {config.reviewCount}+ reviews
              </p>
            </div>
          </div>
        </div>

        {/* Widget box */}
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid #dadce0",
            boxShadow: "0 1px 6px rgba(60,64,67,0.08), 0 4px 16px rgba(60,64,67,0.06)",
            padding: "28px 0 24px",
            position: "relative",
          }}
        >
          {/* Left arrow */}
          <button
            onClick={prev}
            disabled={index === 0}
            aria-label="Previous reviews"
            className="cwd-g-nav"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #dadce0",
              boxShadow: "0 1px 4px rgba(60,64,67,0.15)",
              cursor: index === 0 ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: index === 0 ? 0.38 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s, border-color 0.2s",
              outline: "none",
              padding: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          {/* Cards viewport */}
          <div style={{ overflow: "hidden", margin: "0 56px" }}>
            <div
              style={{
                display: "flex",
                gap: CARD_GAP,
                transform: `translateX(-${index * STRIDE}px)`,
                transition: "transform 0.42s cubic-bezier(0.4,0,0.2,1)",
                willChange: "transform",
              }}
            >
              {REVIEWS.map((review, i) => (
                <ReviewCard key={i} review={review} colorIdx={i} />
              ))}
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            disabled={index === MAX_INDEX}
            aria-label="Next reviews"
            className="cwd-g-nav"
            style={{
              position: "absolute",
              right: 14,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 10,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: "#fff",
              border: "1px solid #dadce0",
              boxShadow: "0 1px 4px rgba(60,64,67,0.15)",
              cursor: index === MAX_INDEX ? "default" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: index === MAX_INDEX ? 0.38 : 1,
              transition: "opacity 0.2s, box-shadow 0.2s, border-color 0.2s",
              outline: "none",
              padding: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#5f6368" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          {/* Page dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
            {Array.from({ length: Math.ceil(REVIEWS.length / CARDS_PER_VIEW) }).map((_, page) => {
              const targetIdx = Math.min(page * CARDS_PER_VIEW, MAX_INDEX);
              const activePage = Math.round(index / CARDS_PER_VIEW);
              const isActive = page === activePage;
              return (
                <button
                  key={page}
                  onClick={() => setIndex(targetIdx)}
                  aria-label={`Go to page ${page + 1}`}
                  style={{
                    width: isActive ? 20 : 8,
                    height: 8,
                    borderRadius: 4,
                    background: isActive ? "#4285F4" : "#dadce0",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    outline: "none",
                    transition: "width 0.3s, background 0.3s",
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 24 }}>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cwd-g-cta"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "11px 22px",
              borderRadius: 8,
              border: "1px solid #dadce0",
              background: "#fff",
              color: "#3c4043",
              fontWeight: 500,
              fontSize: 14,
              textDecoration: "none",
              boxShadow: "0 1px 3px rgba(60,64,67,0.08)",
              transition: "background 0.15s, box-shadow 0.15s",
            }}
          >
            <GoogleIcon size={18} />
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
