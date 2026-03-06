export default function BreakingNews() {
  const newsItems = [
    { text: "Admissions Open for 2026 Intake", link: "#" },
    { text: "Academic Calendar 2026 Now Released", link: "#" },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 py-3 relative overflow-hidden">

      {/* LEFT LIVE LABEL */}
      <div className="absolute left-0 top-0 bottom-0 bg-green-500 px-6 flex items-center z-20 space-x-2">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <span className="text-white font-bold uppercase tracking-wider">
          Live
        </span>
      </div>

      {/* SCROLL AREA */}
      <div className="overflow-hidden">
        <div className="ticker flex whitespace-nowrap pl-44">
          {newsItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 text-white font-semibold hover:text-yellow-300 transition duration-300"
            >
              {item.text}
              <span className="mx-6 text-yellow-300">•</span>
            </a>
          ))}
        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
         .ticker {
  display: inline-flex; /* ensures items stay in a row */
  animation: marquee 20s linear infinite;
}

.ticker:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(100%); }   /* start off-screen right */
  100% { transform: translateX(-100%); } /* move off-screen left */
}
        `}
      </style>
    </div>
  );
}