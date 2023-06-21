import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  function loginUser() {
    const users = JSON.parse(localStorage.getItem("registeredUserList"));
    for (let i = 0; i < users.length; i++) {
      if (email === users[i].userEmail && password === users[i].userPassword) {
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(users[i]))
        localStorage.setItem("signedIn", JSON.stringify(true))
        
      }
    }
  }
  return (
    <div className="form">
      <h1>Welcome Back</h1>
      <p>SignIn to continue</p>
     <div className="inputIcon"> 
     <i className="fa fa-envelope " aria-hidden="true" ></i>
      <input
        type="email"
        placeholder="Enter your email adress"
        onChange={(event) => setEmail(event.target.value)}
      />
      </div>
      <div className="inputIcon">
      <i class="fa fa-lock" aria-hidden="true"></i>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(event) => setPassword(event.target.value)}
      />
      </div>
        <button className="login--button" onClick={loginUser}>
          Login
        </button>
     <p>Don't have account? <Link to={"/Register"} className="link">Create a new account</Link></p>
    </div>
  );
}

export default Login;
