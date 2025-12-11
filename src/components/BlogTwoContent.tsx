'use client';
import React from 'react';

const BlogTwoContent = () => {
  return (
    <section className="text-white px-6 md:px-8 xl:px-24 pt-6 pb-8 md:pb-10 lg:pb-12 xl:pb-14">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
            <span className="bg-black text-[#B4B4CC] text-[15px] md:text-[16px] px-4 py-2 rounded-full">
                August 09, 2022
            </span>
            <span className="bg-black text-[#B4B4CC] text-[15px] md:text-[16px] px-4 py-2 rounded-full">
                By Admin
            </span>
            <span className="bg-black text-[#B4B4CC] text-[15px] md:text-[16px] px-4 py-2 rounded-full">
                4 Comments
            </span>
        </div>


        <h2
          className="text-left text-[32px] md:text-[34px] lg:text-[36px] xl:text-[38px] font-normal tracking-wide leading-[1.0]"
          style={{ color: '#e8d2ff' }}
        >
          What is Fractional Ownership and How It Works with Splitvest
        </h2>

        <div className="text-[15px] md:text-[16px] font-medium text-[#B4B4CC] tracking-wide mt-6 uppercase">
          TOKENS, NFTS, CRYPTO
        </div>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Real estate doesn’t have to be all or nothing. Splitvest introduces fractional ownership for smart investors.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Traditional property investment requires large capital, complex documentation, and constant maintenance. But what 
          if you could own a part of a property—just like owning shares of a company? That’s exactly what fractional ownership is.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
            How it works on Splitvest:
        </p>
        <ul className="list-disc list-inside text-[#B4B4CC] text-[17px] md:text-[18px] mt-2 md:mt-3 space-y-1 md:space-y-2">
            <li>We identify premium residential or commercial properties</li>
            <li>The property is divided into multiple “fractions” (or tokens)</li>
            <li>You buy one or more of these fractions based on your budget</li>
            <li>You start earning a share of monthly rental income</li>
            <li>You benefit from property appreciation over time</li>
        </ul>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Splitvest handles everything—from due diligence to tenant management and legal paperwork. You simply invest, track, and earn.
        </p>
      </div>
    </section>
  );
};

export default BlogTwoContent;
