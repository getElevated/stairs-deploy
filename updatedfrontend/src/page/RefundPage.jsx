import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import AnimationWrapper from '../components/ui/animation'
import Wrapper from '../components/Wrapper'
import TextAnimation from '../components/common/textanimation'

const RefundPage = () => {
  return (
    <>
    <Navbar/>
     <AnimationWrapper>
             <div className="h-[30vh]  rounded-sm   bg-[url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
                <Wrapper>
               
                   <h1 className="text-4xl lg:text-5xl   text-white font-semibold pb-20 pt-20">
                      <TextAnimation line2="Refund Policy"/>
                   </h1>
                </Wrapper>
            </div>
             <Wrapper>
                {/* <h1 className="text-2xl lg:text-3xl font-poppins   font-semibold pt-10">Refund Policy</h1> */}
                <p className='ml-4 text-sm mt-4 mb-2 sm:text-base text-gray-600'>
                    Once an order confirmation is sent from Stairs.in or its sub-domains, all sales are considered final, and cancellations are not permitted.
                </p>
                <p className='ml-4 text-sm mb-2 sm:text-base text-gray-600'>Regarding online courses sold on STAIRS or its sub-domains, a refund policy isn't standard practice. However, specific courses may advertise a Money Back Guarantee on their pages, and STAIRS will honor such commitments applicable at the time of purchase.</p>
                <p className='sm:text-base text-sm mb-2 text-gray-600'>Under certain circumstances outlined below, customers may claim a refund:</p>
                  <ul className='sm:text-base text-sm text-gray-600 list-disc ml-8'>
                    <li>Duplicate Purchase: If someone accidentally purchases a course twice, they must notify within 2 days of purchase for a possible refund after verification.</li>
                    <li>Wrong course Purchase: If a student selects the wrong course during payment, they can request a refund within 24 hours. However, the course fee might be adjusted against the fee of another course, not refunded in cash.</li>
                  </ul>
                <p className='sm:text-base text-gray-600  text-sm mt-4 mb-4'>
                   Exceptional cases not mentioned can be addressed by emailing at siddhant@stairs.in. STAIRS reserves the right to evaluate and consider requests at its discretion.
                </p>  
                <p className='sm:text-base text-gray-600 text-sm '>
                  For refund initiation, customers can contact siddhant@stairs.in. Refunds will be processed with deductions for promotional discounts, taxes, administrative charges, etc.
                </p>  
                <p className='sm:text-base  text-sm mt-4 mb-4'>
                  This Refund Policy is part of the Terms of Use. By registering and using stairs.in services, you acknowledge and agree to these terms. If you disagree with this policy,
                  you may terminate your account, but prior transactions remain governed by this policy until termination
                </p> 
             </Wrapper>
     </AnimationWrapper>
    <Footer/>
    </>
  )
}

export default RefundPage
