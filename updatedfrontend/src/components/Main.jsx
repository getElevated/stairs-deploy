import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App';
import Navbar from './Navbar';
import CompanyPage from '../page/CompanyPage';
import Footer from './Footer';
export default function Main() {
    let {userAuth:{access_token} ,paymentStatus } = useContext(UserContext)
    console.log(paymentStatus);
  return (
    access_token ?   (
      <div>
       <CompanyPage/>
      </div>
      ) : ( 
        <>
        <Navbar/>
            <div className='   p-4 flex-col text-center flex items-center justify-center'>
              <img className='max-w-xs' src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1705598420/empty_u3jzi3.png" alt="empty"/>
                <h1 className='text-3xl  font-poppins font-semibold mb-4'>Please login to start test</h1>
                <Link to="/loginpage">
                  <button  className='bg-black text-white  px-4 py-2 rounded-lg'>Login</button>
                </Link>
            </div>
         <Footer/>
           </>
       )
  )
}
