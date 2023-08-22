import { useEffect, useState } from "react";
import {Link, Outlet, Navigate} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";


export default function DefaultLayouth(){
const {user, token, notification, setUser,setToken}  = useStateContext();
   
if(!token){
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

// useEffect(() => {
//         axiosClient.get(`/users/2`)
//         .then(({data}) =>{
//             setUser(data.user)
//         })
//         .catch(err => {
//             console.log(err)
//     })
       
//     }, [])


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
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/users">Users</Link>
                <Link to="/sports">Sports</Link>
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
                      
                       {user.name}
                       <a href="#" onClick={onLogout} className="btn-logout">Logout</a> 
                    </div>
                </header>
                
                <Outlet />
            </div>
        
        </div>
      )
    }