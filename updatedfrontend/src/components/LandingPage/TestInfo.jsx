import React, { useContext } from 'react'
import AnimationWrapper from '../ui/animation'
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const TestInfo = () => {
  let {userAuth:{access_token}} = useContext(UserContext)
  console.log(access_token);
  return (
    <>
    <AnimationWrapper>
     <div className="flex mt-10 lg:flex-row flex-col lg:items-center items-start justify-center lg:gap-x-4  ">
            <div className="max-w-[900px] rounded-sm px-4 py-4   bg-gray-100">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins">
                We have plenty for you
              </h1>
              <p className="mt-4 text-sm md:text-base">
              Explore a diverse range of questions in our database, which offer our students unique
               question paper every time they login to practice and learn. There are multiple options,
                such as testing for specific subject, specific company or preparing for any competitive
                exam. We got everything covered for you.
              </p>
              {
                access_token ?  (
                    <Link to="/main">
                        <button className="text-white md:text-base text-sm hover:opacity-90 mt-4 font-inter font-semibold py-2  bg-black px-6 rounded-lg">
                           Get started
                          </button>
                        </Link>
                      ) : (
                        <Link to="/signuppage">

                          <button className="text-white md:text-base text-sm hover:opacity-90 mt-4 font-inter font-semibold py-2  bg-black px-6 rounded-lg">
                           Free Mock
                           </button>
                       </Link>
                      )
                }  
            </div>
            <div className="lg:max-w-xs   bg-gray-100 rounded-sm px-4 py-4  mt-2 lg:mt-0   items-start justify-center flex flex-col">
              <Link to="/signuppage">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-poppins">Start Today</h1>
              </Link>
              <p className="mt-4">
              Take us along in your journey of preparation for success today at just 99/month.
              </p>
              <Link  to="/signuppage" className="text-white md:text-base text-sm hover:opacity-90 mt-4 font-inter font-semibold py-2  bg-black px-6 rounded-lg">
                  Get started
              </Link>
            </div>
          </div>
          </AnimationWrapper>
    </>
  )
}
export default TestInfo
