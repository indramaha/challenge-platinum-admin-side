import { combineReducers } from "redux";
import authReducers from "./authReducers";



const rootReducers = combineReducers({
    auth: authReducers,
    
})

export default rootReducers