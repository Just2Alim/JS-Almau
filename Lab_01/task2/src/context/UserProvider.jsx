import { useMemo, useState } from 'react';
import { UserContext } from './UserContext';

export default function UserProvider({ children }) {
  const [user] = useState({
    name: "Alim",
    email: "262924@almau.edu.kz",
    role: "admin",
  });

  const [permissions] = useState({
    canEdit: true,
    canDelete: true,
    canView: true,
  });

  const [theme, setTheme] = useState({
    darkMode: false,
    fontSize: '16px',
  });

  const toggleTheme = () => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      darkMode: !prevTheme.darkMode,
    }));
  };

  const value = useMemo(() => {
    return {
      user,
      permissions,
      theme,
      toggleTheme,
    };
  }, [user, permissions, theme]);

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}