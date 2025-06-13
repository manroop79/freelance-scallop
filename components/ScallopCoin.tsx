import Image from "next/image";
import { BackgroundBeams } from "./BackgroundBeams";

const ScallopCoin = () => {
    return (
        <div className="relative rounded-lg mt-14 mx-5 sm:mx-20 p-0 sm:p-16 lighting-beams">
            <BackgroundBeams />
            <div className="flex flex-col md:flex-row font-manrope mx-0 sm:mx-10 sm:-mt-20 relative z-10">
                <div className="flex flex-col mt-10 sm:mt-20 ml-0 md:ml-24 order-1 md:order-2">
                    <p className="text-[20px] text-center md:text-left">Introducing</p>
                    <p className="bg-gradient-to-r from-[#FFFFFF] to-[rgba(254, 254, 254, 0.5)] bg-clip-text text-transparent text-[48px] font-bold text-center mb-2 md:text-left">Scallop Coin</p>
                    <p className="text-[18px] ml-4 text-left">Scallop Coin (SCLP) is a native ERC20 token of the Scallop platform that empowers the Scallop Ecosystem. SCLP has multiple uses:</p>
                    <div className="flex justify-start mt-4 mx-2">
                        <Image src="Group 172.svg" alt="Tick Mark" width={32} height={32} />
                        <span className="ml-2 mt-1">For receiving trading bonus payments and much more</span>
                    </div>
                    <div className="flex justify-start mt-2 mx-2">
                        <Image src="Group 172.svg" alt="Tick Mark" width={32} height={32} />
                        <span className="ml-2 mt-1">Stake SCLP to open accounts and access services</span>
                    </div>
                    <div className="flex justify-start mt-2 mx-2">
                        <Image src="Group 172.svg" alt="Tick Mark" width={32} height={32} />
                        <span className="ml-2 mt-1">Payment of transaction fees</span>
                    </div>
                    <div className="flex justify-start mt-2 mx-2">
                        <Image src="Group 172.svg" alt="Tick Mark" width={32} height={32} />
                        <span className="ml-2 mt-1">Transaction fees, exchange fees and monthly management fees</span>
                    </div>
                </div>
                <div className="order-2 md:order-1 flex justify-center md:justify-start -mt-24 md:mt-0">
                    <Image src="Group 32197.svg" alt="Coin" width={500} height={500} className="w-52 sm:w-96" />
                </div>
            </div>
        </div>
    );
}

export default ScallopCoin;