import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>  
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi, I'm Barkat Ali, It's a pleasure to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>⭐ I'm passionate about developing high-quality software that enhances people's lives.
                <br />
                ⭐ I have expertise in crafting software for a wide range of clients, from individuals to large corporations.
                 <br />
                ⭐ Imagine having a software expert ready to assist you at any moment what could you achieve?
                <br />
                ⭐ Let's explore the possibilities together—what challenges can we overcome with the right software solutions?
                <br />
                ⭐ Continuous learning and staying updated with the latest technologies are key aspects of my approach.
                </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;