import "./css/register.css"
import { useState } from "react"

const Login=()=>{
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    let user={
        username:username,
        password:password
    }
        function Login(){
            console.log(user)
      const log=  fetch("http://localhost:4000/login",{
            method:"post",
            headers:{
                "Content-Type":"application/json;charset=utf-8"
            },
            body:JSON.stringify(user)
        })
        log.then((res)=>res.json()).then((data)=>localStorage.setItem("token",JSON.stringify(data)))

        
    }
    return(
        <div className="main">
            <div className="form">
                <div className="head">Member Register</div>
                <div className="inputs">
                <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Username"/>
                <input onChange={(e)=>{setPassword(e.target.value)}} type="text" placeholder="Password"/>
                <button onClick={Login} className="register">login</button>
                </div>
                <p className="acc">Already have an account?</p>
                <button className="login">Register</button>
            </div>
        </div>
    )
}
export default Login