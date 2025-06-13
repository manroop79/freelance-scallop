'use client'
import Image from "next/image";
import { useState } from "react";

const Team = () => {

    type ButtonType = 'core' | 'advisory';
    const [activeButton, setActiveButton] = useState<ButtonType | null>('core');

    const handleClick = (button: ButtonType) => {
        setActiveButton(button);
    }
    return (
        <div id="team" className="mt-20">

            <div className="flex justify-center items-center mb-6">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[32px] font-extrabold">Team</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>
            <p className="font normal text-[#4F4F4F] text-[18px] text-center -mt-4">
                Domain experts from technology, finance and compliance coming together to pioneer <br></br>crypto-first banking.
</p>
            <div className="relative flex justify-end">
                <div className="relative">
                    <Image src="Rectangle 553.svg" alt="Rectangle 1" width={144} height={385} className="border-[#1164F4] " />
                    <Image src="Rectangle 555.svg" alt="Rectangle 2" width={126} height={405} className="absolute top-0 left-0 transform -translate-y-2" />
                </div>
            </div>

            <div className="flex justify-center items-center gap-x-4">
                <button
                    // Apply conditional classes based on the active button state
                    className={`p-2 rounded-[8px] shadow-lg font-manrope text-[18px] ${
                    activeButton === 'core' ? 'bg-gray-50 shadow-xl text-[#1164F4]' : 'text-[#4F4F4F]'
                    }`}
                    // Set up the onClick event to call handleClick with 'core' as the argument
                    onClick={() => handleClick('core')}
                >
                    Core Team
                </button>
                <button
                    // Apply conditional classes based on the active button state
                    className={`p-2 rounded-[8px] shadow-lg font-manrope text-[18px] ${
                    activeButton === 'advisory' ? 'bg-gray-50 shadow-xl text-[#1164F4]' : 'text-[#4F4F4F]'
                    }`}
                    // Set up the onClick event to call handleClick with 'advisory' as the argument
                    onClick={() => handleClick('advisory')}
                >
                    Advisory Team
                </button>
            </div>

            <div className="mt-10">

                {activeButton === 'core' && (
                    <div>

                        <div className="flex flex-col md:hidden space-y-7">
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <Image src="Frame 1680.svg" alt="Team Member 1" width={150} height={220} />
                                <Image src="Frame 1681.svg" alt="Team Member 2" width={150} height={220} />
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <Image src="Frame 1682.svg" alt="Team Member 3" width={150} height={220} />
                                <Image src="Frame 1682-1.svg" alt="Team Member 4" width={150} height={220} />
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <Image src="Frame 1684.svg" alt="Team Member 1" width={150} height={220} />
                                <Image src="Frame 1683.svg" alt="Team Member 2" width={150} height={220} />
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <Image src="Frame 1685.svg" alt="Team Member 3" width={150} height={220} />
                            </div>
                        </div>

                        
                        <div className="hidden md:block">
                            <div className="flex justify-center items-center gap-x-10">
                                <Image src="Frame 1680.svg" alt="Team Member 1" width={150} height={220} />
                                <Image src="Frame 1681.svg" alt="Team Member 2" width={150} height={220} />
                                <Image src="Frame 1682.svg" alt="Team Member 3" width={150} height={220} />
                                <Image src="Frame 1682-1.svg" alt="Team Member 4" width={150} height={220} />
                            </div>
                            <div className="flex justify-center items-center gap-x-10 mt-8">
                                <Image src="Frame 1684.svg" alt="Team Member 1" width={150} height={220} />
                                <Image src="Frame 1683.svg" alt="Team Member 2" width={150} height={220} />
                                <Image src="Frame 1685.svg" alt="Team Member 3" width={150} height={220} />
                            </div>
                        </div>

                    </div>
                )}

                {activeButton === "advisory" && (

                    <div>
                        <div className="flex flex-col md:hidden space-y-7">
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <Image src="Group 1686.svg" alt="Team Member 1" width={150} height={220} />
                                <Image src="Frame 1685.svg" alt="Team Member 2" width={150} height={220} /> 
                            </div>
                            <div className="flex flex-row justify-center items-center gap-x-5">
                                <Image src="Group 1688.svg" alt="Team Member 3" width={150} height={220} />
                            </div>
                        </div>


                        <div className="hidden md:block">
                            <div className="flex justify-center items-center gap-x-10">
                            <Image src="Group 1686.svg" alt="Team Member 1" width={150} height={220} />
                            <Image src="Frame 1685.svg" alt="Team Member 2" width={150} height={220} />
                            <Image src="Group 1688.svg" alt="Team Member 3" width={150} height={220} />
                            </div>
                        </div>

                    </div>
                    
                )}
            </div>

        </div>
    );
}

export default Team;