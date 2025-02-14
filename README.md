# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Documentation

For more detailed information on specific components and contexts used in this project, refer to the following documentation:

- [AuthPage Documentation](./docs/pages/AuthPage.page.docs.md): Provides details on the `AuthPage` component, which supports user authentication.
- [UsersHub Context Documentation](./docs/contexts/UsersHub.context.docs.md): Explains the `UsersHubContext` for managing user authentication and user data.
- [WareHouse Context Documentation](./docs/contexts/WareHouse.context.docs.md): Describes the `WareHouseContext` for managing warehouse-related functionalities and state.

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
