import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../assets/research-banner.jpg";

export default function ResearchInnovation() {
  return (
    <div className="w-full overflow-hidden">

      {/* ================= BANNER ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Centre for Research & Innovation (CFRI)
          </h1>
        </div>
      </div>


      {/* ================= BODY SECTION ================= */}
      <div className="py-20 px-6 space-y-20">

        {/* ================= INTRO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold text-indigo-700">
            DMISJBU CFRI
          </h2>

          <p className="leading-[1.9] text-justify text-lg">
            The DMISJBU Centre for Research & Innovation (CFRI) is tasked with producing new research and knowledge, which is disseminated through academic publications, conferences, and other means. In order to encourage staff and students to actively engage in research, the CFRI department plays a crucial role in developing a research culture within the University. Research that benefits society and the Malawi Growth and Development Strategy is a top priority for the research and development division of DMI-St. John the Baptist University.
          </p>
        </motion.div>


        {/* ================= PRIMARY GOAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold text-indigo-700">
            Primary Goal
          </h2>

          <p className="leading-[1.9] text-justify text-lg">
            The primary goal of a CFRI is to conduct research that leads to innovation and breakthroughs in various areas of study such as science, technology, and engineering. This can involve working on new technologies, developing new products or services, advancing scientific knowledge, exploring new theories or ideas, and more.
          </p>

          <p className="leading-[1.9] text-justify text-lg">
            As a university, we also collaborate with external partners, such as other academic institutions, government agencies, or private sector companies to share knowledge and resources and to leverage each other’s expertise. Overall, the Centre for Research & Innovation plays a crucial role in advancing knowledge, driving innovation, and contributing to the economic growth and development of the country.
          </p>
          <p className="leading-[1.9] text-justify text-lg">
            DMI University has provided space for research in all the campuses by providing with the necessary environment for research such as laboratories that are equipped with the necessary tools to help in the research conducted by both faculties and students. The research laboratories are located in all the three campuses. These labs have state of the art modern physical equipment such as computers as well as modern softwares such as Turnitin, Quill Bot, Grammarly, SPSS etc which helps to bring forth international standard research papers and articles, including more professional research papers. These systems are also used in data processing and analysis. This has helped the university create high-quality research articles and patents.
          </p>
          <p className="leading-[1.9] text-justify text-lg">
            Furthermore, the University has also launched its own research journal where all the staff interested in publishing their work can do so. The Research publications and consultancies that are published within the Universities journal are supported and guided by various policies. These policies have been formulated to help guide the students in the publishing of their work.
          </p>
          <p className="leading-[1.9] text-justify text-lg">
            In addition, the University has also put in place an Intellectual Property Rights Policy as well as Plagiarism Policy. These policies have also been formulated with the intention of safeguarding the abuse of intellectual property that is also rampant around the world. A research activity calendar can play a crucial role in the development of a university in several ways, including promoting research culture and enhancing research productivity.
          </p>
        </motion.div>


        {/* ================= COMMITTEE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-indigo-700 mb-8">
            Research and Publication Committee Members
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-gray-700 text-xl">
            {[
              "Deputy Vice Chancellor – Research & Innovation – Chairperson",
              "DVC Academic",
              "Director ICT",
              "Director of Quality Assurance",
              "University Registrar – Secretary",
              "Principal, Blantyre Campus",
              "Principal, Lilongwe Campus",
              "Principal, Mangochi Campus",
              "Campus Research Coordinator, Mangochi",
              "Campus Research Coordinator, Lilongwe",
              "Campus Research Coordinator, Blantyre",
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 border border-green-200 rounded-xl shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>


        {/* ================= TRAINING & SUPPORT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-bold text-indigo-700">
            Training & Academic Support
          </h2>

          <p className="leading-[1.9] text-justify text-xl">
            Through the research and publications committee, we have encouraged the students to use scientific articles in their assignments and projects. Students are trained in analyzing and reviewing research articles. All the students are monitored and guided by the research coordinators and project supervisors at the campuses.
          </p>

          <p className="leading-[1.9] text-justify text-xl">
            Also, the RPC (Research and Publication Committee) helps academic staff members conduct research and incorporate the results into their lessons. Staff members receive training in scientific article development, data analysis and interpretation, and proposal writing.
          </p>

          <p className="leading-[1.9] text-justify text-xl">
            By providing this kind of training and support, the Research Publication Committee help academic staff members to enhance their research skills, improve the quality of their research, and effectively use their research findings to enhance the teaching process.
          </p>

          <p className="leading-[1.9] text-justify text-xl">
            This can ultimately benefit students by providing them with access to high-quality research and up-to-date information in their field of study. This is also achieved by periodically hold training sessions and workshops on research-based themes with the participation of international trainers and staff from various western, European, and middle eastern nations.
          </p>
        </motion.div>

      </div>
    </div>
  );
}