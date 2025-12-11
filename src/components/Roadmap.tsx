import React, { useRef,useEffect, useState } from 'react';

type RoadmapItem = {
  phase: string;
  date: string;
  title: string;
  content: string;
};

const timelineData: RoadmapItem[] = [
  {
    phase: 'PHASE 01',
    date: 'August 26, 2025',
    title: 'Splitvest’s First Property Mint',
    content:
      'Minting starts August 26! Be part of India’s real estate revolution with Splitvest. Own your share, earn rental income, and invest the smart way.',
  },
  {
    phase: 'PHASE 02',
    date: 'September 26 2025',
    title: 'First Rent Drop',
    content:
      'Your first month’s rental income is coming! Rent distribution begins September 26. Sit back, track earnings, and enjoy passive income with Splitvest.',
  },
  {
    phase: 'PHASE 03',
    date: 'October 26, 2025',
    title: 'NFT Marketplace Launch',
    content:
      "Buy, sell, or exit your property shares with ease! Splitvest's NFT marketplace goes live October 26—unlocking real estate liquidity for all.",
  },
  {
    phase: 'PHASE 04',
    date: 'January 17, 2026',
    title: '5th Property Launched',
    content:
      "Milestone achieved! Our 5th property is officially launched on Jan 17. More opportunities, more growth—thank you for building with Splitvest!",
  },
  
  {
    phase: 'PHASE 05',
    date: 'February 25, 2026',
    title: 'Rent Claiming Platform',
    content:
      'Claim your rental income with ease! Splitvest’s rent claiming platform goes live on Feb 25—your returns, now one click away.',
  },
   {
    phase: 'PHASE 06',
    date: 'March 20, 2026',
    title: 'Coin Launch ',
    content:
      'Splitvest Coin drops March 20! Power your real estate journey with our native token—built for utility, rewards, and seamless investing.',
  },
  {
    phase: 'PHASE 07',
    date: 'June 10, 2026',
    title: 'Property Completion',
    content:
      'Construction milestone met! Our listed property is officially completed as of June 10—bringing your investment one step closer to full potential.',
  },
  {
    phase: 'PHASE 08',
    date: 'July 14, 2026',
    title: 'Wallet Launch',
    content:
      'Introducing Splitvest Wallet on July 14—securely store, manage, and track your property NFTs and tokens in one place.',
  },
   {
    phase: 'PHASE 09',
    date: 'August 15, 2026',
    title: 'Staking Platform Launch',
    content:
      'Grow your rewards! Our staking platform launches August 15. Earn more by locking in your Splitvest tokens and boosting your returns.',
  },
];

const Roadmap = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const totalItems = timelineData.length;
  const scrollPercent = 100 / totalItems;
  const [shoeCount, setShoeCount] = useState(0);
  const shoeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateShoeCount = () => {
      const container = shoeContainerRef.current;
      if (!container) return;

      const containerWidth = container.offsetWidth;
      const shoeWidth = 36;
      const count = Math.floor(containerWidth / shoeWidth);
      setShoeCount(count);
    };

    calculateShoeCount();
    window.addEventListener('resize', calculateShoeCount);
    return () => window.removeEventListener('resize', calculateShoeCount);
  }, []);

  useEffect(() => {
    const getVisibleCards = () => {
      if (window.innerWidth >= 1280) return 4;
      if (window.innerWidth >= 768) return 2;
      return 1;
    };

    setVisibleCards(getVisibleCards());

    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.max(1, timelineData.length - visibleCards + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const getVisibleFootprints = (index: number, visibleCards: number) => {
    return (index + visibleCards) * 2;
  };

  return (
    <section className="text-white pt-36 mt-1">
        <div className='px-6 md:px-8 xl:px-24'>
            <h2
                className="text-center text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
                style={{ color: '#e8d2ff' }}
            >
                ROADMAP
            </h2>
            
            <div className="relative mt-[140px] mb-8">    
                <div
                  ref={shoeContainerRef}
                  className="flex lg:hidden relative rounded-[8px] z-10 py-8 md:py-[52px] px-6 md:px-8 justify-between items-center overflow-hidden"
                >
                  {Array.from({ length: shoeCount }).map((_, i) => {
                    const revealLimit = Math.floor(((index + visibleCards) / timelineData.length) * shoeCount);
                    return (
                      <img
                        key={i}
                        src="/images/leftshoe.png"
                        alt="footstep"
                        className={`w-7 h-7 md:w-8 md:h-8 transition-opacity duration-1000 transform invert
                          ${i < revealLimit ? 'opacity-80' : 'opacity-0'}
                          ${i % 2 === 0 ? 'rotate-[100deg] -translate-y-2' : 'rotate-[440deg] translate-y-2 scale-x-[-1]'}
                        `}
                      />
                    );
                  })}
                </div>

                <div className="hidden lg:flex relative rounded-[8px] z-10 py-12 px-14 justify-between items-center">
                  {Array.from({ length: 18 }).map((_, i) => (
                    <img
                      key={i}
                      src="/images/leftshoe.png"
                      alt="footstep"
                      className={`w-9 h-9 opacity-0 transition-opacity duration-1000 transform invert
                        ${i < getVisibleFootprints(index, visibleCards) ? 'opacity-80' : 'opacity-0'}
                        ${i % 2 === 0 ? 'rotate-[100deg] -translate-y-2' : 'rotate-[440deg] translate-y-2 scale-x-[-1]'}`}
                    />
                  ))}
                </div>

                <svg className="absolute inset-0 w-full h-full z-0 rounded-[8px] pointer-events-none">
                    <rect
                    x="1"
                    y="1"
                    width="99.5%"
                    height="90%"
                    rx="16"
                    ry="16"
                    fill="none"
                    stroke="#B4B4CC"
                    strokeWidth="1"
                    strokeDasharray="12 12"
                    />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto relative overflow-hidden">
                <div className="absolute top-[0px] left-0 w-full h-5 z-10 overflow-hidden">
                  <div
                    className="relative flex items-center transition-transform duration-1000 ease-in-out"
                    style={{
                      width: `${(totalItems / visibleCards) * 100}%`,
                      transform: `translateX(-${index * (100 / totalItems)}%)`,
                    }}
                  >
                    <div className="absolute top-1/2 left-0 w-full h-px bg-[#b4b4cc] opacity-60 transform -translate-y-1/2 z-0" />

                    {timelineData.map((_, i) => (
                      <div
                        key={i}
                        className="flex justify-center items-center z-10"
                        style={{ width: `${scrollPercent}%` }}
                      >
                        <div className="w-5 h-5 rounded-full border-[5px] border-purple-500 bg-[#1f0f3a]" />
                      </div>
                    ))}
                  </div>
                </div>

                  <div
                    className="flex transition-transform duration-1000 ease-in-out pt-[60px]"
                    style={{ transform: `translateX(-${index * (100 / visibleCards)}%)` }}
                  >
                    {timelineData.map((item, idx) => (
                      <div
                        key={idx}
                        className="px-3 flex-shrink-0"
                        style={{ width: `${100 / visibleCards}%` }}
                      >
                          <div className="bg-[#1e0d38] border border-[#B4B4CC] border-opacity-30 rounded-[8px] px-[44px] py-12 shadow-lg relative">
                              <div className="absolute top-0 left-0 bg-[#3a2154] px-10 py-2 rounded-tl-[8px] rounded-br-[8px] rounded-bl-md text-[15px] tracking-wide text-[#B4B4CC]">
                                  {item.phase}
                              </div>
                              <div className="mt-4 text-[16px] md:text-[17px] text-[#B4B4CC] mb-2">{item.date}</div>
                              <div className="text-[18px] md:text-[19px] leading-tight mb-4">{item.title}</div>
                              <p className="text-[17px] md:text-[18px] text-[#B4B4CC]">{item.content}</p>
                          </div>
                      </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center w-full mt-40 pt-2">
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

export default Roadmap;       