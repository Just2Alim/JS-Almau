import React, { createContext, UseContext, useState } from "react";

const ThemeContext = createContext();

export const lightTheme = {
    name: "light",
    colors: {
        primary: "#0066cc",
        secondary: "#6c757d",
        background: "#ffffff",
        surface: "#f8f9fa",
        text: "#212529",
        textSecondary: "#6c757d",
        border: "#dee2e6",
    }
}

export const darkTheme = {
    ...lightTheme,
    name: "dark",
    colors: {
        primary: "#4d9fff",
        secondary: "#adb5bd",
        background: "#1a1a2e",
        surface: "#16213e",
        text: "#e9ecef",
        border: "#495057",
    }
}

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(lightTheme);
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        if (isDark) {
            setTheme(lightTheme);
            setIsDark(false);
        } else {
            setTheme(darkTheme);
            setIsDark(true);
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;