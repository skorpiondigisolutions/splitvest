'use client';
import { useEffect } from "react";
import MintNavigation from "@/components/MintNavigation";
import MintHeader from "@/components/MintHeader";
import MintSection from "@/components/MintSection";
import Footer from "@/components/Footer";

export default function NftMain() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <MintNavigation />
      <MintHeader />
      <MintSection />
      <Footer />
    </main>
  );
}