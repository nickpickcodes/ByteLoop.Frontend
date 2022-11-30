import React from 'react'
import "./Navbar.css"
import {AiOutlineMenu} from "react-icons/ai"
const Navbar = () => {
  return (
    <header>
        <figure className="brand">Byteloop</figure>
        <nav className="menu">
            <input type="checkbox" id="menuToggle" />
            <label for="menuToggle" className="menu-icon"><AiOutlineMenu className="menu-bars" /></label>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Serviços</li>
                <li>Login</li>
                <li>Register</li>
            </ul>
        </nav>
    </header>

  )
}

export default Navbar