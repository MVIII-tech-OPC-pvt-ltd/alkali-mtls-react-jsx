import { useContext, useState } from 'react';
import './AuthPage.css';
import { UsersHubContext } from '../contexts/UsersHub';

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
        <div
            id='auth-page'
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #c7d2fe 0%, #e9d5ff 50%, #fbcfe8 100%)',
                animation: 'fadeIn 1s'
            }}
        >
            <div
                style={{
                    width: '100%',
                    maxWidth: 400,
                    padding: 40,
                    background: 'rgba(255,255,255,0.9)',
                    borderRadius: 24,
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid #c7d2fe',
                    transition: 'transform 0.5s',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                <h2
                    style={{
                        fontSize: 32,
                        fontWeight: 800,
                        textAlign: 'center',
                        color: '#4338ca',
                        textShadow: '0 1px 2px rgba(0,0,0,0.07)'
                    }}
                >
                    {title}
                </h2>
                <form onSubmit={handleLogin} style={{ marginTop: 32 }}>
                    <div style={{ marginBottom: 24 }}>
                        <label
                            htmlFor="username"
                            style={{
                                display: 'block',
                                fontSize: 14,
                                fontWeight: 600,
                                color: '#4338ca',
                                marginBottom: 4
                            }}
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '8px 16px',
                                border: '1px solid #c7d2fe',
                                borderRadius: 8,
                                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                                outline: 'none',
                                background: '#eef2ff',
                                fontSize: 16
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: 24 }}>
                        <label
                            htmlFor="password"
                            style={{
                                display: 'block',
                                fontSize: 14,
                                fontWeight: 600,
                                color: '#4338ca',
                                marginBottom: 4
                            }}
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{
                                width: '100%',
                                padding: '8px 16px',
                                border: '1px solid #c7d2fe',
                                borderRadius: 8,
                                boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                                outline: 'none',
                                background: '#eef2ff',
                                fontSize: 16
                            }}
                        />
                    </div>
                    {title === AuthPageType.SIGN_UP && (
                        <div style={{ marginBottom: 24 }}>
                            <label
                                htmlFor="confirmPassword"
                                style={{
                                    display: 'block',
                                    fontSize: 14,
                                    fontWeight: 600,
                                    color: '#4338ca',
                                    marginBottom: 4
                                }}
                            >
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                style={{
                                    width: '100%',
                                    padding: '8px 16px',
                                    border: '1px solid #c7d2fe',
                                    borderRadius: 8,
                                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                                    outline: 'none',
                                    background: '#eef2ff',
                                    fontSize: 16
                                }}
                            />
                        </div>
                    )}
                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '12px 16px',
                            fontSize: 18,
                            fontWeight: 700,
                            color: '#fff',
                            background: 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)',
                            border: 'none',
                            borderRadius: 8,
                            boxShadow: '0 2px 8px rgba(99,102,241,0.15)',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #4f46e5 0%, #db2777 100%)'}
                        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #6366f1 0%, #ec4899 100%)'}
                    >
                        {title === AuthPageType.SIGN_IN ? 'Login' : 'Sign Up'}
                    </button>
                    <div style={{ textAlign: 'center', marginTop: 16 }}>
                        <button
                            type="button"
                            onClick={handleSwitch}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#6366f1',
                                fontWeight: 500,
                                cursor: 'pointer',
                                fontSize: 15,
                                textDecoration: 'underline',
                                transition: 'color 0.2s'
                            }}
                            onMouseOver={e => e.currentTarget.style.color = '#ec4899'}
                            onMouseOut={e => e.currentTarget.style.color = '#6366f1'}
                        >
                            {title === AuthPageType.SIGN_IN
                                ? "Don't have an account? Create one"
                                : "Already have an account? Sign in"}
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