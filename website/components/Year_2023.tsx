import React from 'react'
import Image from "next/image";

const Year = () => {
  const rounds = [
    {
      id: 1,
      round: "Round 01",
      title: "Khoji",
      subtitle: "PRELIMINARY",
      image: "/vercel.svg",
    },
    {
      id: 2,
      round: "Round 02",
      title: "Escape Room",
      subtitle: "2ND ROUND",
      image: "/vercel.svg",
    },
    {
      id: 3,
      round: "Round 03",
      title: "AR Round",
      subtitle: "FINALE",
      image: "/vercel.svg",
    },
  ];

  return (
    <main className="w-full bg-[#FFFAF5] px-8 py-16">
      {/* HEADER */}
      <section className="max-w-6xl mx-auto">
        <h1 className="text-8xl font-extralight tracking-tight font-jersey">
          PAST ITERATIONS
        </h1>
        <p className="text-8xl font-extralight tracking-tight font-jersey">
          2023
        </p>
        <p className="text-5xl font-extralight text-[#FFA127] font-jersey">
          (AR Treasure Hunt V2)
        </p>
      </section>

      {/* ROUND CARDS */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
        {rounds.map((r) => (
          <div key={r.id} className="flex flex-col items-center">
            
            {/* IMAGE CARD */}
            <div
              className="
                w-full 
                max-w-[340px]
                aspect-square
                rounded-3xl 
                overflow-hidden 
                relative 
                bg-[#201020]
                border-[#B04B18]
                shadow-[0_6px_0_#6A2E10]
              "
            >
              <img
                src={r.image}
                alt={r.title}
                className="w-full h-full object-cover opacity-70"
              />

              {/* TOP RIGHT AR V3 */}
              <span className="absolute top-2 right-3 text-white text-xl font-jersey bg-black/40 px-3 py-1 rounded-md">
                AR V3
              </span>

              {/* ROUND NUMBER */}
              <span className="absolute top-6 left-1/2 -translate-x-1/2 text-white font-jersey text-3xl text-center">
                {r.round}
              </span>

              {/* TITLE */}
              <span className="absolute top-20 left-1/2 -translate-x-1/2 text-white font-jersey text-6xl leading-none text-center">
                {r.title}
              </span>
            </div>

            {/* SUBTITLE */}
            <p className="text-[#000000] font-jersey text-3xl mt-4 tracking-wide">
              {r.subtitle}
            </p>
          </div>
        ))}
      </section>

      {/* 🔴 RED DETAILS SECTION */}
      <section className="max-w-6xl mx-auto mt-20">
        <div className="bg-[#9B0E0E] text-[#FFDDBD] p-10 rounded-2xl shadow-lg">
          <h2 className="text-5xl font-jersey mb-4">Some Details</h2>
          <p className="text-2xl font-jersey leading-relaxed font-light">
            AR Treasure Hunt combines the excitement of a traditional treasure hunt with 
            the immersive experience of Augmented Reality. Participants use their 
            smartphones or AR devices to find clues, solve puzzles, and navigate 
            through interactive environments.
          </p>
        </div>
      </section>

    </main>
  );
};

export default Year;
