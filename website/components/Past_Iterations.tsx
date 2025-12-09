import React from 'react'
import Image from "next/image";

const Past_Iterations = () => {
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
          subtitle: "FINAL",
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
              2024
            </p>
            <p className="text-5xl font-extralight text-[#FFA127] font-jersey">
              (AR Treasure Hunt V3)
            </p>
          </section>
    
          {/* ROUND CARDS */}
          <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {rounds.map((r) => (
              <div
                key={r.id}
                className="rounded-xl border border-[#B04B18] shadow-md bg-white overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Top Image Area */}
                <div className="relative h-40 bg-[#251329]">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                  <span className="absolute top-0 right-2 text-white text-xl font-jersey px-2 py-1 drop-shadow-lg">
                    AR V3
                  </span>
                  <span className="absolute text-center top-4 left-2 text-white font-jersey text-xl px-2 py-1 font-light drop-shadow-lg">
                    {r.round}
                  </span>
                  <span className="absolute text-center top-8 left-4 text-white font-jersey text-6xl font-light drop-shadow-lg">
                    {r.title}
                  </span>
                </div>
    
                {/* Bottom Text Section */}
                <div className="bg-[#E9E9E9] p-4 flex flex-col">
                  <p className="text-[#FFA127] font-light text-xl font-jersey">
                    {r.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </section>
    
          
        </main>
      );
    }

export default Past_Iterations
