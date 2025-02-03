import React from 'react'

const Skill = () => {


    const skills = [
        { name: "HTML", description: "Experienced in crafting stunning websites with HTML for a sleek and professional online presence.", imgsrc: "/html.svg" },
        { name: "CSS", description: "Proficient in CSS, designing visually appealing and responsive web layouts.", imgsrc: "/css.svg" },
        { name: "JavaScript", description: "Proficient in writing clean and efficient JavaScript for interactive web applications.", imgsrc: "/javascript.svg" },
        { name: "React", description: "dept at building dynamic user interfaces with React and state management libraries.", imgsrc: "/react.svg" },
        { name: "Tailwind CSS", description: "Experienced with version control systems like Git and collaborative platforms like GitHub.", imgsrc: "/tailwindcss.svg" },
        { name: "Git", description: "Proficient in using Tailwind CSS for utility-first CSS styling.", imgsrc: "/git.svg" },
        
    ];
    return (
        <section className=' my-4 h-[95vh]   flex justify-center items-center'>
            <div className="bg-[#f3f4f6] shadow-lg h-[95vh] w-[90vw] flex justify-center items-center ">
                <div className="bg-[#f3f4f6] shadow-2xl h-[80vh] w-[85vw] border  ">

                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-[3px] w-[7vw] ml-4 bg-indigo-600"></div>
                        <h2 className=' my-2 mx-2 text-5xl font-bold text-indigo-600'>Skills</h2>
                    </div>
                    <div className="grid grid-cols-3 ">
                        {
                            skills.map((item, index) => (
                                <div key={index} className=" m-4 p-4 hover:scale-105 hover:bg-blue-50 duration-500 rounded-lg bg-[#f8f9fa] shadow-xl  ">
                                    < img  src={item.imgsrc} alt={item.name} className=' mx-auto w-[5vw] h-[8vh] m-4 ' />
                                    <h3 className='text-indigo-600 text-xl font-bold m3'>{item.name}</h3>
                                    <p className='text-slate-800 text-center'>{item.description}</p>
                                </div>
                            ))

                        }

                    </div>


                </div>
            </div>
        </section>
    )
}

export default Skill
