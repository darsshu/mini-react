


import { Outlet, Router } from 'react-router-dom'
import AboutUs from './features/AboutUs'
import Header from './features/Header'
import ContactUs from './features/ContactUs'
import Project from './features/Project'

import './App.css'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Home from './features/Home'


function App() {



  return (
    <>

      <div className=''>
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
