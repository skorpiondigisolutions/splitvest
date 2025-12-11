'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import Image from "next/image";
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";

const navItems = [
  { label: 'Home', targetId: '' },
  { label: 'About', targetId: 'about' },
  { label: 'Collection', targetId: 'collection' },
  { label: 'Blog', targetId: 'blog' },
  { label: 'Contact', targetId: 'contact' },
];

const mobileLinks = [
  { label: 'Home', href: '/' },
  { label: 'Mint Page', href: '/nft-main' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Coming Soon', href: '/coming-soon' },
  { label: 'Blog', href: '/blogs' },
  { label: 'Privacy Policy', href: '/policies/privacy-policy' },
  { label: 'Terms & Conditions', href: '/policies/terms&conditions' },
  { label: 'Cookies', href: '/policies/cookies' },
];

const MintNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const account = useActiveAccount();
  
    const chain = defineChain( sepolia );
    const [quantity, setQuantity] = useState(1);
  
    const contract = getContract({
      client: client,
      chain: chain,
      address: "0x297586c0F0F9DC168bFeDAB7Ef71675452E37eAB"
    });
  
    const { data: contractMetadata, isLoading: isContractMetadataLaoding } = useReadContract( getContractMetadata,
      { contract: contract }
    );
  
    const { data: claimedSupply, isLoading: isClaimedSupplyLoading } = useReadContract( getTotalClaimedSupply,
      { contract: contract}
    );
  
    const { data: totalNFTSupply, isLoading: isTotalSupplyLoading } = useReadContract( nextTokenIdToMint,
      { contract: contract }
    );
  
    const { data: claimCondition } = useReadContract( getActiveClaimCondition,
      { contract: contract }
    );
  
    const getPrice = (quantity: number) => {
      const total = quantity * parseInt(claimCondition?.pricePerToken.toString() || "0");
      return toEther(BigInt(total));
    }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        border-b ${
          scrolled
            ? 'bg-[#150e1d] shadow-md py-[17px] border-b-[#B4B4CC] border-opacity-30 hidden xl:block'
            : 'bg-transparent py-5 md:py-8 lg:py-7 xl:py-6 border-transparent'
        }`}
    >

      <nav className="w-full mx-auto flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center md:gap-1">
          <button
            onClick={toggleMobileMenu}
            className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full bg-black flex items-center justify-center hover:shadow-[0_0_15px_#a400ff]"
          >
            <Menu className="text-white w-5 h-5 md:w-[22px] md:h-[22px] lg:w-6 lg:h-6" />
          </button>
          <div>
            <Image
              src="/images/logo.png"
              alt="Meta Portal Logo"
              width={120}
              height={40}
              className="h-auto w-[120px] md:w-[130px] lg:w-[140px] xl:w-[150px]"
            />
          </div>
        </div>

        <div className="hidden xl:flex items-center gap-10">
          {navItems.map(({ label, targetId }) => (
            <a
              key={label}
              onClick={() => handleNavClick(targetId)}
              className="text-white text-[18px] relative cursor-pointer transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex">
          <div className="text-[12px] md:text-[14px] tracking-wider rounded-[8px] uppercase">
            <ConnectButton
              client={client}
              chain={chain}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-80 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      >
        {/* Side drawer */}
        <div
          className={`h-full overflow-y-auto overscroll-contain bg-[#0e0b10] md:w-[50%] lg:w-[40%] xl:w-[30%] transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full px-6 py-6 md:py-8">
            <div className="flex justify-between items-center">
              <div>
                <Image
                  src="/images/logo.png"
                  alt="Meta Portal Logo"
                  width={120}
                  height={40}
                  className="h-auto w-[120px] md:w-[130px] lg:w-[140px] xl:w-[150px]"
                />
              </div>
              <button onClick={toggleMobileMenu} className="text-white text-[30px] md:text-[34px]">
                ×
              </button>
            </div>

            <div className="flex-1 flex flex-col space-y-4 md:space-y-6 lg:mt-8 items-center justify-center">
              {mobileLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center"
                >
                  <span className="relative inline-block text-white md:text-[18px] font-medium transition-colors duration-300 hover:text-blue-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MintNavigation;