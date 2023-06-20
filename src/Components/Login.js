import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function routeRegister() {
    navigate("/Register");
  }

  function loginUser() {
    const users = JSON.parse(localStorage.getItem("registeredUserList"));
    for (let i = 0; i < users.length; i++) {
      if (email === users[i].userEmail && password === users[i].userPassword) {
        setIsAuthenticated(true);
      }
    }
  }
  return (
    <div className="form">
      <h1>Login to your account</h1>
      <input
        type="email"
        placeholder="Enter your email adress"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <div className="form--buttons">
        <button className="login--button" onClick={loginUser}>
          Login
        </button>
        <button className="register--button" onClick={routeRegister}>
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
