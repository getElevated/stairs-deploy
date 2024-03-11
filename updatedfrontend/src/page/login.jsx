import React, { useContext, useEffect, useRef, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import loginimg from "../assets/signup.jpg"
import { LuLoader2 } from "react-icons/lu";
import logo from "../assets/Logo.svg"
import axios from "axios";
import { UserContext } from "../App";
import { storeInSession } from "../components/common/session";
import TextAnimation from "../components/common/textanimation";
import AnimationWrapper from "../components/ui/animation";
import { Link, Navigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
    const authForm =  useRef();
    let {userAuth:{access_token}, setUserAuth} = useContext(UserContext)
    const [loading , setLoading] = useState(false);
    console.log(access_token);

    const userAuthThroughServer = (formData) => {
      const apiUrl = `${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/login`;
      console.log(apiUrl, formData);
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/auth/login`, formData)
        .then(({ data }) => {
          storeInSession("user", JSON.stringify(data))
          setUserAuth(data);
          toast("Loged In Succeffully👋");
          setLoading(false);
        })
        .catch(({ response }) => {
          toast.error(response?.data?.message);
          setLoading(false);
        });
    };
    const handleSubmit = (e) =>{
       e.preventDefault();
       setLoading(true);
       let form = new FormData(authForm.current);
       let formData = {};
       for(let [key , value] of form.entries()){
          formData[key] = value;
       }
     userAuthThroughServer( formData);     
    }
  return (
access_token ? 
<Navigate to="/"/> :
   <AnimationWrapper>
     <div className="flex  items-center  ">
        <div className="hidden md:block">
          <img className="h-screen object-cover" src={loginimg} alt="login image"/>
        </div>
        <div className="w-full pt-4 md:pt-0 mt-16 md:mt-0 border-black/40 flex items-center justify-center">
          <button className="absolute md:top-20 top-10 md:left-1/2 left-4  z-40 text-black">
             <Link to="/"><IoMdArrowBack className="text-2xl font-semibold"/></Link>
          </button>
        <div className="w-96 md:p-0 p-4 ">
              <div>
                <div className="flex items-center justify-center">
                <img className="mb-8 max-w-[200px]" src={logo} alt="Logo"/>
                </div>
             
                <div className="mb-4">
                  <TextAnimation line4="Welcome back "></TextAnimation>
                </div>
                <p className="sm:text-base text-sm ">Please enter your login information <br/> or tap on login</p>
              </div>
             <form  ref={authForm}  className="flex flex-col gap-4">
                  <input className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  mt-4 border w-full" type="email" name="email" placeholder="Email"/>
                     <div className="relative">
                     <input className="p-2 focus:outline-black/40 rounded-sm bg-[#f3f3f3]  border w-full" type="password" name="password" placeholder="Password"/>
                   </div>
                   {
                    loading  ?  (
                     <div>
                         <p  className="bg-black flex items-center justify-center  rounded-sm w-full text-white py-2 hover:scale-105 duration-300">Loging in...<LuLoader2 className="animate-spin"/></p>
                     </div>
                    ) : (
                      <>
                        <button   type="submit" onClick={handleSubmit} className="bg-black flex items-center justify-center rounded-sm text-white py-2 hover:scale-105 duration-300">Login</button>
                      </>
                    )
                   }
              </form>
                     <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400"/>
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400"/>
                    </div>
                       <div className="mt-5 text-xs border-b border-black py-4 ">
                         <a href="#">Forgot your password <span className="text-blue-700">  reset?</span> </a>
                      </div>
                         <div className="mt-2 text-xs flex  items-center   py-4 ">
                          <Link to="/signuppage">
                          <p className="cursor-pointer" >Don't Have a account <span className="text-blue-700">
                            Signup
                           </span>  </p>
                          </Link>
                     </div>
               </div>
            </div>
        </div>
        </AnimationWrapper>
    
  )
}

export default Login
