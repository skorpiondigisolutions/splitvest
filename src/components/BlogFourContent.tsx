'use client';
import React from 'react';

const BlogFourContent = () => {
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
          Start Small, Dream Big: How Splitvest Empowers First-Time Real Estate Investors
        </h2>

        <div className="text-[15px] md:text-[16px] font-medium text-[#B4B4CC] tracking-wide mt-6 uppercase">
          TOKENS, NFTS, CRYPTO
        </div>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          You don’t need crores to own real estate anymore. Splitvest helps you start small and grow. 
          Think you need ₹50 Lakhs or more to invest in premium properties? Not anymore.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          With Splitvest, you can start with an investment as low as ₹25,000–₹50,000 and still gain access to high-value 
          real estate across India.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
            Here’s how we make it easy for beginners:
        </p>
        <ul className="list-disc list-inside text-[#B4B4CC] text-[17px] md:text-[18px] mt-2 md:mt-3 space-y-1 md:space-y-2">
            <li>Easy-to-use digital platform</li>
            <li>Verified properties with high rental yield</li>
            <li>Transparent documentation and legal process</li>
            <li>Automated monthly payouts</li>
        </ul>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
         As your income grows, you can expand your real estate portfolio—fraction by fraction. 
         Start your journey with Splitvest, and let your money grow while you sleep.
        </p>
      </div>
    </section>
  );
};

export default BlogFourContent;
