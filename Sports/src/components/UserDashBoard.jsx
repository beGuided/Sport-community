import { useEffect,React, useState } from "react";
import {Link, Outlet, Navigate} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";



export default function UserDashBoard(){
const {user, token, notification, setUser,setToken}  = useStateContext();
   
if(!token ){
    return <Navigate to="/login" />
}


const onLogout = (ev) =>{
    ev.preventDefault()

    axiosClient.post('/logout')
    .then(() =>{
        setUser({})
        setToken(null)
    })
}


    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await axiosClient.get('/user'); 
                const data = await response
                setUser(data.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }
        fetchUser();
    }, []);

return (
        <div id="defaultLayout" >
            <aside>
                
                
            </aside>
            <div className="content">

                {notification &&
                <div className="notification">
                    {notification}
                </div>
                }
                <header>
                    <div>
                        Header
                    </div>
                    <div>
                       {user.phone_number}
                       <a href="#" onClick={onLogout} className="btn-logout">Logout</a> 
                    </div>
                </header>
                
                <Outlet />
            </div>
        
        </div>
      )
    }