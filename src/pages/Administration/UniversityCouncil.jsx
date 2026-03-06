import React from "react";
import bannerImg from "../../assets/banner.jpg";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";


export default function UniversityCouncil() {
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
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            The University Council
          </h1>
        </div>
      </div>



      {/* ================= UNIVERSITY COUNCIL SECTION ================= */}
      <div className="relative py-20 px-6">

        {/* Soft Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 -z-10"></div>

        <div className="max-w-7xl mx-auto">


          {/* Description */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-7xl mx-auto mb-16"
          >
            <p className="text-gray-700 text-lg leading-[1.9] text-justify">
              The University Council is the highest academic body, responsible for maintaining the standards of education in all measures and has the right to supervise the academic matters for the holistic development of every Academic School of the university. The council takes measures to adopt necessary plans for smooth functions of academic activities. Accordingly, a yearly meeting is held to discuss the academic affairs and its related matters.
            </p>
          </motion.div>


          {/* Glass Table */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="overflow-x-auto"
          >
            <div className="backdrop-blur-xl bg-white/60 
                          border border-gray-300 
                          shadow-2xl rounded-3xl overflow-hidden">

              <table className="w-full text-lg border-collapse">

                {/* Table Header */}
                <thead className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
                  <tr className="border-b border-gray-300">
                    <th className="text-left px-8 py-5 font-semibold border-r border-gray-300">
                      Name of the Official
                    </th>
                    <th className="text-left px-8 py-5 font-semibold">
                      Designation
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="text-gray-800">

                  {[
                    ["Dr. T. X. A. Ananth", "President"],
                    ["Rev. Sr. S. Gnanaselvam", "Member"],
                    ["Dr. Ignasio Malizani Jimu", "Member"],
                    ["Prof. Lewis Baison Dzimbiri", "Member"],
                    ["Ms. Innocentia Ottober", "Member"],
                    ["Dr. Agnes Mbachi Mwangwela", "Member"],
                    ["Rev. Sr. Sassirani", "Member"],
                    ["Prof. Amalraj Ambrose", "Ex-Officio"],
                  ].map((item, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-white/70" : "bg-gray-100/70"
                        } hover:bg-blue-50 transition duration-300 border-b border-gray-300`}
                    >
                      <td className="px-8 py-5 border-r border-gray-300">
                        {item[0]}
                      </td>
                      <td className="px-8 py-5 flex items-center gap-2">
                        <GraduationCap size={18} className="text-blue-600" />
                        {item[1]}
                      </td>
                    </tr>
                  ))}

                </tbody>

              </table>

            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}