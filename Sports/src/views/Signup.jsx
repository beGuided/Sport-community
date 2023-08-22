import { Link } from "react-router-dom"
import {useRef, createRef, useState} from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const{setUser, setToken } = useStateContext();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault()

        const payload = {
           name: nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            password_confirmation:passwordConfirmationRef.current.value,
          
        }
            axiosClient.post('/register', payload)
            .then(({data})  =>{
                setUser(data.user)
                setToken(data.token)
            }) 
            .catch(err => {
               // console.log(err)
                const response = err.response;
                if(response && response.status === 422){
                  setErrors(response.data.errors);
                    
                } 
            })
        }

    return ( 
        <div className="login-signup-form animated fadeInDown">
        <div className="form">
          <form onSubmit={onSubmit}>
              <h1 className="title">
                  Signup for free 
              </h1>
              {errors && <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
                </div>}
            <input required ref={ nameRef }placeholder="Full Name"/>
            <input required ref={ emailRef }type="email"  placeholder="Email Address"/>
            <input required ref={ passwordRef }type="password"  placeholder="Password"/>
            <input required ref={ passwordConfirmationRef }type="password"  placeholder="Password Confirmation"/>
            <button className="btn btn-block" > Sign Up</button> 
            <p className="message">
              Already Registered? <Link to="/login"> Login </Link>
            </p>
          </form>
        </div>
      </div>
      )
    }
