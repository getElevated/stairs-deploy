import React from 'react';
import Logo from "../assets/Logo.svg"
import Wrapper from "../components/Wrapper";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { Link } from 'react-router-dom';
export default function App() {
  return (
    <Wrapper>
    <footer className="mt-20 ">
      <div className="">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
          <img src={Logo} class="mr-5 h-6 sm:h-9" alt="logo" />
            <p className="max-w-xs mt-2 text-sm text-gray-600">
             Let's Get Elevated
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8  lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-semibold text-xl font-inter">
                Stairs
              </p>
              <nav className="flex cursor-pointer flex-col mt-4 space-y-2 text-sm ">
                <Link to="/"><p className="hover:opacity-75" href> Home </p></Link>
                <Link to="/blog"><p className="hover:opacity-75" href> Blog</p></Link>
                <Link to="/about"><p className="hover:opacity-75" href> About</p></Link>
                <Link to="/contact"><p className="hover:opacity-75" href> Contact</p></Link>
                <Link to="/main"><p className="hover:opacity-75" href> Test</p></Link>
         
              </nav>
            </div>
            <div>
              <p className="font-semibold text-xl font-inter">
                Useful Links
              </p>
              <nav className="flex cursor-pointer flex-col mt-4 space-y-2 text-sm ">
                <a className="hover:opacity-75" href> Test</a>
                <a className="hover:opacity-75" href> Blogs </a>
                <a className="hover:opacity-75" href> Individual Test</a>
                <a className="hover:opacity-75" href> Books </a>
              </nav>
            </div>
            <div>
              <p className="font-semibold text-xl font-inter">
              Navigation
              </p>
              <nav className="flex cursor-pointer flex-col mt-4 space-y-2 text-sm ">
                <Link to="/privacy">
                <a className="hover:opacity-75" > Privacy</a>
                </Link>
                <Link to="/term">
                <a className="hover:opacity-75 " > Terms of Service</a>
                </Link>
                <Link to="/refund">
                 <p className='hover:opacity-75 '>Refund Policy</p>
                </Link>
                {/* <Link to="/privacy">
                <a className="hover:opacity-75" href> Privacy</a>
                </Link>
                <a className="hover:opacity-75" href> Indivusual Test</a>
                <a className="hover:opacity-75" href> Books </a> */}
              </nav>
            </div>
             <div>
             <p className="font-semibold text-xl font-inter">
                Follow us on
              </p>
              <div className="flex mt-8 space-x-4  cursor-pointer">
                
              <a className="hover:opacity-75" href="https://www.instagram.com/_thestairs_/" target="_blank" rel="noreferrer">
               <FaInstagram className='text-3xl  text-[#d62976]'/>
              </a>
              <a className="hover:opacity-75" href="/" target="_blank" rel="noreferrer">
               <CiFacebook className='text-3xl text-[#1877F2]'/>
              </a>
              <a className="hover:opacity-75" href="https://www.linkedin.com/company/thestairs/" target="_blank" rel="noreferrer">
                <CiLinkedin className='text-3xl text-[#0077b5]'/> 
              </a>
            </div>
            </div> 
          </div>
        </div>
        <div className='flex sm:flex-row flex-col-reverse items-center justify-between'>
          <div className=' '>
            <p class="sm:mt-8 mt-2 mb-4 text-xs text-gray-800">
               Copyright © Stairs 2024 | All right reserved 
            </p>
          </div>
          <div className='flex items-center'>
            {/* <Link to="/privacy">
              <p className='text-xs'>Privacy Policy || </p>
            </Link> */}
          {/* <Link to="/term">
             <p className='text-xs'>Term of Service ||</p>
          </Link> */}
          
          </div>
        </div>
       
      </div>
    </footer>
    </Wrapper>
  );
}