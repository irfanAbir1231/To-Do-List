import React from "react";
import GoogleAuthButton from "./GoogleAuthButton";
import { FaGithub } from "react-icons/fa";

const AuthOptions = () => {
  const signInWithGitHub = () => {
    window.location.href = "http://localhost:3000/auth/github";
  };

  return (
    <div>
      <button>Login</button>
      <GoogleAuthButton />
      <button
        onClick={signInWithGitHub}
        className="bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 px-4 font-bold mt-2 flex items-center"
      >
        <FaGithub className="w-6 h-6 mr-2" /> Continue with GitHub
      </button>
      <button>Signup</button>
    </div>
  );
};

export default AuthOptions;
