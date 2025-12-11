'use client';
import React from 'react';
import Image from 'next/image';
import { FaTwitter,  FaFacebookF,  FaInstagram,  FaPinterest,  FaBehance, } from 'react-icons/fa';
import { BsFillFileFill } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";
import { useState } from "react";

export default function MintHeader() {
 const account = useActiveAccount();
 
   // Replace the chain with the chain you want to connect to
   const chain = defineChain( sepolia );
 
   const [quantity, setQuantity] = useState(1);
 
   // Replace the address with the address of the deployed contract
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

  return (
    <section className="min-h-screen bg-transparent px-6 md:px-8 xl:px-24 mt-1 pt-44 pb-10 text-white">
      <div className="max-w-[1400px] mx-auto grid xl:grid-cols-[560px_1fr] gap-10 md:gap-14 xl:gap-16 items-stretch rounded-[8px]">
        <div className="min-h-[200px] rounded-[8px] overflow-hidden border border-[#B4B4CC] shadow-xl p-5">
          <MediaRenderer
            client={client}
            src={contractMetadata?.image}
            className="object-cover rounded-[8px] w-full h-full"
            />
        </div>

        <div className="flex flex-col xl:mt-10">
          <h2
            className="text-start text-[32px] md:text-[36px] xl:text-[38px] font-normal tracking-wide leading-[1.0]"
            style={{ color: '#e8d2ff' }}
          >
            Mint Page
          </h2>

          <p className="text-[#B4B4CC] text-start text-[17px] md:text-[18px] tracking-wide leading-normal mt-6 md:mt-7">
            The Blue Horizon is a luxurious beachfront retreat on Lake Michigan, now officially minted as a digital asset on 
            Splitvest. This 5-bedroom, 3-bathroom estate offers 200 feet of private lakefront, 3 wooded acres, and breathtaking 
            views—perfect for relaxation or adventure near Silver Lake and the iconic sand dunes. Enjoy panoramic decks, 
            stargazing, and top attractions nearby. As a digital asset, it offers investors annual rental returns of 3% and 
            capital appreciation between 8–14%. Own a fraction of this premium property and enjoy passive income, scenic beauty, 
            and long-term value—all secured with blockchain technology. Invest smart. Live beautifully.
          </p>

          <div className="mt-6 md:mt-7 flex items-center xl:justify-start gap-4">
            <h4 className="text-white text-[15px] md:text-[16px] tracking-wide mb-0">VIEW ON:</h4>
            <div className="flex items-center gap-4">
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <BsFillFileFill size={18} />
                </button>
                <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-white hover:text-black transition">
                <AiFillEye size={18} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
