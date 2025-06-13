import Image from "next/image";
import Link from "next/link";

const Bottom = () => {
  return (
    <div className="mt-20">
      <div className="relative flex justify-end">
        <div className="relative">
          <Image
            src="Rectangle 553.svg"
            alt="Rectangle 1"
            width={144}
            height={385}
            className="border-[#1164F4]"
          />
          <Image
            src="Rectangle 555.svg"
            alt="Rectangle 2"
            width={126}
            height={405}
            className="absolute top-0 left-0 transform -translate-y-2"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-x-4 mt-10 sm:-mt-10 sm:px-32 px-8">
        <div className="sm:ml-10 -mt-16 sm:mt-0 sm:mr-10">
          <Image src="Group 11.svg" alt="logo" width={156} height={40} />
          <p className="font-manrope text-[#03031999] bg-opacity-60 text-[18px] mt-3">
            Banking as a service, the way it should be.
          </p>
          <button className="bg-[#E5F1FF] rounded-full w-[224px] h-[48px] mt-8 text-[#1164F4]">
            <div className="flex gap-x-2 p-2 ml-3">
              <Image
                src="1502312 1.svg"
                alt="Download"
                width={24}
                height={24}
              />
              <span className="text-[16px] font-manrope">
                Download Lite paper
              </span>
            </div>
          </button>
          <Image
            src="Social.svg"
            alt="Social Handles"
            width={350}
            height={50}
            className="-ml-5 sm:ml-0 mt-7"
          />
        </div>

        <div className="flex flex-row gap-x-10 sm:gap-x-24 mt-10 md:mt-0 w-full">

          <div className="flex flex-col space-y-2">
            <p className="font-manrope text-[24px] text-[#030319] mb-2">
              Products
            </p>
            <Link href="#earn" className="text-[16px] text-[#03031999] bg-opacity-60">
              Earn
            </Link>
            <Link href="#nft" className="text-[16px] text-[#03031999] bg-opacity-60">
              NFT
            </Link>
            <Link href="#token" className="text-[16px] text-[#03031999] bg-opacity-60">
              Token
            </Link>
            <Link href="#scallop-chain" className="text-[16px] text-[#03031999] bg-opacity-60">
              Scallop Chain
            </Link>
          </div>

          <div className="flex flex-col space-y-2">
            <p className="font-manrope text-[24px] text-[#030319] mb-2">
              Banking
            </p>
            <Link href="#accounts" className="text-[16px] text-[#03031999] bg-opacity-60">
              Accounts
            </Link>
            <Link href="#cards" className="text-[16px] text-[#03031999] bg-opacity-60">
              Cards
            </Link>
            <Link href="#hardware-wallet" className="text-[16px] text-[#03031999] bg-opacity-60">
              Hardware Wallet
            </Link>
            <Link href="#payments" className="text-[16px] text-[#03031999] bg-opacity-60">
              Payments
            </Link>
          </div>

          <div className="flex flex-col space-y-2 sm:-ml-2">
            <Link href="#about" className="font-manrope text-[24px] text-[#030319] mb-2">
              About
            </Link>
            <Link href="#team" className="text-[16px] text-[#03031999] bg-opacity-60">
              Team
            </Link>
            <Link href="#backed-by" className="text-[16px] text-[#03031999] bg-opacity-60">
              Backed By
            </Link>
            <Link href="#maha-dao" className="text-[16px] text-[#03031999] bg-opacity-60">
              MahaDAO
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#1D2D3C] p-3 text-[16px] text-gray mt-10 text-center">
        © 2021 Scallop Group. All Rights Reserved.
      </div>
    </div>
  );
};

export default Bottom;