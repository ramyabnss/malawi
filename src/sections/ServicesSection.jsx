import { motion } from "framer-motion";
import { BookOpen, Globe2, Landmark } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <BookOpen size={42} />,
      title: "Education Services",
      desc: "Education is an inherent medium where learners can uplift themselves to have an improvement life out of economically and social marginalized circumstance",
    },
    {
      icon: <Globe2 size={42} />,
      title: "Research and Innovations",
      desc: "Research and Innovation in education instigate teachers and students to explore novel factors to keep the learning process vibrant ever and ever",
    },
    {
      icon: <Landmark size={42} />,
      title: "Entrepreneurship Training",
      desc: "Provides lots of avenues to validate the newer ideas into business models and SJBU strives to produce employers not employees",
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="max-w-7xl py-12 md:py-16 mx-auto px-5 md:px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl p-[2px]
                         bg-gradient-to-r
                         from-blue-500
                         via-purple-500
                         via-pink-500
                         via-orange-400
                         to-green-500
                         animate-gradientMove"
            >

              {/* White Card */}
              <div className="relative overflow-hidden bg-white rounded-2xl p-8 md:p-10 h-full text-center
                              transition duration-500 group-hover:shadow-2xl">

                {/* Hover Top → Bottom Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b 
                                from-blue-600 to-indigo-700
                                translate-y-[-100%]
                                group-hover:translate-y-0
                                transition-transform duration-1000 ease-in-out">
                </div>

                {/* Content */}
                <div className="relative z-10 transition duration-500 group-hover:text-white">

                  {/* Floating Icon */}
                  <motion.div
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="flex justify-center mb-6 text-green-600 
                               group-hover:text-white transition duration-500"
                  >
                    {service.icon}
                  </motion.div>

                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 uppercase">
                    {service.title}
                  </h2>

                  <p className="leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>

                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* Gradient Border Animation */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .animate-gradientMove {
            background-size: 300% 300%;
            animation: gradientMove 6s linear infinite;
          }
        `}
      </style>

    </section>
  );
}