
import React,{useState} from "react";
import "./css/header.css"
import "./css/register.css"
function Register({setLogged}) {
    const[name,setname]=useState("")
const[email,setemail]=useState("")
const[password,setpassword]=useState("")
function handlesubmit(e){
    e.preventDefault()
    fetch("http://localhost:9292/users",
    {
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify({
        name:name,
        email:email,
        password_digest:password
        
      })

    }
    )
    setname("")
    setemail("")
    setpassword("")
    e.target.reset("")
    setLogged(true)
  }
  return (
    <form  onSubmit={handlesubmit}>
      <label>Enter your name </label>
      <input type="text" onChange={(e)=>{setname(e.target.value)}} required/>
      <label>Enter your email</label>
      <input type="email" onChange={(e)=>{setemail(e.target.value)}} required/>
      <label>Enter your password </label>
      <input type="text" onChange={(e)=>{setpassword(e.target.value)}} required/>
      <input type="submit" value="submit"/>
    </form>
  );
}
export default Register







// import React from 'react'
// import "./css/header.css"
// import "./css/register.css"

// function Register() {
//   return (
//     <div className='login'>
//      <div className='loginWrapper'>
//        <div className='loginLeft'>
//          <h3 className='loginLogo'> HMS</h3>
//          <span className='loginDesc'> Log in to begin</span>

//        </div>
//        <div className='loginRight'>
//          <div className='loginBox'>
//          <form action="/signup" method="post">
//            <input placeholder="Name" className="loginInput" name= "name" /> 
//            <input placeholder="Username" className="loginInput"  />
//            <input placeholder="Email" className="loginInput" />
//            <input placeholder="Password" className="loginInput" />
//            <button className="loginButtton">Sign Up</button>
           
//            <button className="loginRegisterButton">Log into Account</button>
//            </form>
         
         
//          </div>

//        </div>
      

//      </div>

//     </div>
//   )
// }

// export default Register;