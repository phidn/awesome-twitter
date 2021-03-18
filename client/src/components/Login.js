import React, { useState } from 'react'
import "./../styles/Auth.css";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [userInput, setUserInput] = useState({
    email: "",
    password: ""
  });
  const [errorMessage, setErrorMessage] = useState(null);
  
  const handleChange = (event) => {
    let {name, value} = event.target;
    setUserInput({
      ...userInput,
      [name]: value
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await axios({
        url: "/api/v1/auth/login",
        method: "POST",
        data: userInput
      });
      const { token, userName } = response.data.data;
      localStorage.setItem("awesome_twitter_token", token);
      dispatch({
        type: "CURRENT_USER",
        payload: { userName }
      });
      history.push("/");
    } catch (error) {
      console.log("~ error", error);
      setErrorMessage(error.response.data.message);
    }
  }

  return (
    <section className="auth-container">
      <form className="form-auth" onSubmit={handleSubmit}>
        <h2>Enter Your Account</h2>
        { errorMessage && (
          <div className="error-message">Error: {errorMessage}</div>
        )}
        <input type="email" name="email" required placeholder="Email" value={userInput.email} onChange={handleChange} />
        <input type="password" name="password" required placeholder="Password" value={userInput.password} onChange={handleChange}/>
        <button className="btn" type="submit">Login</button>
      </form>
    </section>
  )
}
