import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import bannerImg from "../../assets/campus-hero.jpg";

export default function BoardOfStudies() {
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
            Board Of Studies
          </h1>
        </div>
      </div>


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative py-24 px-6">

        {/* Soft Gradient Background */}
        <div className="absolute inset-0 -z-10"></div>

        <div className="max-w-7xl mx-auto">




          {/* ================= DESCRIPTION ================= */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto mb-16"
          >
            <p className="text-gray-700 text-lg leading-[1.9] text-justify mb-6">
              Board of Studies, an Advisory Body of the university, is constituted by the Senate to examine every course of the curriculum and its contents by taking into account the latest modern concepts and to educate on wider perspectives to meet emerging challenges.
            </p>

            <p className="text-gray-700 text-lg leading-[1.9] text-justify">
              The BOS monitors and reviews existing programme structures, course syllabi, programmes of other institutes, teaching and evaluation methodologies, market requirements, and modern trends. It updates courses and programmes from time to time and conducts meetings to suggest amendments. Members include the Director, Vice Chancellor for Academics, Registrar, Deans, Heads of Schools, industrialists, stakeholders, and student nominees.
            </p>
          </motion.div>


          {/* ================= BOS GRID ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {[
              "University Board of Studies",
              "Research Board of Studies",
              "Education Board of Studies",
              "Management Board of Studies",
              "Commerce Board of Studies",
              "Computer Science & Engineering Board of Studies",
              "Social Work Board of Studies",
              "Health Board of Studies",
            ].map((item, index) => {

              const colors = [
                "bg-blue-50/70",
                "bg-indigo-50/70",
                "bg-purple-50/70",
                "bg-pink-50/70",
                "bg-green-50/70",
                "bg-yellow-50/70",
                "bg-teal-50/70",
                "bg-orange-50/70",
              ];

              return (
                <div
                  key={index}
                  className={`backdrop-blur-xl 
                    ${colors[index % colors.length]}
                    border border-gray-300
                    shadow-xl rounded-2xl p-6
                    hover:shadow-2xl hover:-translate-y-2
                    transition duration-300`}
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="text-indigo-600 mt-1" size={22} />
                    <h3 className="text-lg font-semibold text-gray-800 leading-snug">
                      {item}
                    </h3>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>



      </div>

    </div>
  );
}