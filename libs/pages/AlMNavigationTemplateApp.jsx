import React, { useState } from "react";
import "../styles/styles.css";

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

    return (
        <div className="container mx-auto p-4">
            <div className="nav-bar-container">
                <div className="nav-bar flex justify-center space-x-4">
                    {
                        ITEMS.map((val, idx) => {
                            return (
                                <div
                                    key={idx}
                                    className={"flex pl-5 pr-5 item cursor-pointer p-2 rounded transition duration-300 ease-in-out transform " +
                                        (idx === activePageIndex ? "bg-blue-500 text-white" : "bg-gray-200 text-black hover:bg-blue-300 hover:scale-105")}
                                    onClick={() => handleClick(idx)}
                                >
                                    <div className="icon">{val.icon}</div>
                                    <div className="text">{val.text}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
            <div className="main-container mt-4 p-4 bg-white shadow rounded">
                {activePage}
            </div>
        </div>
    );
}

export default AlMNavigationTemplateApp;
