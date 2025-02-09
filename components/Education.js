import React from 'react'

const Education = () => {

    const institutes = {
        Highschool: "Secred Heart School",
        Seniorsecondary: "Secred Heart School",
        BCA: "Siddharth University Kapilvastu"
    }

    const years = {
        Highschool: " 2019-2020",
        Seniorsecondary: " 2021-2022",
        BCA: " 2022-2025"
    }
    const board = {
        Highschool: "Central Board of Secondary Education",
        Seniorsecondary: "Central Board of Secondary Education",
        BCA: "Siddharth University Kapilvastu, Siddharth Nagar"
    }
    const educations = ["Highschool", "Seniorsecondary", "BCA"];

    return (
        <section className='bg-[#f3f4f6] py-2  shadow-xl  p-8 '>
            <div className=' flex justify-center  '>
                <h2 className='md:text-4xl text-2xl text-indigo-600 font-extrabold md:my-[5vh] mt-[5vh] '>Education</h2>
            </div>
            <div className=' flex flex-wrap  items-center justify-center '>
                {
                    educations.map((item, index) => (
                        <div key={index} className="hover:scale-105 hover:bg-blue-50 duration-500 rounded-lg bg-[#f8f9fa] shadow-xl  flex items-center flex-col m-4 md:m-8 px-[3vw] py-[2vh] md:py-[5vh] ">
                            <div className="flex items-center gap-4">
                                <div className="h-[.4vh] w-[6vw] bg-indigo-600"></div>
                                <h3 className='text-indigo-600 font-bold text-2xl'>{institutes[item]}</h3>
                            </div>
                            <p className='text-gray-700 my-2 m-2'>Years: {years[item]}</p>
                            <p className='text-gray-700 m-2'>Board: {board[item]}</p>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Education
