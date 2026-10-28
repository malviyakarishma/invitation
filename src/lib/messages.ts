export const CHAOS_MESSAGES = [
  "Hydrate. Then hydrate again.",
  "Your dance move just became lore.",
  "The snacks called. They're waiting.",
  "Find the weirdest song. Claim it.",
  "Nobody remembers the quiet nights.",
  "Make eye contact. Then make a memory.",
  "Leave room for dessert and chaos.",
  "This is your official permission to glow.",
  "Whisper a secret. Or yell a chorus.",
  "The night is short. The playlist is long.",
] as const;

export const EVENT = {
  name: "SWIG — Diwali Night",
  shortName: "SWIG NIGHT",
  edition: "Diwali Edition",
  dateLong: "Sunday, 8 November 2026",
  dateShort: "8 NOVEMBER 2026",
  time: "9:00 PM onwards",
  timeShort: "9 PM",
  location: "B-10, Harbholenath Society",
  mapsQuery: "B-10, Harbholenath Society",
} as const;

/** UPI payment — QR is generated with this amount when scanned. */
export const PAYMENT = {
  upiId: "8849741801@kotakbank",
  payeeName: "KARISHMA JITENDRA MALVIYA",
  note: "SWIG Diwali Night",
  /** Fixed amount in INR shown in UPI apps when scanned */
  amount: "600",
  label: "Scan to pay · ₹600",
} as const;

export function buildUpiUri() {
  if (!PAYMENT.upiId) return "";
  const params = new URLSearchParams({
    pa: PAYMENT.upiId,
    pn: PAYMENT.payeeName,
    cu: "INR",
    tn: PAYMENT.note,
  });
  if (PAYMENT.amount) params.set("am", PAYMENT.amount);
  return `upi://pay?${params.toString()}`;
}
