import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function RegisterLogin() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);

  const register = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => {
      localStorage.setItem("status", res.data);
      console.log(localStorage.getItem("status"));
    });
  };
  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };

  const logout = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/logout",
    }).then((res) => console.log(res.data));
  };

  return (
    <div className="App">
      <div>
        <h1>Register</h1>
        <input placeholder="username" onChange={(e) => setRegisterUsername(e.target.value)} />
        <input placeholder="password" onChange={(e) => setRegisterPassword(e.target.value)} />
        <button onClick={register}>Register</button>
      </div>

      <div>
        <h1>Login</h1>
        <input placeholder="username" onChange={(e) => setLoginUsername(e.target.value)} />
        <input placeholder="password" onChange={(e) => setLoginPassword(e.target.value)} />
        <button onClick={login}>Login</button>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome back {data.username}</h1> : null}
      </div>

      <div>
        <h1>Logout</h1>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}

export default RegisterLogin;
