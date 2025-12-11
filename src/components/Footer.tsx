import React from 'react';

const Footer = () => {
  return (
    <footer
      className="mt-20 flex flex-col gap-3 md:flex-row md:justify-between items-center text-[#b4b4cc] border-t border-[white] border-opacity-30 py-[36px] px-0 md:px-8 xl:px-24"
    >
      <p className="text-[16px] md:text-[17px]">
        Copyright 2025 — All Rights{' '}
        <span style={{ color: '#ffffff' }}>Reserved</span>
      </p>
      <div className="text-[16px] md:text-[17px] flex gap-3 md:gap-5 xl:gap-6 mt-2 md:mt-0">
        <a href="/policies/privacy-policy" className="hover:text-blue-500">
          Privacy Policy
        </a>
        <a href="/policies/cookies" className="hover:text-blue-500">
          Cookies
        </a>
        <a href="/policies/terms&conditions" className="hover:text-blue-500">
          Terms & Conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
