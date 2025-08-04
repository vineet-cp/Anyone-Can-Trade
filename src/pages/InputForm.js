import React from 'react'
import PersonalForm from '../components/PersonalForm'
import TradingForm from '../components/TradingForm'

const InputForm = () => {
  return (
    <div className="text-center p-8">
     <h2 className="text-2xl font-[500] mb-4">Trader Assessment Form</h2>
     <div className='mt-4 flex justify-center'>
        <PersonalForm />
     </div>
     <div className='mt-4'>
        <TradingForm />
     </div>
    <div className="text-center py-8">
      <button
        style={{ backgroundColor: "rgba(110, 147, 210, 0.47)" }}
        className="text-[#000000] px-24  py-3 rounded-full font-normal transition"
        // onClick={() => navigate("/courses")}
      >
        Submit
      </button>
    <p className="max-w-2xl mx-auto text-gray-700 mt-4">
      This Application will be reviewed by the team before scheduling a call
      </p>
    </div>
    </div>
  )
}

export default InputForm