import Image from "next/image";

const ScallopExchange = () => {
    return (
        <div id="token">

            <div className="relative flex justify-start mt-10">
                <div className="relative">
                    <Image src="Rectangle 553.svg" alt="Rectangle 1" width={144} height={385} className="border-[#1164F4] transform scale-x-[-1]" />
                    <Image src="Rectangle 555.svg" alt="Rectangle 2" width={126} height={405} className="absolute top-0 left-0 transform -translate-y-2 scale-x-[-1]" />
                </div>
            </div>


            <div className="flex flex-col md:flex-row space-y-8 mt-4 p-6 sm:p-1">

                <div className="font-manrope font-bold order-1 md:order-2 sm:mt-10">
                    <p className="text-[#2DCA8C] text-[22px] sm:mt-20">Scallop Exchange</p>
                    <p className="text-[45px] bg-gradient-to-r from-[#000000] to-[#2DCA8C] bg-clip-text text-transparent mb-5 sm:mb-4 mt-2 leading-snug">
                        Fiat currencies<br></br> meet native tokens
                    </p>
                    <div className="flex items-start">
                        <Image src="Group 2-2.svg" alt="Rates" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
                            <span className="font-semibold">Exchange</span> crypto and defi <span className="font-semibold">tokens to</span> fiat and vice versa through<br></br> a direct link to Uniswap for
                            seamless trading.
                        </p>
                    </div>
                </div>

                <div className="order-2 md:order-1">
                    <Image src="Illustration Content (2).svg" alt="Scallop on mobile-1" width={609} height={557} />
                </div>

            </div>
        </div>
    );
}

export default ScallopExchange;