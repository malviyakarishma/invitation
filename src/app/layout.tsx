import type { Metadata } from "next";
import { Anton, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SWIG Night — Diwali Edition",
  description:
    "A little festive. A little feral. A whole lot of SWIG. Diwali Night on 8 November 2026 at 9 PM.",
  openGraph: {
    title: "SWIG Night — Diwali Edition",
    description:
      "Good people. Loud music. Questionable dance moves. 8 November 2026 · 9 PM.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#25144F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full font-body">{children}</body>
    </html>
  );
}
