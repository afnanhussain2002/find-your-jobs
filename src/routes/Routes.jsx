import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AppliedJobs from "../pages/appliedJobs/AppliedJobs";
import Blog from "../pages/blog/Blog";

export const router = createBrowserRouter([
     {
        path:'/',
        element:<App/>,
        children: [
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/appliedJobs',
                element:<AppliedJobs/>
            },
            {
                path:'/blog',
                element:<Blog/>
            }
        ]
     }
])

