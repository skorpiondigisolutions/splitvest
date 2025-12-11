import React from 'react';
import Image from 'next/image';

const AboutSplitvest = () => {
  return (
    <section id="about" className="relative w-full pt-20 pb-28 md:pt-36 md:pb-32 xl:py-48 md:px-8 xl:px-20 flex flex-col md:flex-row overflow-hidden">
      <div className="hidden xl:flex absolute inset-y-36 left-0 w-[560px] z-0 pointer-events-none">
        <Image
          src="/images/about-2.jpg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      <div className="relative z-10 flex flex-col-reverse xl:flex-row xl:items-center xl:justify-between md:gap-20 gap-28 xl:gap-x-14 w-full">
        <div className="relative z-10 flex items-center justify-center xl:justify-end w-full xl:w-1/2 min-h-[200px]">
          <div className="relative">
            <div className="relative z-10 border border-[#B4B4CC] rounded-[8px] p-5">
              <Image
                src="/images/about-1.jpg"
                alt="Meta Legend"
                width={0}
                height={0}
                className="w-[500px] h-[360px] md:h-[500px] object-cover rounded-[8px]"
              />
            </div>
          </div>
        </div>

        <div className="z-10 mt-16 md:mt-0 w-full xl:max-w-[490px] text-white px-6 md:px-0">
          <h2
            className="text-left text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
            style={{ color: '#e8d2ff' }}
          >
            About Splitvest
          </h2>
          <div className="relative flex items-center mt-3 w-32 h-6">
            <span className="relative z-10 text-[#B4B4CC] text-lg ml-1">//</span>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center">
              <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
            </div>
          </div>


          <p className="text-[#B4B4CC] mt-5 leading-relaxed text-[16px] md:text-[17px] tracking-wide">
            At Splitvest, we’re reimagining real estate investing for the modern Indian. Our mission is 
            simple yet powerful: to make premium property ownership accessible to all, not just the wealthy few.
          </p>

          <p className="text-[#B4B4CC] mt-5 leading-relaxed text-[16px] md:text-[17px] tracking-wide">
            Splitvest allows you to invest in high-value real estate through fractional ownership—starting small 
            and earning monthly rental income, typically offering average returns of around 3% annually, without 
            the financial strain of full property ownership. By leveraging blockchain and NFT-based tokenization, 
            we bring unmatched transparency, liquidity, and security to your investments.
          </p>

          <p className="text-[#B4B4CC] mt-5 text-[16px] md:text-[17px] tracking-wide leading-relaxed">
            But Splitvest is more than just technology. It’s a movement inspired by real-world frustration. 
            The idea was born from the struggle of trying to invest in real estate with limited capital—facing 
            barriers like high entry costs, complex paperwork, and little flexibility. Instead of giving up, a 
            vision was formed to build a smarter, tech-driven alternative.
          </p>

          <p className="text-[#B4B4CC] mt-5 text-[16px] md:text-[17px] tracking-wide leading-relaxed">
            With a dedicated team of experts in finance, real estate, and Web3, Splitvest was created to bridge 
            the gap between everyday investors and premium property assets. What started as a personal challenge 
            has grown into a national opportunity—to democratize real estate wealth, one fraction at a time.
          </p>

          <p className="text-[#B4B4CC] mt-5 text-[16px] md:text-[17px] tracking-wide leading-relaxed">
            Whether you're looking to build passive income or diversify your portfolio, Splitvest gives you the tools 
            and access to make smarter real estate investments—with ease, trust, and clarity.
          </p>

          {/*
          <button 
            className="mt-8 px-9 py-3 text-[15px] tracking-wide text-white rounded-[8px]"
            style={{
                border: '3px solid blue',
                color: '#ffffff',
            }}
          >
            Learn More
          </button>
          */}
        </div>
     </div> 
    </section>
  );
}

export default AboutSplitvest