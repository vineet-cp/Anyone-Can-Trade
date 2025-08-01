import React from 'react';

const VideoSection = () => {
  return (
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
      <p className="max-w-2xl mx-auto text-gray-700 mt-4 text-center px-4">
        Watch this 3 minutes video to clear all your doubts regarding Stock Market
      </p>
    </div>
  );
};

export default VideoSection;
