'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import RippleBackground from '@/components/RippleBackground';

const imageList = [
  '/images/hero-1.jpg',
  '/images/hero-2.jpg',
  '/images/hero-3.jpg',
  '/images/hero-4.jpg',
  '/images/hero-5.jpg'
];

const images = [...imageList, ...imageList.slice(0, 2)];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const transitionDuration = 1000;
  const gap = 24;

  const updateImageWidth = () => {
    const width = window.innerWidth;
    if (width < 768) {
      setImageWidth(window.innerWidth - 48);
    } else if (width < 1280) {
      setImageWidth((window.innerWidth - 96) / 2);
    } else {
      setImageWidth(460);
    }
  };

  useEffect(() => {
    updateImageWidth();
    window.addEventListener('resize', updateImageWidth);
    return () => window.removeEventListener('resize', updateImageWidth);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const moveTo = currentIndex * (imageWidth + gap);

    if (currentIndex >= imageList.length + 1) {
      setTimeout(() => {
        container.style.transition = 'none';
        container.style.transform = `translateX(0px)`;
        setCurrentIndex(1);
      }, transitionDuration);
    } else {
      container.style.transition = `transform ${transitionDuration}ms ease-in-out`;
      container.style.transform = `translateX(-${moveTo}px)`;
    }
  }, [currentIndex, imageWidth]);

  return (
    <section
      id="ripple-section"
      className="relative z-0 w-full h-full py-24 px-6 md:px-8 xl:pl-20 xl:pr-0 text-white bg-cover bg-center bg-transparent overflow-hidden"
      style={{ backgroundImage: "url('/images/bg.png')"}} 
    >
       <div className="absolute inset-0 bg-black opacity-60 z-[1] pointer-events-none" />
       <RippleBackground selector="#ripple-section" />

      <div className="relative z-10 w-full mx-auto flex flex-col xl:flex-row items-start gap-16 xl:gap-24">
        <div className="md:max-w-7xl xl:max-w-xs">
          <h2
            className="mt-40 text-start text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
            style={{ color: '#e8d2ff' }}
          >
            SPLITVEST
          </h2>
          <p className="mt-10 text-[#B4B4CC] text-[17px] md:text-[18px] tracking-wide leading-normal">
            Splitvest is a modern platform for investing in premium real estate through fractional ownership. 
            By tokenizing properties on the blockchain, it offers secure, fully managed access to rental income 
            and long-term appreciation — without the hassle of full ownership. Splitvest makes real estate 
            simple,transparent, and flexible for today’s investors, offering a smarter way to grow wealth 
            through one of India’s most stable and rewarding asset classes. 
          </p>
          <button
            onClick={() => {
              const aboutSection = document.getElementById('about');
              if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
              }
            }} 
            className="mt-10 text-white px-8 py-3 text-[14px] md:text-[15px] xl:text-[16px] tracking-wide rounded-[8px] uppercase"
            style={{
              border: '3px solid blue',
              color: '#ffffff',
            }}
          >
            Learn more
          </button>
        </div>

        <div className="relative w-full h-auto xl:mt-36 overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-6"
            style={{
              width: `${images.length * (imageWidth + gap)}px`,
            }}
          >
            {images.map((src, i) => (
              <div key={i} className="flex-shrink-0 relative">
                <div
                  className="rounded-[20px] overflow-hidden border border-[#e8d2ff] p-5"
                  style={{
                    width: `${imageWidth}px`,
                    height: `${imageWidth * 1.2}px`,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Legend ${i + 1}`}
                    width={imageWidth}
                    height={imageWidth * 1.2}
                    className="rounded-[20px] object-cover w-full h-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}