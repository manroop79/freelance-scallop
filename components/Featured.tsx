import Image from "next/image";
import Link from "next/link";

const Featured = () => {
    return (
        <div className="flex flex-col items-center justify-between bg-white border-black rounded-lg shadow-lg w-[20] h-[500] text-black font-manrope m-16 sm:m-24 mx-4 p-16 sm:p-8">

            <div className="flex justify-center items-center text-center mb-8">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[24px] font-extrabold">Featured in</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>

            <div className="flex flex-col sm:hidden">
                <div className="flex justify-center items-center gap-x-5 mb-4">
                    <Image src="image 123.svg" alt="Forbes" width={126} height={70} />
                    <Image src="Bloomberg.svg" alt="Forbes" width={126} height={70} />
                </div>
            
                <div className="flex justify-center items-center gap-x-5 mb-8">
                    <Image src="image 39.svg" alt="Forbes" width={126} height={70} />
                    <Image src="Group 33853.svg" alt="Forbes" width={126} height={70} />
                </div>

                <div className="flex justify-center items-center gap-x-5 mb-8">
                    <Image src="image 93.svg" alt="Forbes" width={126} height={70} />
                    <Image src="image 44 1.svg" alt="Forbes" width={126} height={70} />
                </div>

                <div className="flex justify-center items-center gap-x-5 mb-8">
                    <Image src="Frame.svg" alt="Forbes" width={126} height={70} />
                    <Image src="image 58.svg" alt="Forbes" width={126} height={70} />
                </div>

                <div className="flex justify-center items-center mb-4">
                    <Image src="image 41.svg" alt="Forbes" width={126} height={70} />
                </div>
            </div>

            <div className="hidden sm:flex flex-col">
                <div className="flex justify-center items-center gap-x-10 mb-4">
                    <Image src="image 123.svg" alt="Forbes" width={126} height={70} />
                    <Image src="Bloomberg.svg" alt="Forbes" width={126} height={70} />
                    <Image src="image 39.svg" alt="Forbes" width={126} height={70} />
                    <Image src="Group 33853.svg" alt="Forbes" width={126} height={70} />
                    <Image src="image 93.svg" alt="Forbes" width={126} height={70} />
                </div>

                <div className="flex justify-center items-center gap-x-12">
                    <Image src="image 44 1.svg" alt="Forbes" width={126} height={70} />
                    <Image src="Frame.svg" alt="Forbes" width={126} height={70} />
                    <Image src="image 58.svg" alt="Forbes" width={126} height={70} />
                    <Image src="image 41.svg" alt="Forbes" width={126} height={70} />
                </div>
        </div>

            <div className="flex justify-end w-full mt-4">
                <Link href="/" className="text-[#1A6AF4] text-[16px] hover:underline">
                    See All
                </Link>
            </div>
        </div>
    );
}

export default Featured;