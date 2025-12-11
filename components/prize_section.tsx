import React from 'react'
import Image from 'next/image'

const prize_section = () => {
  return (
    <main className="landing_container mx-auto flex flex-row flex-wrap sm:justify-around justify-between gap-8 pt-8 md:pt-12 font-jersey font-light">

      {/* Total Prize Pool Card */}
      <div className="relative flex flex-col items-center bg-[#8B2E12] rounded-lg md:rounded-xl
                      w-[40%] lg:w-80 lg:h-80">
        
        <Image
          src="/mascot.png"
          alt="Treasure Chest"
          className="w-40 h-40 lg:w-80 lg:h-80 -mt-20 lg:-mt-40"
        />

        <div className="text-center mt-2 md:mt-4">
          <p className="text-yellow-400 text-sm md:text-2xl">Total Prize Pool</p>
          <p className="text-white text-lg md:text-5xl">NRS. 50,000+</p>
        </div>
      </div>

      {/* Participants Card */}
      <div className="relative flex flex-col items-center bg-[#004D40] rounded-lg md:rounded-xl
                      w-40 h-40 lg:w-80 lg:h-80">
        
        <Image
          src="/mascot.png"
          alt="Participants"
          className="w-40 h-40 lg:w-80 lg:h-80 -mt-20 lg:-mt-40"
        />

        <div className="text-center mt-2 md:mt-4">
          <p className="text-teal-300 text-sm md:text-2xl">Participants</p>
          <p className="text-white text-lg md:text-5xl">600+</p>
        </div>
      </div>

    </main>
  )
}

export default prize_section