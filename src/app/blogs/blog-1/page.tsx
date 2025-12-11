'use client';
import { useEffect } from "react";
import { Suspense } from "react";
import Navigation from "@/components/Navigation";
import BlogOneImage from "@/components/BlogOneImage";
import BlogOneContent from "@/components/BlogOneContent";
import BlogOneOther from "@/components/BlogOneOther";
import Footer from "@/components/Footer";

export default function BlogOne() {
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
        <BlogOneImage />
      </Suspense>
      <BlogOneContent />
      <BlogOneOther />
      <Footer />
    </main>
  );
}