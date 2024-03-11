import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import AnimationWrapper from '../components/ui/animation';
import TextAnimation from '../components/common/textanimation';

const Contact = () => {
  const form = useRef();
  const [formError, setFormError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    let isFormValid = true;

    formData.forEach((value, key) => {
      if (!value) {
        isFormValid = false;
        setFormError(`Please fill in the ${key} field.`);
      }
    });

    const userEmail = formData.get('user_email');
    if (!validateEmail(userEmail)) {
      isFormValid = false;
      setFormError('Please enter a valid email address.');
    }

    if (!isFormValid) {
      return;
    }

    emailjs
      .sendForm('service_ajdidig', 'template_p7uix3l', form.current, 'hmFvQddPnAmzDfvzQ')
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message Sent successfully😃');
          form.current.reset();
          setFormError('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <AnimationWrapper>
        <Navbar />
        <Wrapper>
          <div className='flex md:h-screen md:flex-row flex-col h-full  mt-4 md:mt-20 gap-x-20 '>
            <div className='flex flex-col mb-4   md:w-1/2 w-full'>
              {/* <TextAnimation line3='Contact'></TextAnimation> */}
              <h1 className='lg:text-5xl text-4xl font-semibold mt-4  '>Questions?<br />We’re happy to help!</h1>
              <p className='sm:text-base text-sm mt-4'>
                If you have any questions left regarding the possibilities of our solutions, we’re happy to help you! Just
                write us a mail with your issue and we’ll get in touch with you as soon as possible.
              </p>
              <div className='flex md:flex-row flex-col mt-10 items-start md:items-center justify-between gap-x-10   '>
                <div className=' '>
                  <img
                    className='max-w-[150px] rounded-full hover:cursor-pointer  '
                    src='https://res.cloudinary.com/dmlts9lbk/image/upload/v1709145925/425200824_3665042130407528_4298387641075996100_n_cs0zls.jpg'
                    alt='/'
                  />
                </div>
                <div className='  flex flex-col'>
                  <p className=' font-light text-start md:text-center'>
                    Welcome to STAIRS, where the future converges with boundless possibilities. Your success narratives
                    propel our innovations, underscoring our conviction that education wields the transformative power to
                    shape a brighter tomorrow.
                  </p>
                  <p className='md:text-center text-start'>Founder & CEO</p>
                  <p className='md:text-center text-start'>Siddhant Dwivedi</p>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-full flex flex-col gap-y-6'>
              <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input
                  className='border-black/20 mt-1 mb-4 border px-2 py-2 rounded-lg outline-none w-full  h-10'
                  type='text'
                  name='user_name'
                />
                <label>Email</label>
                <input
                  className='border-black/20 mt-1 mb-4  border px-2 py-2 rounded-lg outline-none w-full  h-10'
                  type='email'
                  name='user_email'
                />
                <label>Message</label>
                <textarea
                  className='h-48 border rounded-lg outline-none px-2 py-2  border-black/20 w-full text area'
                  name='message'
                />
                {formError && <p className='text-red-500'>{formError}</p>}
                <button
                  className='inline-flex mt-4 md:w-1/3 w-1/2 h-10 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50'
                  type='submit'
                  value='Send'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Wrapper>
        <Footer />
      </AnimationWrapper>
    </>
  );
};

export default Contact;
