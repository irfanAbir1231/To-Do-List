import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import AuthForm from "./AuthForm";

function Signup() {
  const handleSignup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  return <AuthForm title="Signup" handleSubmit={handleSignup} />;
}

export default Signup;
