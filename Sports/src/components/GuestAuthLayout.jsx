import {Outlet,Navigate} from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";





export default function GuestAuthLayouth(){

    const {token,user} = useStateContext();
   
    if(token && user.email_verified_at!==null){
        return <Navigate to='/' />
    }

    return (
        < div>
        
          <Outlet /> 
        </div>
      )
    }