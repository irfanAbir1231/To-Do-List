import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyDbqE5v02nrzR64tRIqpc-hrz3qGjikWh0",
    authDomain: "todolist-d5948.firebaseapp.com",
    projectId: "todolist-d5948",
    storageBucket: "todolist-d5948.firebasestorage.app",
    messagingSenderId: "267634157654",
    projectId: "todolist-d5948",
    storageBucket: "todolist-d5948.firebasestorage.app",
    messagingSenderId: "267634157654",
    appId: "1:267634157654:web:2ec2bcebf9867fb24eb3f7",
    measurementId: "G-1SNC2RJJFC",
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
