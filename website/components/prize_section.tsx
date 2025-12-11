import React from 'react'
import Image from 'next/image'

const prize_section = () => {
  return (
    <main className="landing_container mx-auto flex flex-row  justify-around gap-8 pt-15 md:pt-50 font-jersey font-light">

      {/* Total Prize Pool Card */}
      <div className="relative flex flex-col items-center bg-[#8B2E12] rounded-lg md:rounded-xl min-h-20 md:w-80 md:h-40">
        
        <Image
          src="/mascot.png"
          alt="Participants"
          width={200}
          height={200}
          className="w-30 h-30 md:w-80 md:h-80 -mt-15 md:-mt-45"
        />

        <div className="text-center absolute top-[40%]">
          <p className="text-yellow-400 text-sm md:text-3xl">Total Prize Pool</p>
          <p className="text-white text-lg md:text-6xl">NRS. 50,000+</p>
        </div>
      </div>

      {/* Participants Card */}
      <div className="relative flex flex-col items-center bg-[#004D40] rounded-lg md:rounded-xl min-h-20
                   md:w-80 md:h-40">
        
        <Image
          src="/mascot.png"
          alt="Participants"
          width={200}
          height={200}
          className="w-30 h-30 md:w-80 md:h-80 -mt-15 md:-mt-45"
        />

        <div className="text-center absolute top-[40%]">
          <p className="text-teal-300 text-sm md:text-3xl">Participants</p>
          <p className="text-white text-lg md:text-6xl">600+</p>
        </div>
      </div>

    </main>
  )
}

export default prize_section