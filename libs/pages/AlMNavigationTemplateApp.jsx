import { useState } from "react";
import "../styles/styles.css";
import "../styles/tailwind.css";

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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
            <div className="nav-bar-container mb-6">
                <div className="nav-bar flex justify-center gap-6">
                    {
                        ITEMS.map((val, idx) => {
                            return (
                                <button
                                    key={idx}
                                    className={
                                        "flex items-center gap-2 px-6 py-3 font-semibold rounded-lg shadow transition-all duration-300 " +
                                        (idx === activePageIndex
                                            ? "bg-blue-600 text-white scale-105 shadow-lg"
                                            : "bg-white text-blue-700 hover:bg-blue-100 hover:scale-105")
                                    }
                                    onClick={() => handleClick(idx)}
                                >
                                    <span className="icon text-xl">{val.icon}</span>
                                    <span className="text">{val.text}</span>
                                </button>
                            );
                        })
                    }
                </div>
            </div>
            <div className="main-container p-8 bg-white shadow-xl rounded-2xl">
                {activePage}
            </div>
        </div>
    );
}

export default AlMNavigationTemplateApp;
