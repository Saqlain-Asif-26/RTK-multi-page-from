import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formSlice, formRefill } from '../store/Slices/FormSlice';

function Step4() {
    const formData = useSelector((state)=>state.nameSlice.formData)
    // console.log(formData);
    const dispatch = useDispatch();
    
    const refillClicked = () => {
        dispatch(formSlice.actions.formRefill())
    }
    
  return (
    <div>
        <div className='my-4'>
            <ul className='text-start border-2 border-green-500 pb-4 rounded-lg'>
                <h1 className='text-2xl text-center text-green-700 font-bold border-b border-green-500'>Form Submitted</h1>
                <div className='px-4'>
                    <p className='text-md font-semibold inline'>Name: </p>
                    <li className='text-lg font-bold inline'>{formData.name}</li><br />
                    <p className='text-md font-semibold inline'>Email: </p>
                    <li className='text-lg font-bold inline'>{formData.email}</li><br />
                    <p className='text-md font-semibold inline'>Password: </p>
                    <li className='text-lg font-bold inline'>{formData.password}</li>
                </div>
            </ul>
        </div>
        <button onClick={refillClicked} className='border bg-green-500 text-xl font-bold px-4 py-2 w-full rounded-md'>Form Refill</button>
    </div>
  )
}

export default Step4