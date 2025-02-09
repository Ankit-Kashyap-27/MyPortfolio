"use client"
import React, { useState, useRef, useCallback } from 'react';
import Link from "next/link";
import About from "../components/About";
import Education from "../components/Education";
import Skill from "../components/Skill";
import Image from 'next/image';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const a = ["Home", "About", "Education", "Skill"];
  const accounts = {
    github: 'https://github.com/Ankit-Kashyap-27',
    facebook: 'https://www.facebook.com/profile.php?id=100041683156413',
    twitter: 'https://x.com/AnkitKashy6569',
    instagram: 'https://www.instagram.com/_.ankit_727/',
    linkedin: 'https://www.linkedin.com/in/ankit-kashyap-8a426a309/'
  };

  const socialMediaPlatforms = ['facebook', 'twitter', 'linkedin', 'github', 'instagram'];
  const ref = useRef([]);

  const handleClick = useCallback((index, item) => {
    setActiveIndex(index);
    const element = document.getElementById(item.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className='overflow-hidden w-[100vw]'>
      <nav className='flex justify-center'>
        <div className='bg-white shadow-lg flex justify-between w-[85vw] m-5 rounded-full top-0 fixed z-50'>
          <div className='flex items-center pl-2 md:pl-10'>
            <img src="/logo.png" alt="logo" className='md:w-[6vw] w-[18vw]' />
            <span className='ml-2 text-sm md:text-xl font-semibold'>PORTFOLIO</span>
          </div>

          <div className="hidden md:flex gap-7 items-center pr-12">
            {a.map((item, index) => (
              <button
                key={index}
                onClick={() => handleClick(index, item)}
                className={`navElement list-none hover:text-black ${activeIndex === index ? 'border-b-[3px] border-blue-300' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
      <div>
        <div id='home' className="pt-9 grid md:grid-cols-2 h-[100vh] md:h-[100vh] items-center bg-[#f7f7f7] shadow-2xl">
          <div className="flex flex-col items-center justify-center">
            <div className="ml-4 md:mt-[2vh] mt-[22vh]">
              <h3 className="text-xl m-3">Hello! I am</h3>
              <h1 className="md:text-5xl text-4xl relative left-16 md:m-2">Ankit Kashyap</h1>
              <h2 className="text-2xl m-5">A Passionate Developer.</h2>
              <h2 className="text-xl m-5">Creating web applications using modern technologies.</h2>
            </div>
            <div className="justify-center mt-[5vh] flex items-center">
              <div className="md:w-[5vw] w-[10vw] h-[.2vh] bg-black m-1"></div>
              <div className="flex gap-2 md:gap-5">
                {socialMediaPlatforms.map((item, index) => (
                  <Link target="_blank" key={index} href={accounts[item]}>
                    <img
                      className="w-[10vw] sm:w-[6vw] md:w-[4vw] lg:w-[3vw] xl:w-[2vw] rounded-md border duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1 photo"
                      src={`/${item}.svg`}
                      alt={item}
                    />
                  </Link>
                ))}
              </div>
              <div className="md:w-[5vw] w-[10vw] h-[.2vh] bg-black m-1"></div>
            </div>
          </div>

          <div className="photo">
            <div className="flex justify-center">
              <img width="530" height="530" className="opacity-0 md:opacity-100 rounded-full shadow-2xl" src="/person.png" alt="" />
            </div>
          </div>
        </div>
        <div id='about'>
          <About />
        </div>
        <div id="education">
          <Education />
        </div>
        <div id="skill">
          <Skill />
        </div>
      </div>
    </div>
  );
}
