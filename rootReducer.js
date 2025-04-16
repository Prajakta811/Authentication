import { combineReducers } from "redux";
import reducer from "./reducer";
import loginReducer from "./registarionReducer";


const rootReducer = combineReducers({
    user : reducer,
    loginUser:loginReducer,
})

export default rootReducer;
