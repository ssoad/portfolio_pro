import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getPortfolioConfig } from "@/hooks/usePortfolioConfig";

const config = getPortfolioConfig();

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: config.settings.seo.title,
  description: config.settings.seo.description,
  keywords: config.settings.seo.keywords,
  authors: [{ name: config.personal.name }],
  creator: config.personal.name,
  openGraph: {
    title: config.settings.seo.title,
    description: config.settings.seo.description,
    url: config.contact.social.website,
    siteName: `${config.personal.name} Portfolio`,
    images: [
      {
        url: config.settings.seo.ogImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.settings.seo.title,
    description: config.settings.seo.description,
    images: [config.settings.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
