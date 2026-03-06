import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/university-banner.jpg";
import campusImg from "../../assets/mangochi-campus.jpg";

import g1 from "../../assets/mangochi/gallery1.jpg";
import g2 from "../../assets/mangochi/gallery2.jpg";
import g3 from "../../assets/mangochi/gallery3.jpg";
import g4 from "../../assets/mangochi/gallery4.jpg";
import g5 from "../../assets/mangochi/gallery5.jpg";
import g6 from "../../assets/mangochi/gallery6.jpg";
import g7 from "../../assets/mangochi/gallery7.jpg";
import g8 from "../../assets/mangochi/gallery8.jpg";
import g9 from "../../assets/mangochi/gallery9.jpg";
import g10 from "../../assets/mangochi/gallery10.jpg";
import g11 from "../../assets/mangochi/gallery11.jpg";



export default function Mangochi() {
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
            DMISJBU Mangochi
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
              Mangochi Campus
            </h2>

            <p className="leading-[1.9] text-justify text-lg">
              The DMISJBU is very passionate and steadily progresses in nurturing and making the young minds into leaders and good citizens. In Malawi, DMISJBU is one among the top emerging academies and our main motto is to set benchmark to provide quality and ever sustainable education. Our dynamic faculty and senior team educate and train the best to give a solid foundation for learning.
            </p>

            <p className="leading-[1.9] text-justify text-lg">
              DMISJBU at Mangochi is a sprawling campus with nature, modern facilities, separate hostels and cafeteria inside the campus for men and women, private hostels around the campus, and essay commute and transport. As part of this endeavour, the university has ICT enabled classrooms, free Wi-Fi, digitalized teaching techniques, modern library, employability-based concepts in curriculum, field and industry linked courses and social concerns.
            </p>
            <p className="leading-[1.9] text-justify text-lg">
              The hi-tech labs act as ideal training grounds for budding professionals that allow students to experiment and bring to practice what they have learnt in theory. The well experienced and qualified faculty members and staff members so kind towards students’ concerns
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
                    <li>Bachelor of Business Administration in Advertising & Marketing</li>
                    <li>Bachelor of Commerce in Accounting & Finance</li>
                    <li>Diploma in Business Administration</li>
                    <li>Diploma in Commerce</li>
                  </ul>
                ),
              },
              {
                title: "School of Social Work",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor of Social Work – General</li>
                    <li>Bachelor of Social Work in Project Monitoring and Evaluation</li>
                    <li>Bachelor of Social Work in Community Development</li>
                    <li>Diploma in Social work</li>
                  </ul>
                ),
              },
              {
                title: "School of Education",
                content: (
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Bachelor’s in Arts Education</li>
                    <li>Bachelor’s in Science Education</li>
                    <li>Diploma in Science Education</li>
                    <li>Diploma in Arts Education</li>
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
              P.O.Box 406, Mangochi, <br />
              Malawi
            </p>

            <p className="text-lg">
              Phone : +265 992 28 81 08 <br />
              Email : principalmh@dmisjbu.edu.mw <br />
              dmisjbumh@dmisjbu.edu.mw
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
            {[g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11].map((img, index) => (
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