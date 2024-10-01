


import { Outlet, Router } from 'react-router-dom'
import Navbar from './features/Navbar'
import AboutUs from './features/AboutUs'
import Home from './features/home'
import Header from './features/header'
import ContactUs from './features/ContactUs'
import Project from './features/project'

function App() {


  return (
    <>
      <div className='bg-slate-800'>
        <Header />
        <Home />
        <AboutUs />
        <Project />
        <ContactUs />

        <Outlet />
      </div>


    </>



  )
}

export default App
