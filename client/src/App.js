import { Content } from "./content/AppContent";
import { AuthProvider } from "./context/AuthContext";
import { BankProvider } from "./context/BankContext";
import { SettingsProvider } from "./context/SettingsContext";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <SettingsProvider>
      <AuthProvider>
        <BankProvider>
          <Content />
        </BankProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default App;
