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
        <section className='bg-[#f3f4f6] p-9    '>
            <div className=' flex justify-center  '>
                <h2 className='text-4xl text-indigo-600 font-extrabold my-[5vh] '>Education</h2>
            </div>
            <div className=' flex flex-wrap items-center justify-center '>
                {
                    educations.map((item, index) => (
                        <div key={index} className=" rounded-lg bg-[#f8f9fa] shadow-xl  flex items-center flex-col m-8 px-[5vw] py-[5vh] ">
                            <div className="flex items-center gap-4">
                                <div className="h-[.4vh] w-[6vw] bg-indigo-600"></div>
                                <h3 className='text-indigo-600 font-bold text-2xl'>{institutes[item]}</h3>
                            </div>
                            <p className='text-gray-700 m-2'>Years: {years[item]}</p>
                            <p className='text-gray-700 m-2'>Board: {board[item]}</p>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Education
