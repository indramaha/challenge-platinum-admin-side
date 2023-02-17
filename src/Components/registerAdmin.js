import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

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
            navigate("/login-admin");
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


    
    return(
        <div className='regis-wrapper'>
            <div className='regis-container'>
            <h1>Register Admin</h1>
            <input onChange={handleEmail} placeholder='email'/>
            <input onChange={handlePassword} placeholder='password'/>
            <button onClick={handleRegis}>Register</button>
            </div>
        </div>
    )
}

export default RegisterAdmin;