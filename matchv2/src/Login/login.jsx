import React from "react";
import { useNavigate } from "react-router-dom";
import './login.css';

export function Login({ setIsLoggedIn }) {
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [displayError, setDisplayError] = React.useState(null);
  const navigate = useNavigate();

  function loginUser() {
    const user = JSON.parse(localStorage.getItem('credentials'));
    if (user && user.userName === userName && user.password === password) {
      setIsLoggedIn(true);
      navigate('/home');
    } else {
      setDisplayError('Invalid Credentials');
    }
  }

  function createUser() {
    const credentials = {
      userName: userName,
      password: password
    };
    localStorage.setItem('credentials', JSON.stringify(credentials));
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
