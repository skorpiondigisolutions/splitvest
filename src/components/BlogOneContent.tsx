'use client';
import React from 'react';

const BlogOneContent = () => {
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
          Why Splitvest Exists: Making Real Estate Investment Truly Accessible
        </h2>

        <div className="text-[15px] md:text-[16px] font-medium text-[#B4B4CC] tracking-wide mt-6 uppercase">
          TOKENS, NFTS, CRYPTO
        </div>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          At Splitvest, we believe premium real estate shouldn't be a luxury only the rich can afford. 
          In India, owning high-value real estate has always been considered a symbol of wealth—but it 
          often comes at the cost of massive loans, high EMIs, and years of savings. For most middle-class 
          Indians, it remains a distant dream.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Splitvest changes that. Our mission is clear: to make premium property ownership accessible to all, 
          not just the wealthy few. We’ve introduced a smarter way to invest in real estate through fractional 
          ownership—a system where you can own a “share” of a premium property instead of the entire unit.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
            With Splitvest, you can:
        </p>
        <ul className="list-disc list-inside text-[#B4B4CC] text-[17px] md:text-[18px] mt-2 md:mt-3 space-y-1 md:space-y-2">
            <li>Start with small investments</li>
            <li>Earn monthly rental income</li>
            <li>Diversify your wealth without financial strain</li>
        </ul>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          We’ve removed the traditional barriers—capital requirements, property management, and legal 
          complexity—to make real estate investing easy, modern, and democratic.
        </p>
      </div>
    </section>
  );
};

export default BlogOneContent;
