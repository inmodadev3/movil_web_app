import React from 'react'
import './Loader.css'

export const Loading = () => {
  return (
    <div className='w-screen h-screen fixed flex justify-center items-center'>
        <div className='w-full h-full bg-gray-800/40 z-10 absolute'></div>
        <span className="loader z-20"></span>
    </div>
  )
}
