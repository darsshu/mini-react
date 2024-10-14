import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import AboutUs from './AboutUs'


const Home = () => {
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
    const ContactUs = () => {
        window.scrollTo({
            top: 1950,
            behavior: 'smooth',

        })
    }
    return (<>

        <div className='justify-around flex' >
            <div className='flex pt-20 min-h-screen ' id='home'>
                <div className='text-center mt-28' id='home-contant'>
                    <p className=' block px-6 py-2 text-xl   mt-2 mb-2 font-thin'>Hello I am</p>
                    <h1 className=' block px-6 py-2   mt-2 mb-2 font-bold text-4xl'>Darshan Chhatrola</h1>
                    <p className='font-bold block px-6 py-2   mt-2 mb-2 text-2xl text-green-500'>React-JS Devloper</p>

                    <button onClick={ContactUs} className="font-bold border-solid rounded-xl transition-all duration-1000 hover:text-yellow-500 bg-gray-700 hover:bg-black  h-12 w-52 hover:scale-125 mt-8 mb-2 text-2xl text-white ">
                        Contact Me
                    </button>
                    <div className=' flex space-x-8 ml-24 mt-5 size-1/2 ' id='contact-icon'>
                        <Link target='_blank' to={'https://wa.me/8200505891'} className='' id=''>
                            <FaWhatsapp className='text-4xl text-green-500  transition-all hover:duration-500 hover:scale-150' />
                        </Link>
                        <Link target='_blank' to={'https://github.com/darsshu'} className='' id=''>
                            <FaGithub className='text-4xl  transition-all hover:duration-500 hover:scale-150' />
                        </Link>
                        <Link target='_blank' to={'https://www.linkedin.com/in/darshan-chhatrola-046299311/'} className='' id=''>
                            <FaLinkedin className='text-4xl text-blue-700  transition-all hover:duration-500 hover:scale-150' />
                        </Link>



                    </div>



                </div>


            </div>
            <div className=' justify-start pt-20 min-h-screen ' id='home'>
                <div className=' mt-28 mb-4' id='home-contant'>
                    <h1 className='text-orange-400 text-3xl border-b-2 border-orange-400 pb-1 font-bold'>EDUCATION</h1>
                    <div className=' mt-4 space-y-10'>
                        <p className='text-xl mb-2 text-sky-400 font-extralight'>
                            <b className='border-b-2 border-sky-300 font-extrabold text-2xl'>B-Tech </b> <br /> Computer Engineering from Gandhinagar University
                        </p>
                        <p className='text-xl mb-2 text-sky-400 font-extralight'>
                            <b className='border-b-2 border-sky-300 font-extrabold text-2xl'>11-12(SCIENCE) </b> <br /> Elite International School-( Morbi )
                        </p>
                        <p className='text-xl mb-2 text-sky-400 font-extralight'>
                            <b className='border-b-2 border-sky-300 font-extrabold text-2xl'>10th </b> <br />Sarvopari School ( Morbi )
                        </p>

                    </div>





                </div>
                <hr />
                <div className='mt-4'>
                    <h1 className='text-2xl text-center font-bold  mb-5'> Skillset</h1>
                    <hr />
                    <div className='flex justify-around mt-5 mb-5'>
                        <p>JAVASCRIPT</p>
                        <p>REACT</p>
                        <p>REDUX</p>
                        <p>HTML-CSS</p>
                    </div>
                </div>



            </div>



        </div>

    </>
    )
}

export default Home
