import React, { useState } from "react";
import "./styles/Form.css";
import Login from "./Login";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Form({ option }) {

  const navigate = useNavigate();
  // Initialize state variables for form data and validation errors
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  // Event handler to update form data as the user types
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to check email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to validate the email using the API
  const isEmailValid = async (email) => {
    const apiValidationUrl = `https://real-time-email-verification-api1.p.rapidapi.com/validate?email=${email}`;
    const apiOptions = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3c775c4d76mshbdb5318bb458b30p173a3ajsn0ae1e9d45c00',
        'X-RapidAPI-Host': 'real-time-email-verification-api1.p.rapidapi.com'
      }
    };

    try {
      const apiResponse = await fetch(apiValidationUrl, apiOptions);
      const validationResult = await apiResponse.json();
      return validationResult;
    } catch (error) {
      console.error("API validation error:", error);
      return null;
    }
  };

  // Event handler to validate the form when submitted
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Implement your form validation logic here
    const validationErrors = {};

    if (!formData.email) {
      validationErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      validationErrors.email = "Invalid email format";
    }

    if (option === 2 && formData.password !== formData.repeatPassword) {
      validationErrors.repeatPassword = "Passwords do not match";
    }

    // Set the validation errors in state
    setErrors(validationErrors);

    // If there are no validation errors, handle sign-up or sign-in
    if (Object.keys(validationErrors).length === 0) {
      const validationResult = await isEmailValid(formData.email);
      if (validationResult) {
        if (
          validationResult.is_valid_format === true &&
          validationResult.is_disposable_email === false &&
          validationResult.is_mx_Record === true &&
          validationResult.is_smtp === true &&
          validationResult.is_catch_all_email === false
        ) {
          // Email is valid, proceed with sign-up or sign-in
          const auth = getAuth();
          if (option === 1) {
            // Sign In
            signInWithEmailAndPassword(auth, formData.email, formData.password)
              .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // You can handle the success, e.g., navigate to another page
                console.log("Signed in:", user);
                navigate('/');
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle the sign-in error, e.g., show an error message
                console.error("Error signing in:", errorCode, errorMessage);
              });
          } else if (option === 2) {
            // Sign Up
            createUserWithEmailAndPassword(auth, formData.email, formData.password)
              .then((userCredential) => {
                // New user is created
                const user = userCredential.user;
                // You can handle the success, e.g., navigate to another page
                console.log("User created:", user);
                navigate('/auth');
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // Handle the sign-up error, e.g., show an error message
                console.error("Error creating user:", errorCode, errorMessage);
              });
          }
        } else {
          // Email did not meet validation criteria, handle accordingly
          // For example, display an error message
          alert("Email did not meet validation criteria");
          console.error("Invalid email:", validationResult);
        }
      }
    }
  };

  return (
    <form className="account-form" onSubmit={handleSubmit}>
      <div
        className={
          "account-form-fields " +
          (option === 1 ? "sign-in" : option === 2 ? "sign-up" : "forgot")
        }
      >
        <input
          id="email"
          name="email"
          type="email"
          placeholder="E-mail"
          required
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}

        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required={option === 1 || option === 2 ? true : false}
          disabled={option === 3 ? true : false}
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        {option === 2 && (
          <>
            <input
              id="repeat-password"
              name="repeatPassword"
              type="password"
              placeholder="Repeat password"
              required={option === 2 ? true : false}
              disabled={option === 1 || option === 3 ? true : false}
              value={formData.repeatPassword}
              onChange={handleInputChange}
            />
            {errors.repeatPassword && (
              <p className="error-message">{errors.repeatPassword}</p>
            )}
          </>
        )}
      </div>
      <button className="btn-submit-form" type="submit">
        {option === 1 ? "Sign in" : option === 2 ? "Sign up" : "Reset password"}
      </button>
      <Login />
    </form>
  );
}

export default Form;
