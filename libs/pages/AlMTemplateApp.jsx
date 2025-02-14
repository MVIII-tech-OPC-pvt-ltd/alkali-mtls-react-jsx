import React from 'react';
import AlMFixedHeader from './AlMFixedHeader';
import "../styles/styles.css";
/**
 * TemplateApp component serves as a template for the application.
 * It uses the AlMFixedHeader component to render a fixed header and conditionally render content based on user authentication.
 *
 * @component
 * @returns {JSX.Element} The rendered TemplateApp component.
 */
function AlMTemplateApp({ title = "My Application", children }) {
    return (
        <AlMFixedHeader title={title}>
            {children}
        </AlMFixedHeader>
    );
}

export default AlMTemplateApp;