import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
  const register = JSON.parse(localStorage.getItem("registeredUserList")) || [];
  const [registeredUserList, setRegisteredUserList] = useState(register);

  useEffect(() => {
    localStorage.setItem("registeredUserList", JSON.stringify(registeredUserList));
  }, [registeredUserList]);

  const registerUser = (userFirstName,userLastName,userEmail,userPassword,confirmPassword) =>{
    setRegisteredUserList((registeredUserList) =>[
      ...registeredUserList,{
        userFirstName:userFirstName,
        userLastName:userLastName,
        userEmail:userEmail,
        userPassword: userPassword,
        confirmPassword:confirmPassword
      }
    ])
  }
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate()

  function registerUsers(){
    registerUser(
      userFirstName,
      userLastName,
      userEmail,
      userPassword,
      confirmPassword,
     
    )
  
    
  }

  function routeLogin(){
    navigate("/");
  }

  return (
    <div className="form">
      <h1>Create Account</h1>
      <p>Create a new account</p>
      <div  className="inputIcon">
      <i class="fa fa-user" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Enter your first name"
        onChange={(event) => setUserFirstName(event.target.value)}
      />
      </div>
      <div className="inputIcon">
      <i class="fa fa-user" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Enter your last name"
        onChange={(event) => setUserLastName(event.target.value)}
      />
      </div>
      <div  className="inputIcon">
      <i className="fa fa-envelope " aria-hidden="true" ></i>
      <input
        type="email"
        placeholder="Enter your email adress"
        onChange={(event) => setUserEmail(event.target.value)}
      />
      </div>
      <div  className="inputIcon">
      <i class="fa fa-lock" aria-hidden="true"></i>
      <input
        type="password"
        placeholder="Enter your password"
        onChange={(event) => setUserPassword(event.target.value)}
      />
      </div>
      <div  className="inputIcon">
      <i class="fa fa-lock" aria-hidden="true"></i>
      <input
        type="password"
        placeholder="Confirm your password"
        onChange={(event) => setConfirmPassword(event.target.value)}
      />
      </div>
        <button className="register--button" onClick={registerUsers}>Register</button>
        <p>Don't have account? <Link to={"/"} className="link">Login</Link></p>
    </div>
  );
}
