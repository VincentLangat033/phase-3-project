

import React, { useState } from "react";
import Register from "./Register";
import "./css/login.css"

function Login({ setuseremail, setuserpassword, handlesubmit,setLogged  }) {
const[signup,setsignup]=useState(false)
  return (
 
    signup?<Register setLogged={setLogged}/>:

    <div className='login'>
     <div className='loginWrapper'>
       <div className='loginLeft'>
          <h3 className='loginLogo'> Pool_House</h3>
         <span className='loginDesc'> Log in to begin</span>        </div>
      <div className='loginRight'>
         <div className='loginBox'>
        
    <>
      <form onSubmit={handlesubmit}>
        <h1>Please Log In</h1>
        
        <input 
          onChange={(e) => {
            setuseremail(e.target.value);
          }}
          className="loginInput"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
        <input
          onChange={(e) => {
            setuserpassword(e.target.value);
          }}
          className="loginInput"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        /> <br></br>
        <button className="loginButtton" >Login</button>
      </form>
      <button className="loginButtton" onClick={()=>{setsignup(true)}}>Register</button>
  
    </>
    </div>
      </div>
     </div>
    </div>
  );
}
export default Login;








