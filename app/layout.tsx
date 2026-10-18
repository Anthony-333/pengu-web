import type { Metadata } from "next";
import { Elms_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

// Elms Sans is the app's own typeface, so the site reads as the same product.
const elmsSans = Elms_Sans({
  variable: "--font-elms",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pengu — Co-parenting, made calmer",
  description:
    "One app for the custody calendar, shared expenses, handover notes and family memories. Two homes, one nest.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${elmsSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-canvas text-ink">{children}</body>
    </html>
  );
}
