# UsersHub Context Documentation 🚀

## Introduction

The `UsersHubContext` provides a way to manage user authentication and user data within your React application. This context includes functionalities for logging in, logging out, and creating new users.

## Setup 🛠️

To use the `UsersHubContext`, you need to wrap your application (or part of it) with the `UsersHubProvider`.

### Example

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UsersHubProvider } from "./contexts/UsersHub";

ReactDOM.render(
  <UsersHubProvider>
    <App />
  </UsersHubProvider>,
  document.getElementById("root")
);
```

## Usage 📚

You can access the context values using the `useContext` hook.

### Example

```jsx
import React, { useContext } from "react";
import { UsersHubContext } from "./contexts/UsersHub";

const AuthPage = () => {
  const { users, isAuthenticated, login, logout, createNewUser } =
    useContext(UsersHubContext);

  const handleLogin = () => {
    const username = "john";
    const password = "John@123";
    if (login(username, password)) {
      console.log("Login successful");
    } else {
      console.log("Login failed");
    }
  };

  const handleLogout = () => {
    logout();
    console.log("Logged out");
  };

  const handleCreateUser = () => {
    const username = "newuser";
    const password = "NewUser@123";
    createNewUser(username, password);
    console.log("User created");
  };

  return (
    <div>
      <h1>Auth Page</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleCreateUser}>Create User</button>
      <div>
        <h2>Users List</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Authentication Status</h2>
        <p>{isAuthenticated ? "Authenticated" : "Not Authenticated"}</p>
      </div>
    </div>
  );
};

export default AuthPage;
```

## Context Values 📦

- `users`: An array of user objects.
- `isAuthenticated`: A boolean indicating if a user is authenticated.
- `login(username, password)`: A function to log in a user.
- `logout()`: A function to log out the current user.
- `createNewUser(username, password)`: A function to create a new user.

## Initial Data 🗂️

The context initializes with the following user data:

```json
[
  { "id": 452103, "username": "ram", "password": "Ram@123" },
  { "id": 97301, "username": "john", "password": "John@123" },
  { "id": 36987, "username": "jane", "password": "Jane@123" },
  { "id": 840808, "username": "alice", "password": "Alice@123" },
  { "id": 769999, "username": "bob", "password": "Bob@123" }
]
```

## Conclusion 🎉

The `UsersHubContext` is a powerful tool for managing user authentication and user data in your React application. By following the setup and usage instructions, you can easily integrate it into your project.
