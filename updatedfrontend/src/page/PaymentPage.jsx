import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Wrapper from '../components/Wrapper';
import toast from 'react-hot-toast';


const PaymentPage = () => {
    const form = useRef();
    const [formError, setFormError] = useState('');
    const sendEmail = (e) => {
      e.preventDefault();
      const formData = new FormData(form.current);
      let isFormValid = true;
  
      formData.forEach((value, key) => {
       
        if (key !== 'message' && !value) {
          isFormValid = false;
          setFormError(`Please fill in the ${key} field.`);
        }
      });
   
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
    <Navbar/>
       <Wrapper>
        <div className='flex md:flex-row flex-col-reverse'>
          <div className='max-w-xl'>
          <h1 className='text-xl font-semibold'>We are runnig manual payment for now</h1>
          <p>You can scan the QR code and do the payment after that you should paste you Transaction id of your transaction 
             into input box we will give you access with in 2 hours.
          </p>
          <form ref={form} className='mt-8' onSubmit={sendEmail}>
                <label>Name</label>
                <input
                  className='border-black/20 mt-1 mb-4 border px-2 py-2 rounded-lg outline-none w-full  h-10'
                  type='text'
                  name='user_name'
                />
                <label>Transaction ID</label>
                <input
                  className='border-black/20 mt-1 mb-4  border px-2 py-2 rounded-lg outline-none w-full  h-10'
                  type='text'
                  name='user_email'
                />
                <label>Any Message</label>
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
          <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center'>
            <img className='max-w-xs' src="https://res.cloudinary.com/dmlts9lbk/image/upload/v1709750472/qrcode_sjp8jj.jpg" alt="qrimage"/>
            <p className='-mt-6 font-semibold text-lg'>Scan me</p>
            </div>
          </div>
        </div>
       </Wrapper>
      <Footer/>
    </>
  )
}

export default PaymentPage
