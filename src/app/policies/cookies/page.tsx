'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import CookieSection from "@/components/CookieSection"
import Footer from "@/components/Footer";

export default function Cookies() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <CookieSection />
      <Footer />
    </main>
  );
}