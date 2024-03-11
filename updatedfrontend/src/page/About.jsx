import React from "react";
import Navbar from "../components/Navbar";
import { LiaLinkedin } from "react-icons/lia";
import abouthero from "../assets/about.jpg"
import Footer from "../components/Footer"
import Wrapper from "../components/Wrapper";
import AnimationWrapper from "../components/ui/animation";

const About = () => {
  return (
    <>
   
     <Navbar/>
        <AnimationWrapper>
            <div className="h-[30vh]  rounded-sm   bg-[url(https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]">
               <Wrapper>
                <h1 className="text-4xl lg:text-5xl pl-10  text-white font-semibold pb-20 pt-20">Let's Get Elevated...</h1>
                </Wrapper>
            </div>
       </AnimationWrapper>
          
    <AnimationWrapper>
      <Wrapper>
        <div className="">
            <div className="h-[55vh] pl-10  flex    items-start  justify-start pt-10">
              <div className="  w-full">
                <h1 className="  text-4xl lg:text-5xl   text-black font-semibold "> About Us</h1>  
                <p className="text-base mt-2 ">Welcome to STAIR’s, where we revolutionize learning for successful career placements and focus
                 on Skills Training for Advancement and Improvement for Remarkable growth to Succeed in career development.</p>
                 <p>
                 At STAIR’s, we understand the pivotal role education plays in shaping careers. We're dedicated to bridging the gap between academia’s last step and first step of corporate
                  world by preparing candidate specifically to clear first step of placements. 
                 </p>
                 <h1 className="mt-1 font-semibold text-lg">What Sets Us Apart: </h1>
                 <p>We stand out through our unique blend of innovative technology, rigorous practice and personalized learning experiences. Our platform offers a comprehensive suite of tailored made placement
                   training modules designed to ensure our students gets hands on of learnings and skills required by today's employers to clear placements rounds.</p>
                   <p className="mt-1">Choosing STAIR’s means investing in a transformational learning experience. We prioritize the success of our users and are committed to their growth.</p>
                   <p className="mt-10 font-semibold text-center">Join us at STAIR’s and embark on a journey toward a fulfilling and successful career!</p>
             </div>
           </div>
        </div>
        </Wrapper> 
      </AnimationWrapper>
      <AnimationWrapper>
        <div className="  h-[45vh] bg-[#5BBE82]    mt-[300px] md:mt-[10px]  rounded-sm flex  justify-center flex-col ">
          <Wrapper>
          <div>
            <div className="h-[25vh] pl-10  flex    items-start  justify-start pt-10">
              <div className="  w-full">
                <h1 className="  text-4xl lg:text-5xl   text-black font-semibold "> Mission</h1>  
                <p className="text-base mt-2 ">We're on a mission to empower individuals with the skills, knowledge, and confidence they need to excel in the professional world.<br/> We believe that every individual deserves the opportunity to land their dream job,
                 and we're committed to providing the tools and resources necessary to make that a reality.</p>
             </div>
           </div>
        </div>
          </Wrapper>
        </div>
      </AnimationWrapper>
      <AnimationWrapper>
      <Wrapper>
        {/* <div>
          <h1 className="text-center text-xl font-semibold font-poppins mt-10  ">The Team</h1>
          <div className="flex  flex-col items-center justify-center mt-4">
             <p className=" text-2xl sm:text-3xl lg:text-4xl text-black text-center  max-w-xl   ">Our amazing team always got their head in the game.</p>
             <p className="sm:text-base text-sm max-w-xl mt-4  text-center">We are one big family and connected through the love for football and the desire to make digital and professional solutions available and affordable to every coach around the world.
               We believe that coaching can take players where they can't take themselves.</p>
          </div>
        </div> */}
        {/* <div className="flex items-center mt-10 mb-10 justify-center gap-x-16 gap-y-10 flex-wrap">
        <div className="flex  max-w-xs flex-col">
           <div className=" ">
             <img className="max-w-xs rounded-full  filter grayscale  hover:filter-none hover:cursor-pointer  " src="https://assets-global.website-files.com/64a7cd1364c6b63672543337/64afeb1630ded3431382d7e7_coachbetter-team_patrick-patzig-p-500.webp" alt="/"/>
          </div>
          <div className="flex items-center justify-center flex-col">
              <h1 className="text-black text-2xl   font-semibold">Patrick Patzig</h1>
                <p>Co-Founder & CEO</p>
                  <div className="bg-[#5BBE82] rounded-full flex items-center justify-center hover:opacity-90 cursor-pointer  w-10 h-10 ">
                    <LiaLinkedin className="text-white text-3xl " />
                 </div>
                <p className="text-center font-light">Patrick, a visionary leader, drives our vision and strategy with his natural ability to inspire people.</p> 
          </div>
        </div>
        <div className="flex  max-w-xs flex-col">
           <div className=" ">
           <img className="max-w-xs rounded-full  filter grayscale  hover:filter-none hover:cursor-pointer  " src="https://assets-global.website-files.com/64a7cd1364c6b63672543337/64afeb1630ded3431382d7e7_coachbetter-team_patrick-patzig-p-500.webp" alt="/"/>
          </div>
          <div className="flex items-center justify-center flex-col">
              <h1 className="text-black text-2xl   font-semibold">Patrick Patzig</h1>
                <p>Co-Founder & CEO</p>
                  <div className="bg-[#5BBE82] rounded-full flex items-center justify-center hover:opacity-90 cursor-pointer  w-10 h-10 ">
                    <LiaLinkedin className="text-white text-3xl " />
                 </div>
                <p className="text-center font-light">Patrick, a visionary leader, drives our vision and strategy with his natural ability to inspire people.</p> 
          </div>
        </div>
        <div className="flex  max-w-xs flex-col">
           <div className=" ">
           <img className="max-w-xs rounded-full  filter grayscale  hover:filter-none hover:cursor-pointer  " src="https://assets-global.website-files.com/64a7cd1364c6b63672543337/64afeb1630ded3431382d7e7_coachbetter-team_patrick-patzig-p-500.webp" alt="/"/>
          </div>
          <div className="flex items-center justify-center flex-col">
              <h1 className="text-black text-2xl   font-semibold">Patrick Patzig</h1>
                <p>Co-Founder & CEO</p>
                  <div className="bg-[#5BBE82] rounded-full flex items-center justify-center hover:opacity-90 cursor-pointer  w-10 h-10 ">
                    <LiaLinkedin className="text-white text-3xl " />
                 </div>
                <p className="text-center font-light">Patrick, a visionary leader, drives our vision and strategy with his natural ability to inspire people.</p> 
          </div>
        </div>
        <div className="flex  max-w-xs flex-col">
           <div className=" ">
            <img className="max-w-xs rounded-full  filter grayscale  hover:filter-none hover:cursor-pointer  " src="https://assets-global.website-files.com/64a7cd1364c6b63672543337/64afeb1630ded3431382d7e7_coachbetter-team_patrick-patzig-p-500.webp" alt="/"/>
          </div>
          <div className="flex items-center justify-center flex-col">
              <h1 className="text-black text-2xl   font-semibold">Patrick Patzig</h1>
                <p>Co-Founder & CEO</p>
                  <div className="bg-[#5BBE82] rounded-full flex items-center justify-center hover:opacity-90 cursor-pointer  w-10 h-10 ">
                    <LiaLinkedin className="text-white text-3xl " />
                 </div>
                <p className="text-center font-light">Patrick, a visionary leader, drives our vision and strategy with his natural ability to inspire people.</p> 
          </div>
        </div>
        <div className="flex  max-w-xs flex-col">
           <div className=" ">
           <img className="max-w-xs rounded-full  filter grayscale  hover:filter-none hover:cursor-pointer  " src="https://assets-global.website-files.com/64a7cd1364c6b63672543337/64afeb1630ded3431382d7e7_coachbetter-team_patrick-patzig-p-500.webp" alt="/"/>
          </div>
          <div className="flex items-center justify-center flex-col">
              <h1 className="text-black text-2xl   font-semibold">Patrick Patzig</h1>
                <p>Co-Founder & CEO</p>
                  <div className="bg-[#5BBE82] rounded-full flex items-center justify-center hover:opacity-90 cursor-pointer  w-10 h-10 ">
                    <LiaLinkedin className="text-white text-3xl " />
                 </div>
                <p className="text-center font-light">Patrick, a visionary leader, drives our vision and strategy with his natural ability to inspire people.</p> 
          </div>
        </div>
        </div> */}
        
        <div>
            <div className="h-full pl-10  flex    items-start  justify-start pt-10">
              <div className="  w-full">
                <h1 className="  text-4xl lg:text-5xl   text-black font-semibold "> Vision</h1>  
                <p className="text-base mt-2 ">At STAIR’s, our vision is to redefine the landscape of career preparation by empowering students with actionable insights through cutting-edge performance statistic tools. We envision
                 a future where every student has a clear, data-driven roadmap to success in their professional journey.</p>
                 <p className="mt-2">We aspire to revolutionize placement training by harnessing the power 
                  of data analytics and technology. Our vision encompasses:</p>
         
                <ul className="ml-4 mt-4 list-disc">
                  <li className="ml-2"> <span className="font-semibold">Empowering Students:</span> We aim to equip students with a comprehensive understanding of their strengths, areas
                     for improvement, and overall performance metrics. This insight will enable them to make informed decisions, refine their skills, and maximize their potential for career success.</li>
                     <li className="ml-2 mt-1"><span className="font-semibold">Bridging the Gap Between Education and Employment:</span> By providing students with detailed performance analytics and industry-aligned benchmarks, we strive to bridge the gap between academia and industry requirements.
                      This enables students to align their skills with market demands, increasing their employability and readiness for the workforce.</li>

                      <li className="ml-2 mt-1"><span className="font-semibold">Cultivating a Culture of Excellence:</span> Our vision extends beyond individual success to contribute to a culture of excellence. By promoting a data-driven approach to learning, we aim to foster a community of high achievers, 
                      innovators, and leaders poised to make a meaningful impact in their chosen fields.</li>
                </ul>
                <p className="mt-4">Through our commitment to leveraging technology for educational advancement, we envision a future where students are not just participants but architects of their own success stories. At STAIR’s, our vision is to transform learning
                   into a strategic advantage, guiding students towards fulfilling and prosperous careers.</p>
             </div>
           </div>
        </div>
       
      </Wrapper>
      </AnimationWrapper>
      <Footer/>
    
    </>
  );
};

export default About;
