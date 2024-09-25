import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import Navbar from "./features/Navbar";
import AboutUs from "./features/AboutUs";
import ContactUs from "./features/ContactUs";

const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children: [
            {
                path: '', element: <Navbar />,
                path: 'aboutus', element: <AboutUs />,
                path: 'contactus', element: <ContactUs />


            }
        ]
    }

])

export default router