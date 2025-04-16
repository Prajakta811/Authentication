import { loginUser } from '@/redux/action'
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const Login = () => {
  const dispatch=useDispatch()
  const [userData,setUserData]=useState({
    name:"",
    email:"",
    password:""
  })
  const nevigate=useNavigate()
  const handleChange=(event)=>{
     const{name,value}=event.target
     setUserData({...userData,[name]:value})
    
  }
  function handleSubmit(event){
    event.preventDefault()
    dispatch(loginUser(userData))
    nevigate('/')
    setUserData({name:"",
      email:"",
      password:""})

  }
  return (
    <Box mt='2em'>
     <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={userData.name} onChange={handleChange}/>
      <input type="email" name="email" value={userData.email} onChange={handleChange}/>
      <input type="password"name="password" value={userData.password} onChange={handleChange}/>
      <button type="submit">Submit</button>
     </form>
    </Box>
  )
}

export default Login
