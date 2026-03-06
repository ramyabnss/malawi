import { Mail } from "lucide-react";

export default function UpcomingSection() {
  return (
    <section className="w-full bg-gradient-to-br from-green-600 to-emerald-700 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP 3 DARK GREEN BOXES */}
        <div className="grid md:grid-cols-3 mb-16">

          <div className="relative h-40 flex items-center justify-center bg-green-800 text-white font-semibold text-xl">
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="relative z-10">Undergraduate Programme</h3>
          </div>

          <div className="relative h-40 flex items-center justify-center bg-green-700 text-white font-semibold text-xl">
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="relative z-10">Post Graduate Programme</h3>
          </div>

          <div className="relative h-40 flex items-center justify-center bg-green-800 text-white font-semibold text-xl">
            <div className="absolute inset-0 bg-black/30"></div>
            <h3 className="relative z-10">Scholarship & Financial AID</h3>
          </div>

        </div>

        {/* MAIN CONTENT */}
        <div className="grid md:grid-cols-3 gap-12 items-start">

          {/* LEFT SIDE – EVENTS */}
          <div className="md:col-span-2 text-white">

            {/* Heading */}
            <div className="flex items-center gap-6 mb-8">
              <h2 className="text-4xl font-bold  bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Upcoming Events
              </h2>
              <div className="flex-1 h-[1px] bg-white/40"></div>
            </div>

            {/* Empty Content */}
            <p className="text-white/80 text-lg leading-relaxed mb-4">
              There're no item that match your search criteria.
              Please try again with different keywords.
            </p>

            {/* <button className="font-semibold hover:underline flex items-center gap-2">
              View All Events →
            </button> */}
            <button
              className="group relative inline-flex items-center gap-3
             px-6 py-3 rounded-full
             bg-white text-green-700 font-semibold
             shadow-md transition-all duration-300
             hover:shadow-xl hover:-translate-y-1"
            >
              <span>View All Events</span>

              <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>


          </div>

          {/* RIGHT SIDE – NEWSLETTER */}
          <div className="relative rounded-xl overflow-hidden h-[320px] shadow-2xl">

            {/* Background Image */}
            <img
              src="src/assets/feature.png"
              alt="newsletter"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Green Overlay */}
            <div className="absolute inset-0 bg-green-900/85"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

              <div className="border-2 border-green-400 p-6 rounded-xl mb-6 animate-pulse">
                <Mail size={48} className="text-green-300" />
              </div>

              <h3 className="text-2xl font-bold mb-3">
                Subscribe To Newsletter
              </h3>

              <p className="text-green-100">
                Get updates to news & events
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}