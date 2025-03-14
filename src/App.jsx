import React from 'react'
import Step1 from './Components/Step1'
import Step2 from './Components/Step2'
import Step3 from './Components/Step3'
import Step4 from './Components/Step4'
import { useSelector } from 'react-redux'

const FormSteps = () => {
  const step = useSelector((state)=> state.nameSlice.step)
  return (
    <div>
      {step === 1 ? <Step1 /> : step === 2 ? <Step2 /> : step === 3 ? <Step3 /> : step === 4 ? <Step4 /> : null}
  </div>
  )
}

function App() {
  
  return (
    <div className='w-full bg-zinc-400 h-screen flex justify-center items-center'>
      <div className='text-center border p-12 bg-slate-300 rounded-2xl shadow-gray-600 shadow-lg'>
        <h1 className='text-4xl font-bold'>Multi-Page Form</h1>
        <div>
          <FormSteps />
        </div>
      </div>
    </div>
  )
}

export default App