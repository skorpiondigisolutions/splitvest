'use client';
import React from 'react';
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
    title: 'Start Small, Dream Big: How Splitvest Empowers First-Time Real Estate Investors',
    date: 'August 09, 2022',
    category: 'Splitvest',
    comments: '4 Comments',
     link: '/blogs/blog-4'
  },
  {
    id: '04',
    title: 'How You Can Start Your Real Estate Portfolio Without Breaking the Bank',
    date: 'August 09, 2022',
    category: 'Splitvest',
    comments: '4 Comments',
     link: '/blogs/blog-5'
  },
];

const BlogThreeOther = () => {
  return (
    <section className="text-white py-14 md:py-16 relative">
      <h2
        className="text-center text-[32px] md:text-[36px] lg:text-[37px] xl:text-[38px] font-normal tracking-wider uppercase leading-[1.0]"
        style={{ color: '#e8d2ff' }}
      >
        OTHER BLOGS
      </h2>
      <div className="mt-16 md:mt-20 lg:mt-24 xl:mt-28 px-6 md:px-8 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 xl:gap-10">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group border border-[#B4B4CC] border-opacity-30 p-6 md:p-10 rounded-[8px] shadow-[0_0_30px_rgba(0,0,0,0.3)] transition-all duration-500"
            >
              <div className="w-[50px] h-[50px] rounded-full border-2 border-fuchsia-600 flex items-center justify-center tracking-wider text-[#b4b4cc] text-[16px] md:text-[17px]">
                {article.id}
              </div>

              <p className="text-[17px] md:text-[18px] text-gray-400 mt-4">
                {article.date} / {article.category} / {article.comments}
              </p>

              {article.title && (
                <Link href={article.link}>
                <h3 className="cursor-pointer hover:text-blue-500 text-[28px] md:text-[29px] lg:text-[30px] font-light mt-3 md:mt-3 lg:mt-2 xl:mt-1 leading-tight">
                  {article.title}
                </h3>
                </Link>
              )}
              
              <Link href={article.link}>
              <div className="flex items-center space-x-2 md:space-x-3 xl:space-x-4 mt-5 md:mt-5 xl:mt-7 cursor-pointer">
                <div className="bg-[#b4b4cc] h-[2px] w-24 transition-all duration-500 origin-right group-hover:w-14" />
                <span className="text-white text-[15px] md:text-[16px] xl:text-[17px] opacity-0 translate-x-4 group-hover:translate-x-0 group-hover:opacity-100 hover:text-blue-500 transition-all duration-500">
                  READ MORE
                </span>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogThreeOther;
