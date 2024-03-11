import React from 'react'
import hp from "../../assets/hp.png"
import deloitte from "../../assets/deloitte.png"
import accenture from "../../assets/accenture.png"
import wipro from "../../assets/wipro.svg"
import infosys from "../../assets/infosys.png"
import Hcl from "../../assets/hcl.png"

import tcs from "../../assets/tcs.png"
import Marquee from "react-fast-marquee";
import AnimationWrapper from '../ui/animation'
const PopularSeriesLogo = () => {
  return (
    <>
    <AnimationWrapper>
    <div className='mt-10 mb-20'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold  mb-2'>Prepare With Us For</h1>
      <p className=' md:text-base text-sm'>We have plenty of popular test series that will help you with your placements</p>
 <Marquee direction="left">
    <div className='flex mt-4    animate-slide items-center justify-center '>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={hp} className='w-full h-full object-contain' alt="logo" />
      </div>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={deloitte} className='w-full h-full object-contain' alt="logo" />
      </div>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={wipro} className='w-full h-full object-contain' alt="logo" />
      </div>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={infosys} className='w-full h-full object-contain' alt="logo" />
      </div>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={tcs} className='w-full h-full object-contain' alt="logo" />
      </div>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={accenture} className='w-full h-full object-contain' alt="logo" />
      </div>
      <div className='border ml-10 mr-10 border-black/20 p-2 h-16 rounded-lg w-44 object-contain'>
        <img src={Hcl} className='w-full h-full object-contain' alt="logo" />
      </div>
    </div>
 </Marquee>
 </div>
 </AnimationWrapper>
    </>
  )
}

export default PopularSeriesLogo
