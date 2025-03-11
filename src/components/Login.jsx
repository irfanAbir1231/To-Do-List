import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AuthForm from "./AuthForm";

function Login() {
  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  return <AuthForm title="Login" handleSubmit={handleLogin} />;
}

export default Login;
