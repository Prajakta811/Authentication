import registrationForm from "@/redux/registarionAction";
import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Registration = () => {
    const dispatch=useDispatch()
  const [registerData, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
  });
  
   const nevigate = useNavigate()

  function handleChange(event) {
    const { name, value } = event.target;
    setRegistration({ ...registerData, [name]: value });
    
  }
  const hanldeSubmit = (event) => {
    event.preventDefault();

    dispatch(registrationForm(registerData))
    nevigate('/')
    setRegistration({ name: "", email: "", password: "" });
  };
  return (
    <Box>
      <h1>Registation Form :</h1>
      <form onSubmit={hanldeSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          onChange={handleChange}
          name="name"
          value={registerData.name}
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          name="email"
          onChange={handleChange}
          value={registerData.email}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          name="password"
          onChange={handleChange}
          value={registerData.password}
        />
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
};

export default Registration;
