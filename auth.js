import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebaseConfig";
const githubAuth = require("./githubAuth");

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User Info: ", user);
  } catch (error) {
    console.error("Error during sign-in: ", error);
  }
};

app.use(githubAuth);

export { signInWithGoogle };
