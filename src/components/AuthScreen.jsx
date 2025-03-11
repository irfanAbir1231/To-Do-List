import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

function AuthScreen({ signInWithGoogle, signInWithGitHub, authError }) {
  const [showSignup, setShowSignup] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-cyan-700 mb-6">
          {showSignup ? "Create an Account" : "Welcome to ITodo"}
        </h1>

        {!showSignup ? (
          <>
            <Login />
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            <button
              onClick={signInWithGoogle}
              className="w-full bg-white border border-gray-300 text-gray-800 p-2 rounded-lg hover:bg-gray-50 px-4 font-bold mt-2 flex items-center justify-center transition-all"
            >
              <FcGoogle className="w-6 h-6 mr-2" />
              Continue with Google
            </button>
            <button
              onClick={signInWithGitHub}
              className="w-full bg-gray-800 text-white p-2 rounded-lg hover:bg-gray-700 px-4 font-bold mt-4 flex items-center justify-center transition-all"
            >
              <FaGithub className="w-6 h-6 mr-2" />
              Continue with GitHub
            </button>
            {authError && (
              <p className="text-red-500 mt-4 text-center">{authError}</p>
            )}
            <div className="mt-6 text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <button
                onClick={toggleSignup}
                className="text-cyan-700 font-bold hover:underline"
              >
                Create an account
              </button>
            </div>
          </>
        ) : (
          <>
            <Signup />
            <div className="mt-6 text-center">
              <span className="text-gray-600">Already have an account? </span>
              <button
                onClick={toggleSignup}
                className="text-cyan-700 font-bold hover:underline"
              >
                Sign in
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AuthScreen;
