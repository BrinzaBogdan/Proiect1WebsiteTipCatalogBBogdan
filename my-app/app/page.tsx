'use client';

import { useState, useEffect } from "react";
import { Hero, SearchBar, CustomFilter } from "../components";
import { Poppins, Righteous } from "next/font/google";
import { fetchClothes } from "../utils";
import ClothesCard from "../components/ClothesCard";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });
const righteous = Righteous({ subsets: ["latin"], weight: "400" });

export default function HomePage() {
  const [manufacturer, setManufacturer] = useState("H&M");
  const [clothesArray, setClothesArray] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadClothes = async () => {
      setLoading(true);
      try {
        const allClothes = await fetchClothes(manufacturer);
        setClothesArray(allClothes);
      } catch (err) {
        console.error(err);
        setClothesArray([]);
      } finally {
        setLoading(false);
      }
    };
    loadClothes();
  }, [manufacturer]);

  const isDataEmpty = !clothesArray || clothesArray.length < 1;

  return (
    <main className={`${poppins.className} relative w-full min-h-screen flex flex-col items-center`}>
      <Hero />

      <div className="mt-12 w-full max-w-7xl flex flex-col items-center text-center px-6 sm:px-16 py-10">
        <h1 className={`${righteous.className} text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4`}>
          CLOTHING CATALOGUE LIST
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 drop-shadow-md">
          - FIND THE UNICITY WHICH YOU ALWAYS SOUGHT -
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
          <SearchBar manufacturer={manufacturer} setManufacturer={setManufacturer} />
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <CustomFilter title="Type →" />
            <CustomFilter title="Color →" />
            <CustomFilter title="Size →" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {clothesArray.map((item, idx) => (
              <ClothesCard
                key={idx}
                clothes={{
                  name: item.name || "Unnamed Item",
                  price: item.price || "N/A",
                  image: item.image || null,
                  description: item.description || null,
                }}
              />
            ))}
          </section>
        ) : (
          <div className="home_error-container text-white mt-10">
            <h2 className="text-xl font-bold">OOps, no results</h2>
            <p>Try again later</p>
          </div>
        )}
      </div>
    </main>
  );
}

