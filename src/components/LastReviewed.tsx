/**
 * The "Last reviewed" stamp every bottom-of-funnel page carries.
 *
 * `data-reviewed-on` carries the ISO date itself, so the cross-repo refresh job
 * can read it off the LIVE page as an attribute and compare it with the data
 * file's `reviewedOn` without parsing prose; the sentence beside it
 * is the promise that date makes. Month names are spelled out here rather than
 * via toLocaleDateString so the server and the client render one string.
 */
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export function formatReviewedOn(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  return `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}`;
}

export default function LastReviewed({
  reviewedOn,
  note = "Every claim about another product on this page was re-checked against its source on this date.",
}: {
  reviewedOn: string;
  note?: string;
}) {
  return (
    <p className="text-xs text-gray-500 leading-relaxed">
      <time dateTime={reviewedOn} data-reviewed-on={reviewedOn} className="font-semibold text-gray-700">
        Last reviewed {formatReviewedOn(reviewedOn)}
      </time>
      {" — "}
      {note}
    </p>
  );
}
