# WareHouse Context Documentation

## Overview

The `WareHouseContext` provides warehouse-related functionalities and state management for your application. It allows you to add, retrieve, update, and delete items in the warehouse, as well as manage items based on user IDs.

## Usage

To use the `WareHouseContext`, wrap your component tree with the `WareHouseProvider`:

````jsx
import { WareHouseProvider } from './contexts/WareHouse';

function App() {
  return (
    <WareHouseProvider>
      <YourComponent />
    </WareHouseProvider>
  );
}

## API

### WareHouseProvider

The `WareHouseProvider` component provides the context to its children.

#### Props

- **children** (`React.ReactNode`): The child components.

#### Context Methods

- **addItem(item)**
    - Adds a new item to the warehouse.
    - **item** (`Object`): The item to be added.
    - **id** (`string`, optional): The unique identifier of the item. If not provided, a unique ID will be generated.
    - **userId** (`string`): The ID of the user who owns the item.

- **getItemById(id)**
    - Retrieves an item by its ID.
    - **id** (`string`): The unique identifier of the item.
    - **Returns**: The item with the specified ID, or `undefined` if not found.

- **getItemsByUserId(userId)**
    - Retrieves items by a user's ID.
    - **userId** (`string`): The ID of the user.
    - **Returns**: An array of items owned by the specified user.

- **updateItem(updatedItem)**
    - Updates an existing item in the warehouse.
    - **updatedItem** (`Object`): The item with updated properties.
    - **id** (`string`): The unique identifier of the item to be updated.

- **updateItemsByUserId(userId, updatedItems)**
    - Updates multiple items for a specific user.
    - **userId** (`string`): The ID of the user.
    - **updatedItems** (`Object[]`): An array of updated items.

- **deleteItem(id)**
    - Deletes an item from the warehouse.
    - **id** (`string`): The unique identifier of the item to be deleted.

- **deleteItemsByUserId(userId)**
    - Deletes all items for a specific user.
    - **userId** (`string`): The ID of the user whose items should be deleted.

### Example

```jsx
import { WareHouseProvider, useWareHouseContext } from './contexts/WareHouse';

function YourComponent() {
    const { addItem, getItemById, getItemsByUserId, updateItem, deleteItem } = useWareHouseContext();

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
````
