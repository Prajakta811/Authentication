import { REGISRTATION_ERROR, REGISRTATION_REQUEST, REGISRTATION_SUCCESS } from "./registarionActiontype";



const initialstate = {
  loading: false, //we have to keep loading false until we are performing any action
  user: JSON.parse(localStorage.getItem("username")),
  error: null,
  isLogRegi: false ,
};

 export default function loginReducer(state = initialstate, action) {
  switch (action.type) {
    case REGISRTATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case REGISRTATION_SUCCESS:
      localStorage.setItem("username", JSON.stringify(action.payload));
      return {
        ...state,
        loading: false,
        user: action.payload,
        isLogRegi: true,
      };

    case REGISRTATION_ERROR:
      return {
        ...state,
        loading: false,
        user: null,
        error: action.payload,
        isLogRegi: false,
      };
      default:
        return state;
  }
}
