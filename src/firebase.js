// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbqE5v02nrzR64tRIqpc-hrz3qGjikWh0",
  authDomain: "todolist-d5948.firebaseapp.com",
  projectId: "todolist-d5948",
  storageBucket: "todolist-d5948.firebasestorage.app",
  messagingSenderId: "267634157654",
  appId: "1:267634157654:web:2ec2bcebf9867fb24eb3f7",
  measurementId: "G-1SNC2RJJFC",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
