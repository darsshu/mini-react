


import { Outlet, Router } from 'react-router-dom'
import AboutUs from './features/AboutUs'
import Home from './features/home'
import Header from './features/header'
import ContactUs from './features/ContactUs'
import Project from './features/Project'
import HTML from '/src/assets/HTML.png'
import CSS from '/src/assets/CSS.png'
import JS from '/src/assets/JAVASCRIPT.png'
import './App.css'
import Animation from './features/Animation'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {



  return (
    <>

      <div className='  bg-black '>
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

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
