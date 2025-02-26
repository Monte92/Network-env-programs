import { useState } from "react";
import "./ThemeToggle.css";

export default function ThemeToggle() {
    //      state    function that updates   default state = ligth mode
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        if (darkMode === true) {
            setDarkMode(false);
        } else {
            setDarkMode(true);
        }
    };

    /*const toggleTheme = () => {
        setDarkMode((previousMode) => !previousMode);
    }; */

    return (
        <div className={`theme-container ${darkMode ? "dark-mode" : "lightMode" }`}>
            <p>It's now {!darkMode ? "light" : "dark"} theme</p>
            <button className="toggle-button" onClick={toggleTheme}>
                Toggle to {darkMode ? "Light" : "Dark"} mode
            </button>
        </div>
    );
}