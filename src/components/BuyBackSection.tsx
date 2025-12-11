import React from 'react';
import Image from 'next/image';
import { FaTwitter,  FaFacebookF,  FaInstagram,  FaPinterest,  FaBehance, } from 'react-icons/fa';
import { BsFillFileFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';

const BuyBackSection = () => {
  return (
    <section className="min-h-screen bg-transparent mt-1 pt-44 pb-0 text-white">
      <div className="px-6 md:px-8 xl:px-24 max-w-9xl mx-auto flex flex-col xl:grid xl:grid-cols-[560px_1fr] gap-14 xl:gap-16 items-stretch rounded-[8px]">
        <div className="rounded-[8px] overflow-hidden border border-[#B4B4CC] shadow-xl p-4 md:p-5">
          <Image
            src="/images/buyback.jpg"
            alt="Meta Legends"
            width={560}
            height={420}
            className="w-full xl:h-[420px] object-cover rounded-[8px]"
          />
        </div>

        <div className="flex flex-col xl:mt-10">
          <h2
            className="text-center xl:text-start text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
            style={{ color: '#e8d2ff' }}
          >
            BuyBack Guarantee
          </h2>

          <p className="text-[#B4B4CC] text-center xl:text-start text-[17px] md:text-[18px] leading-normal mt-8 xl:mt-7 tracking-wide">
           Splitvest offers a Buyback Guarantee to provide investors with added confidence and long-term security. 
           After a holding period of 5 years, the company promises to buy back all NFT shares associated with a 
           property at the prevailing market value of that property at the time of buyback. This ensures investors 
           can exit their investment even if there is no buyer in the secondary market. The buyback amount will be 
           subject to a 5% royalty fee which will be deducted from the final payout. 
           This guarantee protects investor interests while ensuring transparency and liquidity in the long term.
          </p>
        </div>
      </div>
      
      <div className="flex items-center justify-center w-full mt-36 pt-2">
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
;

export default BuyBackSection;