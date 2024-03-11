import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CiCirclePlus } from 'react-icons/ci';
import { CiCircleMinus } from 'react-icons/ci';
import AnimationWrapper from '../components/ui/animation';
import Footer from "../components/Footer"
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';

const FaqPage = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const questions = [
    {
        id: 1,
        question: 'I’D LIKE TO TAKE YOUR PROGRAM. WHERE DO I BEGIN?',
        answer: 'One can easily enroll into our program by signing up on our website www.thestairs.in and paying for the same on our website.'
    },
    {
        id: 2,
        question: 'WHAT IF I HAVE DOUBTS AFTER. HOW DO I GET HELP?',
        answer: 'Incase of any doubts related to our program one can easily connect with us or their fellow mates over our open discussion forum created for quick problem solving and information sharing.'
    },
    {
        id: 3,
        question: 'CAN WE PAY FOR THE WORKSHOPS THROUGH CREDIT/DEBIT/NET BANKING?        ',
        answer: 'Yes, one can pay through CREDIT/DEBIT/NET BANKING/UPI as long as the user is following the terms and conditions of the third party payment gateway.        '
    },
    {
        id: 4,
        question: 'WHAT IS THE AVERAGE DURATION FOR YOUR COURSES?',
        answer: 'With our 10 + 2 program one has to pay for 10 months and get 2 months access free from our end. Therefore, the total duration of the course in 1 year.'
    },
    {
        id: 5,
        question: 'IS YOUR PROGRAM TIMING FLEXIBLE?',
        answer: 'Yes, one can practice with us any time they want according to there schedule. Only for the Master Test the time is definite as it is kind of a competition among all the students taking up our program.'
    },
    {
      id: 6,
      question: 'CAN I RETAKE COMPANY SPECIFIC TESTS?',
      answer: 'Yes, one can take the company specific tests as many numbers of times they want but the score for the analytical dashboard will be considered of the first attempt of any test.'
   },
   {
    id: 7,
    question: 'WHAT IS THE AVERAGE TIME TO REPLY FOR ANY QUERIES POSTED?    ',
    answer: 'Our turn around time to reply to any query posted on our forum is within 16-24 hrs.'
  },
   {
    id: 8,
    question: 'WHICH DAYS ARE THE WEBINARS GENERALLY CONDUCTED?',
    answer: 'We generally conduct webinars on weekends. Any change in the schedule is informed prior via mails and message.'
    },
  {
    id: 9,
    question: 'WHAT KIND OF COMMITMENT IS REQUIRED?',
    answer: 'From a student perspective one need to give at least 30 minutes daily to take full advantage of the program and help oneself in growing with the program.'
    },
   {
    id: 10,
    question: 'CAN I INTEREACT WITH OTHER STUDENTS /CLASASMATES OF THE SAME PROGRAM?  ',
    answer: 'Yes, we have an open forum for all the students to interact with each other and help each other in the progress of the program.'
    },
  {
    id:11,
    question: 'WHAT ARE YOUR TERMS AND CONDITIONS?',
    answer: 'Please look into our Terms and Conditions page mentioned below.'
  },
   {
   id:12,
   question: 'DO YOU ALSO PROVIDE COUNSELLING FOR THE STUDENTS?',
   answer: 'Yes, we do conduct monthly webinars to help students understand better in terms of building career opportunities.'
   },
];
  return (
    <>
    <Navbar/>
    <AnimationWrapper>
        <Wrapper>
    <div className='flex md:flex-row mt-10 mb-10 flex-col justify-between h-full '>
        <div className='flex-col '>
          <div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold  mb-2'>More questions may be you have</h1>
          </div>
          <div>
            <p className='md:text-base text-sm'>Have more questions to ask</p>
            <p className='md:text-base text-sm'>Write us mail on <span className='font-semibold'>stair.tech@gmail.com</span> </p> 
          </div>
        </div>
      <div className=' '>
        {questions.map((q) => (
          <div key={q.id} className='text-black max-w-3xl mb-4 last:mb-0'>
               <button className="w-full text-left sm:text-base text-sm
               focus:outline-none p-4 rounded-sm border border-black/10 shadow-md flex justify-between items-center"
               onClick={()=> setActiveQuestion(activeQuestion === q.id ? null : q.id) }
              >
               {q.question} 
               {activeQuestion === q.id ? (<CiCircleMinus className='text-3xl text-black p-1 rounded-full '/>) : <CiCirclePlus className='text-3xl text-black   p-1 rounded-full '/> }
               </button>
               <AnimatePresence>
                {activeQuestion === q.id && (
                   <motion.div
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: "auto" }}
                   exit={{ opacity: 0, height: 0 }}
                   className=''>
                   <p className='max-w-[650px] pt-2  text-start '>{q.answer}</p>
                 </motion.div>
                 )}
               </AnimatePresence>
          </div>
        ))}
      </div>
    </div> 
    </Wrapper>
    </AnimationWrapper>
    <Footer/>
    </>
  );
};
export default FaqPage;
