import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home/Home";
import Main from "../../Layouts/Main/Main";
import ProjecDetails from "../../Pages/ProjectDetails/ProjecDetails";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path: '/projectDetails',
                element : <ProjecDetails></ProjecDetails>
            }
        ]
    }
])

export default router;