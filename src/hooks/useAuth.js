import { useState, useEffect } from "react";
import {
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth, provider } from "../firebase";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
      setAuthError("Failed to sign out. Please try again.");
    }
  };

  const signInWithGoogle = async () => {
    try {
      setAuthError(null);
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Google authentication error:", error);
      setAuthError("Google authentication failed. Please try again.");
    }
  };

  const signInWithGitHub = async () => {
    try {
      setAuthError(null);
      const githubProvider = new GithubAuthProvider();
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error("GitHub authentication error:", error);
      setAuthError("GitHub authentication failed. Please try again.");
    }
  };

  return {
    user,
    loading,
    authError,
    handleLogout,
    signInWithGoogle,
    signInWithGitHub,
  };
}
