import Image from "next/image";

const ScallopGuarantee = () => {
    return (
        <div className="flex flex-col md:flex-row p-8 sm:ml-32">
            
            <div className="font-manrope font-bold -mt-8 sm:mt-2">
                <p className="text-[22px] text-[#1164F4] mb-3 sm:mb-2">Scallop Guarantee</p>
                <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#1164F4] bg-clip-text text-transparent mb-5 sm:mb-4 leading-tight">
                Regulated, secured<br></br> and insured
                </p>
                <div className="flex items-start">
                    <Image src="1650974 1.svg" alt="Shield 1" width={20} height={20} className="mr-4 mt-0.5 sm:mt-0" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
                        Regulated as an EMD for an Electronic Money Institution (EMI) in the UK and as Electronic Money Intermediary in Europe.
                    </p>
                </div>
                <div className="flex items-start">
                    <Image src="1650974 1.svg" alt="Shield 2" width={20} height={20} className="mr-4 mt-0.5 sm:mt-0" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
                        Scallop cold/hot storage are insured by our partners against loss by up to <span className="font-semibold">$100 million.</span>
                    </p>
                </div>
                <div className="flex items-start">
                    <Image src="1650974 1.svg" alt="Shield 3" width={20} height={20} className="mr-4 mt-0.5 sm:mt-0" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
                        Fiat funds are stored under <span className="font-semibold">FCA</span> regulation with all money safeguarded by licensed banks.
                    </p>
                </div>
            </div>

            <Image src="Shield4 1.svg" alt="Big Shield" width={459} height={459} className="sm:ml-20 sm:mt-2" />
        </div>
    );
}

export default ScallopGuarantee;