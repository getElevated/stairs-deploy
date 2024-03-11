import React from 'react'
import Marquee from "react-fast-marquee";
import Student from "../../avatar/user.png"
import AnimationWrapper from '../ui/animation';
const AllumnisPage = () => {

  const Students = 
  [
    {
      "id": 1,
      "name": "Aman Trivedi",
      "image": Student,
      "review": "Immersing myself in the aptitude preparation offered by the Stairs was a game-changer. The innovative approach to honing technical skills and problem-solving was both engaging and effective.."
    },
    {
      "id": 2,
      "name": "Samridhi Shukla ",
      "image": Student,
      "review": "STAIRS transformed my B.Tech final year, honing my technical skills and offering insights into the corporate world. Their commitment to user success prepared me for placements. An invaluable investment in my growth, STAIRS is the go-to for aspiring students, readying me for the first step in my career journey."
    },
    {
      "id": 3,
      "name": "Anmol Shukla",
      "image": Student,
      "review": "As a final year B.Tech student with aspirations to become a Software Development Engineer (SDE), my journey with STAIRS has been nothing short of transformative. The unique approach that STAIRS takes towards blending technology, practice, and personalized learning has significantly enhanced my skills and prepared me for the challenges of the corporate world."
    },
    {
      "id": 4,
      "name": "Anand Shukla",
      "image": Student,
      "review": "The edtech startup played a crucial role in shaping my career. The supportive community and quality education set it apart."
    },
    
    {
      "id": 5,
      "name": "Mudit Agarwal",
      "image": Student,
      "review": "Embarking on my final year as a B.Tech student, my ambition was set on becoming a Software Development Engineer (SDE). STAIRS has been the catalyst for a remarkable transformation in my journey.Thanks to STAIRS, I am now well-prepared for the initial stride in my career journey, confident and ready to embrace the opportunities that come my way."
    }
  ];
  


  
  const DummyStudents = 
  [
    {
      "id": 1,
      "name": "Nitya Rai  ",
      "image": Student ,
      "review": "The Company Specific Test Series at STAIRS is the best. It made me lose my fear of attempting aptitude exams for companies and getting it cleared in one go."
    },
    {
      "id": 2,
      "name": "Disha Mishra",
      "image": Student,
      "review": "As a final year B.Tech student with aspirations to become a Software Development Engineer (SDE), my journey with STAIRS has been nothing short of transformative. The unique approach that STAIRS takes towards blending technology, practice, and personalized learning has significantly enhanced my skills and prepared me for the challenges of the corporate world."
    },
    {
      "id": 3,
      "name": "Shrestha Singh",
      "image": Student,
      "review": "The edtech startup played a crucial role in shaping my career. The supportive community and quality education set it apart."
    },
    {
      "id": 4,
      "name": "Shivansh Bajpai",
      "image": Student,
      "review": "Immersing myself in the aptitude preparation offered by the Stairs was a game-changer. The innovative approach to honing technical skills and problem-solving was both engaging and effective.."
    },
    {
      "id": 5,
      "name": "Pranjal Pratap Singh",
      "image": Student,
      "review": "Embarking on my final year as a B.Tech student, my ambition was set on becoming a Software Development Engineer (SDE). STAIRS has been the catalyst for a remarkable transformation in my journey.Thanks to STAIRS, I am now well-prepared for the initial stride in my career journey, confident and ready to embrace the opportunities that come my way."
    }
  ];

  return (
    <>
    <AnimationWrapper>
    <div >
     <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold mt-10 mb-2'>Students Love Us</h1>
      <Marquee pauseOnHover={true} direction='left'>
        <div className="flex ">
          {Students.map(alumni => (
             <StudentCard key={alumni.id} {...alumni} />
          ))}
        </div>
      </Marquee>
    </div>

  <div>
  <Marquee pauseOnHover={true} direction='right'>
        <div className="flex ">
          {DummyStudents.map(alumni => (
             <StudentCard key={alumni.id} {...alumni} />
          ))}
        </div>
      </Marquee>
  </div>
    </AnimationWrapper>
    </>
  )
}

const StudentCard = ({ id, name, image, joiningDate, review }) => (
  <div className="max-w-sm cursor-pointer   transition duration-150 animate-shimmer bg-gray-100  hover:bg-[#5BBE82] hover:text-white rounded-lg border px-4 pt-2 pb-4 overflow-hidden m-4">
    <div className='flex items-center gap-x-1'>
       <img className="w-110 h-10 rounded-full" src={image} alt={name} />
      <div className='flex items-center justify-between'>
        <h3 className=" font-semibold ml-2">{name}</h3>
     </div>
    </div>
    <div className='mt-2 ml-2'>
    <p className="text-xs line-clamp-4">{review}</p>
    </div>
  </div>
);
 


export default AllumnisPage
