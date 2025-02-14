# AuthPage Documentation

## Overview

The `AuthPage` component provides a user authentication interface that supports both sign-in and sign-up functionalities. It is designed to be used within a React application and leverages context for user management.

## Components

### `AuthPage`

This is the main component that wraps the `AuthenticationPage` component with the `UsersHubProvider` context.

#### Props

- `appName` (string, optional): The name of the application to display in the sign-in title. Defaults to `null`.

#### Usage

```jsx
import AuthPage from "./path/to/AuthPage";

function App() {
  return <AuthPage appName="MyApp" />;
}
```
