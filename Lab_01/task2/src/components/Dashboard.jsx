import Header from "./Header";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { user, theme } = useUser();

  const dashboardStyle = {
    minHeight: "100vh",
    padding: "24px",
    backgroundColor: theme.darkMode ? "#111827" : "#f4f7fb",
    color: theme.darkMode ? "#ffffff" : "#111827",
  };

  return (
    <div style={dashboardStyle}>
      <h1>Dashboard</h1>
      <p>Name: {user.name}</p>
      <Header />
    </div>
  );
}