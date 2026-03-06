import UserInfo from "./UserInfo";
import { useUser } from "../context/UserContext";

export default function UserMenu() {
  const { user, permissions, theme } = useUser();

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
      <h3>User Menu</h3>
      <p>Email: {user.email}</p>
      <p>Can view: {permissions.canView ? "Yes" : "No"}</p>
      <p>Can edit: {permissions.canEdit ? "Yes" : "No"}</p>
      <p>Can delete: {permissions.canDelete ? "Yes" : "No"}</p>

      <UserInfo />
    </div>
  );
}