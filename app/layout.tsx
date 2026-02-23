import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MR.Mech | Calgary's Trusted Mobile Mechanic",
  description: "Fully certified mobile mechanic in Calgary, Alberta. We fix your car at your home or workplace. Transparent pricing, zero hassle. Call David now!",
  keywords: ["Mobile Mechanic Calgary", "Auto Repair at Home", "MR.Mech", "Calgary Mechanic", "Mobile Auto Repair"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#F5F5F7] text-[#1D1D1F]`}
      >
        {children}
      </body>
    </html>
  );
}
