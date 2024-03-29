import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f] '>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          BARKAT ALI  
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a MERN Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[800px]'>
        ⭐ I'm exploring the world of <span className='font-bold text-[#ccd6f6]'>MERN stack development</span> and getting hands-on with MongoDB, Express.js, React, and Node.js to craft dynamic websites and also I'm deeply passionate about the intricate world of Data Structures and Algorithms (DSA), Delving into the complexities of algorithms and problem-solving resonates with my core enthusiasm for coding.
        <br />
        ⭐ I'm always excited to learn new things and explore new set of areas with effective ideas. <br />
        ⭐ What's Special about me ? Ability to quickly Learn and Master a new skill and to implement it into the realtime problems.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;