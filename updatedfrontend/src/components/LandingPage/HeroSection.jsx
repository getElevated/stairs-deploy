import React, { useContext } from "react";
import Wrapper from "../Wrapper";
import hero1 from "../../assets/home1.png"
import hero2 from "../../assets/home2.png"
import hero3 from "../../assets/home3.png"
import cutomer1 from "../../avatar/1.png"
import cutomer2 from "../../avatar/2.png"
import cutomer3 from "../../avatar/3.png"
import cutome4 from "../../avatar/4.png"
import cutomer5 from "../../avatar/5.png"
import hero4 from "../../assets/home4.png"
import blob from "../../assets/blob.svg"
import AnimationWrapper from "../ui/animation";
import TextAnimation from "../common/textanimation";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

const HeroSection = () => {
  let {userAuth:{access_token}, setUserAuth} = useContext(UserContext)
  console.log(access_token);
  return (
<>
 <AnimationWrapper>
  <Wrapper>
        <div className="items justify-center h-full md:pt-10 pt-5 lg:pt-20 pb-20 md:flex ">
            <div className="w-full lg:w-2/3">
                <div className="lg:max-w-lg ">
                   <div className="">
                   <div className="text-black">
                  <div>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold flex  items-center">S<TextAnimation  line1="kills"/></h1>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold flex items-center">T<TextAnimation line1="raining for"/></h1>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold flex items-center">A<TextAnimation line1="dvancement and "/></h1>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold flex items-center">I<TextAnimation line1="mprovement, for"/></h1>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold flex items-center">R<TextAnimation line1="emarkable growth to"/></h1>
                <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-semibold flex items-center">S<TextAnimation line1="ucceed in career"/></h1>
              </div>
                  </div>
                        <p className="md:text-base text-sm mt-2 md:mt-5  ">Empowering Your Journey Skyward: Get Elevated  with STAIRS Where
                        Placement Preparation Meets Professional Triumph.</p>
                   </div>
                   <div className="flex items-center md:mt-4 mt-2 gap-x-4 ">
                    {
                      access_token ?  (
                        <Link to="/main">
                          <button className="  md:text-lg sm:text-base text-sm bg-black  hover:opacity-90 py-2 px-8 text-white mt-2 rounded-lg ">Free Mock</button>
                        </Link>
                      ) : (
                        <Link to="/signuppage">
                           <button className="  md:text-lg sm:text-base text-sm bg-black  hover:opacity-90 py-2 px-8 text-white mt-2 rounded-lg ">Free Mock</button>
                        </Link>
                      )
                    }   
                    <Link to="/signuppage" >
                        <p className="md:text-lg sm:text-base text-sm hover:underline cursor-pointer ">Start Today</p>
                    </Link>
                   </div>
                  <div className="flex items-center sm:items-start sm:justify-start justify-center ">
                  <div className="mt-8  flex items-center ">
                    <div className="flex">
                      <img  className="w-10 border border-blacl  rounded-full h-10" src={cutomer1} />
                      <img  className="w-10  -ml-3 rounded-full h-10" src={cutomer2} />
                      <img  className="w-10 -ml-3 rounded-full h-10" src={cutomer3} />
                      <img  className="w-10 -ml-3 rounded-full h-10" src={cutome4} />
                      <img  className="w-10 -ml-3 rounded-full h-10" src={cutomer5} />
                    </div>
                    <div className="flex items-center ">
                       <h1 className="font-semibold text-lg ml-2">500+</h1>
                       <p className="text-sm ml-1">Happy Student</p>
                    </div>
                   </div>
                  </div>
                
                </div>
                <div>

                </div>
            </div>
            <div className=" gap-2  relative flex items-center justify-center w-full mt-4 lg:mt-0 lg:w-1/2">
                <div className=" flex flex-col gap-2 ">
                  <img  className="  cursor-pointer rounded-s-lg w-full h-full lg:max-w-[260px] transition-transform duration-700 transform scale-100 hover:scale-[2.1]  origin-top-left hover:z-20" src={hero1} alt="heroImage"/>
                  <img  className=" cursor-pointer rounded-s-lg w-full h-full lg:max-w-[260px] transition-transform duration-700 transform scale-100 hover:scale-[2.1] origin-bottom-left  hover:z-10" src={hero2} alt="heroImage"/>
                </div>
                <div className=" flex flex-col gap-2 ">
                  <img  className=" cursor-pointer rounded-e-lg w-full h-full lg:max-w-[260px] transition-transform duration-700 transform scale-100 hover:scale-[2.1] origin-top-right  hover:z-10" src={hero3} alt="heroImage"/>
                  <img  className=" cursor-pointer rounded-e-lg w-full h-full lg:max-w-[260px] transition-transform duration-700 transform scale-100 hover:scale-[2.1] origin-bottom-right  hover:z-10" src={hero4} alt="heroImage"/>
               </div>
            {/* <div className="overflow-hidden ">
              <img className="overflow-hidden  w-48 h-36 absolute -bottom-14 -left-24 -z-20" src={bottom} />
              <img className="w-48 h-36 overflow-hidden absolute -top-28 -right-24 -z-20" src={top} />
            </div> */}
            </div>
            <div className="absolute hidden md:blok top-20 opacity-60 left-20 -z-10">
               <img className="w-full" src={blob} alt="blob"/>
            </div>
        </div>
  </Wrapper>
  </AnimationWrapper>
    </>
  );
};

export default HeroSection;
