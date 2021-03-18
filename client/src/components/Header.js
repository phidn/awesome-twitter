import React from 'react'
import "./../styles/Header.css";
import {Link} from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">twitter</Link>
      </h1>
      <nav>
        <ul className="main-nav">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><span className="user-name">Hello, PHIDNDEV</span></li>
          <li><Link to="/#">Sign out </Link></li>
        </ul>
      </nav>
    </header>
  )
}
