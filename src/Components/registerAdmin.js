import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import LoginLogo from "../Assets/Images/login-logo.png";
import "./Login.css";

const RegisterAdmin = () =>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    console.log(email)
    const handleEmail = (e)=>{
        setEmail(e.target.value);
    };

    const handlePassword = (e)=>{
        setPassword(e.target.value);
    };

    const handleRegis = () =>{
        const payload ={
            email : email,
            password : password,
            role: "Admin"
        };

        axios.post("https://bootcamp-rent-cars.herokuapp.com/admin/auth/register",payload)
        .then((res)=>{
            navigate("/list-car");
        })
        .catch((err) => {
            const error = err.response;

        if(err.response.status==500){
            if(error.data.errors[0].message=="Validation isEmail on email failed"
            ) {
                setError("email tidak valid")

            }else{
                setError(err.response.data.message);
            }
        }
        });
    };

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
                            <h1>Register Admin</h1>
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
                            <button onClick={handleRegis} className='login-button'>Register</button>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );


    
  
}

export default RegisterAdmin;