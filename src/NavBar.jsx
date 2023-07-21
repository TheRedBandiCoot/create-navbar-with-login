import React, { useState } from 'react';
import reactLogo from './assets/react_logo.png';
import { useAuth0 } from '@auth0/auth0-react';

const navList = ['Home', 'Contact', 'About', 'Services', 'Products'];

function NavBar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [isClick, setClick] = useState(true);
  const [addClass, setAddClass] = useState({
    hamburger: 'hamburger',
    navList: 'nav-list',
    login: 'login',
  });

  const handleClick = () => {
    isClick
      ? setAddClass({
          ...addClass,
          hamburger: 'hamburger active',
          navList: 'nav-list show',
          login: 'login show',
        })
      : setAddClass({
          ...addClass,
          hamburger: 'hamburger',
          navList: 'nav-list',
          login: 'login',
        });

    setClick(!isClick);
  };

  return (
    <nav className="nav-bar">
      <div className="branding">
        <h3>React</h3>
        <img src={reactLogo} alt="react_logo" />
      </div>
      <ul className={addClass.navList}>
        {navList.map((nav, i) => {
          return (
            <li key={i}>
              <a href="#">{nav}</a>
            </li>
          );
        })}
      </ul>
      <div className={addClass.login}>
        <button type="button">Sign Up</button>
        <span></span>
        {isAuthenticated ? (
          <button type="button" onClick={logout}>
            Logout
          </button>
        ) : (
          <button type="button" onClick={loginWithRedirect}>
            Login In
          </button>
        )}
      </div>
      <div className={addClass.hamburger} onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

export default NavBar;
