import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Home/Login/Login";
import SignUp from "../pages/Home/SignUp/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import CollegeDetails from "../pages/Shared/CollegeDetails/CollegeDetails";
import AllCollege from "../pages/AllCollege/AllCollege";
import Admission from "../pages/Admission/Admission";
import AdmissionInput from "../pages/AdmissionInput/AdmissionInput";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allCollege',
                element: <AllCollege></AllCollege>
            },
            {
                path: '/admission',
                element: <Admission></Admission>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'CollegeDetails/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({ params }) => fetch(`https://college-booking-server.vercel.app/college/${params.id}`)
            },
            {
                path: 'admissionInput/:id',
                element: <AdmissionInput></AdmissionInput>,
                loader: ({ params }) => fetch(`https://college-booking-server.vercel.app/college/${params.id}`)
            },
            // {
            //     path:'/chefRecipes/:id',
            //     // element:<ChefRecipies></ChefRecipies>,
            //     loader:({params}) => fetch(``)
            // }

        ]
    },
]);

export default router