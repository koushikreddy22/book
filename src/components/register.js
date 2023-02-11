import { useEffect, useState } from "react"
import { redirect, useNavigate } from "react-router-dom"
import { Redirect } from 'react-router-dom';
import { History } from "history"
import "./css/register.css"
import navigate from "navigate";

const Register=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let user={
        username,password
    }
        function Register(){
            console.log(user)
        fetch("http://localhost:4000/register",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then((res)=>res.json()).then((data)=>{
            alert("Registeration successful")
        })

        
    }

    return(
        <div className="main-reg">
            <div className="form">
                <div className="head">Member Register</div>
                <div className="inputs">
                <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Username"/>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="Password"/>
                <input type="text" placeholder="Confirm Password"/>
                <button className="register" onClick={()=>{Register()}}>Register</button>
                </div>
                <p className="acc">Already have an account?</p>
                <button className="login">Login</button>
            </div>
        </div>
    )
}
export default Register