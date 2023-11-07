import { auth, provider } from "./firebase";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <button onClick={signIn} type="button" class="login-with-google-btn">
      Sign In with Google
    </button>
  );
};

export default Login;
