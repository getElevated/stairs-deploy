import React from 'react'
import AnimationWrapper from '../ui/animation'

const StatsInfo = () => {
  return (
   <>
   <AnimationWrapper>
    <div className="bg-gray-100 relative  flex md:flex-row  flex-col px-14 sm:px-16 py-8  gap-y-10 items-center justify-between  rounded-sm ">
            <div className="absolute -top-8 -left-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 106 108"
                fill="none"
              >
                <path
                  d="M106 54C106 83.8234 82.2711 108 53 108C23.7289 108 0 83.8234 0 54C0 24.1766 23.7289 0 53 0C82.2711 0 106 24.1766 106 54Z"
                  fill="#5BBE82"
                />
              </svg>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold md:text-4xl sm:text-3xl text-5xl  font-poppins">1 Lakh+</h1>
              <h1 className="  text-sm  md:text-base ">Questions</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold md:text-4xl sm:text-3xl text-5xl   font-poppins">5000+</h1>
              <h1 className="  text-sm  md:text-base "> Unique Question Papers</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold  md:text-4xl sm:text-3xl text-5xl  font-poppins">1000+</h1>
              <h1 className="    sm:text-base  md:text-lg"> Students Enrolled</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <h1 className="font-semibold md:text-4xl sm:text-3xl text-5xl   font-poppins">500+</h1>
              <h1 className="   sm:text-base  md:text-lg"> Active Users</h1>
            </div>
          </div>
      </AnimationWrapper>
   </>
  )
}

export default StatsInfo
