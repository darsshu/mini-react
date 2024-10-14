import React from 'react'
import { Link } from 'react-router-dom'
import ContactUs from './ContactUs'
import ThemeBtn from './ThemeBtn'


const Header = () => {
    const handleClick = () => {

        const pdfUrl = '/src/assets/DarshanchhatrolaCV.pdf'
        const fileName = 'DarshanchhatrolaCV'

        const link = document.createElement('a')
        link.href = pdfUrl
        // link.download = fileName
        link.target = '_blank'

        document.body.appendChild(link)

        link.click()
        document.body.removeChild(link)

    }

    const Home = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',


        })
    }
    const Project = () => {
        window.scrollTo({
            top: 1300,
            behavior: 'smooth',

        })
    }
    const AboutUs = () => {
        window.scrollTo({
            top: 650,
            behavior: 'smooth',

        })
    }
    const ContactUs = () => {
        window.scrollTo({
            top: 1950,
            behavior: 'smooth',

        })
    }

    window.onbeforeunload = () => {
        window.scrollTo(0, 0);


    }











    return (
        <>
            <div className='  backdrop-blur-md  p-4 border-b-2 border-blue-600 fixed w-full' id='header'>
                <div className='flex justify-between'>
                    <div className='content-center'>

                        <Link to={''} className='text-orange-400 text-4xl font-serif'>
                            {"<Darshan Chhatrola/>"}
                        </Link>

                    </div>




                    <div className='flex '>
                        <div className='content-center me-4'>
                            <ThemeBtn />
                        </div>

                        <div className=''>

                            <button onClick={Home} className="block hover:scale-110   px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2  transition-all duration-500 text-blue-500 text-xl data-[focus]:bg-gray-100">
                                Dashboad
                            </button>
                        </div>
                        <div className=' '>
                            <button onClick={AboutUs} className="block hover:scale-110  px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2transition-all duration-500 text-blue-500 text-xl data-[focus]:bg-gray-100">
                                About Us
                            </button>
                        </div>
                        <div className=' '>
                            <button onClick={Project} className="block hover:scale-110  px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2  transition-all duration-500 text-blue-500 text-xl data-[focus]:bg-gray-100">
                                Project
                            </button>
                        </div>
                        <div className=' '>
                            <button onClick={ContactUs} className="block hover:scale-110  px-4 py-2 hover:underline font-semibold hover:text-yellow-300 mt-2 mb-2 transition-all duration-500  text-blue-500 text-xl data-[focus]:bg-gray-100">
                                Contact Us
                            </button>
                        </div>

                        <div className=' '>
                            <button onClick={handleClick} className="block px-6 py-2 ml-20 hover:underline mt-2 mb-2 text-xl hover:bg-black hover:text-white bg-white transition-all duration-500 rounded-2xl border-solid font-bold  text-black">
                                Resume
                            </button>
                        </div>


                    </div>


                </div >



            </div >
        </>
    )
}



export default Header
