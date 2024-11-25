import React from "react";
import './login.css'

export function Login() {
  return (
  <main className='container-fluid bg-secondary text-center'>
    <div className="LoginContainer">
      <div className="InuptUsername">
        <h1>👤</h1>
        <input type="text" placeholder="username" />
      </div>
      <div className="InputPassword">
        <h1>🔒</h1>
        <input type="password" placeholder="password" />
      </div>
      <div className="ButtonContainer">
        <button className="login" type="submit">Login</button>
        <button className="create" type="submit">Create</button>
      </div>
    </div>
  </main>
);
}
