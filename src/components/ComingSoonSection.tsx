'use client';
import React, { useEffect, useState } from 'react';

const ComingSoonSection = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2025-08-26T00:00:00');
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();

    return {
      days: Math.max(Math.floor(diff / (1000 * 60 * 60 * 24)), 0),
      hours: Math.max(Math.floor((diff / (1000 * 60 * 60)) % 24), 0),
      minutes: Math.max(Math.floor((diff / 1000 / 60) % 60), 0),
      seconds: Math.max(Math.floor((diff / 1000) % 60), 0),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimeBox = ({ value }: { value: number }) => (
    <div className="hidden md:flex flex-col items-center">
      <div className="border border-[#B4B4CC] border-opacity-30 rounded-[8px] px-2 md:w-[150px] md:h-[110px] lg:w-[160px] lg:h-[120px] flex items-center justify-center backdrop-blur-sm">
        <div className="text-[50px] md:text-[56px] lg:text-[58px] font-bold tracking-wider text-transparent neon-stroke leading-none">
          0-{value.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );

  const Label = ({ text }: { text: string }) => (
    <div className="text-center text-[16px] md:text-[17px] lg:text-[18px] font-semibold text-[#B4B4CC] uppercase tracking-wider w-32">
      {text}
    </div>
  );

  const Dot = () => (
    <div className="hidden md:block w-[10px] h-[10px] bg-[#B4B4CC] opacity-70 rounded-full" />
  );

  const TimeBoxWithLabel = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-3 md:hidden">
      <div className="border border-[#B4B4CC] border-opacity-30 rounded-[8px] px-2 w-[120px] h-[100px] flex items-center justify-center backdrop-blur-sm">
        <div className="text-[36px] md:text-[56px] lg:text-[58px] font-bold tracking-wider text-transparent neon-stroke leading-none">
          0-{value.toString().padStart(2, '0')}
        </div>
      </div>
      <div className="text-center text-[15px] font-semibold text-[#B4B4CC] uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-white mt-10 md:mt-28 md:pt-4 px-6 md:px-24">
      <div className="hidden md:flex md:gap-6 lg:gap-5 mb-3 ">
        <TimeBox value={timeLeft.days} />
        <TimeBox value={timeLeft.hours} />
        <TimeBox value={timeLeft.minutes} />
        <TimeBox value={timeLeft.seconds} />
      </div>

      <div className="hidden md:flex items-center md:gap-[18px] lg:gap-[20px] mb-14">
        <Label text="Days" />
        <Dot />
        <Label text="Hours" />
        <Dot />
        <Label text="Minutes" />
        <Dot />
        <Label text="Seconds" />
      </div>

      <div className="mb-12 md:hidden">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 four-in-row">
          <TimeBoxWithLabel value={timeLeft.days} label="Days" />
          <TimeBoxWithLabel value={timeLeft.hours} label="Hours" />
          <TimeBoxWithLabel value={timeLeft.minutes} label="Minutes" />
          <TimeBoxWithLabel value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>

      <h2
        className="text-center text-[32px] md:text-[34px] lg:text-[35px] font-normal tracking-wide leading-[1.0]"
        style={{ color: '#e8d2ff' }}
      >
        Public Minting is Coming Soon
      </h2>

      <p className="text-[#b4b4cc] text-center text-[16px] md:text-[17px] lg:text-[18px] mt-6 md:mt-5 xl:mt-4 max-w-2xl leading-normal">
        Our website is coming soon. We are currently working on our website. <br />
        Please check again within couple days.
      </p>
    </section>
  );
};

export default ComingSoonSection;