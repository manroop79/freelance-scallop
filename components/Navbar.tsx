import Image from "next/image";
import Dropdown from "./Dropdown";

const Navbar = () => {
    return (
        <nav className="bg-white w-full h-auto flex items-center justify-between px-4 sm:px-8 lg:px-16 py-2 sm:py-4"> 

            <div className="flex items-center gap-x-2"> 
                <Image src="Group.svg" alt="logo" width={80} height={40} className="w-[32px] h-[32px] sm:w-[40px] sm:h-[40px]" /> 
                <Image src="Scallop.svg" alt="Scallop" width={80} height={24} className="sm:w-[105px] sm:h-[28px]" /> 
            </div>
                
            <div className="flex items-center gap-x-1 sm:gap-x-5 text-xs sm:text-[16px] lg:text-[18px] ml-2">
                <div className="hidden sm:flex gap-x-2">
                    <Dropdown title="Products" />
                    <Dropdown title="About" />
                </div>
                <button className="mr-2 font-manrope text-[#000000] hover:text-black text-[12px] sm:text-[16px] lg:text-[18px]">
                    Lite Paper 
                </button>
                <button className="w-[110px] sm:w-[160px] lg:w-[200px] h-[36px] sm:h-[40px] lg:h-[48px] rounded-[24px] sm:rounded-[32px] text-white bg-[#272727] hover:bg-[#3a3a3a] font-manrope text-[12px] sm:text-[16px] lg:text-[18px]">
                    Explore the app 
                </button>
            </div>
        </nav>
    );
};

export default Navbar; 