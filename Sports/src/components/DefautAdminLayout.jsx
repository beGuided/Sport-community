import { useEffect,React, useState } from "react";
import {Link, Outlet, Navigate} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";



export default function DefaultAdminLayouth(){
const {user, token, notification, setUser,setToken}  = useStateContext();
   
if(!token && !user.email_verified_at){
    return <Navigate to="/login" />
}
// if(user.role !=='admin'){
//     return <Navigate to="/login" />
// }

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
               <div>
               <Link to="/dashboard">Dashboard</Link> 
               
                </div> 
           
             {/* links for only Admin  start*/}
            {user.role === 'admin' && (
                <div>
                <Link to="/users">Users</Link><br></br>
                <Link to="/sports">Sports</Link>
                </div>
            )}
            {/* end */}
                
            {user.role === 'user' && (
                <div>
              <Link to={'/users/'+user.id}>Edit Profile</Link> 
              
                </div>
            )}
             
              
            </aside>
            <div className="content">

                {notification &&
                <div className="notification">
                    {notification}
                </div>
                }
                <header>
                    <div>
                    <Link to="/home">Home</Link><br></br>
                    
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