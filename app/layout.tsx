import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "양이수 (Isu Yang) | AI Engineer Portfolio",
  description:
    "AI developer portfolio focused on LLM products, practical engineering, and measurable outcomes.",
  metadataBase: new URL("https://portfolio-tau-black-70.vercel.app"),
  openGraph: {
    title: "양이수 (Isu Yang) | AI Engineer Portfolio",
    description:
      "AI developer portfolio focused on LLM products, practical engineering, and measurable outcomes.",
    url: "https://portfolio-tau-black-70.vercel.app",
    siteName: "Isu Yang Portfolio",
    images: [
      {
        url: "/opengraph-image?v=3",
        width: 1200,
        height: 630,
        alt: "Isu Yang AI Engineer Portfolio Preview",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "양이수 (Isu Yang) | AI Engineer Portfolio",
    description:
      "AI developer portfolio focused on LLM products, practical engineering, and measurable outcomes.",
    images: ["/opengraph-image?v=3"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
