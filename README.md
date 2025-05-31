<div align="center">

  <h1>Alkali-Mtls React + Vite Template</h1>
  <p>
    <strong>Welcome to the <span style="color:#38bdf8;">Alkali-Mtls</span> React + Vite starter!</strong>
  </p>
  <p>
    This project provides a streamlined setup for building modern React applications with <b>Vite</b>, <b>Tailwind CSS</b>, and essential context providers for user and warehouse management.
  </p>

  <img src="https://vitejs.dev/logo.svg" alt="Vite Logo" width="50" style="margin: 1rem;">
  <img src="https://react.dev/images/uwu.png" alt="React Logo" width="100" style="margin: 1rem;">
  <img src="https://tailwindcss.com/favicons/favicon.ico" alt="Tailwind CSS Logo" width="50" style="margin: 1rem;">

  <p><em>by : <a href="https://github.com/AvinashKumar3000">Avinash</a> <a href="https://www.mviiitech.com">[ MVIII TECH (OPC) Pvt Ltd ]</a></em></p>
</div>

---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to use it 👀

---

- install the package `npm i alkali-mtls`
- install dependencies **Tailwind CSS**

  - `npm install tailwindcss @tailwindcss/vite`
  - then for further steps follow this official tailwind css website
  - after installing tailwindcss you can use as example shown below. 😀

- Happy Hacking 🤠🤠🤠🧑‍💻

---

## Documentation

For more detailed information on specific components and contexts used in this project, refer to the following documentation:

- [AlMTemplateApp](#almtemplateapp): The usage of ur AlMTemplateApp
- [UsersHub Context Documentation](#usershub-context-documentation-): Explains the `UsersHubContext` for managing user authentication and user data.
- [WareHouse Context Documentation](#warehouse-context-documentation): Describes the `WareHouseContext` for managing warehouse-related functionalities and state.

Certainly! Let's break down how to use `AlMTemplateApp` and `AlMNavigationTemplateApp` components in your React application.

### `AlMTemplateApp`

`AlMTemplateApp` is a wrapper component that likely provides a common layout or styling for your application. It takes a `title` prop and can wrap other components or content.

### `AlMNavigationTemplateApp`

`AlMNavigationTemplateApp` is a component designed to handle navigation within your application. It takes a `navItems` prop, which is an array of navigation items. Each navigation item is an object with `icon`, `text`, and `component` properties.

### Combined Usage in App Component

In your `App` component, you are combining these two components to create a structured layout with navigation:

- `AlMTemplateApp` provides the overall layout and title for the application.
- `AlMNavigationTemplateApp` handles the navigation, displaying different components based on the selected navigation item.

This structure helps in organizing your application into a cohesive layout with easy navigation.

## Example Usage

```jsx
import { AlMNavigationTemplateApp, AlMTemplateApp } from "alkali-mtls";
import "./App.css";

export default function App() {
  const navItems = [
    { icon: "🏠", text: "Home", component: <h1>Sample Home Page</h1> },
    { icon: "🔍", text: "Search", component: <h1>Sample Search Page</h1> },
    { icon: "📄", text: "About", component: <h1>Sample About Page</h1> },
    { icon: "📞", text: "Contact", component: <h1>Sample Contact Page</h1> },
    { icon: "⚙️", text: "Settings", component: <h1>Sample Settings Page</h1> },
  ];
  return (
    <>
      <AlMTemplateApp title={"your application name here"}>
        {/* <div className="container mx-auto p-4">
          <h2 className="text-xl font-bold">Welcome to My Application</h2>
          <p>This is the main content of the application.</p>
        </div> */}
        <AlMNavigationTemplateApp navItems={navItems} />
      </AlMTemplateApp>
    </>
  );
}
```

---

### UsersHub-Context-Documentation 🚀

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

---

### WareHouse Context Documentation

## Overview

The `WareHouseContext` provides warehouse-related functionalities and state management for your application. It allows you to add, retrieve, update, and delete items in the warehouse, as well as manage items based on user IDs.

## Usage

To use the `WareHouseContext`, wrap your component tree with the `WareHouseProvider`:

```jsx
import { WareHouseProvider } from "./contexts/WareHouse";

function App() {
  return (
    <WareHouseProvider>
      <YourComponent />
    </WareHouseProvider>
  );
}
```

## API

### WareHouseProvider

The `WareHouseProvider` component provides the context to its children.

#### Props

- **children** (`React.ReactNode`): The child components.

#### Context Methods

- **`addItem(item)`**

  - Adds a new item to the warehouse.
  - **item** (`Object`): The item to be added.
  - **id** (`string`, optional): The unique identifier of the item. If not provided, a unique ID will be generated.
  - **userId** (`string`): The ID of the user who owns the item.

- **`getItemById(id)`**

  - Retrieves an item by its ID.
  - **id** (`string`): The unique identifier of the item.
  - **Returns**: The item with the specified ID, or `undefined` if not found.

- **`getItemsByUserId(userId)`**

  - Retrieves items by a user's ID.
  - **userId** (`string`): The ID of the user.
  - **Returns**: An array of items owned by the specified user.

- **`updateItem(updatedItem)`**

  - Updates an existing item in the warehouse.
  - **updatedItem** (`Object`): The item with updated properties.
  - **id** (`string`): The unique identifier of the item to be updated.

- **`updateItemsByUserId(userId, updatedItems)`**

  - Updates multiple items for a specific user.
  - **userId** (`string`): The ID of the user.
  - **updatedItems** (`Object[]`): An array of updated items.

- **`deleteItem(id)`**

  - Deletes an item from the warehouse.
  - **id** (`string`): The unique identifier of the item to be deleted.

- **`deleteItemsByUserId(userId)`**
  - Deletes all items for a specific user.
  - **userId** (`string`): The ID of the user whose items should be deleted.

##### Example code

```jsx
import { WareHouseProvider, useWareHouseContext } from "./contexts/WareHouse";

function YourComponent() {
  const { addItem, getItemById, getItemsByUserId, updateItem, deleteItem } =
    useWareHouseContext();

  // Example usage of context methods
  // addItem({ name: 'Item 1', userId: 'user123' });
  // const item = getItemById('item123');
  // const userItems = getItemsByUserId('user123');
  // updateItem({ id: 'item123', name: 'Updated Item 1' });
  // deleteItem('item123');

  return <div>Your Component</div>;
}

function App() {
  return (
    <WareHouseProvider>
      <YourComponent />
    </WareHouseProvider>
  );
}
```
