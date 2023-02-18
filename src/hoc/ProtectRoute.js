import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { handleCheckToken } from "../redux/action/authAction";

const ProtectedRoute = () => {
    const state = useSelector((rootReducers) => rootReducers)
    console.log("hasil state",state)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleCheckToken())
        // eslint-disable-next-line
    },[state.auth.isLogin])

    if(state.auth.loading){
        return("loading...")
    }

    return state.auth.isLogin ? <Outlet /> : <Navigate to={'/login'} />
}

export default ProtectedRoute;