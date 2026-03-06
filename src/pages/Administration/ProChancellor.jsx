import React from "react";
import bannerImg from "../../assets/banner.jpg";
import chancellorImg from "../../assets/pro-chancellor.jpg";

export default function ProChancellor() {
  return (
    <div className="w-full">

      {/* ================= BANNER SECTION ================= */}
      <div className="relative w-full h-64 md:h-[400px] overflow-hidden">
        <img
          src={bannerImg}
          alt="Campus Banner"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold tracking-wide text-center">
            Message From The Pro Chancellor
          </h1>
        </div>
      </div>



      {/* ================= MAIN CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE - IMAGE (5 COLS) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">

            <div className="bg-white shadow-2xl rounded-3xl p-6 sticky top-28 w-full">

              <div className="overflow-hidden rounded-2xl group">
                <img
                  src={chancellorImg}
                  alt="Pro Chancellor"
                  className="w-full h-[600px] object-cover
                       transition-transform duration-500
                       group-hover:scale-105"
                />
              </div>

            </div>
          </div>


          {/* RIGHT SIDE - CONTENT (7 COLS) */}
          <div className="lg:col-span-7 space-y-6 text-gray-700 text-lg leading-relaxed">

            <p>
              Welcome to DMI- St. John the Baptist University, Malawi!
            </p>

            <p>
              We are a comprehensive, student-centred, private institution for social welfare, offering undergraduate, postgraduate and doctoral programmes in different discipline. Our university is recognized one of the best among the top institutions in Malawi.
            </p>

            <p>
              The Industrial Revolution 4.0 is changing the business world very fast. Internet of Things, Data Science, Smart Manufacturing and Advanced Robotics are new knowledge drivers of innovation. Accordingly, our curricular, co-curricular and extra-curricular activities are organised round the year around students’ needs and expectations. The best of facilities is provided to the students to enhance their learning and living experience. As knowledge is exploding and technologies are transforming, organisations and societies, professors as well as students have to give more time and attention to research and innovation. In the same vein, the University has a scheme for promoting and supporting research at the undergraduate level.
            </p>

            <p>
              Campus life is quite vibrant, and the students have umpteen clubs and associations to realise their potential and to unfold their creativity. Each institute regularly organises a host of sports, adventure and cultural activities. Moreover, there are various university-level events and activities. The students are also encouraged to participate in state and national level sports and cultural activities.
            </p>

            <p>
              A university must be grounded and must have a close linkage with its neighbourhood. It must create value for its different stakeholders, including nearby villages and towns. We are deeply connected with our neighbourhood and our students participate in several extension activities through volunteering service to help the weaker sections of society; thus, enabling them to be more responsible and sensitive citizens.
            </p>

            <p>
              We make concerted efforts to increase the employability of students and develop several avenues to get good employment for them. We start preparing the students to get ready for the real world of employment as soon as they enter the University.
            </p>

            <p className="font-medium text-gray-800">
              I warmly invite you to associate with us and be a part of our vision, mission and journey.
            </p>

          </div>

        </div>
      </div>

    </div>
  );
}