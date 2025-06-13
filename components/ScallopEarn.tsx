import Image from "next/image";

const ScallopEarn = () => {
  return (
    <div id="earn">

      <div className="relative flex justify-end mb-8">
        <div className="relative">
          <Image src="Rectangle 553.svg" alt="Rectangle 1" width={144} height={385} className="border-[#1164F4]" />
          <Image src="Rectangle 555.svg" alt="Rectangle 2" width={126} height={405} className="absolute top-0 left-0 transform -translate-y-2" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-8 items-center p-8">

        <div className="order-1 md:order-2 font-manrope font-bold">
          <p className="text-[#1164F4] text-[22px] mb-4">Scallop Earn</p>
          <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#1164F4] bg-clip-text text-transparent mb-5 sm:mb-4 leading-tight">
            DeFi rewards on fiat<br></br> deposits
          </p>
          <div className="flex items-start">
            <Image src="Group 2.svg" alt="Rates" width={32} height={32} className="mr-4" />
            <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
              Earn the best rates from Defi protocols like
              <span className="font-semibold"> Compound</span> and<br></br> <span className="font-semibold">Aave</span> with all the utility and none of
              the complexity.
            </p>
          </div>
        </div>

        <div className="order-2 md:order-1">
          <Image src="Illustration Content.svg" alt="Scallop on mobile" width={609} height={557} />
        </div>

      </div>

    </div>
  );
}

export default ScallopEarn;