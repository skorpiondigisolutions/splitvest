'use client';
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import TermsandConditions from "@/components/TermsandConditions";
import Footer from "@/components/Footer";

export default function Terms() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <TermsandConditions />
      <Footer />
    </main>
  );
}