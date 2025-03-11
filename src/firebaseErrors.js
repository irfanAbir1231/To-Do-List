export const handleFirebaseError = (error) => {
  const errorCode = error.code;
  const errorMessage = error.message;

  switch (errorCode) {
    case "auth/invalid-api-key":
      console.error(
        "Invalid API key. Please check your Firebase configuration."
      );
      break;
    case "auth/configuration-not-found":
      console.error(
        "Configuration not found. Please ensure your Firebase project is set up correctly."
      );
      break;
    // Add more cases as needed
    default:
      console.error(`Error: ${errorMessage}`);
  }
};
