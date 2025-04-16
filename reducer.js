import {
  LOGIN_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from "./actionType";

const initialstate = {
  loading: false, //we have to keep loading false until we are performing any action
  user: JSON.parse(localStorage.getItem("username")),
  error: null,
  isLog: false ,
};

 export default function reducer(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      localStorage.setItem("username", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLog: true,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
        isLog: false,
      };

    case LOGOUT:
      localStorage.removeItem("username")
      return {
        ...state,
        loading: false,
        user: null,
        error: null,
        isLog: false,
      };
      default:
        return state;
  }
}
