import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Total Property Price",
    price: "₹1,00,00,000",
    description: "Inclusive of all fees and charges",
  },
  {
    price: "9% = ₹9,00,000",
    title: "Registration Charges",
    description: "Government registration & legal documentation",
  },
  {
    price: "6% = ₹6,00,000",
    title: "Management & Setup Fee",
    description: "Platform onboarding, legal, due diligence & setup costs",
  },
  {
    price: "5,000",
    title: "Total NFTs (Blocks)",
    description: "Property is split into 5,000 equal fractional shares",
  },
  {
    price: "₹2000",
    title: "Price per NFT (Block)",
    description: "1 NFT = 1 fractional ownership share in the property",
  },
];

const PricingSection = () => {
  return (
    <section data-section className="bg-transparent text-white px-2 md:px-8 lg:px-24 xl:px-40 pt-44 lg:pt-44 md:pt-48 xl:pt-40 pb-10">
      <div className="text-center max-w-7xl xl:max-w-3xl mx-auto mb-9 md:mb-12 px-4 md:px-0">
       <h2 className="text-[34px] md:text-[48px] lg:text-[58px] xl:text-[68px] font-sans font-light leading-tight">
          <span className="font-semibold">Fractional</span> Ownership
        </h2>
        <h2 className="hidden md:block md:text-[48px] lg:text-[58px] xl:text-[68px] font-sans font-light leading-tight">
          <span className="font-semibold">NFT Pricing </span> - Explained
        </h2>
        <h2 className="text-[34px] md:hidden font-sans font-light leading-tight">
          <span className="font-semibold">NFT Pricing </span>Explained
        </h2>
        <p className="text-[#B4B4CC] text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] mt-7 md:mt-8">
           Property Investment Breakdown (Example: Property Worth ₹1 Crore)
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-violet-500">
          <thead>
            <tr>
              <th className="border border-violet-500 px-4 md:px-6 py-4 text-center text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] uppercase font-semibold tracking-wide">Income Component</th>
              <th className="border border-violet-500 px-4 md:px-6 py-4 text-center text-[14px] md:text-[16px] lg:text-[17px] x;:text-[18px] uppercase font-semibold tracking-wide">Amount (₹)</th>
              <th className="border border-violet-500 px-4 md:px-6 py-4 text-center text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] uppercase font-semibold tracking-wide">Description</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((plan, index) => (
              <tr key={index}>
                <td className="border border-violet-500 px-4 md:px-6 py-3 md:py-4 text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-center">{plan.title}</td>
                <td className="border border-violet-500 px-4 md:px-6 py-3 md:py-4 text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] text-center">{plan.price}</td>
                <td className="border border-violet-500 px-4 md:px-6 py-3 md:py-4 text-[14px] md:text-[16px] lg:text-[17px]xl:text-[18px] text-center">{plan.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PricingSection;