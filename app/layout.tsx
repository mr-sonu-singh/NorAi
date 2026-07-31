import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore: side-effect import for global CSS
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "NorAI Technologies — Smart AI Micro-SaaS Utilities",
  description:
    "We build AI Tools, AI Chatbots, AI Websites, AI Videos, Product Ads, Logo & Brand Design, and Business Automation to save time and grow your business.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
