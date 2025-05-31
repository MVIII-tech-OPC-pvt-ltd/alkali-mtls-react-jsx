import React, { useContext } from 'react';
import AlMAuthPage from './AlMAuthPage';
import { UsersHubContext, UsersHubProvider } from '../contexts/UsersHub';
import "../styles/styles.css";
import "../styles/tailwind.css";

/**
 * FixedHeader component renders a fixed header with a gradient background and a title.
 * It also conditionally renders its children or an authentication page based on the user's login status.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children components to be rendered inside the main content area.
 * @param {string} props.title - The title to be displayed in the header.
 * @returns {JSX.Element} The rendered FixedHeader component.
 */
function FixedHeader({ children, title }) {
    const { isAuthenticated, logout } = useContext(UsersHubContext);

    return (
        <div>
            <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md z-50">
                <div className="container mx-auto p-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    {isAuthenticated && (
                        <button
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </header>
            <main className="pt-16">
                {isAuthenticated ? (
                    <div className='bg-white'>
                        {children}
                    </div>
                ) : <AlMAuthPage />}
            </main>
        </div>
    );
}

export default function AlMFixedHeader({ children, title }) {
    return (
        <UsersHubProvider>
            <FixedHeader title={title}>{children}</FixedHeader>
        </UsersHubProvider>
    );
}