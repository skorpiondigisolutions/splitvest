'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const CollectionSection =() => {
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const [images, setImages] = useState([
    "/images/collection-1.jpg",
    "/images/collection-2.jpg",
    "/images/collection-3.jpg",
    "/images/collection-4.jpg",
    "/images/collection-5.jpg",
    "/images/collection-6.jpg",
    "/images/collection-7.jpg",
    "/images/collection-8.jpg",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      const i = Math.floor(Math.random() * 8);
      let j = Math.floor(Math.random() * 8);
      while (j === i) j = Math.floor(Math.random() * 8);

      const apply = (idx: number) => {
        const img = imageRefs.current[idx];
        if (img) img.classList.add("tilt-swap");
      };

      const remove = (idx: number) => {
        const img = imageRefs.current[idx];
        if (img) img.classList.remove("tilt-swap");
      };

      apply(i);
      apply(j);

      setTimeout(() => {
        setImages(prev => {
          const next = [...prev];
          [next[i], next[j]] = [next[j], next[i]];
          return next;
        });
      }, 300);

      setTimeout(() => {
        remove(i);
        remove(j);
      }, 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getResponsiveSizeClass = () => {
    return "w-full aspect-square max-w-[400px] mx-auto";
  };

  const getSizeClass = (i: number) => {
    const large = "lg:w-[280px] lg:h-[280px] xl:w-[320px] xl:h-[320px]";
    const small = "lg:w-[160px] lg:h-[160px] xl:w-[200px] xl:h-[200px]";
    return [0, 2, 5, 7].includes(i) ? large : small;
  };

  return (
    <section id="collection" className="pt-36 text-center text-white">
       <div className="px-6 md:px-8 xl:px-24"> 
        <h2
            className="text-center text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
            style={{ color: '#e8d2ff' }}
        >
            OUR COLLECTION
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-8 md:gap-6 mt-36 max-w-7xl mx-auto">
          {images.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`Legend ${i + 1}`}
              width={1}
              height={1}
              ref={(el) => { imageRefs.current[i] = el; }}
              className={`rounded-[8px] ${getResponsiveSizeClass()} p-5 border border-[#B4B4CC] hover:shadow-[0_0_4px_4px_#e65bff] transition duration-300`}
            />
          ))}
        </div>

        <div className="hidden lg:flex flex-wrap justify-center gap-x-2 gap-y-7 xl:gap-y-6 mt-36 max-w-7xl mx-auto">
          <div className="flex items-end gap-6 lg:gap-6 xl:gap-5 w-full justify-center">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`${getSizeClass(i)} p-5 border border-[#B4B4CC] rounded-[8px] hover:shadow-[0_0_4px_4px_#e65bff] transition duration-300`}
              >
                <Image
                  src={images[i]}
                  alt={`Legend ${i + 1}`}
                  width={1}
                  height={1}
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className="rounded-[8px] w-full h-full object-cover transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex items-start gap-6 lg:gap-6 xl:gap-5 w-full justify-center">
            {[4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className={`${getSizeClass(i)} p-5 border border-[#B4B4CC] rounded-[8px] hover:shadow-[0_0_4px_4px_#e65bff] transition duration-300`}
              >
                <Image
                  src={images[i]}
                  alt={`Legend ${i + 1}`}
                  width={1}
                  height={1}
                  ref={(el) => {
                    imageRefs.current[i] = el;
                  }}
                  className="rounded-[8px] w-full h-full object-cover transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="mt-[122px] xl:max-w-4xl mx-auto text-[20px] md:text-[21px] xl:text-[23px] tracking-wide text-[#B4B4CC] text-center">
            Discover a curated collection of premium real estate properties—beachfront villas, scenic retreats, 
            and urban gems—now available as fractional NFTs, offering rental income, capital appreciation, and 
            secure blockchain-backed ownership with flexible exit options.
        </p>

        {/*
        <button 
            className="mt-12 xl:mt-10 px-8 xl:px-7 py-3 text-[13px] md:text-[14px] xl:text-[15px] tracking-wide rounded-[8px] transition"
            style={{
                border: '3px solid blue',
                color: '#ffffff',
            }}
        >
            SEE ALL COLLECTION
        </button>

        */}
      </div>

      <div className="flex items-center justify-center w-full mt-36">
        <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />

        <div className="flex items-center gap-3 px-6">
            <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
            <div className="w-[200px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
            <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
        </div>

        <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />
      </div>  
    </section>
  );
}

export default CollectionSection;