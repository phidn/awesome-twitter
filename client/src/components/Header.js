import React, { useContext } from 'react'
import "./../styles/Header.css";
import {Link} from "react-router-dom";
import AppContext from "./AppContext";
import { useDispatch } from 'react-redux';

export default function Header() {
  const { state } = useContext(AppContext);
  const { user } = state;
  
  const dispatch = useDispatch();
  const signOut = () => {
    localStorage.removeItem("awesome_twitter_token");
    dispatch({type: "CURRENT_USER", payload: null});
  }

  return (
    <header className="header">
      <h1 className="logo">
        <Link to="/">twitter</Link>
      </h1>
      <nav>
        <ul className="main-nav">{
          user? <>
            <li><span className="user-name">Hello, <span>{user.userName}</span>
            </span></li>
            <li className="sign-out" onClick={() => signOut()}>Sign out</li>          
          </>: <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li> 
          </>
        }
        </ul>
      </nav>
    </header>
  )
}
