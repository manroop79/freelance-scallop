import Image from "next/image";

const HardwareWallet = () => {
    return (
        <div id="hardware-wallet">

            <div className="relative flex justify-end">
                <div className="relative">
                    <Image src="Rectangle 553.svg" alt="Rectangle 1" width={144} height={385} className="border-[#1164F4] " />
                    <Image src="Rectangle 555.svg" alt="Rectangle 2" width={126} height={405} className="absolute top-0 left-0 transform -translate-y-2" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row space-y-8 p-8 sm:ml-16">

                <div className="order-1 md:order-2 font-manrope font-bold mt-10 sm:ml-28 mb-3 sm:mb-2">
                    <p className="text-[#1164F4] text-[22px] mb-4">Scallop Hardware Wallet</p>
                    <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#1164F4] bg-clip-text text-transparent mb-5 sm:mb-4 leading-tight">Full control of your<br></br> 
                    crypto and your keys</p>
                    <div className="flex items-start">
                        <Image src="Card Icon.svg" alt="Card-1" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">Store and trade your crypto using Scallop cold<br></br> wallets.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <Image src="Card Icon.svg" alt="Card-2" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F]">Equipped with Infineon Chip <span className="font-semibold">CC EAL 6+ Secure</span><br></br> Element, the highest grade for the financial industry<br></br> to protect your private keys.
                        </p>
                    </div>
                </div>

                <div className="order-2 md:order-1 -mt-10">
                    <Image src="ledger neno s-1 1.svg" alt="Ledger" width={400} height={450} className="-mt-10" />
                </div>

            </div>         
        </div>
    );
}

export default HardwareWallet;