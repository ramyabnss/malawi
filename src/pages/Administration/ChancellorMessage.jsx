import React from "react";
import bannerImg from "../../assets/banner.jpg";
import chancellorImg from "../../assets/chancellor.jpg";

export default function ChancellorMessage() {
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
            Message From The Chancellor
          </h1>
        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-12 gap-14">

        {/* LEFT SIDE - 8 WIDTH */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-gray-700 text-lg leading-relaxed">
         With a view to supporting the humanity, we always take measures to extend at most possible service, and that is because the logo of the university is enshrined with Fully Human and Fully Alive. DMISJB University was established to inculcate strong values, discipline and produce technical manpower to the society, has been excelled by the vision, mission in imparting quality education to young minds.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We are ahead of two decades of service in education by abiding the norms of Malawian Higher Education, and our aspiration is to become a world class University in the offing, is indeed achievable. We are always part of the local and global understanding on traditions and culture and responding to worldwide needs and concerns, and well planned on our way to success.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            We, the University believe that education here will make the leaners as a strongly networked community to face the timely challenges in the competitive world. In short, we transform the students as hardworking, smart team leaders, ethical professionals and conscientious citizens. As DMISJBU offers plenty of choices and chances, students should be a keen observer and identify opportunities that will take them to greater heights.
          </p>

          <p className="text-gray-800 text-lg font-medium">
          With our quality policies, curricular and extracurricular transactions, we are creating greater avenues to produce better leaders to face the modern challenges in building a greater nation and society on required perspectives.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Let’s work together and grow together!
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