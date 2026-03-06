import UserMenu from "./UserMenu";
import { useUser } from "../context/UserContext";

export default function Header() {
  const { user, theme, toggleTheme } = useUser();

  const cardStyle = {
    backgroundColor: theme.darkMode ? "#1f2937" : "#ffffff",
    color: theme.darkMode ? "#ffffff" : "#111827",
    padding: "20px",
    borderRadius: "12px",
    marginTop: "16px",
    border: "1px solid #dbe3ee",
  };

  return (
    <div style={cardStyle}>
      <h2>Header</h2>
      <p>Role: {user.role}</p>
      <p>Dark mode: {theme.darkMode ? "On" : "Off"}</p>
      <p>Font size: {theme.fontSize}</p>

      <button onClick={toggleTheme}>Toggle Dark Mode</button>

      <UserMenu />
    </div>
  );
}