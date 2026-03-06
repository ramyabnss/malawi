import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import bannerImg from "../../assets/admission-banner.jpg";

export default function AdmissionCriteria() {
  return (
    <div className="w-full">

      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Admission Criteria
          </h1>
        </div>
      </div>


      {/* ================= BODY SECTION ================= */}
      <div className="relative py-20 px-6">

        <div className="absolute inset-0  -z-10"></div>

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
              Admission Requirements (2025 – 2026 Intake)
            </h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
          </motion.div>


          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* Generic Entry */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Generic Entry
              </h3>

              <p className="font-semibold mb-2 text-xl">Diploma Programmes</p>
              <p className="mb-4 text-gray-700 text-xl">
                MSCE with four(4) credit passes including English (Arts Programme)
                and English plus Mathematics (Science Programmes)
              </p>

              <p className="font-semibold mb-2 text-xl">Bachelor Degree Programmes</p>
              <p className="text-gray-700 text-xl">
                MSCE with Six (6) credit passes including English (Arts Programmes)
                and English plus Mathematics (Science Programmes)
              </p>
            </motion.div>


            {/* Mature Entry */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Mature Entry
              </h3>

              <p className="text-gray-700 text-xl">
                Diploma/Advanced Diploma and an MSCE Certificate with passes in English
                (Arts Programme) and English and Mathematics (Science Programmes)
              </p>
            </motion.div>


            {/* Diploma Arts */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Education Term Programme – Diploma Arts
              </h3>

              <ul className="space-y-3 text-gray-700 text-xl">
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-indigo-600 mt-1" />
                  MSCE with credit passes in English and any Three (3) Art subjects.
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-indigo-600 mt-1" />
                  T2 Teaching Certificate plus MSCE with credit passes in English
                  and any two (2) Arts subjects.
                </li>
              </ul>
            </motion.div>


            {/* Diploma Science */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-300 shadow-lg rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-indigo-700 mb-4">
                Education Term Programme – Diploma Science
              </h3>

              <ul className="space-y-3 text-gray-700 text-xl">
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-indigo-600 mt-1" />
                  MSCE with credit passes in English, Mathematics and any two (2) Science subjects.
                </li>
                <li className="flex gap-2">
                  <CheckCircle size={18} className="text-indigo-600 mt-1" />
                  T2 Teaching Certificate with MSCE credit passes in English, Mathematics
                  and any one (1) Science subject.
                </li>
              </ul>
            </motion.div>

          </div>


          {/* IGCSE / GCE INFO */}
          <div className="mt-16 bg-yellow-50 border border-yellow-300 rounded-2xl p-8 shadow-md">
            <h3 className="text-lg font-bold text-yellow-700 mb-4">
              IGCSE & GCE O-Level Interpretation (Minimum Grade ‘C’)
            </h3>

            <p className="text-gray-700 mb-2">
              A*=1; A=2; B=3; C=5; D & E=7; F & G=8; O=9.
            </p>

            <p className="text-gray-700">
              GCE O-Level results: A=1; B=3; C=5; D=7; E=8.
            </p>

            <p className="mt-4 font-semibold text-red-600">
              Applicable for 2025 – 2026 Intake.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}