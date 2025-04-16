import axios from "axios";
import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionType";

const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

const loginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    payload: error,
  };
};

const logOut = () => {
  return {
    type: LOGOUT,
  };
};

function loginUser(data){
  return async(dispatch)=>{
   dispatch(loginRequest())
    try {
      const loginResponce=await axios.get( "https://authentication-c86a9-default-rtdb.firebaseio.com/users.json")
      const loginData=await loginResponce.data
     const userPresent = Object.values(loginData).find((item)=>item.email==data.email)
      if(userPresent){
        if(userPresent.password==data.password && userPresent.name==data.name){
          dispatch(loginSuccess(userPresent))

        }
        else if(userPresent.password !== data.password){
          dispatch(loginError("error hai pagle,password check karo"))
          alert("error hai pagle,password check karo")
        }
        else if(userPresent.name !== data.name){
          dispatch(loginError("error hai pagle,name check karo"))
          alert("error hai pagle,name check karo")
        }
        
      }
    } catch (error) {
      dispatch(loginError(error.message))
    }

  }
}
export { loginUser,logOut};
