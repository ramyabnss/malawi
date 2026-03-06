import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import tab1 from "../assets/tab-1.jpg";
import tab2 from "../assets/tab-2.jpg";
import tab3 from "../assets/tab-3.jpg";
import tab4 from "../assets/tab-4.jpg";

export default function TabsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "Our Vision",
      image: tab1,
      content:
        "To Spearhead Employable Education and Africa and Become Part of its History",
    },
    {
      title: "Our Mission",
      image: tab2,
      content:
        "Capacity Building of Children Africa to Meet the Emerging Challenges Happening in the world, by Importing Quality Employable Education with Discipline Which Leads to Self-Enlightenment and Development of the Nation.",
    },
    {
      title: "Core Values",
      image: tab3,
      list: [
        "Developing Human resource to serve the nation",
        "Recognizing teaching as a unifying activity",
        "Nurturing Integrity, Creativity, and Academic Freedom",
        "Retaining a willingness to Experiment with New Paradigms",
      ],
    },
    {
      title: "Why Choose DMISJBU",
      image: tab4,
      list: [
        "All Programmes are Accredited by National Council for Higher Education (NCHE)",
        "Emphasis on Moral Values and Life Skills",
        "High Employability Rate of Graduates",
        "Highly Qualified and Experienced Faculty Members",
        "Well-Equipped Computer Lab, Digital Electronics Lab, Psychology Lab, Geography Lab,",
        "Research Lab and ICT enabled facilities",
        "Smart Classrooms and Digital Libraries with Free Wi-Fi",
        "Professional Programmes are registered to Regulatory Bodies",
        "Modern Learning Resources Centre",
        "Flexible Student Support Service",
        "Industry linked Practical Training",
        "Scholarships on Different Criterions",
        "Safe Accommodation and Transportation"
      ],
    },
  ];

  return (
    <section className="w-full py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tab Headings */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 text-lg font-semibold rounded-full transition duration-300
                ${activeTab === index
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-700 border hover:bg-blue-100"
                }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.6 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >

              {/* Left Portrait Image */}
              <motion.img
                src={tabs[activeTab].image}
                alt="tab"
                className="w-full h-[610px] object-cover rounded-2xl shadow-xl
                           transition duration-500 hover:scale-105"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Right Content Card */}
              <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-600">

                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  {tabs[activeTab].title}
                </h2>

                {tabs[activeTab].list ? (
                  <ul className="space-y-4 text-lg text-gray-700">
                    {tabs[activeTab].list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-3 h-3 mt-2 bg-blue-600 rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {tabs[activeTab].content}
                  </p>
                )}
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}