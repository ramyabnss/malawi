import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/university-banner.jpg";
import campusImg from "../../assets/blantyre-campus.jpg";

import g1 from "../../assets/blantyre/gallery1.jpg";
import g2 from "../../assets/blantyre/gallery2.jpg";
import g3 from "../../assets/blantyre/gallery3.jpg";




export default function Blantyre() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            DMISJBU Blantyre
          </h1>
        </div>
      </div>


      {/* ================= BODY SECTION ================= */}
      <div className="relative py-24 px-6 space-y-24">

        {/* ================= 1ST ROW ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center bg-green-700 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Left Image */}
          <div>
            <img
              src={campusImg}
              alt="Mangochi Campus"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          {/* Right Content */}
          <div className="p-10 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Blantyre Campus
            </h2>

            <p className="leading-[1.9] text-justify text-lg">DMISJBU is a leading institution in around Malawi, the satellite campus at Blantyre, recently established, set up with a vision to contribute to nation-building through education. am educate and train the best to give a solid foundation for learning.
            </p>

            <p className="leading-[1.9] text-justify text-lg">
              with a view to develop the young minds of the nation the university aims to fulfill its mission by continuing to introduce new programs to groom visionary, competent, committed, compassionate and value-based leaders. It empowers the students with the knowledge, skills, and long-term vision that leads to innovation, service to society and growth.
            </p>
            <p className="leading-[1.9] text-justify text-lg">
              This campus is in the hot spot of city and easily accessible to all public facilities apart from the facilities provided by the university in the campus promises. It provides flexible support services for staff and students and conducive environment for teaching and learning.
            </p>
          </div>
        </motion.div>


        {/* ================= 2ND ROW ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16"
        >
          {/* ================= PROGRAMMES ACCORDION ================= */}
          <div>
            <h3 className="text-3xl font-bold text-indigo-700 mb-8">
              Offering Programmes
            </h3>

            {[
              {
                title: "School of Computer Science & Information Technology",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Science in Computer Science</li>
                    <li>Diploma in Computer Science</li>
                  </ul>
                ),
              },
              {
                title: "School of Management & Commerce",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Business Administration – General</li>
                    <li>Bachelor of Business Administration in Finance</li>

                  </ul>
                ),
              },
              {
                title: "School of Social Work",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Social Work – General</li>

                  </ul>
                ),
              },

            ].map((item, index) => (
              <details
                key={index}
                className="mb-5 group border border-green-200 rounded-xl overflow-hidden"
              >
                <summary className="cursor-pointer bg-green-700 text-white px-6 py-4 font-semibold text-lg flex justify-between items-center">
                  {item.title}
                  <span className="group-open:rotate-180 transition-transform duration-300">
                    ▼
                  </span>
                </summary>

                <div className="bg-white p-6 text-gray-700 leading-relaxed">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

          {/* ================= CONTACT ================= */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-indigo-700">
              Contact
            </h3>

            <p className="text-lg">
              We are Open Monday – Friday at 7.30 am and 5.15 pm, except on holidays.
            </p>

            <p className="font-semibold text-lg">
              Admission Center
            </p>

            <p className="text-lg">
              DMI-St.John the Baptist University <br />
              P.O.BOX.5809, Blantyre, <br />
              Malawi, Central Africa
            </p>

            <p className="text-lg">
              Phone : +265 994 39 29 48 / +265 999 93 37 88 <br />
              Email : ticblantyre@gmail.com <br />dmisjbubl@dmisjbu.edu.mw <br />
              principalbt@dmisjbu.edu.mw
            </p>
          </div>
        </motion.div>



        {/* ================= 3RD ROW - GALLERY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h3 className="text-4xl font-bold text-center text-indigo-700 mb-12">
            Campus Activities & Resources
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[g1, g2, g3].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl shadow-xl group"
              >
                <img
                  src={img}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>

    </div>
  );
}