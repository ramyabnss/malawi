import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import bannerImg from "../../assets/campus-hero.jpg";

export default function FeesStructure() {
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
            Fees Structure
          </h1>
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">

        {/* ================= DEGREE PROGRAMMES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-8 border-b border-green-700 pb-2">
            DEGREE PROGRAMMES BEING OFFERED
          </h2>

          <div className="overflow-x-auto rounded-2xl backdrop-blur-xl bg-white/70 border border-gray-300 shadow-xl">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-green-700 text-white text-xl">
                <tr>
                  <th className="px-6 py-4 border">Programme of Study</th>
                  <th className="px-6 py-4 border">Duration</th>
                  <th className="px-6 py-4 border">Campuses</th>
                  <th className="px-6 py-4 border">Fees Per Semester</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 border">
                    Bachelor of Business Administration
                  </td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi, Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border">MK575,000</td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4 border">Bachelor of Commerce</td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi, Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border">MK575,000</td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 border">Bachelor of Social Work</td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi, Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border">MK575,000</td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4 border">
                    Bachelor of Arts in Education
                  </td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi, Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border">MK500,000</td>
                </tr>

                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 border">
                    Bachelor of Science in Education
                  </td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">Mangochi</td>
                  <td className="px-6 py-4 border">K550,000</td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4 border">
                    Bachelor of Science in Education
                  </td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi and Lilongwe
                  </td>
                  <td className="px-6 py-4 border">MK550,000</td>
                </tr>

                {/* Most Popular */}
                <tr className="bg-green-50 hover:bg-green-100 transition">
                  <td className="px-6 py-4 border font-semibold flex items-center gap-2">
                    Bachelor of Science in Computer Science
                    <span className="bg-indigo-700 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star size={14} /> Most Popular
                    </span>
                  </td>
                  <td className="px-6 py-4 border">4 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi, Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border font-semibold">
                    MK700,000
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>


        {/* ================= DIPLOMA PROGRAMMES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-indigo-700 mb-8 border-b border-indigo-700 pb-2">
            DIPLOMA PROGRAMMES BEING OFFERED
          </h2>

          <div className="overflow-x-auto rounded-2xl backdrop-blur-xl bg-white/70 border border-gray-300 shadow-xl">
            <table className="min-w-full text-sm text-left border border-gray-300">
              <thead className="bg-green-700 text-white text-xl">
                <tr>
                  <th className="px-6 py-4 border">Programme</th>
                  <th className="px-6 py-4 border">Duration</th>
                  <th className="px-6 py-4 border">Campuses</th>
                  <th className="px-6 py-4 border">Fees Per Semester</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 border">
                    Diploma in Science Education
                  </td>
                  <td className="px-6 py-4 border">3 Years</td>
                  <td className="px-6 py-4 border">
                    Mangochi, Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border">MK450,000</td>
                </tr>

                <tr className="bg-gray-50 hover:bg-gray-100 transition">
                  <td className="px-6 py-4 border">
                    Diploma in Arts Education
                  </td>
                  <td className="px-6 py-4 border">3 Years</td>
                  <td className="px-6 py-4 border">
                    Lilongwe and Blantyre
                  </td>
                  <td className="px-6 py-4 border">MK400,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>


        {/* ================= HOSTEL FEES ================= */}
        <div>
          <h2 className="text-2xl font-bold text-indigo-700 mb-8 border-b border-green-700 pb-2">
            HOSTEL FEES
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Mangochi */}
            <div className="rounded-2xl backdrop-blur-xl bg-white/70 border border-gray-300 shadow-xl p-6">
              <h3 className="font-semibold text-lg mb-4 text-indigo-700">
                Mangochi Campus (Fees Per Semester)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Boys (2 per Room) – K160,000.00</li>
                <li>Girls (3 per Room) – K130,000.00</li>
              </ul>
            </div>

            {/* Lilongwe */}
            <div className="rounded-2xl backdrop-blur-xl bg-white/70 border border-gray-300 shadow-xl p-6">
              <h3 className="font-semibold text-lg mb-4 text-indigo-700">
                Lilongwe Campus (Fees Per Semester)
              </h3>
              <ul className="space-y-2 text-sm">
                <li>Girls (4 per Room) – K140,000.00</li>
                <li>Girls (4 per Room - Self Contained) – K160,000.00</li>
                <li>Girls (3 per Room - Self Contained) – K210,000.00</li>
              </ul>
            </div>
          </div>
        </div>


        {/* ================= APPLICATION FEE ================= */}
        <div className="rounded-2xl bg-green-700 text-white p-8 shadow-xl border border-indigo-700">

          <h2 className="text-2xl font-semibold mb-4 border-b border-indigo-400 pb-2 ">
            APPLICATION FEE
          </h2>

          <p className="mb-6 text-green-100">
            Applicants are required to pay a non-refundable application fee of
            K10,000 through National Bank account of the campus of their choice
            as provided below:
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-sm">

            <div className="border border-indigo-500 rounded-xl p-4 bg-green-600/40">
              <h4 className="font-semibold mb-2 text-white text-xl">
                MANGOCHI CAMPUS
              </h4>
              <p>Name: DMI-St. John The Baptist University</p>
              <p>A/C : 3762572</p>
              <p>Branch: Mangochi</p>
            </div>

            <div className="border border-indigo-500 rounded-xl p-4 bg-green-600/40">
              <h4 className="font-semibold mb-2 text-white text-xl">
                LILONGWE CAMPUS
              </h4>
              <p>Name: DMI-St. John The Baptist University</p>
              <p>A/C : 1001060755</p>
              <p>Branch: City Center</p>
            </div>

            <div className="border border-indigo-500 rounded-xl p-4 bg-green-600/40">
              <h4 className="font-semibold mb-2 text-white text-xl">
                BLANTYRE CAMPUS
              </h4>
              <p>Name: DMI-St. John The Baptist University</p>
              <p>A/C : 1007083692</p>
              <p>Branch: Blantyre</p>
            </div>

          </div>



        </div>
        <p className="mt-3 text-2xl text-red-500">
          Note: Accommodation is optional and students are to make special
          arrangements should they need a place at the Hostels.
        </p>

      </div>
    </div>
  );
}