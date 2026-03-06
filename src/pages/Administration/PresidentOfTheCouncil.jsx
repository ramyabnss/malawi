import React from "react";
import bannerImg from "../../assets/banner.jpg";
import chancellorImg from "../../assets/president.jpg";

export default function PresidentOfTheCouncil() {
  return (
    <div className="w-full bg-gray-50">

      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Message From The President Of The Council
          </h1>
        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-14">

        {/* LEFT SIDE - 8 WIDTH */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to DMI-St. John the Baptist University. I am proud to be in the position to introduce you to our esteemed University and all it has to offer to you, the prospective student, and to society at large.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to DMI-St. John the Baptist University. I am proud to be in the position to introduce you to our esteemed University and all it has to offer to you, the prospective student, and to society at large.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            The DMISJB University, Malawi is an initiative of DMI and MMI congregation and they realised the need for quality education for Malawian youth during the early beginning of 21st century. Our real strength is our students, some of them have become successful entrepreneurs and generated wealth and employment opportunities in the country. Discipline, dedication and determination exemplify the students at the University.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            The university established satellite campuses at Lilongwe and Blantyre to extend its service at maximum possible. It will help us introduce new programmes and provide better utility to the students. In addition, the existing infrastructure is being spruced up, and state-of-the-art IT facilities are being augmented. These steps result in the high-quality teaching-learning experience for the students.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We plan to become a mid-sized university of international repute by 2030. It will be possible through, both horizontal and vertical expansion of educational programmes and research activities. The University continuously focuses on international standards of quality in higher education by improving the faculty-student ratio, recruiting research-oriented faculty, creating research infrastructure, promoting international collaborations, and developing linkages with the industry.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            As Malawi is striving to become a great nation, the DMISJB University contributes to its endeavors through its students who will be the future leaders of the nation. Let us positively move towards this objective.
          </p>
        </div>

        {/* RIGHT SIDE - 4 WIDTH */}
        <div className="lg:col-span-5 flex justify-center">

          <div className="">

            {/* Bigger Portrait Image */}
            <div className="overflow-hidden rounded-2xl group">
              <img
                src={chancellorImg}
                alt="Chancellor"
                className="w-full h-[550px] object-cover
                     transition-transform duration-500
                     group-hover:scale-105"
              />
            </div>


          </div>

        </div>
      </div>

    </div>
  );
}