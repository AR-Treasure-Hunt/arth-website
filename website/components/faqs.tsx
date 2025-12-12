"use client";
import React, { useState } from "react";

const faqs = [
  {
    q: "What Is AR Treasure Hunt?",
    a: "AR Treasure Hunt is an augmented reality adventure game where participants solve clues and interact with virtual elements placed in real-world locations."
  },
  {
    q: "Should I Be The Student Of Kathmandu University To Join?",
    a: "No, the event is open to all eligible participants. Being a KU student is not mandatory."
  },
  {
    q: "I Don't Have A Team, What To Do?",
    a: "You can register solo. We will help you find a team during the event."
  }
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <main className="w-full bg-[#fffaf5]">
    <section className="landing_container  mx-auto mt-10 font-jersey">

      {/* Title */}
      <h2 className="landing_container text-4xl md:text-7xl lg:text-8xl font-light mb-6 tracking-wide">
        FAQ<span className="text-[#884510]">s</span>
      </h2>

      {/* FAQ LIST */}
      <div className="landing_container space-y-4">
        {faqs.map((item, i) => (
          <div key={i} className="border-0 leading-none pb-0 md:pb-2">
            <button
              onClick={() => toggleFAQ(i)}
              className="w-full flex justify-between items-center"
            >
              <p className="text-sm md:text-3xl lg:text-4xl font-light">{item.q}</p>

              {/* triangle rotation */}
              <span
                className={`transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : "rotate-0"
                }`}
              >
                <span className="text-sm md:text-3xl lg:text-4xl text-[#884510]">▼</span>
              </span>
            </button>

            {/* Hidden / Shown Answer */}
            <div
              className={`text-sm md:text-3xl lg:text-4xl font-extralight pr-6 transition-all duration-300 overflow-hidden ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {item.a}
            </div>
          </div>
        ))}
      </div>
    </section>
    </main>
  );
}

export default FAQs;
