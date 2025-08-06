import React, { useState } from "react";
import useRazorpayPayment from "../hooks/useRazorpayPayment";

const PersonalForm = () => {
  const {triggerPayment}= useRazorpayPayment()
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phoneNumber: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit=()=>{
    console.log("form",form)
    triggerPayment(form)
  }
  return (
    <>
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
                name="name"
                value={form.name}
                onChange={handleChange}
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
                name="age"
                value={form.age}
                onChange={handleChange}
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
                name="email"
                value={form.email}
                onChange={handleChange}
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
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full sm:w-[69%] bg-gray-200 rounded-md px-4 py-2 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-2 mb-2">
         <button
        style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
        onClick={handleSubmit}
        className="text-[#000000] px-24  py-3 rounded-full font-normal transition"
      >
        Pay Now
      </button>
      </div>
    </>
  );
};

export default PersonalForm;
