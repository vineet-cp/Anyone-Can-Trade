import React from "react";

const Mentorship = () => {
  return (
    <>
    <div className="text-center p-8">
      <p className="max-w-2xl mx-auto text-gray-700">
        We all India's one and only Institute with a practical way of teaching,
        without hands-on approach, we ensure you not only learn the theory but
        apply it practically.
      </p>
    </div>
    <div className='mt-5 flex flex-col items-center'>
      <div className='w-[90%] sm:w-[70%] md:w-[50%] bg-black rounded-md overflow-hidden'>
        <video
          className="w-full h-[300px] object-cover"
          controls
          preload="metadata"
        >
          <source src="/videos/stock-market.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="max-w-2xl mx-auto text-gray-700 mt-6 text-center px-4">
        Take an 1:1 call for your Quiries
      </p>
    </div>
    <div className="text-center py-8">
      <button
        style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
        className="text-white px-24  py-3 rounded-full font-normal transition"
        // onClick={() => navigate("/courses")}
      >
        Book Now
      </button>
    </div>
    </>
  );
};

export default Mentorship;
