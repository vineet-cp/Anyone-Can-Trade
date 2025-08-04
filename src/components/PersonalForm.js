import React from "react";

const PersonalForm = () => {
  return (
    <div className="rounded-lg p-5 flex flex-col gap-4 w-full max-w-[600px] mx-auto bg-[#E3C45D0D] shadow-sm">
      <div>
        <h2 className="text-xl font-normal text-center">Personal Details</h2>
      </div>
      <div className="flex flex-col gap-4 w-full">
        {/* Row 1 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
          <span className="w-6 hidden md:w-[5%] md:flex">1.</span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
            <label className="sm:text-right sm:w-[30%]">Name:</label>
            <input
              type="text"
              className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
          <span className="w-6 hidden md:w-[5%] md:flex">2.</span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
            <label className="sm:text-right sm:w-[30%]">Age:</label>
            <input
              type="number"
              className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
          <span className="w-6 hidden md:w-[5%] md:flex">3.</span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
            <label className="sm:text-right sm:w-[30%]">Email ID:</label>
            <input
              type="email"
              className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center w-full">
          <span className="w-6 hidden md:w-[5%] md:flex">4.</span>
          <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:w-[90%] gap-2">
            <label className="sm:text-right sm:w-[30%]">Phone Number:</label>
            <input
              type="tel"
              className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalForm;
