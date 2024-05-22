import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AppliedJobs from "../pages/appliedJobs/AppliedJobs";
import Blog from "../pages/blog/Blog";
import JobDetails from "../pages/jobDetils/jobDetails";

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
                loader:() => fetch('./data/jobs.json'),
                element:<AppliedJobs/>
            },
            {
                path:'/blog',
                element:<Blog/>
            },
            {
                path:'/:detailsId',
                loader:() => fetch('./data/jobs.json') ,
                element:<JobDetails/>
            }
        ]
     }
])

