import type { Metadata, Viewport } from "next";
import { Elms_Sans, Geist_Mono } from "next/font/google";
import { SITE, SITE_URL } from "./_lib/site";
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

// opengraph-image.tsx supplies og:image/twitter:image for every route.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE.title, template: `%s — ${SITE.name}` },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  category: "Lifestyle",
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico", apple: SITE.logo },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: "en_US",
    url: "/",
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#F2F2F5",
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
