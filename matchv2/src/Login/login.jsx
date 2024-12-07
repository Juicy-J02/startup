import React from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './login.css';

export function Login({ setIsLoggedIn }) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate(); // Hook to navigate programmatically

  async function loginUser() {
    loginOrCreate(`/api/auth/login`);
  }

  async function createUser() {
    loginOrCreate(`/api/auth/create`);
  }

  async function loginOrCreate(endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: JSON.stringify({ userName: userName, password: password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    
    if (response?.status === 200) {
      localStorage.setItem('userName', userName);
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      const body = await response.json();
      setDisplayError(`⚠ Error: ${body.msg}`);
    }
  }

  return (
    <main className='container-fluid bg-secondary text-center'>
      <div className="LoginContainer">
        <div className="InuptUsername">
          <h1>👤</h1>
          <input type="text" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="InputPassword">
          <h1>🔒</h1>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <p className="eror">{displayError}</p>
        <div className="ButtonContainer">
          <button className="login" type="button" onClick={() => loginUser()} disabled={!userName || !password}>Login</button>
          <button className="create" type="button" onClick={() => createUser()} disabled={!userName || !password}>Create</button>
        </div>
      </div>
    </main>
  );
}
