import React, { useState, useEffect } from 'react';
import './darkLight.css'

const DarkLightTheme = () => {
    const [theme, setTheme] = useState(() => {
        // Check localStorage for saved theme or use preferred color scheme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    const handleChangeTheme = (theme) => {
        console.log("theme", theme)

    }
    useEffect(() => {
        // Apply the theme class to the document
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    return (
        <div className="app">
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
            </button>
            {/* Your app content */}
        </div>
    );
}

export default DarkLightTheme