import Image from "next/image";

const ScallopNFT = () => {
    return (
        <div id="nft" className="flex flex-col md:flex-row ml-7 sm:ml-40 -mt-20 sm:mt-8">
            
            <div className="font-manrope font-bold mt-32">
                <p className="text-[22px] text-[#2DCA8C] mb-4">Scallop NFT</p>
                <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#2DCA8C] bg-clip-text text-transparent leading-tight mb-5 sm:mb-4">
                    Trade NFTs with fiat<br></br>for the first time
                </p>
                <div className="flex items-start mr-4 sm:mr-0">
                    <Image src="chart-pie.svg" alt="Rates" width={50} height={32} className="mr-3 mt-1 sm:mt-0" />
                    <p className="text-[18px] font-normal text-[#4F4F4F] mb-4 mr-5">Earn the best rates from Defi protocols like 
                    <span className="font-semibold"> Compound</span> and <span className="font-semibold">Aave</span> with all the utility and none of 
                    the complexity.
                    </p>
                </div>
            </div>

            <Image src="Content Left.svg" alt="Mobile 2" width={609} height={557} />
        </div>
    );
}

export default ScallopNFT;