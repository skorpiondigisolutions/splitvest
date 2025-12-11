'use client';
import { useEffect } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import AboutSplitvest from "@/components/AboutSplitvest";
import HowToMint from "@/components/HowToMint";
import CollectionSection from "@/components/CollectionSection";
import BuyBackSection from "@/components/BuyBackSection";
import Roadmap from "@/components/Roadmap";
import LatestBlogs from "@/components/LatestBlogs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const section = searchParams.get('section');

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });

          router.replace('/', { scroll: false });
        }
      }, 100);
    }
  }, [section, router]);

  return (
    <main>
      <Navigation />
      <Hero />
      <StatsSection />
      <AboutSplitvest />
      <HowToMint />
      <CollectionSection />
      <BuyBackSection />
      <Roadmap />
      <LatestBlogs />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}