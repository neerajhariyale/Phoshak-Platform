import React from "react";

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#f7f1f1] to-[#e6cfd4] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between py-16 ">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left ">
          <h1 className="text-3xl md:text-5xl font-bold text-black leading-snug">
            “Discover <span className="text-[#808080]">Poshak</span>: Where
            <br /> Modern Trends Meet Classic Attire.”
          </h1>
          <p className="mt-4 text-gray-700 text-lg">
            Trendy, Affordable & Sustainable Fashion
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:opacity-90 transition">
              Shop Now
            </button>
            <button className="border border-gray-400 text-black px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition ">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className=" flex-1 mt-10 md:mt-0 flex justify-center  md:hidden lg:block sm:hidden">
          <img
            src="/heroimg.png"
            alt="Hero"
            className="w-[320px] md:w-[400px] lg:w-[580px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
