import React from 'react'
import darshan from '../assets/darshan.jpg'



const AboutUs = () => {

    return (
        <>

            <div className='' id='aboutus'>
                <div className=' flex  items-center h-screen ' >
                    <div className=' ms-28 '>
                        <img className='  rounded-md w-2/3 text-center grid  ' src={darshan} />


                    </div>
                    <div className=' content-center w-2/4 me-28'>
                        <h1 className='font-serif text-6xl text-center text-amber-600'>Chhatrola Darshan</h1>
                        <p className='font-sans text-xl text-blue-500'>I am React frontend devloper  </p>
                        <p className='font-sans text-2xl text-start text-yellow-200'>This is my portfolio project . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit delectus facilis perferendis iure dignissimos maxime, rerum optio eligendi consequatur, quo quibusdam voluptates quod eum omnis necessitatibus architecto officia doloribus. Eveniet?</p>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutUs
