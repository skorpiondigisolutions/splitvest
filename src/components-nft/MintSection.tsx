'use client';
import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import Image from "next/image";
import { ConnectButton, MediaRenderer, TransactionButton, useActiveAccount, useReadContract } from "thirdweb/react";
import { client } from "../app/client";
import { defineChain, getContract, toEther } from "thirdweb";
import { sepolia } from "thirdweb/chains";
import { getContractMetadata } from "thirdweb/extensions/common";
import { claimTo, getActiveClaimCondition, getTotalClaimedSupply, nextTokenIdToMint } from "thirdweb/extensions/erc721";

export default function MintSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 34, hours: 9, minutes: 42, seconds: 34 });

  const unitPrice = 0.01;

  const handleIncrement = () => {
    if (quantity < 5) setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  useEffect(() => {
    const end = new Date();
    end.setDate(end.getDate() + 34);
    end.setHours(end.getHours() + 9);
    end.setMinutes(end.getMinutes() + 42);
    end.setSeconds(end.getSeconds() + 34);

    const timer = setInterval(() => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      if (diff < 0) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
    <section className="relative mt-10 mb-20 bg-transparent text-white py-8 md:py-10 rounded-[10px] border border-[#B4B4CC] border-opacity-30 max-w-7xl mx-6 md:mx-8 xl:mx-24">

      <div className="hidden lg:flex absolute top-0 bottom-0 left-1/2 w-px bg-gray-600/30 z-0" />

      <div className="relative inline-block mb-6">
        <div className="mint-tag px-14 py-3 text-black tracking-wide font-medium text-[15px] md:text-[16px]">
            PUBLIC MINT IS LIVE
        </div>
      </div>

      <div className="grid gap-12 md:gap-14 lg:gap-0 lg:grid-cols-2 relative z-10">
        <div className="px-6 md:px-10 xl:px-14 space-y-10 border-r border-gray-600/30">
          <div className="flex gap-6 md:gap-8 mt-6 md:mt-4 xl:mt-2">
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30">
              <p className="text-[16px] md:text-[17px] text-[#b4b4cc]">PRICE</p>
              <h2 className="text-[22px] md:text-[24px]">{unitPrice} ETH</h2>
            </div>
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30 pb-2">
              <p className="text-[16px] md:text-[17px] text-[#b4b4cc]">REMAINING</p>
              {isClaimedSupplyLoading || isTotalSupplyLoading ? (
                <p>Loading...</p>
            ) : (
                <p className="text-[17px] md:text-[18px] mt-2 font-bold">
                Total NFT Supply: {claimedSupply?.toString()}/{totalNFTSupply?.toString()}
                </p>
            )}
            </div>
          </div>

          <div className="flex gap-6 md:gap-8">
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30 pb-2">
              <p className="text-[16px] md:text-[17px] text-[#b4b4cc]">QUANTITY</p>
              <div className="flex items-center gap-4 text-[24px]">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-[22px] md:text-[24px] rounded mr-2 md:mr-4">-</button>
                    <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                    className="w-10 text-center bg-transparent text-white"
                    />
                    <button onClick={() => setQuantity(quantity + 1)} className="text-[22px] md:text-[24px] rounded">+</button>
              </div>
            </div>
            <div className="w-1/2 border-b border-[#b4b4cc] border-opacity-30 pb-2">
              <p className="text-[16px] md:text-[17px] text-[#b4b4cc]">TOTAL PRICE</p>
              <h2 className="text-[19px] md:text-[20px]">{(unitPrice * quantity).toFixed(2)} ETH + GAS</h2>
            </div>
          </div>

          <div className="pt-1 md:pt-2">
            <TransactionButton
            transaction={() => claimTo({
              contract: contract,
              to: account?.address || "",
              quantity: BigInt(quantity),
            })}
            onTransactionConfirmed={async () => {
              alert("NFT Claimed!");
              setQuantity(1);
            }}
          >
            {`Claim NFT (${getPrice(quantity)} ETH)`}
          </TransactionButton>
          </div>

          <p className="text-[15px] md:text-[16px] text-[#b4b4cc] max-w-sm">
            By clicking “MINT NOW” button, you agree to our{' '}
            <span className="text-white text-[15px] md:text-[16px] cursor-pointer">Terms of Service</span> and our{' '}
            <span className="text-white text-[15px] md:text-[16px] cursor-pointer">Privacy Policy</span>.
          </p>
        </div>

        {/* Right Section */}
        <div className="px-6 md:px-10 xl:px-20 space-y-4 md:space-y-6 text-start lg:text-center justify-center lg:mt-8 xl:mt-3">
          <div className="">
            <p className="text-[16px] md:text-[17px] text-[#b4b4cc] mb-1">PUBLIC MINT ENDS IN</p>
            <h2 className="text-[22px] md:text-[24px]">
              {timeLeft.days}d: {timeLeft.hours}h: {timeLeft.minutes}m: {timeLeft.seconds}s
            </h2>
          </div>

          <div className="space-y-2 pt-5">
            <p className='text-[#b4b4cc] text-[17px] md:text-[18px] tracking-wide'>
              Whitelist: <span className="text-white tracking-wide">SOLDOUT</span>{' '}
              <FaCheckCircle className="inline text-green-400" />
            </p>
            <p className='text-[#b4b4cc] text-[17px] md:text-[18px] tracking-wide'>
              Presale: <span className="text-white tracking-wide">SOLDOUT</span>{' '}
              <FaCheckCircle className="inline text-green-400" />
            </p>
          </div>

          <p className="text-[#b4b4cc] text-[15px] md:text-[16px] max-w-5xl lg:max-w-[320px] md:pt-4 xl:pt-5 lg:pl-20">
            You need to pay a GAS fee during minting. We allow max 5 mints per wallet.
          </p>
        </div>
      </div>
    </section>
  );
}
