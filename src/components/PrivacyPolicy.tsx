import React from "react";
import Link from "next/link";

const PrivacyPolicy = () => {
    return(
        <section className="mt-40 py-20 text-white">
            <div> 
                <h2
                  className="text-center text-[36px] md:text-[38px] xl:text-[40px] font-normal tracking-wider uppercase leading-[1.0]"
                  style={{ color: '#e8d2ff' }}
                >
                    Privacy Policy
                </h2>
                <div className="text-[15px] md:text-[16px] xl:text-[17px] text-[#B4B4CC] mt-[26px] tracking-wide text-center">
                    <Link href="/" passHref>
                        <span className="hover:text-blue-500 transition-colors cursor-pointer">Home</span>
                    </Link>
                    <span className="mx-1 md:mx-2 xl:mx-3">/</span>
                    Privacy Policy
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
                        At Splitvest, we respect your privacy and are committed to protecting your personal data. This Privacy 
                        Policy outlines how we collect, use, share, and protect your information when you interact with our 
                        platform and services.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Information We Collect
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                      We may collect the following types of information:
                    </p>
                    <p className="mt-[20px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                      A. Personal Information
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Name, email address, phone number
                        </li>
                        <li>
                           Identity verification documents (e.g., PAN, Aadhaar, Passport)
                        </li>
                        <li>
                           Wallet addresses for blockchain transactions
                        </li>
                    </ul>
                    <p className="mt-[20px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                      B. Usage Data
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Browser type, IP address, time zone
                        </li>
                        <li>
                           Access time, pages viewed, and interaction data
                        </li>
                        <li>
                           Device and app usage patterns
                        </li>
                    </ul>
                    <p className="mt-[20px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                      C. Transaction Data
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            NFT purchases, rental earnings, payouts
                        </li>
                        <li>
                           Transaction history and wallet activity
                        </li>
                    </ul>
                    
                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        How We Use Your Information
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                       We use your data to:
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Verify your identity and enable account setup
                        </li>
                        <li>
                           Facilitate investments, transactions, and earnings
                        </li>
                        <li>
                            Send important updates, rental payouts, and confirmations
                        </li>
                        <li>
                            Improve platform performance and user experience
                        </li>
                        <li>
                            Comply with legal, tax, and regulatory requirements
                        </li>
                        <li>
                            Provide customer support and respond to queries
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        How We Share Your Information
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        We do not sell your data. However, we may share it with:
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Regulatory bodies for compliance
                        </li>
                        <li>
                           Trusted third-party services (e.g., KYC verification, payment processing, analytics)
                        </li>
                        <li>
                            Legal entities when required to enforce or protect Splitvest’s rights
                        </li>
                    </ul>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Blockchain and Public Ledger Notice
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        When you invest, your wallet address and NFT ownership may be recorded on a public blockchain. 
                        This data is publicly accessible and immutable, and Splitvest cannot alter or delete it once written.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Data Security
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        We use advanced encryption, firewalls, and access controls to protect your data. However, 
                        no system is 100% secure. You are responsible for securing your wallet and private keys.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Your Rights
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        You have the right to:
                    </p>
                    <ul className="mt-3 md:mt-4 text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px] list-disc list-inside space-y-3 lg:space-y-4">
                        <li>
                            Access or update your personal data
                        </li>
                        <li>
                           Request deletion of your data (except where legally required to retain it)
                        </li>
                        <li>
                            Withdraw consent to marketing communications
                        </li>
                    </ul>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                       To exercise any of these rights, please contact us at splitvest14@gmail.com
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Third-Party Links
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        Our platform may link to third-party services (e.g., OpenSea, exchanges). We are not responsible 
                        for the privacy practices of those services. Please review their policies separately.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Cookies
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        We use cookies to personalize your experience and analyze platform traffic. You can manage cookie settings 
                        in your browser. See our Cookies Policy for more details.
                    </p>

                    <h2
                     className="text-[32px] mt-10 md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        Changes to This Policy
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] text-[18px] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[18px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]"> 
                       Splitvest may update this policy occasionally. We’ll notify you of significant changes via email 
                       or app notifications.
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
                        For questions or concerns regarding this Privacy Policy: splitvest14@gmail.com
                    </p>
                </div>
            </div> 
        </section>
    );
}

export default PrivacyPolicy