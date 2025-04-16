import axios from "axios";
import {
  REGISRTATION_ERROR,
  REGISRTATION_REQUEST,
  REGISRTATION_SUCCESS,
} from "./registarionActiontype";

const registrationRequest = () => {
  return {
    type: REGISRTATION_REQUEST,
  };
};

const registrationSuccess = (user) => {
  return {
    type: REGISRTATION_SUCCESS,
    payload: user,
  };
};

const registrationError = (error) => {
  return {
    type: REGISRTATION_ERROR,
    payload: error,
  };
};

function registrationForm(data) {
  return async (dispatch) => {
    dispatch(registrationRequest());
    try {
      const checkResponce = await axios.get(
        "https://authentication-c86a9-default-rtdb.firebaseio.com/users.json"
      );
      const userData = (await checkResponce.data) || {};

      const userPresent = Object.values(userData).find(
        (item) => item.email == data.email
      );

      if (userPresent) {
        alert("User Already Present");
        dispatch(registrationError("User Already Exist"));
         return ;
      }
      else{
      const responce = await axios.post(
        "https://authentication-c86a9-default-rtdb.firebaseio.com/users.json",
        data
      );
    
      const idData = responce.data;
      dispatch(registrationSuccess(idData));
    }
    } catch (error) {
      dispatch(registrationError(error.message));
    }
  };
}

export default registrationForm;
