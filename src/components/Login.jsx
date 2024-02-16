import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"; // Import Firebase Authentication modules
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth(); // Get the authentication instance
  const provider = new GoogleAuthProvider(); // Create a GoogleAuthProvider

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // The signed-in user info.
        navigate("/");
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <button onClick={signIn} type="button" class="login-with-google-btn"
    style={{
      backgroundColor: "#4285F4",
      color: 'white',
      border: "1px solid white"
    }}>
      <i class="fa-brands fa-google"></i> Sign In with Google
    </button>
    
  );
};

export default Login;
