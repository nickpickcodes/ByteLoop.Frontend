import React from 'react'
import "./Navbar.css"
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header>
  <span  className="logo">
    <NavLink to='/' className="nav-link">
    <h2>Byteloop</h2>
    </NavLink>
  </span>
  <input type="checkbox" id="nav-toggle" className="nav-toggle" />
  <nav>
    <ul>
      <li><NavLink to="/" className="nav-link">Home</NavLink></li>
      <li><NavLink to="/" className="nav-link">About</NavLink></li>
      <li><NavLink to="/" className="nav-link login-btn">Login</NavLink></li>
      <li><NavLink to="/" className="nav-link register-btn">Register</NavLink></li>

    </ul>
  </nav>
  <label htmlFor="nav-toggle" className="nav-toggle-label">
    <span></span>
  </label>
</header>

  )
}

export default Navbar