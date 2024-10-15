import App from "./App";

import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./features/AboutUs";
import ContactUs from "./features/ContactUs";
import Home from "./features/home";
import Header from "./features/Header";
import Project from "./features/Project";
import Animation from "./features/Animation";
import ThemeContext from "./features/ThemeContext";
import ThemeBtn from "./features/ThemeBtn";
const router = createBrowserRouter([
    {
        path: '/', element: <ThemeContext> <App /></ThemeContext>,

        children: [
            {
                path: '', element: <Header />,
                path: 'Home', element: <Home />,
                path: 'AboutUs', element: <AboutUs />,
                path: 'Project', element: <Project />,
                path: 'ContactUs', element: <ContactUs />,
                path: 'Animation', element: <Animation />,
                path: 'ThemeBtn', element: <ThemeBtn />,
                path: 'ThemeContext', element: <ThemeContext />,


            }
        ]
    }

])

export default router