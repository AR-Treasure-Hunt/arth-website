// components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1B1714] text-white py-5 px-6 md:px-16 font-jersey">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start">
        {/* LEFT SIDE */}
        <div>
          <p className="text-4xl font-medium">AR Treasure Hunt</p>
          <p className=" text-2xl">Contact:</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-right mt-2 md:mt-0">
          <p className="text-[#FFA126] text-3xl">A POST EVENT OF</p>
          <p className="text-3xl">IT MEET 2025</p>
          <p className="text-md mt-1">Kathmandu University</p>

          <p className="text-[#FFA126] mt-8 text-3xl">RESTORE THE MEMORY</p>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="max-w-7xl mx-auto w-full mt-10 flex flex-col md:flex-row justify-center gap-10 text-sm">
        <p>artreasurehunt@gmail.com</p>
        <p>www.artreasurehunt.tech</p>
      </div>
    </footer>
  );
};

export default Footer;
