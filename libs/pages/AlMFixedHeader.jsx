import React, { useContext } from 'react';
import AlMAuthPage from './AlMAuthPage';
import { UsersHubContext, UsersHubProvider } from '../contexts/UsersHub';

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
        <div style={{ minHeight: "100vh", background: "#f9fafb" }}>
            <header
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    background: "linear-gradient(to right, #7c3aed, #3b82f6, #1e40af)",
                    color: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    zIndex: 50,
                }}
            >
                <div
                    style={{
                        maxWidth: "1120px",
                        margin: "0 auto",
                        padding: "16px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1
                        style={{
                            fontSize: "2rem",
                            fontWeight: 800,
                            letterSpacing: "-0.02em",
                            margin: 0,
                        }}
                    >
                        {title}
                    </h1>
                    {isAuthenticated && (
                        <button
                            onClick={logout}
                            style={{
                                background: "#ef4444",
                                color: "#fff",
                                fontWeight: 600,
                                padding: "8px 20px",
                                borderRadius: "0.5rem",
                                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.2s",
                            }}
                            onMouseOver={e => (e.currentTarget.style.background = "#dc2626")}
                            onMouseOut={e => (e.currentTarget.style.background = "#ef4444")}
                        >
                            Logout
                        </button>
                    )}
                </div>
            </header>
            <main
                style={{
                    paddingTop: "96px",
                    maxWidth: "1120px",
                    margin: "0 auto",
                    width: "100%",
                }}
            >
                {isAuthenticated ? (
                    <div
                        style={{
                            background: "#fff",
                            borderRadius: "0.5rem",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                            padding: "32px",
                            marginTop: "16px",
                        }}
                    >
                        {children}
                    </div>
                ) : (
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            minHeight: "60vh",
                        }}
                    >
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