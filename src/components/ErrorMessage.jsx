import React from 'react'
import { TfiFaceSad } from "react-icons/tfi";

const ErrorMessage = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-20 gap-5'>
      <TfiFaceSad className='text-8xl'/>
        <h2 className='text-2xl font-bold mt-5'>Oops! No movies found</h2>
        <p className='text-gray-500 mt-2'>Try searching for something else.</p>
    </div>
  )
}

export default ErrorMessage
