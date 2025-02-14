import React, { createContext, useEffect, useState } from 'react';
import { generateUniqueId } from '../utils/magic_math';

export const UsersHubContext = createContext();

/**
 * UsersHubProvider component that provides user authentication and management functionalities.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components.
 *
 * @returns {JSX.Element} The UsersHubContext provider with user data and authentication state.
 *
 * @example
 * <UsersHubProvider>
 *   <App />
 * </UsersHubProvider>
 */

/**
 * Hook to manage the users state, initialized from localStorage or default data.
 *
 * @typedef {Object} User
 * @property {string} id - The unique identifier for the user.
 * @property {string} username - The username of the user.
 * @property {string} password - The password of the user.
 */

/**
 * Hook to manage the authentication state, initialized from sessionStorage or default to false.
 *
 * @function
 * @name login
 * @description Authenticates a user with the given username and password.
 * @param {string} username - The username of the user.
 * @param {string} password - The password of the user.
 * @returns {boolean} True if authentication is successful, otherwise false.
 *
 * @function
 * @name logout
 * @description Logs out the current authenticated user.
 *
 * @function
 * @name createNewUser
 * @description Creates a new user with the given username and password.
 * @param {string} username - The username for the new user.
 * @param {string} password - The password for the new user.
 */
export const UsersHubProvider = ({ children }) => {
    const [users, setUsers] = useState(() => {
        const storedUsers = localStorage.getItem('users');
        return storedUsers ? JSON.parse(storedUsers) : INITIAL_DATA;
    });
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const storedAuth = sessionStorage.getItem('isAuthenticated');
        return storedAuth ? JSON.parse(storedAuth) : false;
    });

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    useEffect(() => {
        sessionStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    }, [isAuthenticated]);

    function login(username, password) {
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            setIsAuthenticated(true);
            return true;
        }
        return false;
    }

    function logout() {
        setIsAuthenticated(false);
        sessionStorage.setItem('isAuthenticated', JSON.stringify(false));
    }

    function createNewUser(username, password) {
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('Username already exists!');
            return;
        }
        const newUser = { id: generateUniqueId(), username, password };
        setUsers([...users, newUser]);
    }

    return (
        <UsersHubContext.Provider value={{ users, isAuthenticated, login, logout, createNewUser }}>
            {children}
        </UsersHubContext.Provider>
    );
};

const INITIAL_DATA = [
    { id: 452103, username: 'ram', password: 'Ram@123' },
    { id: 97301, username: 'john', password: 'John@123' },
    { id: 36987, username: 'jane', password: 'Jane@123' },
    { id: 840808, username: 'alice', password: 'Alice@123' },
    { id: 769999, username: 'bob', password: 'Bob@123' }
];