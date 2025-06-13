import Image from "next/image";

const RoadMap = () => {
    return (
        <div id="about" className="flex flex-col justify-center w-full sm:w-auto h-auto mt-20">

            <div className="flex items-center justify-center mb-6">
                <div className="w-[90px] h-[1px] mx-4 bg-gradient-to-r from-[#FFFFFF] to-[#1164F4]"></div>
                <div className="bg-gradient-to-r from-[#1A6AF4] to-[#00DECA] bg-clip-text text-transparent text-[32px] font-extrabold text-center">Road Map</div>
                <div className="w-[90px] h-[1px] bg-gradient-to-r from-[#1164F4] to-[#FFFFFF] mx-4"></div>
            </div>

            <p className="font normal text-[#4F4F4F] text-[18px] text-center -mt-4">The path To global crypto adoption</p>

            <div className="relative flex justify-end mt-10">
                <div className="relative">
                    <Image src="Rectangle 553.svg" alt="Rectangle 1" width={144} height={385} className="border-[#1164F4] " />
                    <Image src="Rectangle 555.svg" alt="Rectangle 2" width={126} height={405} className="absolute top-0 left-0 transform -translate-y-2" />
                </div>
            </div>

            <Image src="Map.svg" alt="Flowchart" width={1130} height={662} className="mt-0 sm:-mt-20" />
        </div>
    );
}

export default RoadMap;