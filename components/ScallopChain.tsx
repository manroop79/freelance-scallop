import Image from "next/image";

const ScallopChain = () => {
    return (
        <div id="scallop-chain">

            <div className="relative flex justify-start mt-2 sm:mt-10">
                <div className="relative">
                    <Image src="Rectangle 553.svg" alt="Rectangle 1" width={144} height={385} className="border-[#1164F4] transform scale-x-[-1]" />
                    <Image src="Rectangle 555.svg" alt="Rectangle 2" width={126} height={405} className="absolute top-0 left-0 transform -translate-y-2 scale-x-[-1]" />
                </div>
            </div>


            <div className="flex flex-col md:flex-row space-y-8 p-8 mt-5">
                
                <div className="order-1 md:order-2 font-manrope font-bold">
                    <p className="text-[#1164F4] text-[22px] mb-3 sm:mb-2">Scallop Chain</p>
                    <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#1164F4] bg-clip-text text-transparent mb-5 sm:mb-4 leading-tight">
                    Next-gen cross-chain <br></br>banking platform
                    </p>
                    <div className="flex items-start">
                        <Image src="Group 172-1.svg" alt="Chain 1" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
                            Scallop chain is a complete single-binary blockchain distribution which supports both EVM & WASM based smart contracts.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <Image src="Group 172-1.svg" alt="Chain 2" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F]">
                            Scallop plans to <span className="font-semibold">connect traditional banks with cross blockchain applications. </span>
                            Institutional partners work directly with Scallop, allowing them to create secure custody services, interest bearing savings accounts, debit cards and a fiat on-ramp to crypto.
                        </p>
                    </div>
                </div>

                <div className="order-2 md:order-1">
                    <Image src="3d-connection-1.svg" alt="Round Flowchart" width={609} height={557} className="-mt-14 sm:w-[1900px]" />
                </div>
            </div>
        </div>
    );
}

export default ScallopChain;