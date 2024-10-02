import React from 'react'

const ContactUs = () => {


    const datasubmit = () => toast("Wow so easy!");
    return (
        <>
            <div className='h-screen '>
                <form action="">
                    <div className='text-center mb-3'>
                        <input className='h-10 bg-transparent border-solid font-mono text-green-500 border-green-400 rounded-md border-2 w-1/2' type="NAME" placeholder='NAME' required />
                    </div>
                    <div className='text-center mb-3' >
                        <input className='h-10 bg-transparent border-solid font-mono text-green-500 border-green-400 rounded-md border-2 w-1/2' type="email" placeholder='E-Mail' required />
                    </div>
                    <div className='text-center mb-3 '>
                        <input className='h-10 bg-transparent border-solid font-mono text-green-500 border-green-400 rounded-md border-2 w-1/2' type="tel" placeholder='Mo-Number' required />
                    </div>
                    <div className='text-center mb-3 '>
                        <textarea className=' bg-transparent border-solid font-mono text-green-500 border-green-400 rounded-md border-2 w-1/2 h-60' placeholder='Enter Your Dipscription:' required minLength={30} name="" id=""></textarea>
                    </div>
                    <div className='text-center'>
                        <button onClick={datasubmit} className=' font-sans border-2  border-green-400 hover:bg-green-400 hover:border-black hover:shadow-lg rounded-lg h-10 w-20 transition-all duration-500 hover:scale-110 hover:shadow-green-300 text-white'>SUBMIT</button>


                    </div>




                    <div className=''></div>

                </form>


            </div>

        </>
    )
}

export default ContactUs
