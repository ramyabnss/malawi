import React, { useState } from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/campus-hero.jpg";

export default function Senate() {
  const [search, setSearch] = useState("");

  const senateMembers = [
    ["Prof. Amalraj Ambrose", "Chairperson"],
    ["Dr. B. W. Malunga", "Vice Chairperson"],
    ["Rev. Fr. G. Sundar", "Member"],
    ["Ms. Taonga Nyasulu", "Secretary"],
    ["Dr. Gregory Kunjenje", "Member"],
    ["Dr. David Kamchach", "Member"],
    ["Rev. Fr. David Mambo", "Member"],
    ["Dr. Yobbe Lungu", "Member"],
    ["Rev. Sr. W. Viyagu", "Member"],
    ["Dr. P. Kameshpandian", "Member"],
    ["Mr. Mateo Kanthmkako", "Member"],
    ["Mr. Freeza Jefutala", "Member"],
    ["Ms. Vera Phembo Khonje", "Member"],
    ["Rev. Fr. M. Sahaya Rubin", "Member"],
    ["Rev. Sr. P. Pradeepa", "Member"],
    ["Rev. Fr. M. Vasanth Ruban", "Member"],
    ["Dr. E. Mugundharajan", "Member"],
    ["Dr. Dafter Khembo", "Member"],
    ["Ms. Hilda Kamera", "Member"],
    ["Mr. Benard Gauti", "Member"],
    ["Mr. Andrew Mpekansambo", "Member"],
    ["Mr. Vote Duncan Somba", "Member"],
    ["Mr. Clement Unique Lisimba", "Member"],
    ["Mr. Fabiano Anthuchino", "Member"],
    ["Mr. Jerry Roy Jana", "Member"],
    ["Mr. Daniel Chikpoa", "Member"],
    ["Mr. James Chilita", "Member"],
    ["Mr. Grace Chiona", "Member"],
  ];

  const filteredMembers = senateMembers.filter((member) =>
    member[0].toLowerCase().includes(search.toLowerCase())
  );

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
            University Senate
          </h1>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        {/* ================= DESCRIPTION ================= */}
        <div className="backdrop-blur-xl bg-white/60 border border-green-200 shadow-xl rounded-2xl p-8">
          <p className="text-gray-700 leading-[1.9] text-justify">
            The DMISJBU has different strategical structures, among the Senate is
            the primary advisory body supports the mission of the university by
            enabling informed and inclusive decision making to represent the
            faculty on all matters of shared governance. The members of Senate
            are: the president of the university, the director, vice chancellor,
            the registrar, Deans, and stakeholders. To maintain the academic
            qualities and standards the Senate conducts its meeting yearly twice
            in a regular interval.
          </p>
        </div>

        {/* ================= SEARCH ================= */}
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Search Official Name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border border-green-500 rounded-lg focus:outline-none focus:ring-2"
          />
        </div>

        {/* ================= TABLE ================= */}
        <div className="overflow-x-auto rounded-2xl shadow-xl border border-green-200 bg-white">
          <table className="min-w-full">
            <thead className="bg-green-700 text-white text-xl">
              <tr>
                <th className="px-6 py-4 text-left  font-semibold">
                  Profile
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  Name of the Official
                </th>
                <th className="px-6 py-4 text-left  font-semibold">
                  Designation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-100 text-gray-700 text-xl">
              {filteredMembers.map((person, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  className="hover:bg-green-50 transition"
                >
                  <td className="px-6 py-4">
                    <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800">
                      {person[0].charAt(0)}
                    </div>
                  </td>
                  <td className="px-6 py-4">{person[0]}</td>
                  <td className="px-6 py-4">{person[1]}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}