import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    // Outer container: Set background and general font
    <div className="relative w-full bg-[#f6efe8] overflow-hidden pb-0 font-jersey">
      {/* Main Hero Container: Responsible for the Text and Mascot placement */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start px-8 pt-20 relative z-10">
        {/* LEFT SIDE TEXT */}
        <div className="max-w-xl pr-10">
          {/* Title Styling: 
            - text-7xl for large size.
            - font-extrabold for heavy weight (mimicking pixel font boldness).
            - Removed color spans as the entire block is dark brown in the image.
          */}
          <h1 className="text-9xl text-[#381b01] font-extrabold leading-none w-full">
            The Biggest <span className="text-amber-900">Treasure Hunt </span>
            <pre className="text-9xl text-[#381b01] font-extrabold leading-none w-full font-jersey">
              of Nepal
            </pre>
          </h1>

          <div className="flex gap-4 mt-8">
            <Link href="/register">
              <button className="bg-[#8B4513] text-white px-18 py-3 font-jersey shadow-lg text-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                Register Now
              </button>
            </Link>
            <button className="bg-[#4d2a0c] text-white px-18 py-3 font-jersey text-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              About Event
            </button>
          </div>
        </div>

        {/* RIGHT SIDE MASCOT */}
        <div className="mt-0 pt-0">
          <Image
            src="/mascot-coins.png"
            alt="Mascot"
            // Increased size to match the image's prominence
            width={300}
            height={300}
            // Use negative margin to pull it down over the skyline
            // -mt-10 or -mt-20 might be necessary depending on the image dimensions
            className="w-200 h-200 -mt-18 ml-60"
          />
        </div>
      </div>

      {/* BOTTOM KATHMANDU PIXEL SKYLINE */}
      {/* Set the top margin to 0 to minimize gap between hero content and skyline */}
      <div className="w-full mt-0 relative z-10">
        <Image
          src="/ktm-skyline.png"
          alt="Skyline"
          // Ensure width is large enough for pixel quality on big screens
          width={1600}
          height={400}
          className="w-full -mt-50"
        />
      </div>
    </div>
  );
};

export default Page;
