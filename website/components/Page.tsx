import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="relative w-full bg-[#f6efe8] overflow-hidden font-jersey">
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 pt-20">
        {/* Left Text */}
        <div className="max-w-xl pr-10 z-20">
          <h1 className="text-7xl md:text-9xl text-[#381b01] font-extrabold leading-none">
            The Biggest <span className="text-amber-900">Treasure Hunt </span>
            <pre className="text-7xl md:text-9xl font-extrabold leading-none font-jersey">
              of <span className="text-red-900">Nepal</span>
            </pre>
          </h1>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
            <Link href="/register">
              <button className="bg-[#8B4513] text-white px-8 py-3 font-jersey shadow-lg text-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative z-30">
                Register Now
              </button>
            </Link>
            <button className="bg-[#4d2a0c] text-white px-8 py-3 font-jersey text-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative z-30">
              About Event
            </button>
          </div>
        </div>

        {/* Right Mascot */}
        <div className="mt-8 md:mt-0 relative z-20">
          <Image
            src="/mascot-coins.png"
            alt="Mascot"
            width={300}
            height={300}
            className="w-[450px] h-[500px] -mt-20  ml-90 "
          />
        </div>
      </div>

      {/* CLOUDS BACKGROUND */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <Image
          src="/cloud.png"
          alt="cloud"
          width={450}
          height={200}
          className="absolute top-10 left-10 opacity-70 "
        />
        <Image
          src="/cloud.png"
          alt="cloud"
          width={300}
          height={150}
          className="absolute top-32 right-20 opacity-70 "
        />
        <Image
          src="/cloud.png"
          alt="cloud"
          width={350}
          height={150}
          className="absolute top-56 left-1/2 -translate-x-1/2 opacity-60 animate-cloudMedium"
        />
      </div>

      {/* Skyline */}
      <div className="w-full relative z-10 -mt-100">
        <Image
          src="/ktm-skyline.png"
          alt="Skyline"
          width={1600}
          height={400}
          className="w-full h-auto"
        />
      </div>

      {/* CHARACTER ROW */}
      <div className="flex gap-4 pb-10 relative z-30 -mt-24">
        {/* Character 1 */}
        <div className="relative">
          <Image
            src="/char-1.png"
            width={80}
            height={80}
            alt="Character 1"
            className="pixelated -mb-3 ml-10 mt-3"
          />
        </div>

        {/* Mascot */}
        <div className="relative">
          <Image
            src="/mascot-char.png"
            width={80}
            height={80}
            alt="Mascot"
            className="pixelated -mb-4 h-20 w-30 mt-9 -ml-8"
          />
        </div>

        {/* Character 2 */}
        <div className="relative">
          <Image
            src="/char-2.png"
            width={80}
            height={80}
            alt="Character 2"
            className="pixelated -mb-1"
          />
        </div>

        {/* Character 3 */}
        <div className="relative">
          <Image
            src="/char-3.png"
            width={80}
            height={100}
            alt="Character 3"
            className="pixelated mb-2"
          />
        </div>

        {/* Character 4 */}
        <div className="relative">
          <Image
            src="/char-4.png"
            width={80}
            height={80}
            alt="Character 4"
            className="pixelated"
          />
        </div>

        {/* Character 5 */}
        <div className="relative">
          <Image
            src="/char-5.png"
            width={80}
            height={80}
            alt="Character 5"
            className="pixelated"
          />
        </div>

        {/* Character 6 */}
        <div className="relative">
          <Image
            src="/char-6.png"
            width={80}
            height={80}
            alt="Character 6"
            className="pixelated"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
