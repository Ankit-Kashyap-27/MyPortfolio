
import React from 'react';

const About = () => {
  return (
    <>
      <section className="bg-[#f8f9fa] min-h-[60vh] w-[70vw] mx-auto my-[15vh] shadow-xl flex justify-center items-center">
        <div className='bg-white min-h-[50vh] w-[65vw] shadow-xl mx-auto my-8 p-8 rounded-lg'>
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[3px] w-[7vw] bg-indigo-600"></div>
            <h2 className='text-5xl font-bold text-indigo-600'>About Me</h2>
          </div>
          <p className="text-2xl font-extralight text-gray-800 my-9 mx-5 duration-500 hover:scale-105 text-center ">
            I am a dedicated and enthusiastic developer with a fresh perspective and a strong desire to continuously learn and grow. Currently, in my final year of a Computer Science degree, I have been diligently refining my skills in web development.
          </p>
          <p className="text-2xl font-extralight text-gray-800 my-9 mx-5 duration-500 hover:scale-105 text-center">
            Throughout my academic journey, I have cultivated a profound interest in frontend development. I am proficient in technologies such as HTML, CSS, JavaScript, and React. I am always eager to embrace new challenges and collaborate on innovative projects that address real-world problems.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
