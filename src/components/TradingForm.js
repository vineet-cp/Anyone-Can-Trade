import React from 'react';

const TradingForm = () => {
  return (
    <div className="rounded-lg py-5 px-4 sm:px-8 md:px-[9rem] flex flex-col gap-6 w-[95%] mx-auto bg-[#E3C45D0D] shadow-sm">
      <h2 className="text-xl font-normal text-center">Trading Background</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6 border-r border-gray-300 md:pl-8">
          {/* Q5 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">5. Is trading your full-time or part-time profession?</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="profession" className="mr-2" /> Part-time
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="profession" className="mr-2" /> Full-time
            </label>
          </div>

          {/* Q6 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">6. Capital Invested</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="capital" className="mr-2" /> 0–1 lakh
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="capital" className="mr-2" /> 1–5 lakhs
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="capital" className="mr-2" /> 5–10 lakhs
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="capital" className="mr-2" /> 10 lakhs and above
            </label>
          </div>

          {/* Q7 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">7. Monthly Return on Capital</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="return" className="mr-2" /> Making losses
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="return" className="mr-2" /> 2–5%
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="return" className="mr-2" /> 5–10%
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="return" className="mr-2" /> 10% and above
            </label>
          </div>

          {/* Q8 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">8. Trading Experience</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="experience" className="mr-2" /> 0–1 year
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="experience" className="mr-2" /> 1–3 years
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="experience" className="mr-2" /> 3 years and above
            </label>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6 md:pl-8">
          {/* Q9 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">9. How did you learn trading?</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="learn" className="mr-2" /> Youtube Free Courses
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="learn" className="mr-2" /> Online Paid Course
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="learn" className="mr-2" /> Offline Paid Course
            </label>
          </div>

          {/* Q10 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">10. Are you getting consistent profits monthly?</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="profit" className="mr-2" /> Yes
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="profit" className="mr-2" /> No
            </label>
          </div>

          {/* Q11 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">
              11. If we solve your problem and make you profitable in 2 weeks,
              will you be able to pay a fee of 20,000/- for 1:1 mentorship?
            </p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="mentorship" className="mr-2" /> Yes
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="mentorship" className="mr-2" /> No
            </label>
          </div>

          {/* Q12 */}
          <div className='flex flex-col items-start'>
            <p className="mb-1 text-start">12. What is your trading style mostly?</p>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="style" className="mr-2" /> Intraday
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="style" className="mr-2" /> Swing
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="style" className="mr-2" /> Long Term
            </label>
            <label className="block ml-4 md:ml-6">
              <input type="radio" name="style" className="mr-2" /> All
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingForm;
