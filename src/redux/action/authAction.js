import axios from "axios"
import { API } from "../../const/endpoint"

export const handleCheckToken = () => dispatch => {
    const token = localStorage.getItem("token")
    dispatch({
                type: "CHECK_TOKEN",
                payload: {
                    isLogin: false,
                    loading: false,
                }
            })

    if(!token){
        dispatch({
            type: "CHECK_TOKEN",
            payload: {
                isLogin: false,
                loading: false,
            },
        })
    } else {
        dispatch({
            type: "CHECK_TOKEN",
            payload: {
                isLogin: true,
                loading: false,
            },
        })
    }
}

export const handleLogout = () => dispatch => {
    localStorage.removeItem("token")
    dispatch({
        type: "LOGOUT",
        payload: {
            isLogin: false,
        } ,
    })
}

export const loginAction = (payload) => dispatch => {
    axios
        .post(API.ADMIN_LOGIN, payload)
        .then((ress) => {
            dispatch({
                type: "LOGIN",
                payload: {
                    isLogin: true,
                },
            })
            localStorage.setItem("token", ress.data.access_token)
        })
        .catch((err) => console.log(err.message))
}