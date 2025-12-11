'use client';
import { useEffect } from "react";
import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import BlogFiveImage from "@/components/BlogFiveImage";
import BlogFiveContent from "@/components/BlogFiveContent";
import BlogFiveOther from "@/components/BlogFiveOther";
import Footer from "@/components/Footer";

export default function BlogFive() {
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
        <BlogFiveImage />
      </Suspense>
      <BlogFiveContent />
      <BlogFiveOther />
      <Footer />
    </main>
  );
}