import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HTML from '/src/assets/HTML.png'
import REACT from '/src/assets/REACT.png'
import CSS from '/src/assets/CSS.png'
import JS from '/src/assets/JS.png'
import TC from '/src/assets/TC.png'
import VITE from '/src/assets/VITE.png'

const Project = () => {

    return (
        <>
            <div className=' mt-10 h-screen'>
                <div className='flex justify-around mb-20'>
                    <div className='border-solid border-green-500 border-2 rounded-md hover:scale-110 shadow-green-400 max-w-sm bg-transparent  transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-green-300'>
                        <div>
                            <h1 className='text-sky-400 text-2xl text-center font-serif border-b-4 border-green-400  pt-3 pb-3'>
                                Project
                            </h1>
                        </div>

                        <div className='flex justify-around mt-2 pt-6 '>
                            <p className='font-extrabold text-4xl text-sky-400'> MyPortfolio</p>
                            <div>
                                <Link target='_blank' to={'https://github.com/darsshu'} className='' id=''>
                                    <FaGithub className='text-4xl text-white transition-all hover:duration-500 hover:scale-150' />
                                </Link>
                            </div>


                        </div>
                        <div className='mt-4 text-orange-300 pb-6'>
                            This is my First project.This project technologies is React+vite and using java script fuctions and design with Tailwind css.This project is dynamic and static web-page.
                        </div>

                    </div>
                    {/* <div className='border-solid border-green-500 border-2 md hover:scale-110 rounded-md shadow-green-400 max-w-sm bg-transparent hover:bg-black transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-green-300'>
                        <div>
                            <h1 className='text-white text-2xl text-center font-serif border-b-4 border-green-400  pt-3 pb-3'>
                                Project
                            </h1>
                        </div>

                        <div className='flex justify-around mt-2 pt-6 '>
                            <p className='font-extrabold text-4xl text-sky-400'> MyPortfolio</p>
                            <div>
                                <Link target='_blank' to={'https://github.com/darsshu'} className='' id=''>
                                    <FaGithub className='text-4xl text-white transition-all hover:duration-500 hover:scale-150' />
                                </Link>
                            </div>


                        </div>
                        <div className='mt-4 text-orange-300 pb-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dicta, tempora nostrum obcaecati est at quod illo ex enim fugiat,
                            sunt itaque explicabo. Ullam quisquam cupiditate
                            stempore porro suscipit deleniti autem.
                        </div>

                    </div> */}


                </div>
                <div className='  flex justify-evenly '>
                    <img className='w-24  h-28 ' src={HTML} alt="" />
                    <img className='w-24  h-28 ' src={CSS} alt="" />
                    <img className='w-24  h-28 ' src={JS} alt="" />
                    <img className='w-24  h-28 ' src={VITE} alt="" />
                    <img className='w-24  h-28 ' src={REACT} alt="" />
                    <img className='w-36  h-28 ' src={TC} alt="" />
                </div>

            </div>

        </>
    )
}

export default Project
