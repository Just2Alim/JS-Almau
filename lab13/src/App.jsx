import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import {
  ThemedButton,
  ThemedCard,
  ThemeSwitcher,
} from "./components/ThemedComponents";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Lab 13 HOC</h1>

        <ThemeSwitcher />

        <ThemedCard>
          <p>Карточка</p>
          <ThemedButton>Кнопка</ThemedButton>
        </ThemedCard>
      </div>
    </ThemeProvider>
  );
}

export default App;