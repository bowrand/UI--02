import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MR.Mech | Calgary's #1 Mobile Mechanic — We Come to You",
  description: "Red Seal certified mobile mechanic serving Calgary, Airdrie, Okotoks, and Chestermere. Brake repairs, diagnostics, alternators & more at your home or office. 12-month warranty. Same-day service. Call David now!",
  keywords: ["Mobile Mechanic Calgary", "Auto Repair at Home Calgary", "MR.Mech", "Calgary Mobile Mechanic", "Mobile Auto Repair Calgary", "Mobile Car Repair Near Me", "Emergency Mechanic Calgary", "Mobile Mechanic Airdrie", "Mobile Mechanic Okotoks", "Mobile Mechanic Chestermere"],
  metadataBase: new URL("https://mrmech.ca"),
  alternates: {
    canonical: "https://mrmech.ca",
  },
  openGraph: {
    title: "MR.Mech | Calgary's #1 Mobile Mechanic",
    description: "Red Seal certified mobile mechanic. We come to your home or office in Calgary and surrounding areas. Transparent pricing, 12-month warranty. Book same-day service now!",
    url: "https://mrmech.ca",
    siteName: "MR.Mech",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MR.Mech — Calgary's Trusted Mobile Mechanic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MR.Mech | Calgary's #1 Mobile Mechanic",
    description: "Red Seal certified mobile mechanic. We come to you. Same-day service in Calgary.",
    images: ["/og-image.png"],
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

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FF9500",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#F5F5F7] text-[#1D1D1F] flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
