import './App.scss';
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import { Button } from '@carbon/react';

// eslint-disable-next-line sort-imports
import About from './pages/about/About.js';
import Home from './pages/home/Home.js';
import React from 'react';
// import logo from './assets/images/logo.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch } from 'state/user/user.actions';


function App() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.userReducer.user);
  return (
    <BrowserRouter>
      <div className="app">
        <div>
          <button onClick={() => dispatch(getUserFetch('oo'))}>get user</button>
          <span>User: {user.name}</span>
        </div>

        {/* <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="app-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">
                  <Button>Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Button>About</Button>
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Navigate replace={true} to="/home" />} />
            <Route path="*" element={<Navigate replace={true} to="/home" />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
