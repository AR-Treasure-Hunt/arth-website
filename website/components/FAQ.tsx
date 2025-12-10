// components/FAQ.tsx
"use client";

import React, { useState } from "react";

const QUESTIONS = [
  {
    id: "q1",
    question: "What Is AR Treasure Hunt?",
    answer:
      "AR Treasure Hunt is an augmented reality-based scavenger experience where teams solve location-based puzzles and complete challenges to find virtual treasures.",
  },
  {
    id: "q2",
    question: "Should I Be The Student Of Kathmandu University To Join?",
    answer:
      "Replace this with your official eligibility details (yes/no and any exceptions).",
  },
  {
    id: "q3",
    question: "I Don't Have A Team, What To Do?",
    answer:
      "If you don't have a team, register individually and we will help match you or run a team-formation session.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setOpen((p) => ({ ...p, [id]: !p[id] }));

  return (
    <section className="min-h-[60vh] w-full bg-[#FFFAF5] px-6 py-12">
      <div className="max-w-[1200px] mx-auto">
        {/* HEADER */}
        <header className="mb-12">
          <h1 className="text-[5.5rem] lg:text-[7rem] leading-none font-jersey text-[#0B0B0B]">
            <span>FAQ</span>
            <span className="text-[#8B3A1C]">s</span>
          </h1>
        </header>

        {/* QUESTIONS */}
<div className="col-span-12 lg:col-span-9">
  <nav aria-label="Frequently asked questions" className="space-y-12">
    {QUESTIONS.map((q) => {
      const isOpen = !!open[q.id];
      return (
        // Each question row is a grid with 1fr (content) + auto (caret)
        <div
          key={q.id}
          className="grid grid-cols-[1fr_auto] items-start gap-4"
        >
          {/* left: question content (button + expandable panel) */}
          <div>
            <button
              onClick={() => toggle(q.id)}
              aria-expanded={isOpen}
              aria-controls={`${q.id}-panel`}
              className="w-full text-left focus:outline-none"
            >
              <h3
                id={q.id}
                className="text-[1.9rem] lg:text-[2.2rem] leading-tight font-jersey text-[#0B0B0B]"
              >
                {q.question}
              </h3>
            </button>

            {/* ANSWER */}
            <div
              id={`${q.id}-panel`}
              role="region"
              aria-labelledby={q.id}
              className={`mt-4 overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-base leading-7 max-w-2xl text-[#1f1f1f]">
                {q.answer}
              </p>
            </div>
          </div>

          {/* right: caret (stays vertically aligned with the grid row) */}
          <div className="flex items-start lg:items-center">
            <button
              onClick={() => toggle(q.id)}
              aria-hidden={false}
              className="w-8 h-8 flex items-center justify-center mt-1 lg:mt-0"
              title={isOpen ? "Collapse" : "Expand"}
            >
              <span
                className="block w-0 h-0 transition-transform duration-300"
                style={{
                  borderLeft: "10px solid transparent",
                  borderRight: "10px solid transparent",
                  borderTop: "14px solid #8B3A1C",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>
          </div>
        </div>
      );
    })}
  </nav>
</div>


        {/* BOTTOM TITLE */}
        <section className="mt-28 lg:mt-44">
          <h2 className="text-[4.2rem] sm:text-[6rem] lg:text-[9rem] leading-none font-jersey text-[#0B0B0B]">
            <span className="inline-block">Organizing </span>
            <span className="inline-block text-[#8B3A1C]">Team</span>
          </h2>
        </section>
      </div>
    </section>
  );
}
