import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'


const Contact = () => {

      const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4002e91c-c877-4b79-abdc-4b40a994a212");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
      <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url(
      "/footer-bg-color.png")] bg-no-repeat bg-center text-lg font-Ovo'>
        <h4 className='text-center text-lg mb-2 font-Ovo'>Connect with me </h4>
        <h2 className='text-center text-5xl font-Ovo'>Get in touch</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
            You can contact me via email or connect with me on social media.
            I look forward to hearing from you!    
        </p>

        <form onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8'>
                <input type='text' placeholder='Enter your name' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white' name='name'/>
                <input type='email' placeholder='Enter your email address' required
                className='flex-1 p-3 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white' name='email'/>
               
            </div>
                <textarea  rows='6' placeholder='Enter your message' required
                className='w-full p-4 outline-none border-[0.5px] border-gray-400
                rounded-md bg-white' name='message'></textarea>
            

            <button type='submit' 
            className='py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80
            text-white rounded-full mx-auto hover:bg-black hover:shadow-lg duration-500 
            '>
            Submit now <Image src={assets.right_arrow_white} alt='' 
            className='w-4'/> </button>

            <p className='mt-4'>
                {result}
            </p>
        </form>
    </div>
  )
}

export default Contact
