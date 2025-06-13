import Image from "next/image";

const ScallopCards = () => {
    return (
        <div id="cards" className="flex flex-col md:flex-row space-y-8 p-8 sm:ml-20 -mt-28 sm:-mt-10">
                
                <div className="font-manrope font-bold order-1 md:order-2 sm:mt-14 -mb-10">
                    <p className="text-[#2DCA8C] text-[22px] mt-28 mb-3 sm:mb-2">Scallop Cards</p>
                    <p className="text-[48px] bg-gradient-to-r from-[#000000] to-[#2DCA8C] bg-clip-text text-transparent mb-5 sm:mb-4 leading-tight">
                        The only card<br></br> you&apos;ll ever need
                    </p>
                    <div className="flex items-start">
                        <Image src="1597427 1.svg" alt="Card 1" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F] mb-4">
                        Buy the things you love with Scallop card using <br></br>crypto or fiat
                        </p>
                    </div>
                    <div className="flex items-start">
                        <Image src="1597427 1.svg" alt="Card 2" width={32} height={32} className="mr-4" />
                        <p className="text-[18px] font-normal text-[#4F4F4F]">
                        Goodbye plastic, hello metal!<br></br> <span className="font-semibold">Titanium metal cards</span> for Elite members.
                        </p>
                    </div>
                </div>

                <div className="order-2 md:order-1">
                    <Image src="Content Left-2.svg" alt="Scallop Cards" width={609} height={557} />
                </div>
        </div>
    );
}

export default ScallopCards;