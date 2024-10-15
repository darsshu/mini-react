import React from 'react'
import darshan from '../assets/darshan.jpg'



const AboutUs = () => {

    return (
        <>

            <div className=' min-h-screen mt-32' id='aboutus'>
                <div className=' flex ml-6 text-center tems-center ' >
                    <div className=' w-1/3'>
                        <img className=' rounded-md grid' width={400} src={darshan} />
                    </div>
                    <div className='w-2/3  ml-5  items-start   pr-5'>
                        <h1 className='font-serif text-5xl pb-6 text-center border-b-4 border-sky-400  text-orange-500'>Chhatrola Darshan</h1>
                        <p className='font-sans text-xl pb-3 pt-2 mt-2 text-blue-500'>I am React frontend devloper  </p>
                        <p className='font-bold border-b-4 border-sky-400 pb-10 text-2xl text-start mt-2  text-orange-400'>I am from Ahmedabad .My Education is B-Tech Computer Engineering from Gandhinagar Institute of Technology .My Family have 3 member.
                        </p>
                        <div className='flex mt-10 justify-between '>
                            <div className='text-orange-500 '>
                                <h1 className='text-2xl font-serif'>Hobbie</h1>
                                <li className='text-yellow-300 font-bold'>hello</li>
                                <li className='text-yellow-300 font-bold'>hello</li>
                                <li className='text-yellow-300 font-bold'>hello</li>
                            </div>
                            <div className='text-orange-500 '>
                                <h1 className='text-2xl font-serif '>Hobbie</h1>
                                <li className='text-yellow-300 font-bold'>hello</li>
                                <li className='text-yellow-300 font-bold'>hello</li>
                                <li className='text-yellow-300 font-bold'>hello</li>
                            </div>
                            <div className='text-orange-500 '>
                                <h1 className='text-2xl font-serif'>Hobbie</h1>
                                <li className='text-yellow-300 font-bold'>hello</li>
                                <li className='text-yellow-300 font-bold'>hello</li>
                                <li className='text-yellow-300 font-bold'>hello</li>
                            </div>



                        </div>

                    </div>
                </div>

            </div >

        </>
    )
}

export default AboutUs
