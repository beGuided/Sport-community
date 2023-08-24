import { Link, useNavigate } from "react-router-dom"
import {useRef, useState, useEffect} from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup(){
    const nameRef = useRef();
    const userNameRef = useRef() ;
    const phoneNumberRef = useRef();
    const emailRef = useRef();
    const interestRef= useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();

    const{setUser,notification, setToken,setNotification} = useStateContext(); 
    const [errors, setErrors] = useState(null);
    const [sports, setSports] = useState([]);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [selectedSports, setSelectedSports] = useState([]);


    useEffect(() =>{
      getSports();
    },[])

    const handleSelectChange = () => {
      const selectedOptions = Array.from(interestRef.current.selectedOptions).map(option => option.value);
      setSelectedSports(selectedOptions);
  };
    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name:nameRef.current.value, 
            user_name:userNameRef.current.value, 
            phone_number: phoneNumberRef.current.value,
            email:emailRef.current.value,
            interest: selectedSports,
            password:passwordRef.current.value,
            password_confirmation:passwordConfirmationRef.current.value,
          
        }
        setErrors(null)
        
            setLoading(true)
            axiosClient.post('/register', payload)
            .then(({data})  =>{
                setLoading(false)
                setUser(data.user)
                // setToken(data.token)
                navigate('/login')
                setNotification('Registration successful. Please check your email for verification link.')
            }) 
            .catch(err => {
              setLoading(false)
               // console.log(err)
                const response = err.response;
                if(response && response.status === 422){
                  setErrors(response.data.errors);
                    
                } 
            })
        }

        const getSports = () => {
          setLoading(true)
          axiosClient.get('/sports') 
          .then(({data}) => {
           setLoading(false)
            setSports(data.sports);
          })
          .catch(() => {
           setLoading(false)
          })
        }
       

    return ( 

      <div>
        {loading &&
      
            <div className="login-signup-form animated fadeInDown">
              <p className="text-center"> 
              Loading...
              </p>
            </div>
        
        }
     {!loading &&

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

      {notification && 
        <div className="alert">
            <p>{notification}</p>
        </div>}
        </div>}

      <input required ref={ nameRef }placeholder="Full Name"/> 
      <input required ref={ userNameRef }placeholder="User Name"/>    
    <input required ref={ phoneNumberRef }placeholder="Phone Number"/>
    <input required ref={ emailRef }type="email"  placeholder="Email Address"/>
    
    {sports ?(
        <select ref={interestRef} name="interest[]"   multiple="multiple" className="selector" onChange={handleSelectChange}>
         <option selected> Select Sport </option> 
        {sports.map(sport => (
        <option key={sport.id}value={sport.id}>{sport.name}</option>
        ))} 
        </select>
    ):(
        <p></p>
    )}
    
    <input required ref={ passwordRef }type="password"  placeholder="Password"/>
    <input required ref={ passwordConfirmationRef }type="password"  placeholder="Confirm Password"/>
    <button className="btn btn-block" > Sign Up</button> 
    <p className="message">
      Already Registered? <Link to="/login"> Login </Link>
    </p>
  </form>
</div>
</div>
     }
        
      </div>
      )
    }
