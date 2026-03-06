import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import bannerImg from "../../assets/campus-hero.jpg";
import studentPDF from "../../assets/student-hand-book.pdf";

export default function StudentHandbook() {
  return (
    <div className="w-full">

      {/* ================= BANNER ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Student Handbook
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">

        {/* ================= DESCRIPTION ================= */}
        <div className="backdrop-blur-xl bg-white/60 border border-indigo-200 shadow-xl rounded-2xl p-8">
          <p className="text-gray-700 leading-[1.9] text-justify text-xl">
            Official institutional guide containing academic policies, procedures, and student resources
          </p>

          {/* Download Button */}
          <motion.a
            href={studentPDF}
            download
            whileHover={{ scale: 1.05 }}
            className="mt-6 inline-flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-800 transition"
          >
            <Download size={18} /> Download Student Handbook (PDF)
          </motion.a>
        </div>

        {/* ================= PDF VIEWER ================= */}
        <div className="rounded-2xl overflow-hidden shadow-2xl border border-indigo-200">
          <iframe
            src={studentPDF}
            title="Student Handbook PDF"
            className="w-full h-[600px] md:h-[800px]"
          />
        </div>

      </div>
    </div>
  );
}