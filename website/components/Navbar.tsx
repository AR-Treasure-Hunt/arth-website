"use client";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="min-w-full bg-cream header-top">
      <div className="landing_container mx-auto px-6 py-4 dashed-accent flex items-center justify-between">
        
        {/* Branding */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[FFFFA4] shadow-sm">
            <Image src="/logo.png" alt="AR Treasure Hunt" width={36} height={36} />
          </div>
          <div className="text-2xl font-jersey tracking-tight text-deepblue">
            AR TREASURE HUNT <span className="text-brown">v4</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="font-jersey text-2xl font-medium items-center gap-8 flex">
            <li><a className="text-brown hover:text-darkbrown transition-colors">Home</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">About</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">FAQ</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">Code of Conduct</a></li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <button
          aria-label="Open menu"
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            // X icon
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M6 6l12 12" stroke="#A65A2A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          ) : (
            // Hamburger icon
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#A65A2A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          )}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-cream transition-all overflow-hidden ${
          open ? "max-h-60 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 font-jersey text-2xl text-brown">
          <li><a className="hover:text-darkbrown">Home</a></li>
          <li><a className="hover:text-darkbrown">About</a></li>
          <li><a className="hover:text-darkbrown">FAQ</a></li>
          <li><a className="hover:text-darkbrown">Code of Conduct</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
