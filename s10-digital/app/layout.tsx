import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "S10 Digital Solutions | AI-Powered Digital Services | Sri Lanka",
  description: "Transform your digital presence with AI-powered creativity. S10 Digital Solutions offers design, marketing, resume building, AI productivity tools, and web development services in Sri Lanka, serving clients worldwide.",
  keywords: "AI Digital Solutions, Web Development, Resume Builder, Digital Marketing, S10 Sri Lanka, Branding, Social Media, AI Automation, Website Design",
  authors: [{ name: "S10 Digital Solutions" }],
  openGraph: {
    title: "S10 Digital Solutions - AI-Powered Digital Services",
    description: "From stunning designs to smart automation — S10 Digital Solutions helps you grow, impress, and save time.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
