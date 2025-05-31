import { useState } from "react";

/**
 * NavigationTemplateApp component serves as a template for the application with navigation.
 * It uses the AlMFixedHeader component to render a fixed header and NavBar for navigation.
 *
 * @component
 * @returns {JSX.Element} The rendered NavigationTemplateApp component.
 */
function AlMNavigationTemplateApp({ navItems }) {
    const [activePageIndex, setActivePageIndex] = useState(0);
    const ITEMS = navItems;

    const activePage = navItems[activePageIndex].component;

    function handleClick(index) {
        setActivePageIndex(index);
    }

    const navBarContainerStyle = {
        marginBottom: "1.5rem"
    };

    const navBarStyle = {
        display: "flex",
        justifyContent: "center",
        gap: "1.5rem"
    };

    const buttonBaseStyle = {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.75rem 1.5rem",
        fontWeight: 600,
        borderRadius: "0.5rem",
        boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        transition: "all 0.3s",
        border: "none",
        cursor: "pointer",
        fontSize: "1rem",
        background: "#fff",
        color: "#2563eb"
    };

    const buttonActiveStyle = {
        background: "#2563eb",
        color: "#fff",
        transform: "scale(1.05)",
        boxShadow: "0 4px 16px rgba(37,99,235,0.15)"
    };

    const buttonInactiveHoverStyle = {
        background: "#eff6ff",
        transform: "scale(1.05)"
    };

    const mainContainerStyle = {
        padding: "2rem",
        background: "#fff",
        boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
        borderRadius: "1rem"
    };

    const appBgStyle = {
        minHeight: "100vh",
        background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
        padding: "1.5rem"
    };

    return (
        <div style={appBgStyle}>
            <div style={navBarContainerStyle}>
                <div style={navBarStyle}>
                    {
                        ITEMS.map((val, idx) => {
                            const isActive = idx === activePageIndex;
                            return (
                                <button
                                    key={idx}
                                    style={{
                                        ...buttonBaseStyle,
                                        ...(isActive ? buttonActiveStyle : {}),
                                    }}
                                    onMouseOver={e => {
                                        if (!isActive) {
                                            Object.assign(e.currentTarget.style, buttonInactiveHoverStyle);
                                        }
                                    }}
                                    onMouseOut={e => {
                                        if (!isActive) {
                                            Object.assign(e.currentTarget.style, buttonBaseStyle);
                                        }
                                    }}
                                    onClick={() => handleClick(idx)}
                                >
                                    <span style={{ fontSize: "1.25rem" }}>{val.icon}</span>
                                    <span>{val.text}</span>
                                </button>
                            );
                        })
                    }
                </div>
            </div>
            <div style={mainContainerStyle}>
                {activePage}
            </div>
        </div>
    );
}

export default AlMNavigationTemplateApp;
