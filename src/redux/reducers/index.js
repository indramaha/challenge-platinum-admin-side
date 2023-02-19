import { combineReducers } from "redux";
import authReducers from "./authReducers";
import { carReducers } from "./carReducers";



const rootReducers = combineReducers({
    auth: authReducers,
    car: carReducers,
})

export default rootReducers