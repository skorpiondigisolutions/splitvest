import React from "react";
import Link from "next/link";

const CookieSection = () => {
    return(
        <section className="mt-40 py-20 text-white">
            <div> 
                <h2
                  className="text-center text-[36px] md:text-[38px] xl:text-[40px] font-normal tracking-wider uppercase leading-[1.0]"
                  style={{ color: '#e8d2ff' }}
                >
                    Cookies
                </h2>
                <div className="text-[15px] md:text-[16px] xl:text-[17px] text-[#B4B4CC] mt-[26px] tracking-wide text-center">
                    <Link href="/" passHref>
                        <span className="hover:text-blue-500 transition-colors cursor-pointer">Home</span>
                    </Link>
                    <span className="mx-1 md:mx-2 xl:mx-3">/</span>
                    Cookies
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
                   <h2
                     className="text-[32px] md:text-[34px] lg:text-[35px] font-normal tracking-wider leading-[1.0]"
                     style={{ color: '#e8d2ff' }}
                    >
                        How Splitvest Uses Cookies
                    </h2>
                    <div className="relative flex items-center mt-3 w-32 h-6">
                        <span className="relative z-10 text-[#B4B4CC] md:text-[19px] lg:text-[20px] ml-1">//</span>
                        <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                            <div className="w-full h-[1.5px] bg-[#B4B4CC]" />
                        </div>
                    </div>
                    <p className="mt-[19px] text-[#B4B4CC] text-[16px] md:text-[17px] lg:text-[18px]">
                        Splitvest uses cookies and similar technologies to enhance your experience, improve platform functionality, 
                        and help us understand user behavior. By continuing to use our website or app, you consent to the use of 
                        cookies as outlined in this policy.
                    </p>
                </div>
            </div> 
        </section>
    );
}

export default CookieSection