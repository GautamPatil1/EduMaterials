// App.jsx
import React, { useState } from "react";
import Form from "./Form";
import "./styles/Form.css";
function FormContainer() {
  const [option, setOption] = useState(1);
  document.body.style.fontFamily = 'Nunito, Roboto, Arial, sans-serif';
  document.body.style.background = '#4D6FE5';
  document.body.style.height = '100vh';
  return (
    <div id="app">
      <div className="container">
        <header>
          <div
            className={
              "header-headings " +
              (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
            }
          >
            <span>Sign in to your account</span>
            <span>Create an account</span>
            <span>Reset your password</span>
          </div>
        </header>
        <ul className="options">
          <li
            className={option === 1 ? "active" : ""}
            onClick={() => setOption(1)}
          >
            Sign in
          </li>
          <li
            className={option === 2 ? "active" : ""}
            onClick={() => setOption(2)}
          >
            Sign up
          </li>
          <li
            className={option === 3 ? "active" : ""}
            onClick={() => setOption(3)}
          >
            Forgot
          </li>
        </ul>
        <Form option={option} />
      </div>
    </div>
  );
}

export default FormContainer;
