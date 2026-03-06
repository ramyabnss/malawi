import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [activeMega, setActiveMega] = useState(null);
  const megaRef = useRef();

  // ===================== MENU ITEMS WITH LINKS =====================
  const megaMenus = {

    Administration: [
      { name: "Chancellor Message", link: "/administration/chancellor-message" },
      { name: "Pro Chancellor", link: "/administration/pro-chancellor" },
      { name: "President Of The Council", link: "/administration/president-of-the-council" },
      { name: "Our Charter", link: "/administration/our-charter" },
      { name: "University Council", link: "/administration/university-council" },
      { name: "Board Of Studies", link: "/administration/board-of-studies" },

    ],
    Admission: [
      { name: "Admission Criteria", link: "/admission/admission-criteria" },
      { name: "Fees Structure", link: "/admission/fees-structure" },
      { name: "Online Admission Application", link: "#" },
      { name: "Offline Admission Application Download", link: "https://dmisjbu.edu.mw/wp-content/uploads/2023/04/DMISJBU-NEW-APPLICATION-2022.pdf" },
      { name: "Available Scholarships", link: "/admission/available-scholarships" },
      { name: "Apply For Scholarships", link: "/admission/apply-for-scholarships" },
    ],
    Academics: [
      { name: "Academic Calendar", link: "/academics/academic-calendar" },
      { name: "Student Handbook", link: "/academics/student-handbook" },
      { name: "The Senate", link: "/academics/the-senate" },
    ],
    "University Life": [
      { name: "Mangochi", link: "/university/mangochi" },
      { name: "Lilongwe", link: "/university-life/lilongwe" },
      { name: "Blantyre", link: "/university-life/blantyre" },
    ],
  };

  const singleMenus = [
    { name: "Home", link: "/" },
    { name: "Research & Innovation", link: "/research-innovation" },
    { name: "Resource Center", link: "#" },
    { name: "Contact", link: "/contact" },
  ];

  const allMenus = [
    "Home",
    ...Object.keys(megaMenus),
    ...singleMenus.map((m) => m.name),
  ];

  // Close mega menu on outside click
  useEffect(() => {
    // function handleClickOutside(event) {
    //   if (megaRef.current && !megaRef.current.contains(event.target)) {
    //     setActiveMega(null);
    //   }
    // }

    // document.addEventListener("mousedown", handleClickOutside);
    // return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="w-full shadow-md sticky top-0 z-50">


      {/* Top Bar */}
<div className="bg-[#00008b] text-white text-sm">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
    
    <div className="flex items-center gap-4">
      <span className="cursor-pointer hover:text-green-400 transition">Portal</span>
      <span className="hidden sm:block text-gray-300">|</span>
      <span className="cursor-pointer hover:text-green-400 transition">Alumni</span>
    </div>

    <div className="flex items-center gap-3">

      {/* Admission Button */}
      <Link
        to="/admission/apply"
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition"
      >
        Apply For Admission
      </Link>

      
      {/* Brochure Button */}
      <a
  href="/brochure.pdf"
  download
  className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 hover:from-yellow-400 hover:to-red-500 text-white px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition shadow-lg"
>
  Download Brochure
</a>

    </div>
  </div>
</div>
      {/* <div className="bg-[#00008b] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="cursor-pointer hover:text-green-400 transition">Portal</span>
            <span className="hidden sm:block text-gray-300">|</span>
            <span className="cursor-pointer hover:text-green-400 transition">Alumni</span>
          </div>

          <Link
            to="/admission/apply"
            className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition"
          >
            Apply For Admission
          </Link>
        </div>
      </div> */}

      {/* Main Nav */}
      <div className="w-full bg-white">
        <div className="w-full px-6 lg:px-10 py-4 flex items-center relative" ref={megaRef}>
          {/* Logo */}
          <Link to="/">
            <img src={logo} alt="Logo" className="h-14 lg:h-16 w-auto object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden xl:flex items-center flex-1 justify-end gap-6 text-[15px] font-medium whitespace-nowrap">
            {allMenus.map((menu) => {
              const isMega = megaMenus[menu];
              const singleMenuObj = singleMenus.find((m) => m.name === menu);

              // Skip Home on desktop
              if (singleMenuObj && singleMenuObj.name === "Home") return null;

              return (
                <div key={menu} className="relative">
                  {isMega ? (
                    <div
                      onMouseEnter={() => setActiveMega(menu)}
                      className="flex items-center gap-1 hover:text-green-600 transition cursor-pointer"
                    >
                      {menu}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${activeMega === menu ? "rotate-180" : ""}`}
                      />
                    </div>
                  ) : singleMenuObj ? (
                    <Link
                      to={singleMenuObj.link}
                      className="hover:text-green-600 transition text-[15px] font-medium"
                    >
                      {menu}
                    </Link>
                  ) : null}
                </div>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <div className="xl:hidden ml-auto">
            <button onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      {megaMenus[activeMega] && (
        <div
          onMouseLeave={() => setActiveMega(null)}
          className={`hidden xl:block absolute top-full right-0 w-[90%] max-w-5xl transition-all duration-300 ease-in-out ${activeMega ? "opacity-100 translate-y-2 visible" : "opacity-0 -translate-y-4 invisible"
            }`}
        >
          <div className="bg-gradient-to-r from-[#FFFF00] via-green-500 to-[#FFC0CB] p-[4px] rounded-2xl">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="grid grid-cols-3 gap-8">
                {megaMenus[activeMega].map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="text-black-700 hover:text-green-600 cursor-pointer transition underline block"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="xl:hidden bg-[#00008b] shadow-md px-6 py-4 space-y-4 rounded-md">
          {allMenus.map((menu) => {
            const isMega = megaMenus[menu];
            const singleMenuObj = singleMenus.find((m) => m.name === menu);

            return (
              <div key={menu}>
                {isMega ? (
                  <>
                    {/* Mega Menu Button */}
                    <button
                      onClick={() => setMobileDropdown(mobileDropdown === menu ? null : menu)}
                      className="flex justify-between w-full text-white text-lg font-medium hover:text-green-300 border-b border-green-400 py-2"
                    >
                      {menu}
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${mobileDropdown === menu ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Mega Menu Dropdown */}
                    {mobileDropdown === menu && (
                      <div className="pl-4 mt-2 space-y-2 text-white bg-green-600 border border-green-700 rounded-md">
                        {megaMenus[menu].map((item, index) => (
                          <Link
                            key={index}
                            to={item.link}
                            className="block px-3 py-2 hover:bg-green-700 rounded-md transition"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  // Single Menu (Home, etc.)
                  <Link
                    to={singleMenuObj.link}
                    className="block text-white text-lg font-medium hover:text-green-300 py-2 border-b border-green-400 transition"
                    onClick={() => setMobileOpen(false)}
                  >
                    {menu}
                  </Link>
                )}
              </div>
            );
          })}

          <Link
            to="/admission/apply"
            className="w-full bg-green-600 text-white py-2 rounded-md mt-4 block text-center text-lg font-medium hover:bg-green-700 transition"
          >
            Apply For Admission
          </Link>
        </div>
      )}

    </nav>
  );
}