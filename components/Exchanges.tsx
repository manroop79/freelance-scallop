import Image from "next/image";

const Exchanges = () => {
    return (
        <div id="backed-by" className="mt-20">

            <div className="flex justify-center items-center mb-6">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[24px] font-extrabold">Exchanges</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>

            <div className="flex flex-col md:hidden space-y-8">
                <div className="flex flex-row justify-center items-center">
                    <Image src="image 95.svg" alt="Kucoin" width={170} height={60} />
                    <Image src="Frame-1.svg" alt="Gate IO" width={170} height={60} />
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Image src="Frame-2.svg" alt="Mexc" width={207} height={60} />
                </div>
            </div>

            <div className="hidden md:block">
                <div className="flex justify-center items-center gap-x-20 mt-10">
                    <Image src="image 95.svg" alt="Kucoin" width={207} height={60} />
                    <Image src="Frame-1.svg" alt="Gate IO" width={207} height={60} />
                    <Image src="Frame-2.svg" alt="Mexc" width={207} height={60} />
                </div>
            </div>

            <div className="flex justify-center items-center mb-6 mt-20">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[24px] font-extrabold text-center">Incubated By</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>
            <div className="flex justify-center items-center gap-x-20 mt-5 sm:mt-10">
                <Image src="Group-2.svg" alt="Mahadao" width={207} height={60} />
            </div>

            <div className="flex justify-center items-center mb-6 mt-20">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[24px] font-extrabold">Partners</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>

            <div className="flex flex-col md:hidden space-y-8 mt-5">
                <div className="flex flex-row justify-center items-center space-x-4">
                    <Image src="ledger-seeklogo.com 1.svg" alt="Ledger" width={150} height={60} />
                    <Image src="Frame-3.svg" alt="Chainalysis" width={150} height={60} />
                </div>
                <div className="flex flex-row justify-center items-center space-x-4">
                    <Image src="image 37.svg" alt="Market Across" width={150} height={60} />
                    <Image src="image 35.svg" alt="Token 2049" width={150} height={60} />
                </div>
            </div>

            <div className="hidden md:block">
                <div className="flex justify-center items-center gap-x-20 mt-10">
                    <Image src="ledger-seeklogo.com 1.svg" alt="Ledger" width={207} height={60} />
                    <Image src="Frame-3.svg" alt="Chainalysis" width={207} height={60} />
                    <Image src="image 37.svg" alt="Market Across" width={113} height={60} />
                    <Image src="image 35.svg" alt="Token 2049" width={207} height={60} />
                </div>
            </div>

        </div>
    );
}

export default Exchanges;