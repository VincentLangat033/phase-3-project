// import "./Login.css"
import { NavLink } from "react-router-dom";
import { useState } from "react";
// import useLogin from "../../hooks/useLogin";
// import axios from 'axios'

function Login({ setUserLogin }){
  const [loading, setLoading] = useState(false)
  const[loginData, setLoginData] = useState({
    password: "",
    phone: "",
  })

  function handleLogin(e){
    e.preventDefault()
    setLoading(true)
    fetch(
      `https://emkayint23.herokuapp.com/login/${loginData.phone}/${loginData.password}`
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.data === "Error login") {
          alert("Wrong userName or password");
        } else {
          alert("Welcome");
          setUserLogin(res);
          
        }
      });
  }


  return (
    <div className="container-main  login" onSubmit={handleLogin}>
      <form className="login-card ">
        <h4>Login</h4>
        {/* <span className="span1">Login to manage your account</span> */}
        <input
          name="phone"
          type="number"
          className="inputEmail"
          placeholder="Enter Phone No"
          value={loginData.phone}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              phone: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input
          className="password"
          type="password"
          name="password"
          placeholder="Enter Pass"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({
              ...loginData,
              password: e.target.value,
            })
          }
        />
        <br />
        <br />
        <input type="checkbox" className="check" />
        <span> Remember Me?</span>
        <br />
        <br />
        <button type="submit" className="submit">Submit</button>
        <br />
        <div className="text-center">
          <p>
            Don't have an account?
            <NavLink to="/register"> SignUp</NavLink>
          </p>
          <p>Forget Password</p>
        </div>
      </form>
    </div>
  );
}

export default Login








// import React from 'react'
// import "./css/login.css"
// function Login() {
//   return (
//     <div className='login'>
//      <div className='loginWrapper'>
//        <div className='loginLeft'>
//          <h3 className='loginLogo'> HMS</h3>
//          <span className='loginDesc'> Log in to begin</span>
//        </div>
//        <div className='loginRight'>
//          <div className='loginBox'>
      
//            <input placeholder="Email" className="loginInput" />
//            <input placeholder="Password" className="loginInput" />
//            <button className="loginButtton">Log In</button>
//            <span className="loginForgot">Forgot Password? </span>
//            <button className="loginRegisterButton">Create a New Account</button>
//          </div>
//        </div>
//      </div>
//     </div>
//   )
// }

// export default Login