import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formSlice, setPassword } from '../store/Slices/FormSlice';

function Step2() {
        const passwordValue = useSelector((state)=>state.nameSlice.formData.password)
        const [error, setError] = useState("");
        const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(setPassword(e.target.value))
        setError("");
    }
    // dispatch(formSlice.actions.submitForm())
    
    const submitClicked = () => {
            if(passwordValue.length === 0){
                setError("Password is Required..!")
            }else if(passwordValue.length <= 5){
                setError("Password should contain at least 6 character..!")
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
            <label htmlFor="password" className='text-xl font-semibold'>Password:</label>
            <input 
            id='password'
            type="password" 
            className='block text-xl p-2 outline-none my-4 w-80 rounded-md'
            placeholder='Enter Password'
            onChange={handleChange}
            value={passwordValue}
            />
            {error && <p className='text-red-500 text-sm -my-3'>{error}</p>}
            <div className='mt-6 flex justify-between items-center gap-4'>
                <button onClick={prevClicked} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Back</button>
                <button onClick={submitClicked} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default Step2