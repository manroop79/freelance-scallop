import Image from "next/image";

const ScallopPayments = () => {
    return (
        <div id="payments" className="flex flex-col md:flex-row p-8 sm:ml-32 -mt-16">
            
            <div className="font-manrope font-bold mt-8 sm:mt-28">
                <p className="text-[22px] text-[#2DCA8C] mb-3 sm:mb-2">Scallop Payments</p>
                <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#2DCA8C] bg-clip-text text-transparent mb-5 sm:mb-4 leading-tight">
                    Send & receive fiat & crypto in a click
                </p>
                <div className="flex items-start">
                    <Image src="Group 2-3.svg" alt="Payment" width={32} height={32} className="mr-4" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">Send & receive money in all <span className="font-semibold">major currencies and tokens.</span>
                    </p>
                </div>
                <div className="flex items-start">
                    <Image src="Group 2-3.svg" alt="Payment" width={32} height={32} className="mr-4" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">Make your <span className="font-semibold">payments</span> to any service with <span className="font-semibold">any token or currency</span> in your wallet.
                    </p>
                </div>
            </div>

            <div>
                <Image src="Content Left-3.svg" alt="Mobile 3" width={609} height={557} />
            </div>
            
        </div>
    );
}

export default ScallopPayments;