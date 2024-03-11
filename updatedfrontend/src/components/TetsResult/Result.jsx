import React, { useContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { UserContext } from '../../App';
import { FaPercentage } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import axios from 'axios';
import { FaTrophy } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";
import Navbar from '../Navbar';
import Loader from '../common/loader';
import { Pie, Line  } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Wrapper from '../Wrapper';
import { useLocation } from 'react-router-dom';
Chart.register(...registerables);

const Result = () => {
  const location = useLocation();
  const totalQuestions = location.state ? location.state.totalQuestions : null;

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

  const top3Subjects = [
    { label: 'Logical', score: apiData?.latestTestScore.logicalScore },
    { label: 'Programming', score: apiData?.latestTestScore.programmingScore },
    { label: 'Quant', score: apiData?.latestTestScore.quantScore },
    { label: 'Verbal', score: apiData?.latestTestScore.verbalScore },
  ].sort((a, b) => b.score - a.score).slice(0, 3);



  const maxScore = 10;
  const getWidth = (score) => {
    const percentage = (score / maxScore) * 100;
    return `${percentage}%`;
  };
 

  let  TotalinCorrect  = apiData?.latestTestScore?.logical?. incorrect  
   +  apiData?.latestTestScore?.programming?.incorrect   
   + apiData?.latestTestScore?.quant?.incorrect   
   + apiData?.latestTestScore?.verbal?.incorrect;
  
  let lineChartData = null;
  let top3SubjectsData = null;

  if (apiData) {
  
    const top3Subjects = Object.entries(apiData.latestTestScore).filter(([subject, scores]) => subject!== 'totalScore' && subject!== 'percentage').map(([subject, scores]) => ({ label: subject, score: scores.correct })).sort((a, b) => b.score - a.score).slice(0, 3);
    top3SubjectsData = {
      labels: top3Subjects.map(subject => subject.label),
      datasets: [{
        label: 'Top Subjects',
        data: top3Subjects.map(subject => subject.score),
        backgroundColor: [
          '#5BBE82',
          '#36A2EB',
          '#FFCE56'
        ],
        hoverBackgroundColor: [
          '#5BBE82',
          '#36A2EB',
          '#FFCE56'
        ]
      }]
    };

    const subjects = Object.keys(apiData.latestTestScore).filter(subject => subject !== 'totalScore' && subject !== 'percentage' && subject !== '_id');

    const lineChartDataValues = subjects.map(subject => ({ subject, percentage: (apiData.latestTestScore[subject].correct / (apiData.latestTestScore[subject].correct + apiData.latestTestScore[subject].incorrect + apiData.latestTestScore[subject].skipped)) * 100 }));
    lineChartData = {
      labels: lineChartDataValues.map(item => item.subject),
      datasets: [{
        label: 'Percentage Wise Scores',
        data: lineChartDataValues.map(item => item.percentage),
        fill: true,
        backgroundColor: 'rgba(91, 190, 130, 0.5)',
        borderColor: 'rgba(91, 190, 130, 1)',
        borderWidth: 1
      }]
    };
  }


  let TotalSkipped =   totalQuestions - (apiData?.latestTestScore?.totalScore +  TotalinCorrect );
  let Percantage = ((apiData?.latestTestScore?.totalScore  ) / totalQuestions) * 100 ;
  
console.log(apiData);
  

  return (
<div className='font-Nunito'>
  <Navbar />
  {!totalQuestions || totalQuestions.length === 0 ? (
  <div className='h-screen flex items-center justify-center'>
      <h1>Please give the test to see the result.</h1>
 </div>
  ) : (
    
<div>
      {apiData ? (
            <Wrapper className="">
            <h1 className="mt-8  text-3xl font-semibold text-center mb-8 text-black/90 ">{name}'s Result</h1>
            <div className="mb-2   flex gap-x-1">
              <div className=''>
                <p className="text-gray-800  md:text-xl"> Name: <span className='font-semibold'>{name}</span></p>
                <p className="text-gray-800 md:text-xl "> Email: <span className='font-semibold'>{email}</span></p>
              </div>
            </div>
            <div>
              <div className=''>
             <h1 className='  md:text-3xl sm:text-2xl  text-center sm:text-start mt-8 mb-8 text-xl font-semibold'>Overall Performance</h1>  
             </div>
              <div className=' overflow-scroll no-scrollbar  mb-10  mt-2 md:gap-x-36 sm:gap-x-16 gap-x-10  flex items-center '>
               <div>
                  <div className='flex items-center gap-x-4'>
                    <div className='bg-[#8F00FF] inline-flex p-1 rounded-full '>
                      <FaTrophy className='sm:text-6xl text-5xl p-2 text-white '/>
                    </div>
                    <div>
                      <p className='text-2xl font-semibold'>{apiData?.latestTestScore?.totalScore}/{totalQuestions}</p>
                      <p className='text-black/70'>Score</p>
                    </div>
                  </div>
                </div>
               {/* Attempted */}
               <div>
                  <div className='flex items-center gap-x-4'>
                    <div className='bg-Primary inline-flex p-1 rounded-full '>
                      <IoBookSharp className='sm:text-6xl text-5xl p-2 text-white '/>
                    </div>
                    <div>
                      <p className='text-2xl font-semibold'>{ apiData?.latestTestScore?.totalScore +  TotalinCorrect  }/{totalQuestions}</p>
                      <p className='text-black/70'>Attempted</p>
                    </div>
                  </div>
                </div>
                {/* Skipped */}
                <div>
                  <div className='flex items-center gap-x-4'>
                    <div className='bg-blue-700 inline-flex p-1 rounded-full '>
                      <GoGoal className='sm:text-6xl text-5xl p-2 text-white/80 '/>
                    </div>
                    <div>
                      <p className='text-2xl font-semibold'>{TotalSkipped}/{totalQuestions}</p>
                      <p className='text-black/70'>Skipped</p>
                    </div>
                  </div>
                </div>
  
                <div>
                  <div className='flex items-center gap-x-4'>
                    <div className='bg-orange-500 inline-flex p-1 rounded-full '>
                      <FaPercentage className='sm:text-6xl text-5xl p-2 text-white '/>
                    </div>
                    <div>
                    <p className='text-3xl font-bold'>{`${apiData?.latestTestScore?.percentage}`.slice(0, apiData?.latestTestScore?.percentage.toString().indexOf('.') + 3)}%</p>
                      <p className='text-black/70'>Percentage</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" border flex items-center justify-start  rounded-lg overflow-scroll no-scrollbar">
              <table className="w-full">
                <thead className='w-full '>
                  <tr className=''>
                    <th className="px-4 py-2 font-bold sm:text-2xl text-xl  text-left ">Sections</th>
                    <th className="px-4  py-2 text-left text-xl sm:text-2xl">Correct</th>
                    <th className="px-4 py-2 text-left sm:text-2xl text-xl">Incorrect</th>
                    <th className="px-4 py-2 text-left sm:text-2xl text-xl">Skipped</th>
                  </tr>
                </thead>
                <tbody>
  {Object.entries(apiData.latestTestScore).map(([section, scores]) => {
    if (section !== '_id' && section !== 'totalScore' && section !== 'percentage') {
      const totalSkippedInSection = scores.skipped; // Accessing the skipped count
      return (
        <tr key={section}>
          <td className="border rounded-lg px-4 py-2">{section}</td>
          <td className="border rounded-lg px-4 py-2">
            <div style={{
              width: getWidth(scores.correct),
              backgroundColor: scores.correct === maxScore ? 'green' : ' rgba(91, 190, 130, 0.5)',
              borderRight: scores.correct > 0 ? '3px solid #5BBE82' : 'none'
            }}>
              {scores.correct}
            </div>
          </td>
          <td className="border rounded-lg px-4 py-2">
            <div style={{
              width: getWidth(scores.incorrect),
              backgroundColor: scores.incorrect > 0 ? 'rgba(255, 0, 0, 0.4)' : 'transparent',
              borderRight: scores.incorrect > 0 ? '3px solid red' : 'none'
            }}>
              {scores.incorrect}
            </div>
          </td>
          <td className="border rounded-lg px-4 py-2">
            <div style={{
              width: getWidth(totalSkippedInSection),
              backgroundColor: totalSkippedInSection > 0 ? 'rgba(29, 161, 242, 0.5)' : 'transparent',
              borderRight: totalSkippedInSection > 0 ? '3px solid #1DA1F2' : 'none'
            }}>
              {scores.skipped} 
            </div>
          </td>
        </tr>
      );
    } else {
      return null;
    }
  })}
</tbody>

                <tfoot>
                  <tr>
                    <td className="border px-4 font-semibold py-2">Total</td>
                    <td className="border px-4 font-semibold py-2">{apiData.latestTestScore.totalScore}/{totalQuestions}</td>
                    <td className="border px-4 font-semibold py-2">{TotalinCorrect}/{totalQuestions}</td>
                    <td className="border px-4 font-semibold py-2">{TotalSkipped}/{totalQuestions}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            </div>
            <div>
            <h1 className='xl:text-4xl md:text-3xl sm:text-2xl text-xl mt-10 mb-4 text-center sm:text-start  text-black/80  font-semibold '>Result in graph  form</h1>
            <div className='flex md:flex-row flex-col items-center  gap-x-10  '>
              <div className="md:w-2/5 p-4 w-full">    
              <Pie data={top3SubjectsData || "Nothing to show"} />
              <h1 className='text-black/80 mt-4  xl:text-4xl text-center sm:text-start md:text-3xl sm:text-2xl text-xl   font-semibold'>Top three scoring subject</h1>
              </div>
              <div className="mt-8 p-4 md:w-1/2 w-full">
              <Line data={lineChartData || "Nothing to show"} />
              <h1 className='text-black/80 sm:mt-36 mt-4 text-center sm:text-start  xl:text-4xl md:text-3xl sm:text-2xl text-xl  font-semibold'>Score percentage wise </h1>
              </div>
            </div>
          </div>
          </Wrapper>
) : (
  <div className='h-screen flex items-center justify-center'>
    <Loader />
  </div>
)}
</div>
  )}
</div>

  );
};

export default Result;
