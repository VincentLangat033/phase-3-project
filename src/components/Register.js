import React, { useState } from "react";
import "./css/header.css";
import "./css/register.css";
function Register({ setLogged }) {
  const [name, setname] = useState("");
  const [user_name, setusername] = useState("");

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  function handlesubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        // user_name: user_name,
        email: email,
        password_digest: password,
      }),
    });
    setname("");
    setemail("");
    setpassword("");
    e.target.reset("");
    setLogged(true);
  }
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Pool_House</h3>
          <span className="loginDesc"> Register to begin</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <form onSubmit={handlesubmit}>
              Name:{" "}
              <input
                className="loginInput"
                placeholder="Enter your name"
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                }}
                required
              />{" "}
              <br></br>
              Username:{" "}
              <input
                className="loginInput"
                placeholder="Enter user name"
                type="text"
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                required
              />{" "}
              <br></br>
              Email:{" "}
              <input
                className="loginInput"
                placeholder="Enter your email"
                type="email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                required
              />{" "}
              <br></br>
              Password:{" "}
              <input
                className="loginInput"
                placeholder="Enter your password"
                type="text"
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
                required
              />{" "}
              <br></br>
              <input
                className="loginRegisterButton"
                type="submit"
                value="Submit"
              />
              <button className="loginRegisterButton1">
                Have an Account? Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
