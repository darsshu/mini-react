


import { Outlet, Router } from 'react-router-dom'
import Navbar from './features/Navbar'
import AboutUs from './features/AboutUs'

function App() {


  return (
    <>

      <Navbar />
      <Outlet />


    </>



  )
}

export default App
