import React from 'react'
import { FaDiscord } from "react-icons/fa";
const DiscordPAge = () => {
  return (
    <div className='mt-10 mb-10'>
          <div className='bg-gray-100 rounded-sm'>
            <div className='p-4'>
              <div className='bg-[#5BBE82] p-2 rounded-full inline-block '>
                 <FaDiscord className='text-gray-100 text-7xl '/>
              </div>
              <h1 className='text-2xl  sm:text-3xl lg:text-4xl font-bold  mb-2'>Join our discord </h1>
              <p className='md:text-base text-sm'>Join our Discord and immerse yourself in a vibrant
               community of passionate learners and educators! Stay updated on the latest educational trends,
                engage in insightful discussions, and unlock exclusive resources to enhance your edtech journey. </p>
                <button className="inline-flex mt-4  h-12  animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    Join our discord
                </button>
            </div>
          </div>
    </div>
  )
}

export default DiscordPAge
