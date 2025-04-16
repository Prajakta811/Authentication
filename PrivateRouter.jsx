import Login from "@/components/Login";
import Registration from "@/components/Registration";
import React from "react";
import { useSelector } from "react-redux";

const PrivateRouter = ({ children }) => {
  const { isLog, user } = useSelector((state) => state.user);
  const data = useSelector((state) => state.loginUser);

  console.log(isLog, user, data)

  return isLog || user || data.user ? children : <Registration/>
};

export default PrivateRouter;
