import { useUser } from "../context/UserContext";

export default function UserInfo() {
  const { user, theme } = useUser();

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
      <h4>User Info</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Preferred font size: {theme.fontSize}</p>
    </div>
  );
}