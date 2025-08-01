import React from "react";
import tick from "./../assets/images/testimonial/tick.svg"
import whatsApp from "./../assets/images/testimonial/whatsapp.svg"

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
        <video
          className="w-full h-full object-cover rounded-md"
          controls
          preload="metadata"
        >
          <source src="/videos/stock-market.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Pricing Cards */}
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className="w-[300px] bg-white rounded-2xl shadow-xl border border-gray-200 p-6 flex flex-col items-center hover:shadow-2xl transition-shadow"
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
            <ul className="text-sm text-left space-y-2 mb-4 w-full pb-20">
              {plan.features.map((feat, i) => (
                <li key={i} className="flex items-center gap-2 justify-between w-full">
                  <img src={tick} width="18px" /> <span className="text-[0.8rem] w-[88%]">{feat}</span>
                </li>
              ))}
            </ul>
            <button className="w-full border border-black py-2 rounded-full font-semibold text-sm hover:bg-black hover:text-white transition">
              PAY NOW
            </button>
          </div>
        ))}
      </div>
      <div className="fixed bottom-4 right-10 cursor-pointer flex flex-col items-center gap-1 z-50">
        <img src={whatsApp} className="w-10 h-10" />
        <p className="text-[0.8rem] text-black">WhatsApp</p>
      </div>
    </div>
  );
};

export default Courses;
