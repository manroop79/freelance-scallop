import Image from "next/image";

const GlobalAccount = () => {
    return (
        <div className="relative flex flex-col items-center rounded-lg mx-4 sm:mx-20 my-2 px-5 sm:px-20 pt-8 bg-gradient-to-b from-[#0a0a0a] via-[#111827] to-[#000000]">
        {/* Cinematic Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Light Streaks */}
                <div className="absolute top-1/4 left-1/2 w-[200px] h-[600px] bg-white/10 blur-[100px] rotate-12"></div>
                <div className="absolute bottom-0 right-1/3 w-[300px] h-[500px] bg-blue-500/10 blur-[150px] rotate-[-20deg]"></div>
                <div className="absolute top-0 left-1/4 w-[250px] h-[450px] bg-purple-500/10 blur-[120px] rotate-8"></div>
            </div>

        {/* Text Section */}
            <div className="text-center font-manrope z-10">
                <h2 className="text-[32px] sm:text-[48px] font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Global Account
                </h2>
                <p className="text-[16px] sm:text-[18px] text-gray-300 mt-3 max-w-[400px] sm:max-w-[600px] mb-8 sm:mb-4">
                    We are launching in the UK and EU to begin with expansion plans internationally.
                </p>
            </div>

        {/* Image Section */}
            <div className="flex justify-center w-full">
                <Image
                    src="/Globe.svg"
                    alt="Half Globe"
                    width={400}
                    height={400}
                    className="mix-blend-luminosity brightness-200 contrast-125"
                />
            </div>
        </div>
    );
};

export default GlobalAccount;