import { motion } from "framer-motion";
import sectionBg from "../assets/section-bg.jpg";
import leftImage from "../assets/feature.png";

export default function FeatureSection() {
    return (
        <section className="relative w-full py-28 overflow-hidden">

            {/* Background Image */}
            <img
                src={sectionBg}
                alt="Section Background"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Blue Overlay */}
            <div className="absolute inset-0"></div>

            {/* Content Wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <img
                        src={leftImage}
                        alt="Campus Life"
                        className="w-[70%] object-contain rounded-3xl shadow-2xl border border-white"
                    />
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-white"
                >
                    <div className="mb-8">
                        <h2 className="text-3xl lg:text-4xl font-bold uppercase tracking-wide text-white">
                            About Our University
                        </h2>

                        {/* Gradient Line */}
                        <div className="mt-3 w-24 md:w-40 h-1 bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 rounded-full"></div>
                    </div>

                    <p className="text-xl md:text-2xl leading-relaxed mb-6">
                        <span className="font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                            DMI St. John the Baptist University (DMISJBU)
                        </span>{" "}
                        is a multi-disciplinary higher educational and research academia,
                        accredited by the National Council for Higher Education (NCHE) Malawi
                        and is one among the well-known best private universities in Malawi.
                    </p>

                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-200">
                        <span className="font-semibold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                            DMISJBU
                        </span>{" "}
                        has 6 different schools and they are effectively functioned in two
                        satellite campuses in the main cities of Malawi: Lilongwe and Blantyre
                        with headquarter at Mangochi. The university offers 65+ courses and 20+
                        programmes in different disciplines in Undergraduate and Postgraduate programmes.
                    </p>

                    <button className="bg-yellow-400 hover:bg-yellow-300 
                             text-blue-950 font-semibold 
                             px-8 py-3 rounded-lg 
                             transition duration-300 shadow-xl">
                        Read More
                    </button>

                </motion.div>

            </div>

        </section>
    );
}