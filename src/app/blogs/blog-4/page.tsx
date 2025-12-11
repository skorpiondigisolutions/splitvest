'use client';
import { useEffect } from "react";
import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import BlogFourImage from "@/components/BlogFourImage";
import BlogFourContent from "@/components/BlogFourContent";
import BlogFourOther from "@/components/BlogFourOther";
import Footer from "@/components/Footer";

export default function BlogFour() {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Navigation />
      <Suspense fallback={<div>Loading image...</div>}>
        <BlogFourImage />
      </Suspense>
      <BlogFourContent />
      <BlogFourOther />
      <Footer />
    </main>
  );
}