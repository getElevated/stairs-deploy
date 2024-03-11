import React, { useState } from 'react'

const Model = ({ children }) => {

 const [isOpen, setIsOpen] = useState(false);
 const toggleVisibility = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <button
        onClick={toggleVisibility}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? 'Close' : 'Open'}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 bg-white p-4 shadow-md">
          {/* Your content goes here */}
          {children}
        </div>
      )}
    </div>
  )
}

export default Model
