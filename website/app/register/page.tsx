import Image from "next/image";

export default function TeamRegistration() {
  return (
    <div className="min-h-screen w-full bg-[#f5efe7] flex flex-col items-center">
      {/* Top Logo */}
      <div className="flex flex-col items-center mt-10">
        <Image
          src="/mascot.png" // replace with your mascot image
          alt="Mascot"
          width={90}
          height={90}
        />
        <h1 className="text-3xl font-extrabold text-[#7b3f00]">
          Team <span className="text-[#f7961e]">Registration</span>
        </h1>
        <p className="text-[11px] text-[#6d6d6d] text-center mt-1">
          Register your team for biggest AR Treasure Hunt of Nepal <br />
          Form a team of 3 members.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white mt-8 w-[85%] max-w-3xl rounded-2xl shadow-md border border-[#e7d8c7] px-10 py-10">
        {/* Register Button */}
        <div className="flex justify-center mb-6">
          <button className="bg-black text-white px-6 py-2 rounded-lg text-sm">
            Register your team
          </button>
        </div>

        {/* Steps */}
        <div className="flex justify-center items-center gap-6 mb-12">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`w-10 h-10 flex items-center justify-center rounded-full border 
                ${n === 1 ? "bg-black text-white" : "bg-[#f5efe7] text-black"}`}
            >
              {n}
            </div>
          ))}
        </div>

        {/* Team Details */}
        <h2 className="text-[#d07c14] font-bold text-lg mb-4">Team Details</h2>

        <label className="text-sm font-semibold">Team Name</label>
        <input
          type="text"
          placeholder="Enter your team name"
          className="mt-1 mb-5 w-full border rounded-md px-3 py-2"
        />

        {/* Team Leader */}
        <h2 className="text-[#d07c14] font-bold text-lg mb-4">Team Leader</h2>

        <label className="text-sm font-semibold">Full Name</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="mt-1 mb-5 w-full border rounded-md px-3 py-2"
        />

        <label className="text-sm font-semibold">College/Institution</label>
        <input
          type="text"
          placeholder="Enter your institution name"
          className="mt-1 mb-5 w-full border rounded-md px-3 py-2"
        />

        <label className="text-sm font-semibold">Email</label>
        <input
          type="email"
          placeholder="Enter your Email"
          className="mt-1 mb-5 w-full border rounded-md px-3 py-2"
        />

        <label className="text-sm font-semibold">Phone Number</label>
        <input
          type="text"
          placeholder="+977 98XXXXXXXX"
          className="mt-1 mb-8 w-full border rounded-md px-3 py-2"
        />

        {/* Bottom Buttons */}
        <div className="flex justify-between mt-5">
          <button className="px-10 py-2 border border-[#f7961e] rounded-lg text-[#f7961e]">
            Back
          </button>
          <button className="px-10 py-2 bg-[#f7961e] text-white rounded-lg">
            Next
          </button>
        </div>
      </div>

      {/* Footer Section */}
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
      <footer className="bg-black text-white w-full py-10 text-center text-sm">
        <h3 className="font-bold">AR Treasure Hunt</h3>
        <p className="text-gray-300 text-xs mb-8">Contact:</p>

        <p className="mt-10 text-xs">AR Treasure Hunt | IT Meet 2025</p>

        <div className="mt-8">
          <button className="text-[#f7961e] font-semibold text-sm">
            RESTORE THE MEMORY
          </button>
        </div>

        <div className="text-[10px] mt-6 text-gray-400">
          artreasurehunt@gmail.com &nbsp;&nbsp; | &nbsp;&nbsp;
          www.artreasurehunt.tech
        </div>
      </footer>
    </div>
  );
}
