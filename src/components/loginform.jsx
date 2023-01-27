import React, { useState } from "react";
import './LoginForm.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (1==1) {
      // login is successful
      navigate("/home");
    } else {
      // login failed
      console.log("Incorrect username or password");
    }
  }

  return (
    <div className="container">
        <div className="rectangle-container">
            <div className="github-login">
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                />
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                />
                    <button type="submit" onClick={login}>Log in</button>
            </form>
            </div>
        </div>
    </div>
  );
};

export default LoginForm;