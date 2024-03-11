import React, { useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../../App';
import { FaPercentage } from "react-icons/fa";
import axios from 'axios';
import { RxCross1 } from "react-icons/rx";
import { FaTrophy } from "react-icons/fa";
import { PiSkipForwardLight } from "react-icons/pi";
import Navbar from '../Navbar';
import Footer from "../../components/Footer"
import Wrapper from '../Wrapper';
import { CiCircleCheck } from "react-icons/ci";
import { useLocation } from 'react-router-dom';

const CompanyResult = () => {
  const location = useLocation();
  const totalQuestions = location.state ? location.state.totalQuestions : null;
  const companyPath = location.state?.companyPath;
  console.log(totalQuestions);
  const {userAuth:{name , email } ,  userAuth:{access_token}} = useContext(UserContext);
  let userId = '';
  try {
    const decodedToken = jwtDecode(access_token);
    userId = decodedToken.userId;
    console.log(userId);
  } catch (error) {
    console.error("Error decoding JWT:", error.message);
    console.log("Error in decoding")
  }
  const [apiData, setApiData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const decodedToken = jwtDecode(access_token);
        userId = decodedToken.userId;
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/quiz/fetch-scores/${userId}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        const data = response.data;
        setApiData(data);
        localStorage.setItem('quizResult', JSON.stringify(data));
      } catch (error) {
        console.error('Error decoding JWT or fetching data:', error.message);
      }
    };
    fetchData();
  }, [access_token, userId]);
  console.log(apiData);

  let TotalCorrect = (apiData?.latestTestScore?.logical?.correct) + (apiData?.latestTestScore?.programming?.correct) + (apiData?.latestTestScore?.quant?.correct) + (apiData?.latestTestScore?.verbal?.correct) ;

  let TotalInCorrect = (apiData?.latestTestScore?.logical?.incorrect) + (apiData?.latestTestScore?.programming?.incorrect) + (apiData?.latestTestScore?.quant?.incorrect) + (apiData?.latestTestScore?.verbal?.incorrect) ;


  let TotalSkipped  = (apiData?.latestTestScore?.logical?.skipped) + (apiData?.latestTestScore?.programming?.skipped) + (apiData?.latestTestScore?.quant?.skipped) + (apiData?.latestTestScore?.verbal?.skipped) ;

  return (
  <>  
  <Navbar/>
  <Wrapper>
    <h1 className='text-center md:text-4xl sm:text-3xl text-2xl  mt-10 font-Nunito'>{name}'s Results</h1>
   
    <div className='flex flex-col   font-Nunito max-w-5xl m-auto gap-y-5'>
    <div className='ml-2'>
        <h1 className='sm:text-2xl text-xl  font-Nunito md:text-3xl mt-10 font-bold'>Overall Performance</h1>
                <p className='text-black  md:text-xl sm:text-lg text-base'>Name : {name}</p>
                <p className='text-black  md:text-xl sm:text-lg text-base'>Email :{email}</p>
                <p className='text-black  md:text-xl sm:text-lg text-base'>Company Name: {companyPath}</p>
    </div>
    <div className='flex sm:items-center sm:mt-28 items-start gap-y-4 gap-x-10 sm:flex-row flex-col justify-between '>
    <div className=' inline-flex items-center gap-x-4'>
          <div className='bg-green-500  h-16 w-16 flex items-center justify-center rounded-full p-1'>
            <FaTrophy className='text-4xl  text-white rounded-full' />
          </div>
          <div className='flex flex-col items-center'>
             <p className='text-3xl font-bold'>{TotalCorrect}/{totalQuestions}</p> 
             <p>Correct</p>
          </div>
      </div>
      <div className=' inline-flex items-center gap-x-4'>
          <div className='bg-orange-400  h-16 w-16  flex items-center justify-center rounded-full p-1'>
            <FaPercentage className='text-4xl  text-white rounded-full' />
          </div>
          <div className='flex flex-col items-center'>
          <p className='text-3xl font-bold'>{`${apiData?.latestTestScore?.percentage}`.slice(0, apiData?.latestTestScore?.percentage.toString().indexOf('.') + 3)}%</p>
             <p>Percentage</p>
          </div>
      </div>
   
      <div className=' inline-flex items-center gap-x-4'>
          <div className='bg-red-400 w-16 h-16 flex items-center justify-center rounded-full p-1'>
            <RxCross1 className='text-4xl  text-white rounded-full' />
          </div>
          <div className='flex flex-col items-center'>
             <p className='text-3xl font-bold'>{TotalInCorrect}/{totalQuestions}</p> 
             <p>Incorrect</p>
          </div>
      </div>
      <div className=' inline-flex items-center gap-x-4'>
           <div className='bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full p-1'>
             <PiSkipForwardLight className='text-4xl  text-white rounded-full' />
          </div>
          <div className='flex flex-col items-center'>
             <p className='text-3xl font-bold'>{TotalSkipped}/{totalQuestions}</p> 
             <p>Skipped</p>
          </div>
      </div>
      </div>
    </div>
  </Wrapper>

  </>
  );
};

export default CompanyResult;
