import React from "react";
import tick from "./../assets/images/testimonial/tick.svg"

const pricingData = [
  {
    title: "ACT 1.0",
    price: "$9.99",
    free: "FREE",
    features: [
      "Filter and segment your prospects",
      "Add/Manage Unlimited prospects",
      "Export to Excel",
    ],
  },
  {
    title: "ACT 2.0",
    price: "$9.99",
    free: "FREE",
    features: [
      "Filter and segment your prospects",
      "Add/Manage Unlimited prospects",
      "Export to Excel",
    ],
  },
  {
    title: "ACT 3.0",
    price: "$9.99",
    free: "FREE",
    features: [
      "Filter and segment your prospects",
      "Add/Manage Unlimited prospects",
      "Export to Excel",
    ],
  },
];

const Courses = () => {
  return (
    <div className="mt-7 flex flex-col gap-10 items-center px-4">
      <h2 className="text-2xl font-[500] text-center">Video about Courses</h2>

      {/* Video Placeholder */}
      <div className="w-[320px] sm:w-[500px] h-[189px] bg-gray-300 rounded-md flex items-center justify-center text-white font-semibold">
        {/* Replace with <video> or YouTube embed if needed */}
        Play ▶
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className="w-[260px] bg-white rounded-2xl shadow-lg border border-gray-200 p-6 flex flex-col items-center hover:shadow-2xl transition-shadow"
          >
            <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
            <hr style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="w-full border-gray-300 my-2 border-[1.5px]" />
            <div className="flex items-center text-sm py-2 px-1 relative w-full">
              <span style={{color:"rgba(29, 78, 216, 0.5)"}} className="font-normal text-[1.2rem] border-r-[2px] border-[#00000080] w-[42%] text-center">{plan.price}</span>
              {/* <span style={{color:"rgba(0, 0, 0, 0.5)"}} className="mx-2 font-[600]">|</span> */}
              <span className="text-black font-normal text-[1.2rem] w-[42%] text-center">{plan.free}</span>
              <span className="text-xs text-gray-400 ml-1 absolute top-0 right-[-0.25rem]">per month</span>
            </div>
            <p className="text-xs text-[#474747]">Great for team members</p>
            <hr style={{backgroundColor:"rgba(0, 0, 0, 0.5)"}} className="w-full border-gray-300 my-2 border-[1.5px]" />
            <ul className="text-sm text-left space-y-2 mb-4 w-full">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <img src={tick} width="21px" /> {feat}
                </li>
              ))}
            </ul>
            <button className="w-full border border-black py-2 rounded-full font-semibold text-sm hover:bg-black hover:text-white transition">
              PAY NOW
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
