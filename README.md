# To-Do List Application

## GitHub Link

[GitHub Repository](https://github.com/your-repo-link)

## Project Overview

The To-Do List Application is a React-based web application designed to help users manage their daily tasks efficiently. The application supports user authentication through Firebase and GitHub, allowing users to securely log in and manage their to-do lists.

## Feature Description

- **User Authentication**: Users can sign up and log in using their email, Google, or GitHub accounts.
- **Task Management**: Users can create, update, delete, and mark tasks as completed.
- **User-Specific Data**: Each user's tasks are stored separately, ensuring privacy and data integrity.
- **Responsive Design**: The application is designed to be responsive and user-friendly on various devices.

## Navigation

1. **Home Page**: Users are greeted with a login/signup screen.
2. **Dashboard**: After logging in, users can view their to-do lists, add new tasks, and manage existing ones.
3. **Authentication**: Users can switch between login and signup forms, and also use Google or GitHub for authentication.

## Tools and Technology

- **Frontend**: React, Tailwind CSS, React Icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: Firebase Authentication, Passport.js (GitHub OAuth)
- **Other**: Vite (Build tool), ESLint (Linting), PostCSS (CSS processing)

## API Design

### Endpoints

- **GET /api/todos**: Retrieve all todos for the authenticated user.
- **POST /api/todos**: Create a new todo for the authenticated user.
- **GET /api/todos/:id**: Retrieve a specific todo by ID.
- **PATCH /api/todos/:id**: Update a specific todo by ID.
- **DELETE /api/todos/:id**: Delete a specific todo by ID.

### Authentication Endpoints

- **GET /auth/github**: Initiate GitHub authentication.
- **GET /auth/github/callback**: GitHub authentication callback.
- **GET /api/user**: Retrieve the authenticated user's information.
- **GET /logout**: Log out the authenticated user.

## Use Case Scenarios

1. **User Registration**: A new user signs up using their email and password.
2. **Google Login**: A user logs in using their Google account.
3. **Task Management**: A logged-in user adds a new task, updates an existing task, marks a task as completed, and deletes a task.
4. **GitHub Login**: A user logs in using their GitHub account.

## Challenges & Solutions

- **Challenge**: Integrating multiple authentication methods (Firebase and GitHub).
  - **Solution**: Used Firebase for email and Google authentication, and Passport.js for GitHub OAuth.
- **Challenge**: Ensuring data privacy and integrity.
  - **Solution**: Implemented user-specific data storage and access control using JWT and MongoDB.

## Future Improvements

- **Notifications**: Add email or push notifications for task reminders.
- **Collaboration**: Allow users to share tasks and collaborate with others.
- **Mobile App**: Develop a mobile version of the application for iOS and Android.

## Conclusion

This project provided valuable insights into full-stack development, user authentication, and state management in React. The experience gained will be beneficial for future projects involving complex user interactions and data management.

## Setup GitHub Authentication

1. Go to the Firebase console (https://console.firebase.google.com/)
2. Select your project
3. Go to Authentication > Sign-in method
4. Enable GitHub as a sign-in provider
5. Register your app on GitHub:
   - Go to GitHub > Settings > Developer settings > OAuth Apps > New OAuth App
   - Set the Authorization callback URL to: `https://your-firebase-project-id.firebaseapp.com/__/auth/handler`
6. Copy the GitHub Client ID and Client Secret to Firebase
7. Save the changes

## Running the Application

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
