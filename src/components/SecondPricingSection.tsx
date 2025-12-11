import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Total Rental Income",
    price: "₹3,00,000",
    description: "3% of ₹1 Cr property value",
  },
  {
    price: "₹30,000 (10%)",
    title: "Maintenance Charges",
    description: "Property upkeep, utilities, etc",
  },
  {
    price: "₹30,000 (10%)",
    title: "Management Fee",
    description: "Admin, reporting, tenant handling",
  },
  {
    price: "₹2,40,000",
    title: "Net Distributable",
    description: "Shared among all 5,000 NFT holders",
  },
  {
    price: "₹48/year",
    title: "Per NFT Return",
    description: "That’s ₹4 per month for every ₹2,000 invested",
  },
];

const SecondPricingSection = () => {
  return (
    <section data-section className="bg-transparent text-white px-2 md:px-8 lg:px-24 xl:px-40 py-8 md:py-10">
      <div className="text-center max-w-7xl xl:max-w-3xl mx-auto mb-9 md:mb-12 px-4 md:px-0">
       <h2 className="text-[34px] md:text-[48px] lg:text-[58px] xl:text-[68px] font-sans font-light leading-tight">
          <span className="font-semibold">Rental</span> Income
        </h2>
        <h2 className="hidden md:block md:text-[48px] lg:text-[58px] xl:text-[68px] font-sans font-light leading-tight">
          <span className="font-semibold">& Returns </span> - Explained
        </h2>
         <h2 className="text-[34px] md:hidden font-sans font-light leading-tight">
          <span className="font-semibold">& Returns </span>Explained
        </h2>
        <p className="text-[#B4B4CC] text-[14px] md:text-[16px] lg:text-[17px] xl:text-[18px] mt-7 md:mt-8">
           Annual rental return of ₹3,00,000 (approx. 3%) distributed monthly as ₹25,000 rental pool.
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

export default SecondPricingSection;