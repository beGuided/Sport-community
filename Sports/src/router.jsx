import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/admin/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import Dashboard from "./views/Dashboard.jsx";
import SportForm from "./views/admin/SportForm.jsx";
import EditUserForm from "./views/user/EditUserForm.jsx";
import UserForm from "./views/admin/UserForm.jsx";
import Sport from "./views/admin/Sport.jsx";
import PasswordReset from "./views/PasswordReset.jsx";
import ResetForm from "./views/ResetForm.jsx";
import LandingPage from "./views/LandingPage.jsx";

import UserDashBoard from "./components/UserDashBoard.jsx";
import DefaultAdminLayout from "./components/DefautAdminLayout.jsx";
import GuestAuthLayouth from "./components/GuestAuthLayout.jsx";
import HomeLayout from "./components/HomeLayout.jsx";




const router = createBrowserRouter([


    {
        path:'/',
        element:<HomeLayout />,
        children:[
            {
                path:'/',
                element:<Navigate to="/home" />
                
            },
        
            {
                path:'/home',
                element:<LandingPage/>
            },
        ]
    },

    {
        path:'/',
        element:<DefaultAdminLayout />,
        children:[

            {
               path:'/',
               element:<Navigate to="/dashboard" />
            },
            {
                path:'/dashboard',
                element:<Dashboard />
            },
             {
                path:'/users',
                element:<Users />
            },
            {
                path:'/users/:id',
                element:<EditUserForm key="userUpdate"/>
            },
            {
                path:'/all-users/:id',
                element:<UserForm key="userUpdate"/>
            },
            {
                path:'/sports',
                element:<Sport />
            },
            {
                path:'/sports/new',
                element:<SportForm key="sportCreate"/>
            },
            {
                path:'/sports/:id',
                element:<SportForm key="sportUpdate"/>
            },

        ]
    },
    //  {
    //     path:'/user',
    //     element:<UserDashBoard />,
    //     children:[
    //         {
    //             path:'/dashboard',
    //             element:<Navigate to="/dashboard" />
    //         },
    //         {
    //             path:'/dashboard',
    //             element:<Dashboard />
    //         },
    //         {
    //             path:'/users/:id',
    //             element:<EditUserForm key="userUpdate"/>
    //         },
        
    //     ]
    // },

    {
        path:'/',
        element:<GuestAuthLayouth />,
        children:[
           
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            },
            {
                path:'/password-reset',
                element:<PasswordReset />
            },
            {
                path:'/password/reset',
                element:<ResetForm />
            },
        ]
    },
    // {
    //     path:'/',
    //     element:<GuestLayouth />,
    //     children:[
           
    //         {
    //             path:'/dashboard',
    //             element:<Dashboard />
    //         },
    //         {
    //             path:'/users/:id',
    //             element:<EditUserForm key="userUpdate"/>
    //         },
          
    //     ]
    // },
  
    {
        path:'*',
        element:<NotFound />
    },



])

export default router;