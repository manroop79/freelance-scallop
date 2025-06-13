import Image from "next/image";

const KeyFeatures = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full sm:w-auto h-auto text-black font-manrope mt-14 p-8">
      <div className="flex justify-center items-center text-center mb-8">
        <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
        <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[24px] font-extrabold">Key Features</div>
        <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
      </div>

      <div className="w-full overflow-x-auto p-2 sm:mt-6">
        <div className="flex flex-wrap justify-center space-y-2 md:space-y-0 md:space-x-8">
          
          <div className="flex-none w-full md:w-[30%] h-[280px] bg-white hover:scale-110 transform transition-transform duration-300 rounded-lg shadow-lg flex items-center justify-center">
            <div className='flex flex-col items-start text-[#4F4F4F] font-manrope text-[18px] p-2'>
              <div className='flex flex-col'>
                <div className="flex flex-row gap-x-2">
                  <Image src="/642445 1.svg" alt='House' width={82} height={80} />
                  <p className="font-bold text-[#162647] text-[20px] text-center leading-tight">Store crypto and fiat<br /> in one place</p>
                </div>
                <div className="flex items-baseline mt-2 ml-4">
                  <Image src="Group 1581.svg" alt="Tick Mark" width={17} height={6} />
                  <p className='text-[#4F4F4F] text-[16px] ml-2 sm:ml-4 leading-tight'>Access traditional and decentralised finance with zero friction.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none w-full md:w-[30%] h-[280px] bg-white hover:scale-110 transform transition-transform duration-300 rounded-lg shadow-lg flex items-center justify-center">
            <div className='flex flex-col items-start text-[#4F4F4F] font-manrope text-[18px] p-2'>
              <div className='flex flex-col'>
                <div className="flex flex-row gap-x-2">
                  <Image src="Group 32150.svg" alt='House' width={82} height={80} />
                  <p className="font-bold text-[#162647] text-[20px] text-center leading-tight">Access DeFi from<br /> a banking account</p>
                </div>
                <div className="flex items-baseline mt-2 ml-4">
                  <Image src="Group 1581.svg" alt="Tick Mark" width={17} height={6} />
                  <p className='text-[#4F4F4F] text-[16px] ml-2 sm:ml-4 leading-tight'>All the functionality of protocols<br /> without the complexity.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-none w-full md:w-[30%] h-[280px] bg-white hover:scale-110 transform transition-transform duration-300 rounded-lg shadow-lg flex items-center justify-center">
            <div className='flex flex-col items-start text-[#4F4F4F] font-manrope text-[18px] p-2'>
              <div className='flex flex-col space-y-8'>
                <div className="flex flex-row gap-x-2 mt-5">
                  <Image src="Group 32180.svg" alt='House' width={40} height={71} />
                  <p className="font-bold text-[#162647] text-[20px] text-center leading-tight ml-2">Keep full control of<br /> your keys</p>
                </div>
                <div className="flex items-baseline mt-7 ml-4">
                  <Image src="Group 1581.svg" alt="Tick Mark" width={17} height={6} />
                  <p className='text-[#4F4F4F] text-[16px] ml-2 sm:ml-4 leading-tight'>Our wallets are secured with CC<br /> EAL6+ Secure element; Secure<br /> Java OS.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;