import Image from "next/image";

const Hero = () => {
  return (
    <div className="mt-[30px] flex flex-col items-center text-center">
      <p className="text-[18px] font-manrope text-[#8B959E99] opacity-60 mt-1">
        INTRODUCING
      </p>
      <p className="font-clash-grotesk text-[96px] text-[#000000] font-semibold mt-2 leading-[90px]">
        World&apos;s First
      </p>
      <span className="font-clash-grotesk text-[60px] sm:text-[64px] font-semibold bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] bg-clip-text text-transparent leading-[77px] mt-2">
        DeFi Powered Regulated Accounts
      </span>
      <p className="font-manrope font-normal text-[18px] text-[#0D152E] text-center my-4 mx-1">
        Scallop is an innovative banking ecosystem for users that want a faster, more efficient way to 
        <br />
        securely manage their crypto + fiat in a single place.
      </p>

      <Image src="Hero.svg" alt="Hero Image" width={1705} height={400} className="my-0" />
      <div className="flex justify-between gap-[16px] font-manrope text-[14px] sm:text-[16px] font-normal rounded-[16px] py-[15px] px-[28px] shadow-custom text-[#4F4F4F] opacity-65 mt-4 sm:mt-0">
        Coming soon for 747M users in:
        <Image src="Group 1648.svg" alt="Country Flags" width={100} height={24} />
      </div>
    </div>
  );
}

export default Hero;