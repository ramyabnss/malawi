import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/campus-hero.jpg";
import campusImg from "../../assets/lilongwe.jpg";

import g1 from "../../assets/lilongwe/gallery1.jpg";
import g2 from "../../assets/lilongwe/gallery2.jpg";
import g3 from "../../assets/lilongwe/gallery3.jpg";
import g4 from "../../assets/lilongwe/gallery4.jpg";
import g5 from "../../assets/lilongwe/gallery5.jpg";
import g6 from "../../assets/lilongwe/gallery6.jpg";
import g7 from "../../assets/lilongwe/gallery7.jpg";
import g8 from "../../assets/lilongwe/gallery8.jpg";





export default function Lilongwe() {
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
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            DMISJBU Lilongwe
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
              alt="Lilongwe Campus"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>

          {/* Right Content */}
          <div className="p-10 text-white space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Lilongwe Campus
            </h2>

            <p className="leading-[1.9] text-justify text-lg">
              The satellite campus of DMISJBU at Lilongwe is a big outspread campus with lush green, modern ambiance, structured buildings with modern facilities, well equipped lab, free internet connectivity, modern library that all attract the students from multibackground and likely these amenities facilitate the teaching and learning to face the contemporary challenges and offers a 360-degree career transformational set-up.
            </p>

            <p className="leading-[1.9] text-justify text-lg">
              With its state-of-the-art infrastructure, the campus facilitates all-round growth of students. There are several well-developed residential options for students as well as faculty within its premises.
            </p>
            <p className="leading-[1.9] text-justify text-lg">
              The university also takes effective measures for better education by steady collaborations, interactive forums and research culture. The University mainly focusses on developing a strong alumni and concerns more about the students’ placements around the world.
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
              Programmes
            </h3>

            {[
              {
                title: "DEPARTMENT OF COMPUTER SCIENCE",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Computer Science</li>

                  </ul>
                ),
              },
              {
                title: "DEPARTMENT OF MANAGEMENT AND COMMERCE",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Business Administration – General</li>
                    <li>Bachelor of Business Administration in Finance</li>
                    <li>Bachelor of Business Administration in Advertising & Marketing</li>
                    <li>Bachelor of Commerce in Accounting & Finance</li>
                    <li>Diploma in Business Administration</li>
                    <li>Diploma in Commerce</li>
                  </ul>
                ),
              },
              {
                title: "DEPARTMENT OF SOCIAL WORK",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Social Work – General</li>
                    <li>Bachelor of Social Work in Project Monitoring and Evaluation</li>
                    <li>Bachelor of Social Work in Community Development</li>

                  </ul>
                ),
              },
              {
                title: "DEPARTMENT OF EDUCATION",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor’s in Arts Education (English , Geography , History)</li>
                    <li>Bachelor’s in Science Education ( Chemistry , Physics , Mathematics , Computer)</li>
                    <li>Diploma in Science Education ( Chemistry , Physics , Mathematics , Computer)</li>
                    <li>Diploma in Arts Education (English , Geography , History)</li>
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
              P.O.BOX.2398, Lilongwe, <br />
              Malawi, Central Africa
            </p>

            <p className="text-lg">
              Phone : +265 881 04 70 88 / +265 992 37 19 01 <br />
              Email : principalllw@dmisjbu.edu.mw <br />
              dmisjbulilongwe@gmail.com
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
            {[g1, g2, g3, g4, g5, g6, g7, g8].map((img, index) => (
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