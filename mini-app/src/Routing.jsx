import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./features/AboutUs";
import ContactUs from "./features/ContactUs";
import Home from "./features/home";
import Header from "./features/header";
import Project from "./features/Project";
import Animation from "./features/Animation";

const router = createBrowserRouter([
    {
        path: '/', element: <App />,

        children: [
            {
                path: '', element: <Header />,
                path: 'home', element: <Home />,
                path: 'aboutus', element: <AboutUs />,
                path: 'project', element: <Project />,
                path: 'contactus', element: <ContactUs />,
                path: 'Animation', element: <Animation />,

            }
        ]
    }

])

export default router