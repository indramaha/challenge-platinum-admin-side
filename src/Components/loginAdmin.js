import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../redux/action/authAction";
import LoginLogo from "../Assets/Images/login-logo.png";
import "./Login.css";

const LoginAdmin = () => {
    const state = useSelector((rootReducers) => rootReducers)
    console.log("redux",state)

    const [email, setEmail] = useState("")
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const [password, setPassword] = useState("")
    const handlePassword = (e) => { 
        setPassword(e.target.value)
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = () => {
        const payLoad = {
            email: email,
            password: password
        }

        dispatch(loginAction(payLoad))
    }

    const handleRedirect = () => {
        setTimeout(() => {
            if (state.auth.isLogin === true){
                navigate("/list-car")
            }
        }, 1000);
    }

    useEffect(() => {
        handleRedirect()
        // eslint-disable-next-line
    },[state.auth.isLogin])


    return (  
        <div>

            <div className="login-section-bg">
                <div className="login-section">
                    <div className="login-section-logo">
                        <img src={LoginLogo} alt="login-logo"/>
                    </div>

                    <div className="login-form">
                        <div className="login-form-logo"></div>
                        <div className="login-form-title">
                            <h1>Welcome, Admin BCR</h1>
                        </div>
                        <div className='login-input-bg'>
                            <div className="login-section-input">
                                <div className="login-input-title">
                                    <p>Email</p>
                                </div>
                                    <input onChange={handleEmail} placeholder='admin@mail.com'type='email' className='login-input'/>
                            </div>
                            <div className="login-section-input">
                                <div className="login-input-title">
                                    <p>Password</p>
                                </div>
                                    <input onChange={handlePassword} placeholder='' type='password' className='login-input'/>
                            </div>
                        </div>
                        <div className='login-button-bg'>
                            <button onClick={handleLogin} className='login-button'>Sign In</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
 
export default LoginAdmin;