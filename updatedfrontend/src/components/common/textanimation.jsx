import React from 'react'
import { motion } from "framer-motion";
const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
const TextAnimation = ({line1 , line2 , line3 , line4}) => {
  return (
    <div className=" ">
    <motion.p
      variants={sentence}
      initial="hidden"
      animate="visible"
          className='font-bold  mr-2 text-gray-700/75 text-2xl   sm:text-3xl  lg:text-[45px]'
    >
      {line1?.split("").map((char, index) => {
        return (
          <motion.span key={char + " " + index} variants={letter}>
            {char}
          </motion.span>
        );
      })}
    </motion.p>
    <motion.p
      variants={sentence}
      initial="hidden"
      animate="visible"
      className='font-bold  text-white text-2xl   sm:text-3xl  lg:text-5xl'
     
    >
      {line2?.split("").map((char2, index) => {
        return (
          <motion.span key={char2 + " " + index} variants={letter}>
            {char2}
          </motion.span>
        );
      })}
    </motion.p>
    <motion.p
      variants={sentence}
      initial="hidden"
      animate="visible"
      className='text-xl '
     
    >
      {line3?.split("").map((char3, index) => {
        return (
          <motion.span key={char3 + " " + index} variants={letter}>
            {char3}
          </motion.span>
        );
      })}
    </motion.p>
    <motion.p
      variants={sentence}
      initial="hidden"
      animate="visible"
      className='text-2xl   sm:text-3xl  lg:text-4xl  font-poppins font-semibold '
     
    >
      {line4?.split("").map((char4, index) => {
        return (
          <motion.span key={char4 + " " + index} variants={letter}>
            {char4}
          </motion.span>
        );
      })}
    </motion.p>
  
  </div>
  )
}
export default TextAnimation
