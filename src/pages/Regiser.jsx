import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useLoginApis from "../services/useLoginApis";
import { toastWarnNotify } from "../helper/Toastify";
import { useSelector } from "react-redux";

const Regiser = () => {
  const { registerApi } = useLoginApis();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(state=> state.login.token);

  const submitHandle = (e) => {
    e.preventDefault();
    if (!email || !password || !username) {
      toastWarnNotify("All fields are mandatory!");
    }

    const creds = {
      username,
      email,
      password,
    };
    console.log(creds);
    registerApi(creds);
  };
  if(token){
    return <Navigate to="/home"/>
  }
  return (
    <div className="wrapper">
      <h4 className="form-header">Register</h4>
      <form className="box" id="form" onSubmit={submitHandle}>
        <div className="input-box">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-box">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="form-submit" type="submit">
          Sign Up
        </button>
      </form>
      <p className="down-text">
        Do you have a account?
        <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default Regiser;
