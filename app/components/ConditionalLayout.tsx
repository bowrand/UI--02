"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

/**
 * Conditionally renders website Header + Footer only on public routes.
 * Admin routes (/Mechadmin88dash, /admin) use their own layout.
 */
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() ?? "";
  const isAdmin =
    pathname.startsWith("/Mechadmin88dash") ||
    pathname.startsWith("/admin");

  if (isAdmin) {
    return <div className="flex-grow">{children}</div>;
  }

  return (
    <>
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </>
  );
}
