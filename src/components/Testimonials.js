import { useRef } from "react";
import leftArrow from ".././assets/images/testimonial/left.svg";
import rightArrow from ".././assets/images/testimonial/right.svg";

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
    profession: "Financial Professional",
    description:
      "I no longer have to carry around my thick Prospect Bubble book — and honestly, sometimes I couldn't even read my own handwriting! With Prospect Bubbler, those issues are gone.",
    initials: "A",
    anonymous: true,
  },
  {
    name: "Laura Guzman",
    profession: "Financial Professional",
    description:
      "Prospect Bubbler is a great tool for staying on top of both my own follow-ups and my team's. It’s helped me manage my time better and follow up more effectively.",
    initials: "LG",
    anonymous: false,
  },
  {
    name: "Anonymous",
    profession: "Trader",
    description:
      "Initially skeptical, I found the platform incredibly useful for tracking trades and managing risks. Now it’s my go-to tool every morning.",
    initials: "A",
    anonymous: true,
  },
  {
    name: "Aman Sharma",
    profession: "Equity Analyst",
    description:
      "Simple, insightful, and powerful. I started using it during my training and never stopped. It gave me a professional mindset early on.",
    initials: "AS",
    anonymous: false,
  },
  {
    name: "Ritika Sen",
    profession: "Technical Analyst",
    description:
      "The features are minimal yet impactful. I’ve recommended it to everyone in my circle. Great UI and smooth usage.",
    initials: "RS",
    anonymous: false,
  },
  {
    name: "Anonymous",
    profession: "Self Learner",
    description:
      "As someone learning on their own, this gave me structure. I feel more confident managing my trades.",
    initials: "A",
    anonymous: true,
  },
  {
    name: "Mehul Jain",
    profession: "Broker",
    description:
      "Keeping client notes organized is hard. This makes it much easier. My clients even noticed the difference!",
    initials: "MJ",
    anonymous: false,
  },
  {
    name: "Priya Desai",
    profession: "Stock Market Enthusiast",
    description:
      "From journaling trades to reviewing outcomes, it’s a great all-in-one package. Highly recommend for beginners!",
    initials: "PD",
    anonymous: false,
  },
  {
    name: "Anonymous",
    profession: "Mentor",
    description:
      "I’ve taught over 100 students and suggest this to every batch. Helps beginners grasp flow and manage their learning curve.",
    initials: "A",
    anonymous: true,
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center gap-2 mt-5 px-4 relative">
      <h2 className="text-2xl font-[500] mb-2">Testimonials</h2>
      <h3 className="text-xl font-[500] mb-4">Our Trading Masters</h3>

      {/* Arrows */}
      <button
        className="absolute left-[3rem] top-[65%] transform -translate-y-1/2 z-10"
        onClick={() => scroll("left")}
      >
        <img src={leftArrow} />
      </button>
      <button
        className="absolute right-[3rem] top-[65%] transform -translate-y-1/2 z-10"
        onClick={() => scroll("right")}
      >
        <img src={rightArrow} />
      </button>

      {/* Scrollable container */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex flex-nowrap gap-12 overflow-x-auto scroll-smooth py-4 px-2"
        >
        {testimonials.map((t, i) => (
          <div key={i} className="relative flex-shrink-0 w-[21rem] h-[14rem] z-0">
            {/* Back layer */}
            <div className="absolute top-[-0.5rem] left-[-0.5rem] w-[22rem] h-[15rem] rounded-xl bg-gray-100 shadow-lg z-0"></div>

            {/* Front card */}
            <div className="relative z-10 w-full h-full bg-white rounded-xl shadow-lg px-4 py-4 hover:scale-105 transition-transform duration-300 flex flex-col justify-between">
              <p className="text-[0.83rem] italic text-[#474747] mt-4">{`"${t.description}"`}</p>
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
