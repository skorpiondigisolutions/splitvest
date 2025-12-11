'use client';
import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {  FaTwitter,  FaFacebookF,  FaInstagram,  FaPinterestP, FaBehance,} from 'react-icons/fa';

const BlogThreeImage = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [searchParams]);

  const handleNavClick = (targetId: string) => {
    if (pathname === '/') {
      if (targetId === '') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      if (targetId === '') {
        router.push('/');
      } else {
        router.push(`/?section=${targetId}`);
      }
    }
  }; 

  return (
    <div className="mt-48 md:mt-44 lg:mt-40 xl:mt-36 px-6 md:px-8 xl:px-24 py-6 text-white">
      {/*
      <div className="flex items-center gap-3 md:gap-4 xl:gap-5 text-[17px] xl:text-[18px] mb-3 md:mb-3 xl:mb-4 text-[#B4B4CC]">
        <span className='tracking-wide'>Share:</span>
        <FaTwitter className="hover:text-blue-500 cursor-pointer" />
        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
        <FaInstagram className="hover:text-blue-500 cursor-pointer" />
        <FaPinterestP className="hover:text-blue-500 cursor-pointer" />
        <FaBehance className="hover:text-blue-500 cursor-pointer" />
      </div>
      */}

      <div className="text-[17px] text-[#B4B4CC] space-x-2 md:space-x-3 mb-6">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>
        <span>/</span>
        <span
         onClick={() => handleNavClick('blog')}
         className="hover:text-blue-500 cursor-pointer"
        >
          Blog
        </span>
        <span>/</span>
        <span>
          The Role of Blockchain & NFTs in Real Estate Investment with Splitvest
        </span>
      </div>

      <div className="rounded-[0px] overflow-hidden">
        <Image
          src="/images/blog3.jpg"
          alt="blog-1"
          width={600}
          height={600}
          className="w-full h-[800px] object-cover"
        />
      </div>
    </div>
  );
};

export default BlogThreeImage;
