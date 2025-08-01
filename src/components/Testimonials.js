import React from "react";

const testimonials = [
  {
    name: "Deep Parikh",
    profession: "Financial Professional",
    description:
      "Prospect Bubbler has revolutionized how I organize my prospects. The intuitive note-taking feature lets me capture important details, and I can easily track client preferences for more personalized follow-ups.",
    initials: "DP",
    anonymous: false,
  },
  {
    name: "Anonymous",
    profession: "Trader",
    description:
      "I no longer have to carry around my thick Prospect Bubble book — and honestly, sometimes I couldn't even read my own handwriting! With Prospect Bubbler, those issues are gone.",
    initials: "A",
    anonymous: true,
  },
  {
    name: "Ritika Sen",
    profession: "Technical Analyst",
    description:
      "The features are minimal yet impactful. I’ve recommended it to everyone in my circle. Great UI and smooth usage.",
    initials: "RS",
    anonymous: false,
  },
  // Add more if needed
];

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-2 mt-5 px-4 relative">
      <h2 className="text-2xl font-[500] mb-2">Testimonials</h2>
      <h3 className="text-xl font-[500] mb-4">Our Trading Masters</h3>

      <div className="w-full py-4">
        <div className="inline-flex animate-marquee space-x-8 hover:[animation-play-state:paused]">
          {testimonials.concat(testimonials).map((t, i) => (
            <div key={i} className="relative flex-shrink-0 w-[21rem] h-[14rem] z-0">
              {/* Back Layer */}
              <div className="absolute top-[-0.5rem] left-[-0.5rem] w-[22rem] h-[15rem] rounded-xl bg-gray-100 shadow-lg z-0"></div>

              {/* Front Card */}
              <div className="relative z-10 w-full h-full bg-white rounded-xl shadow-lg px-4 py-4 hover:scale-105 transition-transform duration-300 flex flex-col justify-between overflow-hidden">
                <p className="text-[0.83rem] italic text-[#474747] mt-4">
                  "{t.description}"
                </p>
                <div className="mt-4 flex items-end justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#DBEAFE] text-[#4885D7] rounded-full flex items-center justify-center font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-gray-500">{t.profession}</p>
                    </div>
                  </div>
                  {!t.anonymous && (
                    <button className="text-sm text-[#474747] hover:underline">
                      Visit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
