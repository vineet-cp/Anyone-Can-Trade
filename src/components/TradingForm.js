import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const TradingForm = () => {
  const location = useLocation();
  const { paymentId, courseType } = location.state || {}; 
  const [masteryForm, setMasteryForm] = useState({
    profession: "",
    income: "",
    reason: "",
    style: "",
    capital: "",
    mentorship: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMasteryForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

const handleSubmit = async () => {
  if (!paymentId || !courseType) {
    alert("Missing paymentId or courseType from navigation state.");
    return;
  }

  const payload = {
    paymentId: paymentId,
    courseType: courseType,
    formData: JSON.stringify(masteryForm) // stringify form object
  };

  try {
    const response = await fetch("http://35.154.64.133:8080/api/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json" // Sending JSON
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    const data = await response.json();
    console.log("Success:", data);
    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Failed to submit form.");
  }
};

  return (
    <>
      <div className="rounded-lg py-5 px-4 sm:px-8 md:px-[9rem] flex flex-col gap-6 w-[95%] mx-auto bg-[#E3C45D0D] shadow-sm mt-[6.5rem]">
        <h2 className="text-xl font-normal text-center">Trading Background</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 md:border-r md:border-gray-300 md:pl-8">
            {/* Q5 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">5. What’s your profession</p>
              {["Salaried", "Self employed", "Not Working"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="profession"
                    value={option}
                    checked={masteryForm.profession === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q6 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">6. Your Monthly Income</p>
              {["Less than 50K", "Less than 1 lakh", "Above one lakh"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="income"
                    value={option}
                    checked={masteryForm.income === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q7 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">7. Why are you into stock market</p>
              {[
                "To Become a Full-time trader/Career in stock market",
                "Part time trader",
                "Investor"
              ].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="reason"
                    value={option}
                    checked={masteryForm.reason === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>

            {/* Q8 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">8. What’s your Trading Style</p>
              {["Intraday", "Swing", "Long term Investments"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="style"
                    value={option}
                    checked={masteryForm.style === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:pl-8">
            {/* Q9 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">9. What’s your capital</p>
              {["Less than 2 lakhs", "2 to 5 lakhs", "5 to 10 lakhs", "Above 10 lakhs"].map(
                (option) => (
                  <label key={option} className="block ml-4 md:ml-6">
                    <input
                      type="radio"
                      name="capital"
                      value={option}
                      checked={masteryForm.capital === option}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {option}
                  </label>
                )
              )}
            </div>

            {/* Q10 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                10. With Our ACT Mastery Mentorship, we will make you a successful trader
                in 3 months, Will you pay 80K for the 1:1 mentorship.
              </p>
              {["Yes", "No", "Maybe"].map((option) => (
                <label key={option} className="block ml-4 md:ml-6">
                  <input
                    type="radio"
                    name="mentorship"
                    value={option}
                    checked={masteryForm.mentorship === option}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="mt-2 flex justify-center">
        <button
          style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
          onClick={handleSubmit}
          className="text-[#000000] px-24 py-3 rounded-full font-medium transition text-[1.2rem]"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default TradingForm;
