'use client';

import { Hero, SearchBar, CustomFilter } from '../components';
import { Poppins, Righteous } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'] });
const righteous = Righteous({ subsets: ['latin'], weight: '400' });

export default function Home() {
  return (
    <main
      className={`${poppins.className} relative w-full min-h-screen flex flex-col items-center`}
    >
      {/* Background with overlay */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <img
          src="/black-moving.gif"
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
      </div>

      {/* Hero section */}
      <Hero />

      {/* Catalogue section */}
      <div className="mt-12 w-full max-w-7xl flex flex-col items-center text-center px-6 sm:px-16 py-10">
        <h1
          className={`${righteous.className} text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4`}
        >
          CLOTHING CATALOGUE LIST
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 drop-shadow-md">
          - FIND THE UNICITY WHICH YOU ALWAYS SOUGHT -
        </p>

        {/* Search + filters */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
          <SearchBar />
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <CustomFilter title="Size → " />
            <CustomFilter title="Color → " />
          </div>
        </div>
      </div>
    </main>
  );
}
