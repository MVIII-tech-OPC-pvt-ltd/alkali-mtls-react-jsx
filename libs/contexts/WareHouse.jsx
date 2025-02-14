import React, { createContext, useEffect, useState, useContext } from 'react';
import { generateUniqueId } from '../utils/magic_math';
import { UsersHubContext } from './UsersHub';

export const WareHouseContext = createContext();

/**
 * WareHouseProvider component that provides warehouse-related functionalities and state management.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 * @returns {JSX.Element} The WareHouseContext provider with the provided value.
 *
 * @example
 * <WareHouseProvider>
 *   <YourComponent />
 * </WareHouseProvider>
 */

/**
 * Adds a new item to the warehouse.
 *
 * @function
 * @name addItem
 * @param {Object} item - The item to be added.
 * @param {string} [item.id] - The unique identifier of the item. If not provided, a unique ID will be generated.
 * @param {string} item.userId - The ID of the user who owns the item.
 */

/**
 * Retrieves an item by its ID.
 *
 * @function
 * @name getItemById
 * @param {string} id - The unique identifier of the item.
 * @returns {Object|undefined} The item with the specified ID, or undefined if not found.
 */

/**
 * Retrieves items by a user's ID.
 *
 * @function
 * @name getItemsByUserId
 * @param {string} userId - The ID of the user.
 * @returns {Object[]} An array of items owned by the specified user.
 */

/**
 * Updates an existing item in the warehouse.
 *
 * @function
 * @name updateItem
 * @param {Object} updatedItem - The item with updated properties.
 * @param {string} updatedItem.id - The unique identifier of the item to be updated.
 */

/**
 * Updates multiple items for a specific user.
 *
 * @function
 * @name updateItemsByUserId
 * @param {string} userId - The ID of the user.
 * @param {Object[]} updatedItems - An array of updated items.
 */

/**
 * Deletes an item from the warehouse.
 *
 * @function
 * @name deleteItem
 * @param {string} id - The unique identifier of the item to be deleted.
 */

/**
 * Deletes all items for a specific user.
 *
 * @function
 * @name deleteItemsByUserId
 * @param {string} userId - The ID of the user whose items should be deleted.
 */
export const WareHouseProvider = ({ children }) => {
    const { users } = useContext(UsersHubContext);
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    function addItem(item) {
        if (!item.id) {
            item.id = generateUniqueId();
        }
        const currentUser = users.find(user => user.isAuthenticated);
        if (currentUser) {
            item.userId = currentUser.id;
            setItems([...items, item]);
        } else {
            alert('User not authenticated!');
        }
    }

    function getItemById(id) {
        return items.find(item => item.id === id);
    }

    function getItemsByUserId(userId) {
        return items.filter(item => item.userId === userId);
    }

    function updateItem(updatedItem) {
        setItems(items.map(item => (item.id === updatedItem.id ? updatedItem : item)));
    }

    function updateItemsByUserId(userId, updatedItems) {
        setItems(items.map(item => (item.userId === userId ? updatedItems.find(ui => ui.id === item.id) || item : item)));
    }

    function deleteItem(id) {
        setItems(items.filter(item => item.id !== id));
    }

    function deleteItemsByUserId(userId) {
        setItems(items.filter(item => item.userId !== userId));
    }

    return (
        <WareHouseContext.Provider value={{
            items,
            addItem,
            getItemById,
            getItemsByUserId,
            updateItem,
            updateItemsByUserId,
            deleteItem,
            deleteItemsByUserId
        }}>
            {children}
        </WareHouseContext.Provider>
    );
};