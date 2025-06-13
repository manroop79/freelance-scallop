import Image from 'next/image';
import React, { useState } from 'react';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex-none w-[390px] h-80 bg-white hover:scale-110 transform transition-transform duration-300 rounded-xl shadow-custom flex items-center justify-center">
          <div className='flex flex-col items-start text-[#4F4F4F] font-manrope text-[18px] p-4'>
            <div className='flex flex-col items-center'>
              <Image src="Group 12.svg" alt='Scallop' width={200} height={52} objectFit="cover" className='mb-4' />
              <p className='my-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum lore</p>
            </div>
            <button className='self-start text-white text-[17px] font-manrope bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] py-2 px-9 rounded-[27px] mt-4 ml-4'>Learn More</button>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex-none w-[390px] h-80 bg-white hover:scale-110 transform transition-transform duration-300 rounded-lg shadow-custom flex items-center justify-center">
          <div className='flex flex-col items-start text-[#4F4F4F] font-manrope text-[18px] p-4'>
            <div className='flex flex-col items-center'>
              <div className='flex items-center gap-x-6'>
                <Image src="image 124.svg" alt='Norwich' width={50} height={63} className='self-center' />
                <div className="w-[1px] h-[63px] bg-[#B0B0B0] mx-4"></div> 
                <Image src="/Group 12.svg" alt='Scallop' width={200} height={52} className='self-center' />
              </div>
              <p className='my-7 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum lore</p>
            </div>
            <button className='self-start text-white text-[17px] font-manrope bg-gradient-to-r from-[#00DECA] to-[#1A6AF4] py-2 px-9 rounded-[27px] mt-4 ml-4'>Learn More</button>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex-none w-[390px] h-80 bg-gradient-to-r from-[#A6ADC8] to-[rgba(195, 202, 225, 0.22)] hover:scale-110 transform transition-transform duration-300 rounded-lg shadow-md flex items-center justify-center">
          <div className='flex flex-col items-start text-[#4F4F4F] font-manrope text-[18px] p-4'>
            <div className='text-[40px] text-black'>
              Announcements
            </div>
            <button className='self-start text-white text-[20x] font-manrope bg-[#20183A] py-2 px-9 rounded-[33px] mt-7'>
              Explore
            </button>
            <div className='mt-7'>
              Get updated with our latest<br></br> announcements
            </div>
          </div>
        </div>
      ),
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-screen p-4 mt-12 sm:mt-16">
      <div className="relative flex items-center justify-center md:justify-start">
      
        <button
          className="absolute left-0 md:hidden bg-gray-200 p-2 rounded-full z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="flex md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-center justify-center md:justify-start">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-transform duration-300 ease-in-out transform ${
                index === currentIndex ? 'block' : 'hidden'
              } md:block`}
            >
              {slide.content}
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 md:hidden bg-gray-200 p-2 rounded-full"
          onClick={handleNext}
        >
          &gt;
        </button>

      </div>
    </div>
  );
};

export default Carousel;