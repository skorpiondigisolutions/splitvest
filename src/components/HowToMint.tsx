'use client';
import React, {useState} from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const steps = [
  { number: "01", title: "CONNECT YOUR WALLET" },
  { number: "02", title: "SELECT YOUR QUANTITY" },
  { number: "03", title: "CONFIRM THE TRANSACTION" },
  { number: "04", title: "RECEIVE YOUR NFT’S" },
];

const HowToMint = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="text-white mt-1">
      <div className="max-w-7xl mx-auto flex flex-col xl:grid xl:grid-cols-[375px_1fr] gap-14 md:gap-16 xl:gap-x-14 px-6 md:px-8 xl:px-24">
        <div>
          <h2
            className="text-left text-[36px] md:text-[38px] font-normal tracking-wide leading-[1.0]"
            style={{ color: '#e8d2ff' }}
          >
            How to Mint
          </h2>
          <div className="relative flex items-center mt-3 w-32 h-6">
            <span className="relative z-10 text-[#B4B4CC] text-lg ml-1">//</span>
            <div className="absolute inset-y-0 left-0 right-0 flex items-center">
              <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
            </div>
          </div>

          <p className="mt-6 text-[16px] md:text-[17px] tracking-wide text-[#B4B4CC]">
            To mint your NFT on Splitvest, you first need to buy PolyToken (MATIC), which is the cryptocurrency used on the 
            Polygon blockchain. You can purchase MATIC from any trusted crypto exchange such as Binance, or even through a local 
            trusted exchanger near you. Once you have the tokens, transfer them to your MetaMask wallet. If you don’t have MetaMask, 
            you can install it as a browser extension or mobile app and make sure it's set to the Polygon (MATIC) network.
          </p>

          <p className="mt-6 text-[16px] md:text-[17px] tracking-wide text-[#B4B4CC]">
            After transferring your tokens, go to the Splitvest website and connect your MetaMask wallet. Once connected, choose the 
            property and select the number of NFT units (which represent fractional ownership in the property) you want to buy. 
            Click "Mint" and confirm the transaction in MetaMask. After a few moments, you’ll receive your NFTs directly in your 
            wallet and on your Splitvest dashboard. Congratulations—you’re now a co-owner of a premium real estate asset and eligible 
            to earn monthly rental income!
          </p>
          
          <p className="mt-6 text-[16px] md:text-[17px] tracking-wide text-[#B4B4CC]">
            Splitvest lets you co-own premium real estate through fractional shares backed by blockchain. Earn 
            rental income, enjoy appreciation, and skip the hassles of property management. It’s a smart, 
            transparent, and accessible way to grow long-term wealth in real estate.
          </p>

          <button
            onClick={() => window.location.href = '/nft-main'} 
            className="mt-9 text-white px-8 py-3 tracking-wide text-[13px] md:text-[14px] xl:text-[15px] rounded-[8px]"
             style={{
                border: '3px solid blue',
                color: '#ffffff',
            }}
          >
            HOW TO MINT
          </button>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-8 xl:gap-10">
            {steps.map((step, idx) => (
                <div key={idx} className="relative px-5 py-5 rounded-[8px] border-opacity-30 border border-[#b4b4cc] bg-transparent">
                <div className="rounded-[8px] bg-[#29144a] px-10 md:px-12 py-8 text-start h-full">
                    <div className="text-transparent mt-2 text-[38px] md:text-[40px] lg:text-[42px] xl:text-[44px] bg-clip-text bg-gradient-to-br from-fuchsia-500 to-purple-500">
                    {step.number}
                    </div>
                    <div className="text-[14px] md:text-[15px] lg:text-[16px] text-[#b4b4cc] tracking-wide uppercase leading-normal mb-6">
                    {step.title}
                    </div>
                </div>
                </div>
            ))}
          </div>

          <div className="relative pt-4 md:pt-8 w-full overflow-hidden shadow-2xl">
            <Image
              src="/images/thumbnail-1.jpg"
              alt="Mint Video"
              width={2000}
              height={600}
              className="w-[full] md:h-[420px] lg:h-[520px] xl:h-[410px] object-cover rounded-[8px]"
            />
            <button
              onClick={() => setIsModalOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <div className="group relative w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex items-center justify-center">
                <svg
                  className="absolute w-full h-full rotate-[-90deg] pointer-events-none"
                  viewBox="0 0 120 120"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="58"
                    fill="none"
                    stroke="#B4B4CC"
                    strokeWidth="5"
                    strokeDasharray="364.42"
                    strokeDashoffset="0"
                    style={{
                      transition: 'stroke-dashoffset 1s ease-in-out',
                    }}
                    className="group-hover:[stroke-dashoffset:-364.42]"
                  />
                </svg>

                <div className="bg-white/10 p-4 rounded-full z-10">
                  <Play className="text-white w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                </div>
              </div>
            </button>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
              <div className="relative bg-black" style={{ width: '900px', height: '500px' }}>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-8 text-white text-4xl z-10"
                >
                  &times;
                </button>
                <iframe
                  src="https://www.youtube.com/embed/UqWGW7fI3qM"
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                ></iframe>
              </div>
            </div>
          )}
        </div>
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
};

export default HowToMint;
