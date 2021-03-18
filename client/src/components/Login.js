import React from 'react'
import "./../styles/Auth.css";

export default function Login() {
  return (
    <section className="auth-container">
      <form className="form-auth">
        <h2>Enter Your Account</h2>
        <div className="error-message">Error: Your Password is not correct</div>
        <input type="email" name="email" required placeholder="Email" />
        <input type="password" name="password" required placeholder="Password" />
        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  )
}
