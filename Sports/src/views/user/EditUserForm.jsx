import {useEffect, useState} from "react";
import axiosClient from "../../axios-client.js";
import { useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider.jsx";


export default function EditUserForm(){
  const {id} = useParams()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState(null)
  const navigate = useNavigate()
  const {setNotification} = useStateContext()
  // const [sports, setSports] = useState()
  const [user, setUser] = useState({
    id:null,
    email:'',
    name:'',
    user_name: '',
  })


  if(id){
    useEffect(() => {
      setLoading(true)
      axiosClient.get(`/users/${id}`)
      .then(({data}) => {
        setLoading(false)
        setUser(data.user)
    }).catch(()=>{
      setLoading(false)
    })
  }, [])
  }

  const onSubmit = (ev)=>{
    console.log(user)
    ev.preventDefault();
      if(user.id){
        console.log(user)
        axiosClient.patch(`/users/${user.id}`, user)
        .then(() =>{
          setNotification('user was successful updated!')
          navigate('/users')
        })
          .catch(err =>{
            const response = err.response;
            if(response && response.status === 422){
              setErrors(response.data.errors)
            }
          })
      }

  }
        return (

        <>
            {user.id && <h2>Update user:{user.name}</h2>}
            {!user.id && <h2>New User</h2>}
          <div className="card animated fadeInDown">
            { loading && (
              <div className="text-center">Loading...</div>
               )}
              {errors && 
              <div className="alert">    
              {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
              ))}
              </div>}

              {!loading &&
                <form onSubmit={onSubmit}>
               
                  <input type='text'value={user.name} onChange={ev => setUser({...user, name: ev.target.value})} placeholder="Name"/>
                  <input type='text'value={user.user_name} onChange={ev => setUser({...user, user_name: ev.target.value})} placeholder="User Name"/>
                  <input type='email'value={user.email} onChange={ev => setUser({...user, email: ev.target.value})} placeholder="Email"/>  

                  <button className="btn">Save</button>
                </form>
              }
          </div>
        </>
      )
    }
