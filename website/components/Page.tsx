import Image from "next/image";

const Page = () => {
  return (
    <div className="relative w-full bg-[#f6efe8] overflow-hidden pb-20">
      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 pt-20 relative z-10">
        {/* LEFT SIDE TEXT */}
        <div className="max-w-xl">
          <h1 className="text-[40px] leading-tight font-extrabold text-[#7a3c04] font-sans">
            The Biggest Treasure <br />
            <span className="text-[#7a3c04]">Hunt of Nepal</span>
          </h1>

          <div className="flex gap-4 mt-8">
            <button className="bg-[#f7a427] hover:bg-[#d68415] text-white px-6 py-3 rounded-md font-semibold shadow">
              Register Now
            </button>

            <button className="bg-[#4d2a0c] hover:bg-[#341b08] text-white px-6 py-3 rounded-md font-semibold shadow">
              About Event
            </button>
          </div>
        </div>

        {/* RIGHT SIDE MASCOT */}
        <div className="mt-12 md:mt-0">
          <Image
            src="/mascot-coins.png"
            alt="Mascot"
            width={350}
            height={350}
          />
        </div>
      </div>

      {/* BOTTOM KATHMANDU PIXEL SKYLINE */}
      <div className="w-full mt-20 relative z-10">
        <Image
          src="/ktm-skyline.png"
          alt="Skyline"
          width={1600}
          height={400}
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Page;
