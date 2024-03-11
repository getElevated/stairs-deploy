import React, { useState } from 'react'
import userimage1 from "../avatar/5.png"
import userimage2 from "../avatar/3.png"
import userimage3 from "../avatar/2.png"
import { MdArrowForwardIos } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import AnimationWrapper from '../components/ui/animation';
import TextAnimation from '../components/common/textanimation';
import { Link } from 'react-router-dom';
const BlogPage = () => {


 const blogs = [
        {
          id: 1,
          tag:"apptitude",
          userimg:userimage1,
          thumbnail:"https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: "Introduction to React JS",
          writerName: "John Doe",
          date: "2023-01-01",
          shortDescription: "Learn the basics of React JS and its key concepts. React is a JavaScript library for building user interfaces. It allows developers to create reusable",
          description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we'll explore the fundamentals of React and understand how to get started with building interactive web applications."
        },
        {
            id: 2,
            tag:"logical",
            userimg:userimage2,
            thumbnail:"https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Introduction to React JS",
            writerName: "John Doe",
            date: "2023-01-01",
            shortDescription: "Learn the basics of React JS and its key concepts. React is a JavaScript library for building user interfaces. It allows developers to create reusable",
            description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we'll explore the fundamentals of React and understand how to get started with building interactive web applications."
          },
          {
            id: 3,
            tag:"programing",
            userimg:userimage3,
            thumbnail:"https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Introduction to React JS",
            writerName: "John Doe",
            date: "2023-01-01",
            shortDescription: "Learn the basics of React JS and its key concepts. React is a JavaScript library for building user interfaces. It allows developers to create reusable",
            description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we'll explore the fundamentals of React and understand how to get started with building interactive web applications."
          },
          {
            id: 4,
            tag:"apptitude",
            userimg:userimage1,
            thumbnail:"https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Introduction to React JS",
            writerName: "John Doe",
            date: "2023-01-01",
            shortDescription: "Learn the basics of React JS and its key concepts. React is a JavaScript library for building user interfaces. It allows developers to create reusable",
            description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we'll explore the fundamentals of React and understand how to get started with building interactive web applications."
          },
          {
              id: 5,
              tag:"logical",
              userimg:userimage2,
              thumbnail:"https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Introduction to React JS",
              writerName: "John Doe",
              date: "2023-01-01",
              shortDescription: "Learn the basics of React JS and its key concepts. React is a JavaScript library for building user interfaces. It allows developers to create reusable",
              description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we'll explore the fundamentals of React and understand how to get started with building interactive web applications."
            },
            {
              id: 6,
              tag:"programing",
              userimg:userimage3,
              thumbnail:"https://images.pexels.com/photos/4709291/pexels-photo-4709291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
              title: "Introduction to React JS",
              writerName: "John Doe",
              date: "2023-01-01",
              shortDescription: "Learn the basics of React JS and its key concepts. React is a JavaScript library for building user interfaces. It allows developers to create reusable",
              description: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of their applications efficiently. In this blog post, we'll explore the fundamentals of React and understand how to get started with building interactive web applications."
            },
      ]
  return (
    <>
    <Navbar/>
    <div className='bg-[#5BBE82] py-10  rounded-sm'>
      <Wrapper>
             <TextAnimation line2="Our Latest Blog"/>
                  <p className='text-sm text-white md:text-base'>Read our latest blog to make things more clear</p>
                    <input  className='mt-2 px-4 py-2 rounded-sm  bg-slate-100 focus:outline-black/20 ' placeholder='Subscribe to get update'/>
                    <button className="inline-flex sm:ml-2 px-4 py-2 ml-0 mt-2 sm:mt-0 animate-shimmer items-center justify-center rounded-sm border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%]  font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Subscribe
                    </button>
      </Wrapper>
    </div>
      <Wrapper>
         <AnimationWrapper>
          <div>
              <h1 className='font-semibold font-poppins  text-2xl  sm:text-3xl lg:text-4xl mt-4  mb-2 '>Featured Posts</h1>
          </div>
          <div className='flex justify-between gap-x-4'>
          <div className='flex flex-col gap-y-4  cursor-pointer '>  
           {
                blogs.map((data) => (
                <BlogCard key={data.id} tag={data.tag} userimg={data.userimg}
                        writerName={data.writerName} date={data.date} shortDescription={data.shortDescription} 
                        description={data.description}
                        thumbnail={data.thumbnail}  title={data.title} />
                )) 
           } 
          </div>
          <div className='hidden sticky md:block'>
             <h1 className=' font-poppins text-black font-semibold'>Want to feature your own blog</h1>
             <Link to="/contact" > 
               <button className='bg-black text-white hover:opacity-90  px-4 py-2 mt-2'>Contact us</button>
             </Link>
          </div>
          </div>
        </AnimationWrapper>
      </Wrapper>
    {/* <Footer/> */}
    </>
  )
}



const BlogCard = ({title ,   userimg, tag  ,thumbnail , writerName ,  date  ,  shortDescription ,  description}) =>{
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

    return (
       <div className='max-w-4xl bg-gray-100  py-4 rounded-sm '>
        <div className='flex items-center justify-between'> 
           <div className='flex gap-x-2 pl-4 items-center'>
             <img className=' h-12 w-12 rounded-full object-contain overflow-hidden' src={userimg} alt="thumbnail"/>
             <div className='flex flex-col justify-start'>
                <p className='font-poppins md:tex-base text-sm font-semibold'>{title}</p>
                <p className='text-xs text-gray-400'>{writerName}</p>
             </div>
           </div>
           <div>
            <p className='text-xs pr-2'>{date}</p>
           </div>
        </div>
   <div className='max-w-4xl bg-gray-100  py-4 rounded-sm'>
    <div className='pl-4 mt-2'>
      {isDescriptionExpanded ? (
        <>
          {description}
          <button className='text-xs text-blue-700 pl-4 hover:opacity-80' onClick={() => setIsDescriptionExpanded(false)}>
            Close <span className='text-xs'><FaArrowLeft /></span>
          </button>
      </>
    ) : (
       shortDescription
    )}
  </div>

  <button className='text-xs flex items-center mt-2 text-blue-700 pl-4 hover:opacity-80' onClick={() => setIsDescriptionExpanded(true)}>
    Read more <span className='text-xs'><MdArrowForwardIos /></span>
  </button>
  </div>
</div>
    )
}



export default BlogPage
