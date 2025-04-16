
import { logOut } from "@/redux/action";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const{isLog, user}=useSelector((state)=>state.user)
  const dispatch=useDispatch()
  return (
    <Flex
      css={{ "--font-size": { base: "18px", lg: "24px" } }}
      justifyContent={"space-between"}
      alignItems="center"
      p="4"
      bg="gray.200"
    >
      <Heading>LOGO</Heading>
      <Flex p="5" gap={"1em"}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
       {!isLog || !user ? 
       <>
        <Link  to='/login'>Log In</Link>
        <Link to='/register'>Register</Link>
        </> :
        <Button onClick={()=>dispatch(logOut)}>Log Out</Button>
        }
       
      </Flex>
    </Flex>
  );
};

export default Navbar;
