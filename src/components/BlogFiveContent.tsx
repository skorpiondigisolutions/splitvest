'use client';
import React from 'react';

const BlogFiveContent = () => {
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
          How You Can Start Your Real Estate Portfolio Without Breaking the Bank
        </h2>

        <div className="text-[15px] md:text-[16px] font-medium text-[#B4B4CC] tracking-wide mt-6 uppercase">
          TOKENS, NFTS, CRYPTO
        </div>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Dreaming of owning real estate? You don’t need lakhs to begin. You just need the right platform.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Splitvest was built on a bold idea: that real estate investment should be as accessible as mutual funds or SIPs. 
          Why wait until you’ve saved for years, when you can start building your portfolio today—with an amount you’d 
          normally spend on a dinner out or a weekend trip?
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
            By pooling investments from individuals like you, Splitvest enables co-ownership of premium properties. 
            You invest in a share, and in return:
        </p>
        <ul className="list-disc list-inside text-[#B4B4CC] text-[17px] md:text-[18px] mt-2 md:mt-3 space-y-1 md:space-y-2">
            <li>Earn a portion of monthly rental income</li>
            <li>Gain exposure to appreciating assets</li>
            <li>Enjoy ownership without the stress of maintenance or paperwork</li>
        </ul>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          This isn’t just a tech-enabled convenience—it’s a wealth-building revolution for the modern Indian. 
          Earn Rental Income Even from Small Investments—Thanks to Splitvest
        </p>
      </div>
    </section>
  );
};

export default BlogFiveContent;
