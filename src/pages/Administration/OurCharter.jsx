import React from "react";
import bannerImg from "../../assets/campus-hero.jpg";


export default function OurCharter() {
  return (
    <div className="w-full">

      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Our Charter
          </h1>
        </div>
      </div>



      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-gray-700 text-[18px] leading-[1.9] tracking-wide text-justify">
          DMI St John the Baptist University was founded in 2011 by the missionaries of MMI & DMI with the approval of Malawi Government and National Council for Higher Education, Malawi. With a vision to contribute in the development of Malawi by providing quality education and global exposure to the youths of the nation.
        </p>
      </div>

    </div>
  );
}