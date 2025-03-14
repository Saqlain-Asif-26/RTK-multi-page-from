import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { formSlice, setName } from '../store/Slices/FormSlice';

function Step1() {
    const dispatch = useDispatch();
    const nameValue = useSelector((state)=>state.nameSlice.formData.name)
    const [error, setError] = useState("");
    
    const handleChange = (e) => {
        dispatch(setName(e.target.value))
        setError("");
    }
    const nextClicked = () => {
        if(nameValue.length === 0){
            setError("Name is required..!")
        }else if(nameValue.length < 3){
            setError("Name should at least 3 characters..!")
        }else{
            dispatch(formSlice.actions.nextStep())
        }
    }
  return (
    <div className='text-start mt-6'>
        <div>
            <label htmlFor="name" className='text-xl font-semibold'>Name:</label>
            <input 
            id='name'
            type="text" 
            className='block text-xl p-2 outline-none my-4 w-80 rounded-md'
            placeholder='Enter Name'
            onChange={handleChange}
            value={nameValue}
            />
            {error && <p className='text-red-500 text-sm -my-3'>{error}</p>}
            <div className='mt-6'>
                <button onClick={nextClicked} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Next</button>
            </div>
        </div>
    </div>
  )
}

export default Step1