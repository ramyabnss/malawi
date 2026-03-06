import React from "react";
import { motion } from "framer-motion";
import { Globe, FileText, Phone, Download } from "lucide-react";
import bannerImg from "../../assets/campus-hero.jpg";

export default function ApplyForScholarships() {
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
            How To Apply For Scholarships
          </h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* ================= INTRO ================= */}
        <div className="backdrop-blur-xl bg-white/60 border border-indigo-200 shadow-xl rounded-2xl p-8">
          <p className="text-lg text-gray-700">
            Applicants from the above mentioned institutions need to apply
            through heads of their departments.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-green-700">
            Method of Admission Application
          </h2>
        </div>

        {/* ================= ONLINE MODE ================= */}
        <div className="backdrop-blur-xl bg-white/60 border border-indigo-200 shadow-xl rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-indigo-700" size={26} />
            <h3 className="text-xl font-semibold text-indigo-700">
              Online Mode of Application
            </h3>
          </div>

          <p className="text-gray-700 leading-[1.9] text-justify mb-6">
            Duly completed application forms should be submit along with copies
            of certificates/notification of results/transcripts and a bank
            deposit slip for the application through online, any clarification
            contact through email ID: admissions@dmisjbu.edu.mw or Hotline :
            +265 (0) 983 01 88 23.
          </p>

          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-indigo-800 transition"
          >
            <Download size={18} /> Download Application Form
          </motion.a>
        </div>

        {/* ================= OFFLINE MODE ================= */}
        <div className="backdrop-blur-xl bg-white/60 border border-indigo-200 shadow-xl rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="text-indigo-700" size={26} />
            <h3 className="text-xl font-semibold text-indigo-700">
              Offline Mode of Application
            </h3>
          </div>

          <p className="text-gray-700 leading-[1.9] text-justify mb-4">
            Application forms can be obtained from any of our campuses
            (Mangochi, Lilongwe and Blantyre) or can be requested from the
            WhatsApp number provided underneath.
          </p>

          <p className="text-gray-700 leading-[1.9] text-justify">
            Duly completed application forms should come along with copies of
            certificates/notification of results/transcripts and a bank deposit
            slip for the application fees bearing the name of the applicant
            should be submitted to the nearest campus or scanned copies can be
            submitted through admissions@dmisjbu.edu.mw not later than
            20th January, 2023.
          </p>
        </div>

        {/* ================= HOTLINE ================= */}
        <div className="rounded-2xl bg-indigo-700 text-white p-8 shadow-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Phone size={20} /> Hotline: For more details, call or WhatsApp us:
          </h3>
          <p className="text-lg">+265 (0) 983 01 88 23</p>
        </div>

        {/* ================= CAMPUSES ================= */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Mangochi Campus",
              address: "P.O.Box 406, Mangochi",
              phone: "0992288108",
              email: "principalmh@dmisjbu.edu.mw",
              map: "https://maps.google.com/maps?q=Mangochi%20Malawi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            },
            {
              name: "Lilongwe Campus",
              address: "P.O.Box 2398, Area 4, Lilongwe",
              phone: "0994086882, 0881047088",
              email: "principalllw@dmisjbu.edu.mw",
              map: "https://maps.google.com/maps?q=Lilongwe%20Malawi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            },
            {
              name: "Blantyre Campus",
              address: "P.O.Box 5806, Limbe, Blantyre",
              phone: "0994392948",
              email: "principalbt@dmisjbu.edu.mw",
              map: "https://maps.google.com/maps?q=Blantyre%20Malawi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            }
          ].map((campus, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/60 border border-indigo-200 shadow-xl rounded-2xl p-6"
            >
              <h4 className="font-semibold text-indigo-700 mb-3">
                {campus.name}
              </h4>
              <p>{campus.address}</p>
              <p>Phone: {campus.phone}</p>
              <p>Email: {campus.email}</p>

              <div className="mt-4 rounded-xl overflow-hidden border border-indigo-200">
                <iframe
                  src={campus.map}
                  width="100%"
                  height="200"
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}