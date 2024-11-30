import React, { useState, useEffect } from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './About/about';
import { Deck } from './Deck/deck';
import { Home } from './Home/home';
import { Login } from './Login/login';
import { Match } from './Match/match';
import { Scores } from './Scores/scores';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const savedLoginState = localStorage.getItem('isLoggedIn');
    return savedLoginState === 'true';
  });

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  function logout() {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn')
    window.location.href = '/';
  }

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <header className='container-fluid'>
          <nav className='navbar fixed-top navbar-dark'>
            <div className='navbar-brand'>
              Match
            </div>
            <menu className='navbar-nav'>
              {!isLoggedIn ? (
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/'>
                    Login
                  </NavLink>
                </li>
              ) : (
                <>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/home'>
                      Home
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/match'>
                      Match
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/scores'>
                      Scores
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/about'>
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item" onClick={logout}>
                    <button className="nav-link" style={{ cursor: 'pointer' }}>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </menu>
          </nav>
        </header>

        <Routes>
          <Route path='/' element={<Login setIsLoggedIn={setIsLoggedIn} />} exact />
          <Route path='/home' element={<Home />} />
          <Route path='/deck' element={<Deck />} />
          <Route path='/match' element={<Match />} />
          <Route path='/scores' element={<Scores />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <footer className='bg-dark text-white-50'>
          <div className='container-fluid'>
            <span className='text-reset'>Jackson Gray</span>
            <a className='text-reset' href="https://github.com/Juicy-J02/startup">GitHub</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>;
}

export default App;
