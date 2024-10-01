import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Project = () => {
    return (
        <>
            <div className=' mt-10'>
                <div className='flex justify-center'>
                    <div className='border-solid border-green-500 border-2 rounded-md hover:shadow-green-500 max-w-sm'>
                        <div className='flex justify-around mt-2 '>
                            <p className='font-extrabold text-5xl'> MyPortfolio</p>
                            <div>
                                <Link target='_blank' to={'https://github.com/darsshu'} className='' id=''>
                                    <FaGithub className='text-5xl text-white transition-all hover:duration-500 hover:scale-150' />
                                </Link>
                            </div>


                        </div>
                        <div className='mt-4'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dicta, tempora nostrum obcaecati est at quod illo ex enim fugiat,
                            sunt itaque explicabo. Ullam quisquam cupiditate
                            stempore porro suscipit deleniti autem.
                        </div>

                    </div>


                </div>

            </div>

        </>
    )
}

export default Project
