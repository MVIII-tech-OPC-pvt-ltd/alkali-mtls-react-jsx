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
        <div className="min-h-screen bg-gray-50">
            <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-purple-600 via-blue-500 to-blue-700 text-white shadow-lg z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-extrabold tracking-tight">{title}</h1>
                    {isAuthenticated && (
                        <button
                            onClick={logout}
                            className="bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white font-semibold py-2 px-5 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-400"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </header>
            <main className="pt-24 max-w-7xl mx-auto w-full">
                {isAuthenticated ? (
                    <div className="bg-white rounded-lg shadow p-8 mt-4">
                        {children}
                    </div>
                ) : (
                    <div className="flex justify-center items-center min-h-[60vh]">
                        <AlMAuthPage />
                    </div>
                )}
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