import React from 'react'

const Button = ({ width , height , text }) => {
  return (
    <button className='bg-black  px-6 py-2 text-xl rounded-lg  text-white '>
       {text}
    </button>
  )
}

export default Button
{ }