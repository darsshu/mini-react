import React from 'react'
import { Navigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const ContactUs = () => {


    const datasubmit = (e) => {
        if (datasubmit) {


            toast.success("Submit Successfully")
            e.preventDefault()
            document.getElementById('name').value = ''
            document.getElementById('email').value = ""

            document.getElementById('phone').value = ""

            document.getElementById('description').value = ""

        }




    }
    return (
        <>
            <div className=' '>
                <form action="" onSubmit={datasubmit} >
                    <div className='text-center mb-3'>
                        <input id="name" className='h-12 text-center bg-transparent text-2xl border-solid font-mono text-green-500 border-green-400 rounded-lg border-2 w-1/2' type="NAME" autoComplete='off' placeholder='NAME' required />
                    </div>
                    <div className='text-center mb-3' >
                        <input id="email" className='h-12 text-center bg-transparent text-2xl border-solid font-mono text-green-500 border-green-400 rounded-lg border-2 w-1/2' type="email" autoComplete='off' placeholder='E-Mail' required />
                    </div>
                    <div className='text-center mb-3 '>
                        <input id="phone" className='h-12 text-center bg-transparent text-2xl border-solid font-mono text-green-500 border-green-400 rounded-lg border-2 w-1/2' type="tel" autoComplete='off' min={10} max={10} placeholder='Mo-No' required />
                    </div>
                    <div className='text-center mb-3 '>
                        <textarea id="description" className=' bg-transparent border-solid text-2xl font-mono text-green-500 border-green-400 rounded-lg border-2 w-1/2 h-60' autoComplete='off' placeholder='Enter Your Dipscription:' required minLength={30} name="" ></textarea>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className=' font-sans  border-2  border-green-400 hover:bg-green-400 hover:border-black hover:shadow-lg rounded-lg h-10 w-20 transition-all duration-500 hover:scale-110 hover:shadow-green-300 mb-10 '>SUBMIT</button>


                    </div>
                    <hr />







                </form>

            </div>
            <div className=' text-orange-400 mt-10 text-xl h-16 justify-center flex'>
                &copy; By Darshan Chhatrola

            </div>

        </>
    )
}

export default ContactUs
