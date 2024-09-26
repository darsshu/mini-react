import React from 'react'
import { Link } from 'react-router-dom'
import darshan from '../assets/darshan.jpg'
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";



const Navbar = () => {

    const handleClick = () => {

        const pdfUrl = '/src/assets/Darshan_Resume.pdf'
        const fileName = 'Darshanchhatrola.docx'

        const link = document.createElement('a')
        link.href = pdfUrl
        link.download = true

        document.body.appendChild(link)

        link.click()
        document.body.removeChild(link)

    }



    return (

        <>
            <div className='bg-slate-800'>


                <div className=' bg-black bg-opacity-30 fixed w-full' id='header'>
                    <div className='flex justify-around'>
                        <div className='content-center'>

                            <Link to={''} className='text-orange-400 text-4xl font-serif'>
                                {"<Darshan Chhatrola/>"}
                            </Link>

                        </div>
                        <div className='flex '>

                            <div className=''>

                                <Link to={''} className="block px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2  transition-all duration-1000 text-blue-500 text-xl data-[focus]:bg-gray-100">
                                    Home
                                </Link>
                            </div>
                            <div className=' '>
                                <Link to={'/aboutus'} className="block px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2transition-all duration-1000 text-blue-500 text-xl data-[focus]:bg-gray-100">
                                    About Us
                                </Link>
                            </div>
                            <div className=' '>
                                <Link to={'/contactus'} className="block px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2 transition-all duration-1000  text-blue-500 text-xl data-[focus]:bg-gray-100">
                                    Contach Us
                                </Link>
                            </div>
                            <div className=' '>
                                <Link to={''} className="block px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2  transition-all duration-1000 text-blue-500 text-xl data-[focus]:bg-gray-100">
                                    Project
                                </Link>
                            </div>
                            <div className=' '>
                                <button onClick={handleClick} className="block px-6 py-2 ml-20  mt-2 mb-2 text-xl hover:bg-yellow-300 bg-yellow-200 rounded-2xl border-solid font-bold border-white text-blue-400">
                                    Resume
                                </button>
                            </div>


                        </div>


                    </div >



                </div>

                <div className='flex justify-center min-h-screen ' id='home'>
                    <div className='text-center mt-28' id='home-contant'>
                        <p className='text-white block px-6 py-2   mt-2 mb-2 font-thin'>Hello I am</p>
                        <h1 className='text-white block px-6 py-2   mt-2 mb-2 font-bold text-4xl'>Darshan Chhatrola</h1>
                        <p className='font-bold block px-6 py-2   mt-2 mb-2 text-2xl text-green-500'>React-JS Devloper</p>

                        <button onClick={handleClick} className="font-bold border-solid rounded-xl transition-all duration-1000 hover:text-yellow-500 bg-gray-700 hover:bg-black  h-12 w-52 hover:scale-125 mt-8 mb-2 text-2xl text-white ">
                            Contact
                        </button>
                        <div className=' flex space-x-8 ml-24 mt-5 size-1/2 ' id='contact-icon'>
                            <Link target='_blank' to={'https://wa.me/8200505891'} className='' id=''>
                                <FaWhatsapp className='text-4xl text-green-500 hover:scale-150' />
                            </Link>
                            <Link target='_blank' to={'https://github.com/darsshu'} className='' id=''>
                                <FaGithub className='text-4xl text-white hover:scale-150' />
                            </Link>
                            <Link target='_blank' to={'https://www.linkedin.com/in/darshan-chhatrola-046299311/'} className='' id=''>
                                <FaLinkedin className='text-4xl text-blue-700 hover:scale-150' />
                            </Link>



                        </div>



                    </div>
                    <div className='' id='home-image'>

                    </div>

                </div>

                <div className='' id='aboutus'>
                    <div className=' flex  text-center  ' >
                        <div className=' ms-28 '>
                            <img className='  rounded-md w-2/3  ' src={darshan} />


                        </div>
                        <div className=' content-center w-2/4 me-28'>
                            <h1 className='font-serif text-6xl text-center text-amber-600'>Chhatrola Darshan</h1>
                            <p className='font-sans text-xl text-blue-500'>I am React frontend devloper  </p>
                            <p className='font-sans text-2xl text-start text-yellow-200'>This is my portfolio project . Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit delectus facilis perferendis iure dignissimos maxime, rerum optio eligendi consequatur, quo quibusdam voluptates quod eum omnis necessitatibus architecto officia doloribus. Eveniet?</p>

                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Navbar
