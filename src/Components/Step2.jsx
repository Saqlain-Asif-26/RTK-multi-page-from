import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formSlice, setEmail } from '../store/Slices/FormSlice';

function Step2() {
    const emailValue = useSelector((state)=>state.nameSlice.formData.email)
    const dispatch = useDispatch();
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        dispatch(setEmail(e.target.value))
        setError("");
    }
    const nextClicked = () => {
        if(emailValue.length === 0){
            setError("Email is Required..!")
        }else if(!emailValue.includes("@") || !emailValue.includes(".com")){
            setError("Please enter valid email..!")
        }else{
            dispatch(formSlice.actions.nextStep())
        }
    }
    const prevClicked = () => {
        dispatch(formSlice.actions.prevStep())
    }
  return (
    <div className='text-start mt-6'>
        <div>
            <label htmlFor="email" className='text-xl font-semibold'>Email:</label>
            <input 
            id='email'
            type="email" 
            className='block text-xl p-2 outline-none my-4 w-80 rounded-md'
            placeholder='Enter Email'
            onChange={handleChange}
            value={emailValue}
            />
            {error && <p className='text-red-500 text-sm -my-3'>{error}</p>}
            <div className='mt-6 flex justify-between items-center gap-4'>
                <button onClick={prevClicked} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Back</button>
                <button onClick={nextClicked} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Step2