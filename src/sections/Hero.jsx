import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

export default function UniversitySection() {
  const stats = [
    { number: 1200, label: "Students", color: "from-pink-400 to-red-400" },
    { number: 150, label: "Faculty", color: "from-yellow-400 to-orange-400" },
    { number: 75, label: "Programs", color: "from-green-400 to-teal-400" },
    { number: 25, label: "Countries", color: "from-blue-400 to-indigo-400" },
  ];

  const headingSparkles = Array.from({ length: 15 });

  const sparkleColors = [
    "#FE8BBB",
    "#FFD700",
    "#00FFFF",
    "#FF7F50",
    "#7CFC00",
  ];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage:
          "url('src/assets/campus-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >



      {/* Floating gradient shapes */}
      {/* <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-pink-400/40 rounded-full filter blur-3xl animate-float1"></div>
      <div className="absolute bottom-[-120px] right-[-80px] w-96 h-96 bg-blue-400/30 rounded-full filter blur-2xl animate-float2"></div>
      <div className="absolute top-[30%] left-[70%] w-64 h-64 bg-purple-400/30 rounded-full filter blur-2xl animate-float3"></div> */}


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 py-20 max-w-6xl w-full">

        <div className="absolute top-0 left-10 md:left-20 w-28 h-28 md:w-32 md:h-32 text-black animate-float3 drop-shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-full h-full"
          >
            <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zM12 12l-7-3.18v-1.64L12 9l7-1.82v1.64L12 12z" />
          </svg>
        </div>



        {/* Heading Container with blur background */}
        <div className="relative mb-6 w-full flex justify-center">


          {/* Dark semi-transparent background */}
          <div className="absolute inset-0 rounded-xl" style={{ backgroundColor: 'rgba(0,0,0,0.25)' }}></div>


          {/* Animated Gradient Text */}
          <h1
            className="relative z-10 text-5xl md:text-7xl lg:text-8xl font-extrabold px-8 py-4"
            style={{
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              backgroundImage:
                'linear-gradient(90deg, rgb(255,180,180), rgb(245,245,245), rgb(180,230,220), rgb(200,180,220))',
              animation: 'gradient-animation 5s ease infinite',
            }}
          >

            Welcome to Our Vibrant Campus

          </h1>




          {/* Sparkles */}
          {headingSparkles.map((_, idx) => (
            <svg
              key={idx}
              className="absolute w-4 h-4 animate-sparkle"
              style={{
                top: `${Math.random() * 50}%`,
                left: `${Math.random() * 90 + 5}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
                fill={sparkleColors[Math.floor(Math.random() * sparkleColors.length)]}
              />
            </svg>
          ))}

        </div>




        {/* Paragraph */}
        <p className="text-white text-lg md:text-xl mb-8 opacity-0 animate-fadeIn">
          Explore world-class education, diverse programs, and a global community of thinkers and innovators.
        </p>


        {/* Buttons with white background */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 opacity-0 animate-fadeIn delay-200">
          <button className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/80 transition backdrop-blur-md">
            Apply Now
          </button>
          <button className="px-8 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/80 transition backdrop-blur-md">
            Learn More
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/20 backdrop-blur-md rounded-lg p-5 flex flex-col items-center justify-center"
            >
              {/* Number with gradient */}
              <CountUp
                end={stat.number}
                duration={2}
                className={`text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}
              />

              {/* Small gradient line under number */}
              <div className={`w-12 h-1 my-2 rounded-full bg-gradient-to-r ${stat.color}`}></div>

              {/* Label with subtle gradient color */}
              <p className="mt-1 font-bold text-lg md:text-xl lg:text-2xl" style={{ color: `#00008b` }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>


      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fadeIn { animation: fadeIn 1s ease forwards;}

        .animate-gradient-x { 
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* Floating shapes animations */
        @keyframes float1 { 0%{transform:translateY(0) translateX(0) rotate(0deg);}50%{transform:translateY(20px) translateX(20px) rotate(45deg);}100%{transform:translateY(0) translateX(0) rotate(0deg);} }
        .animate-float1{ animation: float1 8s ease-in-out infinite;}
        @keyframes float2 { 0%{transform:translateY(0) translateX(0) rotate(0deg);}50%{transform:translateY(-20px) translateX(-20px) rotate(-30deg);}100%{transform:translateY(0) translateX(0) rotate(0deg);} }
        .animate-float2{ animation: float2 10s ease-in-out infinite;}
        @keyframes float3 { 0%{transform:translateY(0) translateX(0) rotate(0deg);}50%{transform:translateY(15px) translateX(-10px) rotate(15deg);}100%{transform:translateY(0) translateX(0) rotate(0deg);} }
        .animate-float3{ animation: float3 12s ease-in-out infinite;}

        /* Sparkle animation (star shape) */
        @keyframes sparkle { 0%,100%{opacity:0;transform:scale(0.5) translateY(0);}50%{opacity:1;transform:scale(1) translateY(-10px);} }
        .animate-sparkle{ animation: sparkle 3s ease-in-out infinite;}

@keyframes gradient-animation {
  0% { background-position: 0% 0%; }
  50% { background-position: 100% 0%; }
  100% { background-position: 0% 0%; }
}
        `}
      </style>
    </section>
  );
}