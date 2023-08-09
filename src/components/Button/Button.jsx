import React from 'react'

export const Button = ({text, onclick}) => {
  return (
    <button onClick={onclick} className='bg-blue-950 text-white px-8 py-2 rounded'>
        {text}
    </button>
  )
}
