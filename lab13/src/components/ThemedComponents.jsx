import React from "react";
import { withTheme } from "../hocs/withTheme";

function Button({ theme, children, ...props }) {
    return (
        <button
            style={{
                background: theme.colors.primary,
                color: "#fff",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
            }}
            {...props}
        >
            {children}
        </button>
    );
}

export const ThemedButton = withTheme(Button);

function Card({ theme, children }) {
    return (
        <div
            style={{
                background: theme.colors.surface,
                color: theme.colors.text,
                padding: "16px",
                borderRadius: "12px",
                marginTop: "10px",
                border: `1px solid ${theme.colors.border}`,
            }}
        >
            {children}
        </div>
    );
}

export const ThemedCard = withTheme(Card);

function ThemeSwitcherBase({ toggleTheme, isDark, theme }) {
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme.colors.primary,
                color: "#fff",
                padding: "10px 16px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                marginBottom: "10px",
            }}
        >
            {isDark ? "Light Mode" : "Dark Mode"}
        </button>
    );
}

export const ThemeSwitcher = withTheme(ThemeSwitcherBase);