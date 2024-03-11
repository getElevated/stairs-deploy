import React, { useState } from 'react';
import { CiCircleQuestion } from "react-icons/ci";

const Tooltip = ({ likes , text , texttwo  , textthree}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`relative inline-block group cursor-pointer`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-6 h-6  flex items-center justify-center rounded-full  transition duration-300">
          <CiCircleQuestion className='text-black' />
        </div>
        {isHovered && (
          <div className=" w-80 bg-black p-2 rounded-lg text-white absolute bottom-10 ">
             <p className='text-sm'>
               {likes}
             </p>
            <p>{text}</p>
            <p>{texttwo}</p>
            <p>{textthree}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Tooltip;
