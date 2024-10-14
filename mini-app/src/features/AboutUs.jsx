import React from 'react'
import darshan from '../assets/darshan.jpg'



const AboutUs = () => {

    return (
        <>

            <div className='' id='aboutus'>
                <div className=' flex justify-between  items-center h-screen ' >
                    <div className=' ms-28 '>
                        <img className='  rounded-md w-2/3 text-center grid  ' src={darshan} />


                    </div>
                    <div className=' w-2/4 items-center  me-28'>
                        <h1 className='font-serif text-6xl -mt-40 text-start border-b-4 border-sky-400 text-orange-500'>Chhatrola Darshan</h1>
                        <p className='font-sans text-xl mt-2 text-blue-500'>I am React frontend devloper  </p>
                        <p className='font-sans  text-2xl text-start mt-2 text-orange-400'>I am from Ahemdabad .My Education is B-Tech Computer Engineering from Gandhinagar Institute of Technology . My Family have 3 member.

                        </p>

                    </div>
                </div>

            </div>

        </>
    )
}

export default AboutUs
