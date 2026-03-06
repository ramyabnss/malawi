import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import heroImage from "../assets/hero-final.jpg";

export default function VideoSection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">

            {/* Background Image */}
           <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
/>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white px-6 max-w-3xl">

                <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl  mb-6 font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
                >
                    Video Tour in DMISJBU
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-200 mb-10"
                >
                    Take a Tour in DMISJBU and you will find the Best University in the country
                </motion.p>

                {/* Play Button */}
                <motion.div
                    onClick={() => setOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    className="mx-auto w-20 h-20 rounded-full bg-green-500 flex items-center justify-center cursor-pointer relative"
                >
                    <Play size={36} className="text-white ml-1" />

                    {/* Pulse Animation */}
                    <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-40"></span>
                </motion.div>
            </div>

            {/* Video Modal */}
            {open && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="relative w-[90%] md:w-[800px]">

                        {/* Close Button */}
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute -top-10 right-0 text-white text-3xl"
                        >
                            ✕
                        </button>

                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full rounded-lg"
                                src="https://www.youtube.com/embed/evQyBr2Kazk?autoplay=1"
                                title="University Video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </div>
            )}
        </section>
    );
}