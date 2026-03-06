import UserProvider from "./context/UserProvider";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <UserProvider>
      <Dashboard />
    </UserProvider>
  );
}

export default App;