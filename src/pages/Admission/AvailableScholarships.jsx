import React from "react";
import { motion } from "framer-motion";
import { Shield, Award, GraduationCap } from "lucide-react";
import bannerImg from "../../assets/admission-banner.jpg";

export default function AvailableScholarships() {
  return (
    <div className="w-full bg-gray-50">

      {/* ================= BANNER ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Available Scholarships
          </h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="backdrop-blur-xl bg-white/70 border border-gray-300 shadow-xl rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-6 border-b border-indigo-600 pb-3">
            Scholarship Opportunities
          </h2>

          <p className="text-gray-700 leading-[1.9] text-lg mb-8 text-justify">
            The University offers scholarships to Serving Members
            <span className="text-indigo-700 font-bold text-xl"> (40% Tuition Fee Scholarship)</span>,
            Spouses and Children
            <span className="text-indigo-700 font-bold text-xl"> (20% Tuition Fee Scholarship)</span>,
            from the following Institutions:
          </p>

          {/* ================= INSTITUTIONS GRID ================= */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">

            {[
              "Malawi Police Service",
              "Malawi Prison Service",
              "Department of Immigration and Citizenship Services",
              "Independent Schools Association of Malawi (ISAMA)",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-indigo-200 bg-indigo-50 hover:bg-indigo-100 transition shadow-sm"
              >
                <Shield className="text-indigo-700 mt-1" size={28} />
                <p className="text-gray-800 font-medium leading-relaxed">
                  {item}
                </p>
              </div>
            ))}

          </div>

          <p className="text-gray-700 leading-[1.9] text-lg mb-10 text-justify font-bold">
            All those under scholarships need to meet the University’s entry
            requirements as stated above.
          </p>

          {/* ================= APPLY BUTTON ================= */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-indigo-800 transition"
            >
              Apply for Scholarship
            </motion.button>
          </div>

        </motion.div>

      </div>
    </div>
  );
}