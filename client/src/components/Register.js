import React from 'react'
import "./../styles/Auth.css";

export default function Register() {
  return (
    <section className="auth-container">
      <form className="form-auth">
        <h2>Register New Account</h2>
        <div className="error-message">Error: Your Password is not correct</div>
        <input type="name" name="name" required placeholder="Name" />
        <input type="email" name="email" required placeholder="Email" />
        <input type="password" name="password" required placeholder="Password" />
        <button className="btn" type="submit">Register</button>
      </form>
    </section>
  )
}
