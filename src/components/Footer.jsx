import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function FooterSection() {
  return (
    <>
      {/* 🌊 STATIC WAVE */}
      <div className="relative w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,53.3C1120,53,1280,75,1360,85.3L1440,96L1440,120L0,120Z"
            fill="#00008b"
          />
        </svg>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#00008b] text-gray-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-10">

            {/* ABOUT */}
            <div>
              <h2 className="text-white text-3xl font-semibold mb-6">
                DMISJBU 
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Providing quality education with discipline and innovation.
                Empowering students to lead and serve the nation.
              </p>
            </div>

            {/* USER LINKS */}
            <div>
              <h2 className="text-white text-3xl font-semibold mb-6">
                User Links
              </h2>
              <ul className="space-y-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Admissions", path: "/admission/admission-criteria" },
                  { name: "Research & Innovation", path: "/research-innovation" },
                  { name: "Contact", path: "/contact" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="hover:text-yellow-400 transition duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h2 className="text-white text-3xl font-semibold mb-6">
                Quick Links
              </h2>
              <ul className="space-y-3">
                {[
                  { name: "Academic Programmes", path: "/academic-programs" },
                  { name: "Academic Calendar", path: "/academic-calendar" },
                  { name: "Partnerships", path: "/partnerships" },
                  { name: "Alumni Blog", path: "/alumni-blog" },
                ].map((link, i) => (
                  <li key={i}>
                    <Link
                      to={link.path}
                      className="hover:text-yellow-400 transition duration-300 hover:translate-x-2 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-white text-3xl font-semibold mb-6">
                Contact Us
              </h2>
              <p className="mb-3">
                📍 Main Campus Address <br />
                P.O.Box 406, Mangochi, Malawi
              </p>
              <p className="mb-3">📞 +265 991 287 2350</p>
              <p className="mb-6">✉ dmisjbu@dmisjbu.edu.mw</p>

              {/* SOCIAL LINKS */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/DMISJBU/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full 
                             hover:bg-yellow-400 
                             hover:text-black 
                             transition duration-300"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://x.com/dmisjbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full 
                             hover:bg-yellow-400 
                             hover:text-black 
                             transition duration-300"
                >
                  <Twitter size={18} />
                </a>

                <a
                  href="https://www.youtube.com/channel/UCHLiXyvZnwn8XBJHA5k-JEw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full 
                             hover:bg-yellow-400 
                             hover:text-black 
                             transition duration-300"
                >
                  <Youtube size={18} />
                </a>

                <a
                  href="https://www.instagram.com/dmisjbu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 rounded-full 
                             hover:bg-yellow-400 
                             hover:text-black 
                             transition duration-300"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/20 mt-16 pt-6 text-center text-gray-300 text-sm">
            © {new Date().getFullYear()} BNSS. All Rights Reserved.
          </div>

        </div>
      </footer>
    </>
  );
}