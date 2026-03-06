import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import bannerImg from "../assets/campus-hero.jpg";

export default function ContactPage() {
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
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* ================= CONTACT CARDS ================= */}
      <div className="w-full bg-indigo-50 py-20 mb-8">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* Main Campus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/40 border border-indigo-200 shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition duration-500"
          >
            <MapPin className="mx-auto text-indigo-700 mb-4" size={40} />
            <h3 className="text-3xl font-bold text-indigo-700 mb-3">Main Campus</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              DMI St John the Baptist University <br />
              P.O.Box 406, Mangochi, Malawi, Central Africa
            </p>
            <p className="mt-2 text-gray-700 text-center">
              <span className="font-bold">Phone:</span> +265 1599 790, +265 991287235 <br />
              <span className="font-bold">Email:</span> dmisjbu@gmail.com <br />
              dmisjbu@dmisjbu.edu.mw
            </p>
          </motion.div>

          {/* Lilongwe Campus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-xl bg-white/40 border border-indigo-200 shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition duration-500"
          >
            <MapPin className="mx-auto text-indigo-700 mb-4" size={40} />
            <h3 className="text-3xl font-bold text-indigo-700 mb-3">Lilongwe Campus</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              P.O.Box 2398, Lilongwe, Malawi, Central Africa
            </p>
            <p className="mt-2 text-gray-700 text-center">
              <span className="font-bold">Phone:</span> +265 881047088, +265 992371901 <br />
              <span className="font-bold">Email:</span> dmisjbulilongwe@gmail.com
            </p>
          </motion.div>

          {/* Blantyre Campus */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/40 border border-indigo-200 shadow-xl rounded-2xl p-8 text-center hover:shadow-2xl transition duration-500"
          >
            <MapPin className="mx-auto text-indigo-700 mb-4" size={40} />
            <h3 className="text-3xl font-bold text-indigo-700 mb-3">Blantyre Campus</h3>
            <p className="text-gray-700 leading-relaxed text-center">
              P.O.Box 5809, Blantyre, Malawi, Central Africa
            </p>
            <p className="mt-2 text-gray-700 text-center">
              <span className="font-bold">Phone:</span> +265 999933788 <br />
              <span className="font-bold">Email:</span> ticblantyre@gmail.com
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= GOOGLE MAP ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-indigo-200"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5651.055834436142!2d35.17866636106334!3d-14.547463235503464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18dee3b5da6e9889%3A0x4b7c07cf17e59e82!2sDMI-St%20John%20the%20Baptist%20University!5e1!3m2!1sen!2sin!4v1772706459747!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </motion.div>
      </div>

    </div>
  );
}