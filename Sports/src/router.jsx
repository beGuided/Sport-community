import {createBrowserRouter, Navigate} from "react-router-dom";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import Dashboard from "./views/Dashboard.jsx";
import SportForm from "./views/SportForm.jsx";
import Sport from "./views/Sport.jsx";

import DefaultLayouth from "./components/DefautLayouth.jsx";
import GuestLayouth from "./components/GuestLayout.jsx";




const router = createBrowserRouter([

    {
        path:'/',
        element:<DefaultLayouth />,
        children:[

            {
               path:'/',
               element:<Navigate to="/users" />
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

    {
        path:'/',
        element:<GuestLayouth />,
        children:[
            {
                path:'/login',
                element:<Login />
            },
            {
                path:'/signup',
                element:<Signup />
            },
        ]
    },
    {
        path:'*',
        element:<NotFound />
    },



])

export default router;