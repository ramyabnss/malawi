import { motion } from "framer-motion";
import aboutImage from "../assets/student.jpg";
import aboutBg from "../assets/about-bg.jpg";

export default function About() {
    return (
        <section className="relative w-full py-20 bg-gray-50 overflow-hidden">

            <div className="max-w-7xl mx-auto py-10 px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <img
                        src={aboutImage}
                        alt="About Campus"
                        className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                    />
                </motion.div>

                {/* RIGHT SIDE WITH BG IMAGE + TEXT */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                >

                    {/* Background Image */}
                    <img
                        src={aboutBg}
                        alt="About Background"
                        className="absolute inset-0 w-full h-full object-cover"
                    />



                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-center p-10 text-white">

                        <h1 className="text-3xl lg:text-5xl font-bold mb-6">
                            Apply for Admission
                        </h1>
                        <div className="space-y-4 mb-8">
                            <p className="text-green-300 font-semibold uppercase">
                                TERM EDUCATION </p>
                            <p className="text-green-300 font-semibold uppercase">December 2025 Intake.</p>
                            <p className="text-green-300 font-semibold uppercase mt-4">
                                REGULAR INTAKE </p>
                            <p className="text-green-300 font-semibold uppercase">January 2026 Intake.</p>
                        </div>
                        <p className="text-gray-200 leading-relaxed mb-8">
                            We don’t just give students an education and experiences that set them up for success in a career. We help them succeed in their
                            career—to discover a field they’re passionate about and dare to lead it. </p>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 shadow-xl">
                            Apply Now
                        </button>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}