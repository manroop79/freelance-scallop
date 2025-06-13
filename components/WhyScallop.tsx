import Image from "next/image";

const WhyScallop = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[500] text-black font-manrope border-b shadow-custom-blue-bottom mt-5 mb-0 sm:mt-10 sm:mb-10 md:p-8">

            <div className="flex justify-center items-center text-center mb-3">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[24px] font-extrabold">Why Scallop</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>

            <div className="flex justify-center items-center text-center font-bold text-[44px] sm:text-[48px] mb-2 leading-[60px]">
                Banking, the way it should be.
            </div>
            <p className="text-[#4F4F4F] text-[18px] text-center mb-14 mt-2 mx-5">
                Our mission is to bring digital assets into mainstream use and bridge the gap between decentralised and traditional finance.
                For the first time, store crypto & fiat in one place. Your crypto, your keys.
            </p>

            <div className="flex justify-center items-center">
                <Image src="Illustration.svg" alt="Why Scallop" width={900} height={500} />
            </div>

        </div>
    );
}

export default WhyScallop;