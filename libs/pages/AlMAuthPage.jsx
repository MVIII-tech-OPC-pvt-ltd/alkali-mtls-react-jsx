import { useContext, useState } from 'react';
import './AuthPage.css';
import { UsersHubContext } from '../contexts/UsersHub';
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
        <div id='auth-page' className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 animate-fadeIn">
            <div className="login-box w-full max-w-md p-10 space-y-8 bg-white/90 rounded-2xl shadow-2xl backdrop-blur-md border border-indigo-100 transition-all duration-500 hover:scale-105">
                <h2 className="text-4xl font-extrabold text-center text-indigo-700 drop-shadow-sm">{title}</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="form-group">
                        <label htmlFor="username" className="block text-sm font-semibold text-indigo-700">Username</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-indigo-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="block text-sm font-semibold text-indigo-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 mt-1 border border-indigo-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50"
                        />
                    </div>
                    {title === AuthPageType.SIGN_UP && (
                        <div className="form-group">
                            <label htmlFor="confirmPassword" className="block text-sm font-semibold text-indigo-700">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className="w-full px-4 py-2 mt-1 border border-indigo-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 bg-indigo-50"
                            />
                        </div>
                    )}
                    <button type="submit" className="w-full px-4 py-2 text-lg font-bold text-white bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg shadow hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition">
                        {title === AuthPageType.SIGN_IN ? 'Login' : 'Sign Up'}
                    </button>
                    <div className="text-center">
                        <button type="button" onClick={handleSwitch} className="text-indigo-600 font-medium hover:text-pink-500 focus:outline-none transition">
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