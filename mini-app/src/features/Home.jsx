import React from 'react'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'


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
    return (<>
        <div>
            <div className='flex justify-center pt-20 min-h-screen ' id='home'>
                <div className='text-center mt-28' id='home-contant'>
                    <p className='text-white block px-6 py-2   mt-2 mb-2 font-thin'>Hello I am</p>
                    <h1 className='text-white block px-6 py-2   mt-2 mb-2 font-bold text-4xl'>Darshan Chhatrola</h1>
                    <p className='font-bold block px-6 py-2   mt-2 mb-2 text-2xl text-green-500'>React-JS Devloper</p>

                    <button onClick={handleClick} className="font-bold border-solid rounded-xl transition-all duration-1000 hover:text-yellow-500 bg-gray-700 hover:bg-black  h-12 w-52 hover:scale-125 mt-8 mb-2 text-2xl text-white ">
                        Contact
                    </button>
                    <div className=' flex space-x-8 ml-24 mt-5 size-1/2 ' id='contact-icon'>
                        <Link target='_blank' to={'https://wa.me/8200505891'} className='' id=''>
                            <FaWhatsapp className='text-4xl text-green-500  transition-all hover:duration-500 hover:scale-150' />
                        </Link>
                        <Link target='_blank' to={'https://github.com/darsshu'} className='' id=''>
                            <FaGithub className='text-4xl text-white transition-all hover:duration-500 hover:scale-150' />
                        </Link>
                        <Link target='_blank' to={'https://www.linkedin.com/in/darshan-chhatrola-046299311/'} className='' id=''>
                            <FaLinkedin className='text-4xl text-blue-700  transition-all hover:duration-500 hover:scale-150' />
                        </Link>



                    </div>



                </div>


            </div>

        </div>
    </>
    )
}

export default Home
