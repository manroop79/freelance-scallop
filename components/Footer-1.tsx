import Image from "next/image";

const Footer = () => {
    return (
        <div className="flex justify-center text-center bg-[#1D2D3C] p-5 mt-24 sm:mt-32">
            <Image src="Visa.svg" alt="Footer Images" width={577} height={48} />
        </div>
    );
}

export default Footer;