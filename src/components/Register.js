// import "./signup.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  ref,
  uploadBytes,
} from "firebase/storage";
import { storage } from "../firebase"



function SignUp({setUserLogin}) {
  const [userdata, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });


  function handleSubmit(e) {
    e.preventDefault();

  
    
      fetch("https://emkayint23.herokuapp.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userdata),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          if (res.response === "User Exist") {
            alert("User Exists Do you want to login?");
          } else {
            // uploadImg();
            setUserData({
              username: "",
              email: "",
              password: "",
              phone: "",
              image: "",
            });
            setUserLogin(res);
            
          }
        });
    
  }

  return (
    <div className="container-main  signup">
      <form className="signup-card " onSubmit={handleSubmit}>
        <div className="row">
        

          <div className="col-sm-6">
            <h4>SignUp</h4>
            {/* <span className="span1">Made for developers by developers</span> */}
            <input
              name="email"
              required
              type="email"
              value={userdata.email}
              className="inputEmail"
              placeholder="Email"
              onChange={(e) =>
                setUserData({
                  ...userdata,
                  email: e.target.value,
                })
              }
            />
            <br />
            <br />
            <input
              type="text"
              className="username"
              placeholder="user name"
              required
              value={userdata.username}
              onChange={(e) =>
                setUserData({
                  ...userdata,
                  username: e.target.value,
                })
              }
            />
            <br />
            <br />
            <input
              type="number"
              className="username"
              placeholder="phone number"
              required
              value={userdata.phone}
              onChange={(e) =>
                setUserData({
                  ...userdata,
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
              required
              placeholder="password"
              value={userdata.password}
              onChange={(e) =>
                setUserData({
                  ...userdata,
                  password: e.target.value,
                })
              }
            />
            <br />
            <br />
            <input type="checkbox" className="check" />
            <span> Agree To Terms And Policies?</span>
            <br />
            <br />
            <input type="submit" value="SignUp" className="submit" />
            <div className="text-center">
              <p>
                Already have an account? <NavLink to="/login">SignIn</NavLink>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp





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