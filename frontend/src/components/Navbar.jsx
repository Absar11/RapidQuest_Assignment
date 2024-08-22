import React, { useState } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            document.body.style.backgroundColor = newMode ? "#000" : "#fff";
            document.body.style.color = newMode ? "#fff" : "#000";
            return newMode;
        });
    };

    return (
        <div style={styles.navbar}>
            {/* Left Side */}
            <div style={styles.brand}>RapidQuest</div>

            {/* Center */}
            <div style={styles.searchContainer}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchInput}
                />
                <button style={styles.searchButton} onClick={() => alert('Search functionality coming soon!')}>
                    🔍
                </button>
            </div>


            {/* Right Side */}
            <button
                style={styles.button}
                onClick={toggleMode}
            >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
};


// Styles for the Navbar
const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#ffffff", // Light background color
        borderBottom: "1px solid #ddd", // Border color
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" // Optional shadow for better separation
    },
    brand: {
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#333", // Text color for brand
    },
    searchContainer: {
        display: "flex",
        alignItems: "center",
        borderRadius: "4px",
        border: "1px solid #ddd",
        padding: "0.2rem 0.5rem",
        backgroundColor: "#f9f9f9", // Light background for search input
    },
    searchInput: {
        border: "none",
        outline: "none",
        padding: "0.5rem",
        flex: "1",
        fontSize: "1rem",
        backgroundColor: "transparent",
    },
    searchButton: {
        background: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2rem",
        color: "#007bff", // Button color
    },
    modeButton: {
        padding: "0.5rem 1rem",
        fontSize: "1rem",
        cursor: "pointer",
        backgroundColor: "#007bff", // Button color
        color: "#fff", // Text color
        border: "none",
        borderRadius: "5px",
        transition: "background-color 0.3s ease",
    },
};



export default Navbar;
