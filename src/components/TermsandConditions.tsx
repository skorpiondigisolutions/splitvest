import React from "react";
import Link from "next/link";

const TermsandConditions = () => {
    return(
        <section className="mt-40 py-20 text-white">
            <div> 
                <h2
                  className="text-center text-[36px] md:text-[38px] xl:text-[40px] font-normal tracking-wider uppercase leading-[1.0]"
                  style={{ color: '#e8d2ff' }}
                >
                    Terms & Conditions
                </h2>
                <div className="text-[15px] md:text-[16px] xl:text-[17px] text-[#B4B4CC] mt-[26px] tracking-wide text-center">
                    <Link href="/" passHref>
                        <span className="hover:text-blue-500 transition-colors cursor-pointer">Home</span>
                    </Link>
                    <span className="mx-1 md:mx-2 xl:mx-3">/</span>
                    Terms & Conditions
                </div>
            </div>

            <div className="flex items-center justify-center w-full mt-16 pt-[10px]">
                <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />

                <div className="flex items-center gap-3 px-6">
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                    <div className="w-[200px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                    <div className="w-[12px] h-[12px] rounded-full border-2 border-[#b4b4cc] opacity-70" />
                </div>

                <div className="flex-1 h-px bg-[#b4b4cc] opacity-40" />
            </div> 

            <div className="px-6 md:px-8 xl:px-24 mt-36">
                <div className="max-w-7xl">
                    <p className="mt-[19px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        Welcome to Splitvest. By accessing or using our platform, services, website, and NFT-based investment 
                        offerings, you agree to be bound by the following Terms and Conditions. Please read them carefully.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                       Eligibility
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        You must be at least 18 years old and legally capable of entering into binding contracts under 
                        applicable laws to invest through Splitvest.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Nature of Investment
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Investments on Splitvest are made via fractional ownership of real estate, 
                            represented through NFT tokens.
                        </li>
                        <li>
                           Splitvest does not sell entire properties but offers tokenized shares backed by physical real estate.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        NFT Ownership & Rights
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Each NFT represents a fractional share in a specific property.
                        </li>
                        <li>
                           NFT holders are entitled to proportional rental income after deducting maintenance and management fees.
                        </li>
                        <li>
                           Ownership of NFTs does not grant legal ownership of land or property titles; it provides economic 
                           benefits linked to the asset.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Returns & Income Distribution
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Rental returns are projected at approximately 3% annually, distributed monthly.
                        </li>
                        <li>
                           Maintenance and management fees (as disclosed per project) will be deducted before distribution.
                        </li>
                        <li>
                           Splitvest reserves the right to adjust payout schedules based on tenant occupancy and property performance.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Fees and Charges
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        All fees, including registration (9%) and setup and management (6%), are included in the property pricing.
                    </p>
                    <p className="mt-6 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        The platform may charge transaction or resale fees during the buying or selling of NFTs.
                    </p>
                    <p className="mt-6 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        A royalty fee of 5% will also be applied to all secondary sales of NFTs, payable to the platform for 
                        ongoing support, maintenance, and development of the Splitvest ecosystem.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Marketplace & Liquidity
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            NFTs may be sold on Splitvest’s resale marketplace or third-party platforms (e.g., OpenSea).
                        </li>
                        <li>
                           Splitvest does not guarantee liquidity or resale demand at any point.
                        </li>
                        <li>
                           Prices in the secondary market are determined by buyers and sellers.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Platform Use & Wallet Integration
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Users are responsible for securing their wallets (e.g., MetaMask) and private keys.
                        </li>
                        <li>
                           Splitvest is not liable for any loss due to compromised wallets or user error.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Staking & Token Utilities
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                           Splitvest may offer staking opportunities or utility tokens in the future.
                        </li>
                        <li>
                           Terms of staking or token usage will be separately notified.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Risk Disclosure
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <ul className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            All investments carry risks, including but not limited to: market volatility, regulatory changes, 
                            tenant default, and liquidity challenges.
                        </li>
                        <li>
                           Past performance does not guarantee future returns.
                        </li>
                        <li>
                           Investors are advised to conduct their own due diligence or consult financial advisors.
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Limitation of Liability
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                       Splitvest is not responsible for:
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Market losses or decline in NFT value
                        </li>
                        <li>
                           Technical failures or delays
                        </li>
                        <li>
                           Regulatory actions affecting NFT or real estate markets
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Changes to Terms
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                       Splitvest reserves the right to modify these Terms at any time. Updated terms will be posted on our website, 
                       and continued use of the platform signifies acceptance.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Governing Law
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        These Terms are governed by and construed in accordance with the laws of India. Disputes, if any, 
                        shall be subject to the jurisdiction of the courts in  Chennai.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Contact Us
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                       For any queries or concerns, reach us at:
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            <a href="mailto:info@skorpion.in" className="hover:text-blue-500">
                                info@skorpion.in
                            </a>
                        </li>
                        <li>
                            <a href="tel:9600052850" className="hover:text-blue-500">
                                9600052850
                            </a>
                        </li>
                    </ul>
                </div>
            </div> 
        </section>
    );
}

export default TermsandConditions