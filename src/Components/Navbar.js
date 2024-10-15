import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* <Link className="navbar-brand mx-3" to="/">{props.title}</Link> */}
      <a className="navbar-brand mx-3" to="/">{props.title}</a>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            {/* <Link className="nav-link" to="/">Home</Link> */}
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>

        {/* Dark Mode Toggle */}
        <div className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}>
          <input 
            className="form-check-input mx-3" 
            onClick={props.toggleMode} 
            type="checkbox" 
            role="switch" 
            id="darkModeSwitch"
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            Enable Dark Mode
          </label>
        </div>

        {/* Pinkish Mode Toggle */}
        <div className={`form-check form-switch text-${props.mode === "light" ? "pink" : "light"}`}>
          <input 
            className="form-check-input mx-3" 
            onClick={props.toggleMode} 
            type="checkbox" 
            role="switch" 
            id="pinkModeSwitch"
          />
          <label className="form-check-label" htmlFor="pinkModeSwitch">
            Enable Pinkish Mode
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  anothermode: PropTypes.func.isRequired,
};
