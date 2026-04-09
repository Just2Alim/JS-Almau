import React from "react";
import ThemeContext from "../context/ThemeContext";

export function withTheme(WrappedComponent) {
    return function ComponentWithTheme(props) {
        return (
            <ThemeContext.Consumer>
                {(ctx) => {
                    if (!ctx) throw new Error("No ThemeProvider");

                    return (
                        <WrappedComponent
                            {...props}
                            theme={ctx.theme}
                            isDark={ctx.isDark}
                            toggleTheme={ctx.toggleTheme}
                        />
                    );
                }}
            </ThemeContext.Consumer>
        );
    };
}