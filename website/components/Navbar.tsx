// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./app/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: '#FFFAF5',
        brown: '#A65A2A',
        darkbrown: '#7f3f18',
        deepblue: '#0f4c81',
        mutedgray: '#373737'
      },
      fontFamily: {
        jersey: ['"Press Start 2P"', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

// components/Navbar.jsx
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header className="min-w-full bg-cream header-top">
      <div className="max-w-6xl mx-auto px-6 py-4 dashed-accent flex items-center justify-between">
        {/* Branding */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[FFFFA4] shadow-sm border-2 border-deepblue">
            <Image src="/next.svg" alt="AR Treasure Hunt" width={36} height={36} />
          </div>
          <div>
            <div className="text-2xl font-jersey tracking-tight text-deepblue">AR TREASURE HUNT <span className="text-brown">v4</span></div>
          </div>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="hidden md:flex font-jersey text-2xl font-mediumitems-center gap-8">
            <li><a className="text-brown hover:text-darkbrown transition-colors">Home</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">About</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">FAQ</a></li>
            <li><a className="text-brown hover:text-darkbrown transition-colors">Code of Conduct</a></li>
          </ul>

          {/* Mobile hamburger (simple) */}
          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="#A65A2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
