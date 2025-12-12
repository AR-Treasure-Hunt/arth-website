// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1714] text-white py-3 md:py-5 px-6 md:px-16 font-jersey">
      <div className="landing_container mx-auto w-full flex flex-row justify-between items-start">
        {/* LEFT SIDE */}
        <div>
          <p className="text-base leading-none md:text-4xl lg:text-5xl font-medium">AR Treasure Hunt</p>
          <p className="text-xs leading-none md:text-2xl lg:text-3xl">Contact:</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-right mt-0">
          <p className="text-[#dd9b18] text-sm leading-none md:text-3xl lg:text-4xl">A POST EVENT OF</p>
          <p className="text-sm leading-none md:text-2xl lg:text-3xl">IT MEET 2025</p>
          <p className="text-[8px] leading-none md:text-sm lg:text-base lg:mt-1">Kathmandu University</p>

          <p className="text-[#dd9b18] mt-3 md:mt-5 lg:mt-10 text-sm md:text-4xl lg:text-5xl">RESTORE THE MEMORY</p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="landing_container mx-auto w-full pt-4 md:pt-7 lg:pt-10 flex flex-row justify-center gap-2 md:gap-10 text-[10px] md:text-base">
        <p>artreasurehunt@gmail.com</p>
        <p>www.artreasurehunt.tech</p>
      </div>
    </footer>
  );
};

export default Footer;
