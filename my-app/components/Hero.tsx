'use client';


import CustomButton from './CustomButton';
import Image from 'next/image';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'],
   weight: ['400', '600', '700'] });

const Hero = () => {
  const handleScroll = () => 
    window.scrollTo
  ({ top: 600, behavior: 'smooth' });

  return (
    <div className={`${poppins.className} flex flex-col justify-center items-center text-center h-screen px-6 sm:px-16`}>
      <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-xl leading-tight">
        Find what you need, <br />
        <span className="text-blue-400">
          not what you simply want?!</span>
      </h1>
      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl drop-shadow-md">
                                             It's not just a piece 
        of accessory or clothing, <br />
        it’s a <span className="font-semibold text-white">
          lifestyle...</span>.
      </p>

      <CustomButton
        title="Discover the lifestyle"
        containerStyle="bg-black text-white rounded-full mt-10 px-8 py-3 text-lg shadow-lg hover:bg-gray-900 transition"
        handleClick={handleScroll}
      />

      <div className="mt-10">
        <Image
          src="/pinnedboss.png"
          alt="Hero Image"
          width={1077} height={700}
          className="mx-auto rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
