import Image from "next/image";
// The imported Footer component is still not used, but I'll leave the import as you provided it.
import Footer from "@/components/Footer";

export default function TeamRegistration() {
  return (
    // Outer container has font-jersey implicitly (or should be here)
    <div className="min-h-screen w-full bg-[#f5efe7] flex flex-col items-center">
      {/* Top Logo */}
      <div className="flex flex-col items-center mt-10 font-jersey">
        <Image src="/mascot.png" alt="Mascot" width={90} height={90} />
        <h1 className="text-3xl font-extrabold text-[#7b3f00]">
          Team <span className="text-[#f7961e]">Registration</span>
        </h1>
        <p className="text-[11px] text-[#6d6d6d] text-center mt-1 font-jersey">
          Register your team for biggest AR Treasure Hunt of Nepal <br />
          Form a team of 3 members.
        </p>
      </div>
      {/* Main Card (Form container) */}
      <div className="bg-white mt-8 w-[85%] max-w-3xl rounded-2xl shadow-md border border-[#e7d8c7] px-10 py-10">
        {/* Register Button */}
        <div className="flex justify-center mb-6">
          {/* FIX: Changed rounded-4xl to rounded-3xl */}
          <button className="bg-black text-white px-6 py-2 rounded-3xl text-sm font-jersey">
            Register your team
          </button>
        </div>
        <br></br>

        {/* Steps */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {[1, 2, 3, 4].map((n, index, arr) => (
            <>
              <div
                key={n}
                className={`w-10 h-10 flex items-center justify-center rounded-full border 
                  ${
                    n === 1
                      ? "bg-black text-white"
                      : "bg-[#f5efe7] text-black font-jersey"
                  }`}
              >
                {n}
              </div>

              {index < arr.length - 1 && (
                <div className="w-12 h-1 bg-[#e7d8c7]"></div>
              )}
            </>
          ))}
        </div>

        {/* Team Details */}
        <h2 className="text-[#d07c14] font-bold text-3xl mb-4 font-jersey">
          Team Details
        </h2>

        {/* FIX: Removed ml-2 for proper alignment */}
        <label className="text-[#7b3f00] font-bold text-lg">Team Name</label>
        <input
          type="text"
          placeholder="Enter your team name"
          // FIX: Removed ml-3 and mt-2 for proper alignment
          className="w-full border-2 border-[#e7d8c7] rounded-xl px-2 py-2 text-base placeholder-gray-500 mt-1 mb-5"
        />

        {/* Team Leader */}
        <h2 className="text-[#d07c14] font-jersey text-3xl font-extrabold mb-4">
          Team Leader
        </h2>

        {/* Full Name */}
        <label className="text-[#7b3f00] font-bold text-lg">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="mt-1 mb-5 w-full border-2 border-[#e7d8c7] rounded-xl px-3 py-2 text-base placeholder-gray-500"
        />

        {/* College/Institution */}
        <label className="text-[#7b3f00] font-bold text-lg">
          College/Institution
        </label>
        <input
          type="text"
          placeholder="Enter your institution name"
          className="mt-1 mb-5 w-full border-2 border-[#e7d8c7] rounded-xl px-3 py-2 text-base placeholder-gray-500"
        />

        {/* Email */}
        <label className="text-[#7b3f00] font-bold text-lg">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="mt-1 mb-5 w-full border-2 border-[#e7d8c7] rounded-xl px-3 py-2 text-base placeholder-gray-500"
        />

        {/* Phone Number */}
        <label className="text-[#7b3f00] font-bold text-lg">Phone Number</label>
        <input
          type="text"
          placeholder="+977 98XXXXXXXX"
          className="mt-1 mb-8 w-full border-2 border-[#e7d8c7] rounded-xl px-3 py-2 text-base placeholder-gray-500"
        />

        {/* Bottom Buttons - Styling remains as you provided */}
        <div className="flex justify-between mt-5">
          <button className="px-38 py-2 border border-[#f7961e] rounded-lg text-[#f7961e]">
            Back
          </button>
          <button className="px-38 py-2 bg-[#f7961e] text-white rounded-lg">
            Next
          </button>
        </div>
      </div>{" "}
      {/* <-- This closes the Main Card <div> */}
      {/* Footer Section - Image */}
      <div className="mt-16 w-full relative">
        <Image
          src="/mountains.png" // your footer graphic
          alt="Mountains"
          width={1500}
          height={400}
          className="w-full"
        />
      </div>
      {/* Footer Text */}
      <footer className="w-full bg-[#1B1714] text-white py-5 px-6 md:px-16">
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
    </div>
  );
}
