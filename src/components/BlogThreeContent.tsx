'use client';
import React from 'react';

const BlogThreeContent = () => {
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
          The Role of Blockchain & NFTs in Real Estate Investment with Splitvest
        </h2>

        <div className="text-[15px] md:text-[16px] font-medium text-[#B4B4CC] tracking-wide mt-6 uppercase">
          TOKENS, NFTS, CRYPTO
        </div>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          Modern investment needs modern technology—and that’s why Splitvest uses blockchain and NFT tokenization.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
         We’re not just transforming how people invest in real estate—we’re also changing how secure, transparent, and 
         tradable property ownership can be.
        </p>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
            Here’s how:
        </p>
        <ul className="list-disc list-inside text-[#B4B4CC] text-[17px] md:text-[18px] mt-2 md:mt-3 space-y-1 md:space-y-2">
            <li>
                <strong>Blockchain: </strong>Every transaction and investment is recorded on a tamper-proof digital ledger. 
                This brings complete transparency and reduces fraud.
            </li>
            <li>
                <strong>NFTs (Non-Fungible Tokens): </strong>Your ownership share is represented as an NFT—your digital proof 
                of property ownership. These tokens are unique, traceable, and can even be resold.
            </li>
        </ul>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
            Benefits for You:
        </p>
        <ul className="list-disc list-inside text-[#B4B4CC] text-[17px] md:text-[18px] mt-2 md:mt-3 space-y-1 md:space-y-2">
            <li>Verified digital ownership</li>
            <li>Easy resale of your investment</li>
            <li>Increased trust in the entire system</li>
        </ul>

        <p className="text-[#B4B4CC] text-[17px] md:text-[18px] leading-relaxed mt-6">
          At Splitvest, we’re not just digitizing the process—we’re future-proofing it.
        </p>
      </div>
    </section>
  );
};

export default BlogThreeContent;
