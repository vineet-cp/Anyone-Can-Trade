import React from "react";

const TradingFormYodha = () => {
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
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profession" className="mr-2" />{" "}
                Salaried
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profession" className="mr-2" /> Self
                employed
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profession" className="mr-2" /> Not
                Working
              </label>
            </div>

            {/* Q6 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">6. Your Monthly Income</p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="capital" className="mr-2" /> Less than
                50K
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="capital" className="mr-2" /> Less than
                1 lakh
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="capital" className="mr-2" /> Above one
                lakh
              </label>
            </div>

            {/* Q7 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                7. Why are you into stock market
              </p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="return" className="mr-2" /> To Become
                a Full-time trader/Career in stock market
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="return" className="mr-2" /> Part time
                trader
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="return" className="mr-2" /> Investor
              </label>
            </div>

            {/* Q8 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">8. What’s your Trading Style</p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="experience" className="mr-2" />{" "}
                Intraday
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="experience" className="mr-2" /> Swing
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="experience" className="mr-2" /> Long
                term Investments
              </label>
            </div>

            {/* Q9 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">9. What’s your capital</p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="learn" className="mr-2" /> Less than 2
                lakhs
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="learn" className="mr-2" /> 2 to 5
                lakhs
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="learn" className="mr-2" /> 5 to 10
                lakhs
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="learn" className="mr-2" /> Above 10
                lakhs
              </label>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 md:pl-8">
            {/* Q10 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                10. Monthly return on your capital.
              </p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profit" className="mr-2" /> Making
                losses
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profit" className="mr-2" /> 2-5%
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profit" className="mr-2" /> 5-10%
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="profit" className="mr-2" /> Above 10%
              </label>
            </div>

            {/* Q11 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">11. Trading Experience</p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="mentorship" className="mr-2" /> 0-1
                year
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="mentorship" className="mr-2" /> 1-3
                years
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="mentorship" className="mr-2" /> Above
                3 years
              </label>
            </div>

            {/* Q12 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">12. How did you learn Trading</p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> Free
                YouTube Videos
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> Paid online
                courses
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> Paid
                Offline courses
              </label>
            </div>

            {/* Q13 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                13. Are you getting Consistent profits monthly
              </p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> Yes
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> No
              </label>
            </div>

            {/* Q14 */}
            <div className="flex flex-col items-start">
              <p className="mb-1 text-start">
                14. If we solve your problem and make you profitable in 1 month,
                Will you be able to pay a fee of 20k for this 1:1 mentorship
              </p>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> Yes
              </label>
              <label className="block ml-4 md:ml-6">
                <input type="radio" name="style" className="mr-2" /> No
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 mb-2 flex justify-center">
        <button
          style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
          // onClick={handleSubmit}
          className="text-[#000000] px-24  py-3 rounded-full font-medium transition text-[1.2rem]"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default TradingFormYodha;
