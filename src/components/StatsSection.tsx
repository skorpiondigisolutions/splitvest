'use client';
import React from 'react';
import CountUp from 'react-countup';

const stats = [
  { value: 5000, label: 'Total Tokens' },
  { value: 35, label: 'Floor Price', suffix: ' USD' },
  { value: 200, label: 'Matic' },
];

const StatsSection = () => {
  return (
    <section className="py-[120px] border-t border-b border-[#B4B4CC] border-opacity-15">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 xl:gap-12 text-center">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center gap-3 md:gap-12">
            {index !== 0 && (
              <div className="hidden md:flex relative w-[80px] h-4 items-center justify-center">
                <div className="absolute w-full h-px bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
                <span className="relative z-10 bg-transparent text-gray-400 px-2 text-lg font-medium">//</span>
              </div>
            )}

            <div>
              <h2 className="text-[34px] md:text-[36px] lg:text-[38px] xl:text-[40px] font-extrabold neon-stroke">
                <CountUp
                  end={item.value}
                  duration={2.5}
                  separator=","
                  suffix={item.suffix || ''}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                  scrollSpyDelay={100}
                />
              </h2>
              <p className="text-[#B4B4CC] text-[15px] md:text-[16px] xl:text-[17px] mt-1">{item.label}</p>
            </div>

            {index !== stats.length - 1 && (
              <div className="md:hidden mt-4 relative w-[80px] h-4 flex items-center justify-center">
                <div className="absolute w-full h-px bg-gray-400 top-1/2 transform -translate-y-1/2"></div>
                <span className="relative z-10 bg-transparent text-gray-400 px-2 text-lg font-medium">//</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
