import React, { useState } from "react";
import { toastWarnNotify } from "../helper/Toastify";
import useLoginApis from "../services/useLoginApis";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginApi } = useLoginApis();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toastWarnNotify("All fields are mandatory!");
    }

    const creds = {
      email,
      password,
    };
    console.log(creds);
    loginApi(creds);
  };

  return (
    <div className="wrapper">
      <h4 className="form-header">Login</h4>
      <form className="box" id="form" onSubmit={submitHandle}>
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
          Sign In
        </button>
      </form>
      <p className="down-text">
        Don't you have a account?
        <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
