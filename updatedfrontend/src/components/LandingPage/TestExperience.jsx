import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Wrapper from "../../components/Wrapper"
import { Carousel } from 'react-responsive-carousel';

const TestExperience = () => {
  return (
    <>
    <div className='mt-10 mb-10'>
       <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins'>Personalized Test Experience</h1>
       <div className='lg:mt-10 '>
       <Carousel 
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        stopOnHover={true}
        swipeable={true}
        showStatus={false}
        interval={2000}
        showArrows={false}
        useKeyboardArrows={true}
        style={{width:"90%"}}
       >
                <div className='flex lg:flex-row   flex-col'>
                    <div className='flex flex-col items-start lg:mt-12 mt-6 lg:mb-0 mb-2'>
                      <h1  className='  text-xl sm:text-2xl lg:text-3xl text-start text-[#5BBE82] font-bold font-poppins'>Section-wise Analysis </h1>
                      <p className='mt-4 md:text-base text-start text-sm'>Thorough analysis of time spent per section.</p>
                      <p className='mt-4 md:text-base text-sm text-start'>Assess Efficiency & Speed through Report Card.</p>
                      <p className='mt-4 md:text-base text-sm text-start'>Test your Strong & Weak Topics based on Performance.</p>
                    </div>
                    
                    <img className='max-w-2xl' 
                     src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1707289275/img2_t0veic.jpg" />
                </div>
                <div className='flex lg:flex-row flex-col  '>
                    <div className='flex flex-col items-start text-start lg:mt-12 mt-6 lg:mb-0 mb-2 '>
                      <h1  className='  text-xl sm:text-2xl lg:text-3xl  text-[#5BBE82] font-bold font-poppins'>Complete Performance Analysis</h1>
                      <p className='mt-4 md:text-base text-sm text-start'>Leadership Boards to rank your performance</p>
                      <p className='mt-4 md:text-base text-sm text-start'>Performance Analysis to help you prioritize.</p>
                      <p className='mt-4 md:text-base text-sm text-start'>A "You vs Topper" section for comparative analysis.</p>
                    </div>
                    
                    <img className='max-w-2xl' 
                     src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1709031296/ds2_gwqwcu.jpg" />
                </div>

                <div className='flex lg:flex-row flex-col justify-between '>
                    <div className='flex flex-col items-start lg:mt-12 mt-6 lg:mb-0 mb-2'>
                      <h1  className='  text-xl sm:text-2xl text-start lg:text-3xl  text-[#5BBE82] font-bold font-poppins'>Attempted Analysis</h1>
                      <p className='mt-4 md:text-base text-sm  text-start'>Overall Efficiency Tracker with Metrics.</p>
                      <p className='mt-4 md:text-base text-sm text-start'>Graphical Representation of Performance.</p>
                      <p className='mt-4 md:text-base text-sm text-start'>Track the Time Taken to attempt each question.</p>
                    </div>
                    <img className='max-w-2xl' 
                     src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1709031297/ds1_tdy0jv.jpg" />
                </div>

                
            </Carousel>
            </div>
    </div>
    </>
    
  )
}

export default TestExperience
