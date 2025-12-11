'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const articles = [
  {
    id: '01',
    title: 'Why Splitvest Exists: Making Real Estate Investment Truly Accessible',
    date: 'August 09, 2022',
    category: 'Splitvest',
    comments: '4 Comments',
    link: '/blogs/blog-1'
  },
  {
    id: '02',
    title: 'What is Fractional Ownership and How It Works with Splitvest',
    date: 'August 09, 2022',
    category: 'Splitvest',
    comments: '4 Comments',
    link: '/blogs/blog-2'
  },
  {
    id: '03',
    title: 'The Role of Blockchain & NFTs in Real Estate Investment with Splitvest',
    date: 'August 09, 2022',
    category: 'Splitvest',
    comments: '4 Comments',
    link: '/blogs/blog-3'
  },
  {
    id: '04',
    title: 'Start Small, Dream Big: How Splitvest Empowers First-Time Real Estate Investors',
    date: 'August 09, 2022',
    category: 'Splitvest',
    comments: '4 Comments',
    link: '/blogs/blog-4'
  },
];

const LatestBlogs = () => {
  return (
    <section
      id="blog"
      className="text-white pt-36 relative"
    >
    <div className='px-6 md:px-8 xl:px-24'>
      <h2
          className="text-center text-[36px] md:text-[38px] font-normal tracking-wider leading-[1.0]"
          style={{ color: '#e8d2ff' }}
        >
          LATEST BLOGS
        </h2>

      <div className="grid xl:grid-cols-2 gap-10 mt-36">
        <div className="group border border-[#4d345c] p-6 md:p-10 rounded-[8px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500">
          <div className="w-[50px] h-[50px] rounded-full border-2 border-fuchsia-600 flex items-center justify-center tracking-wider text-[#b4b4cc] text-[17px]">
                01
          </div>
          <p className="text-[17px] md:text-[18px] text-gray-400 mt-4">{articles[0].date} / {articles[0].category} / {articles[0].comments}</p>
          <Link href={articles[0].link}>
            <h3 className="cursor-pointer hover:text-blue-500 text-[28px] md:text-[29px] lg:text-[30px] font-light mt-3 md:mt-3 lg:mt-2 xl:mt-1 leading-tight">{articles[0].title}</h3>
          </Link>
          
          <Link href={articles[0].link}>
            <Image
              src="images/blog-1.jpg"
              alt="Article"
              width={600}
              height={380}
              className="w-full h-auto rounded-xl mt-8 object-cover"
            />
          </Link>

          <Link href={articles[0].link} className="flex items-center space-x-2 md:space-x-3 xl:space-x-4 mt-7 cursor-pointer">
            <div
                className="bg-[#b4b4cc] h-[2px] w-24 transition-all duration-500 origin-right group-hover:w-14"
            ></div>
            <span
                className="text-white text-[15px] md:text-[16px] xl:text-[17px] opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hover:text-blue-500 transition-all duration-500"
            >
                READ MORE
            </span>
         </Link>
        </div>

        <div className="flex flex-col gap-9">
          {articles.slice(1).map((article) => (
            <div 
                key={article.id} 
                className="group border border-[#4d345c] p-6 md:p-10 rounded-[8px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="w-[50px] h-[50px] rounded-full border-2 border-fuchsia-600 flex items-center justify-center tracking-wider text-[#b4b4cc] text-[17px]">
                {article.id.toString().padStart(2, '0')}
              </div>
              
              <p className="text-[17px] md:text-[18px] text-gray-400 mt-4">{article.date} / {article.category} / {article.comments}</p>

              {article.title &&
                <Link href={article.link}>
                  <h4 className="cursor-pointer hover:text-blue-500 text-[28px] md:text-[29px] lg:text-[30px] font-light mt-3 md:mt-3 lg:mt-2 xl:mt-1 leading-tight">{article.title}</h4>
                </Link>
              }

              <Link href={article.link}>
              <div className="flex items-center space-x-2 md:space-x-3 xl:space-x-4 mt-5 md:mt-5 xl:mt-7 cursor-pointer">
                <div
                    className="bg-[#b4b4cc] h-[2px] w-24 transition-all duration-500 origin-right group-hover:w-14"
                ></div>
                <span
                    className="text-white text-[15px] md:text-[16px] xl:text-[17px] opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hover:text-blue-500 transition-all duration-500"
                >
                    READ MORE
                </span>
             </div>
             </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex flex-col xl:flex-row items-center gap-6 md:gap-8 xl:gap-10">
        <button
             onClick={() => window.location.href = '/blogs'} 
            className="w-full py-7 rounded-[8px] text-[#d8d8f6] text-[14px] md:text-[15px] xl:text-[16px] tracking-wide transition-all"
            style={{
              border: '3px solid blue',
              color: '#ffffff',
            }}
        >
            READ ALL BLOGS
        </button>

        <p className="text-[#a4a4c6] text-left max-w-7xl xl:max-w-[520px] leading-relaxed text-[16px] md:text-[17px] xl:text-[18px]">
         We’re a team of creatives passionate about real estate and inspired living.
         Discover tips, trends, and insights to guide your property journey.
         From market updates to design ideas — we've got you covered.
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
};

export default LatestBlogs;
