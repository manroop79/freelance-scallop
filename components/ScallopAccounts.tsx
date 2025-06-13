import Image from "next/image";

const ScallopAccounts = () => {
    return (
        <div id="accounts" className="flex flex-col md:flex-row p-8 sm:ml-32 -mt-10">
            
            <div className="font-manrope font-bold mt-20 sm:mt-32">
                <p className="text-[22px] text-[#1164F4] mb-3 sm:mb-2">Scallop Accounts</p>
                <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#1164F4] bg-clip-text text-transparent leading-tight mb-5 sm:mb-4">
                Your global fiat accounts
                </p>
                <div className="flex items-start">
                    <Image src="Vector.svg" alt="Rates" width={20} height={20} className="mr-4" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4 -mt-1 sm:mt-0">
                        Open <span className="font-semibold">GBP</span> and <span className="font-semibold">IBAN</span> accounts for daily use, for both personal and business users.
                    </p>
                </div>
                <div className="flex items-start">
                    <Image src="Vector.svg" alt="Rates" width={20} height={20} className="mr-4" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4 -mt-1 sm:mt-0">
                        Over 15 multi currency fiat wallets which can accumulate interest through Scallop Earn.
                    </p>
                </div>
                <div className="flex justify-between gap-[4px] sm:gap-[2px] font-manrope text-[15px] sm:text-[18px] font-normal text-white mt-2 sm:mt-5 p-4 bg-gray-500 rounded-lg">
                        Coming soon for 747M users in:
                        <Image src="Mask Group.svg" alt="Country Flags" width={48} height={32} />
                        <Image src="565234 1.svg" alt="Country Flags" width={48} height={32} />
                </div>
            </div>

            <Image src="Bank Illustration.svg" alt="Mobile 2" width={609} height={557} className="ml-5 sm:ml-20 mt-2 sm:mt-20" />
        </div>
    );
}

export default ScallopAccounts;