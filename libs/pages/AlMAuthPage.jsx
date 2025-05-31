import React, { useContext, useState } from 'react';
import './AuthPage.css';
import { UsersHubContext, UsersHubProvider } from '../contexts/UsersHub';
import "../styles/styles.css";
import "../styles/tailwind.css";


/**
 * AuthenticationPage component renders a sign-in/sign-up form.
 * 
 * @param {Object} props - The component props.
 * @param {string|null} [props.appName=null] - The name of the application to display in the sign-in title.
 * 
 * @returns {JSX.Element} The rendered AuthenticationPage component.
 * 
 * @component
 * 
 * @example
 * return (
 *   <AuthenticationPage appName="MyApp" />
 * )
 */
function AuthenticationPage({ appName = null }) {
    const AuthPageType = {
        SIGN_IN: (appName === null ? 'Sign In' : `Sign in to ${appName}`),
        SIGN_UP: 'Create a New Account'
    };

    const [title, setTitle] = useState(AuthPageType.SIGN_IN);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const { login, createNewUser } = useContext(UsersHubContext);

    const handleLogin = (e) => {
        e.preventDefault();
        if (title === AuthPageType.SIGN_IN) {
            const success = login(username, password);
            if (!success) {
                alert('Invalid username or password!');
            } else {
                alert('Login success full');
            }
        } else {
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            createNewUser(username, password);
            setTitle(AuthPageType.SIGN_IN);
        }
    };

    function handleSwitch() {
        if (title === AuthPageType.SIGN_IN) {
            setTitle(AuthPageType.SIGN_UP);
        } else {
            setTitle(AuthPageType.SIGN_IN);
        }
    }

    return (
        <div id='auth-page' className="flex items-center justify-center min-h-screen bg-gray-100 animate-fadeIn">
            <div className="login-box w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105">
                <h2 className="text-3xl font-extrabold text-center text-gray-900">{title}</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    {title === AuthPageType.SIGN_UP && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                        </div>
                    )}
                    <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        {title === AuthPageType.SIGN_IN ? 'Login' : 'Sign Up'}
                    </button>
                    <div className="text-center">
                        <button type="button" onClick={handleSwitch} className="text-indigo-600 cursor-pointer hover:text-indigo-500 focus:outline-none">
                            {title === AuthPageType.SIGN_IN ? "Don't have an account? Create one" : "Already have an account? Sign in"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default function AlMAuthPage({ appName = null }) {
    return (
        <AuthenticationPage appName={appName} />
    );
}