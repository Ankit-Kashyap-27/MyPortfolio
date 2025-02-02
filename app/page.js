import { Itim } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import About from "./components/About";

export default function Home() {

  const acounts = {
    github: 'https://github.com/Ankit-Kashyap-27',
    facebook: 'https://www.facebook.com/profile.php?id=100041683156413',
    twitter: 'https://x.com/AnkitKashy6569',
    instagram: 'https://www.instagram.com/_.ankit_727/',
    linkedin: 'https://www.linkedin.com/in/ankit-kashyap-8a426a309/'
  }

  const socialMediaPlatforms = ['facebook', 'twitter', 'linkedin', 'github', 'instagram'];

  return (
    <>
      <div className=" ">
        <div className=" pt-9 grid grid-cols-2 h-[100vh] items-center bg-[#f7f7f7]">
          <div className="flex flex-col items-center justify-center ">
            <div className="">
              <h3 className="text-xl m-2">Hello! I am</h3>
              <h1 className="text-5xl relative left-16 m-2">Ankit Kashyap</h1>
              <h2 className="text-2xl  m-2">A  Passionate  Developer.</h2>
              <h2 className="text-xl  m-2">Creating web applications using modern technologies.</h2>
            </div>
            <div className=" w-[30vw] h-[10vh] justify-center   flex items-center" >
              <div className="w-[5vw] h-[.2vh] bg-black m-1"></div>
              <div className=" flex gap-5">
                {socialMediaPlatforms.map((item, index) => (<Link target="_blank" key={index} href={acounts[item]} className="">
                  <img width={30} className=" rounded-md border duration-300 shadow-lg hover:shadow-2xl  hover:-translate-y-1" src={`/${item}.svg`} alt={item} />
                </Link>
                ))

                }

              </div>
              <div className="w-[5vw] h-[.2vh] bg-black m-1"></div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-center">
              <Image width="530" height="530" className="rounded-full shadow-2xl  " src="/person.png" alt="" />
            </div>
          </div>
        </div>
        
        <div>
          <About />
        </div>

      </div>
    </>
  );
}
