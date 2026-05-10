import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export const metadata: Metadata = {
  title: "WebMint.dev | Full-Stack Development & SEO Agency",
  description:
    "Premium full-stack development and SEO services. We build high-performance web applications with JavaScript, Java, FlutterFlow, and optimize your digital presence for maximum growth.",
  keywords: [
    "web development",
    "SEO",
    "full-stack",
    "JavaScript",
    "Next.js",
    "Java",
    "FlutterFlow",
    "Shopify",
    "e-commerce",
  ],
  generator: "v0.app",
  openGraph: {
    title: "WebMint.dev | Full-Stack Development & SEO Agency",
    description:
      "Give your code a fresh start. Premium full-stack development and SEO services.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0F14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
