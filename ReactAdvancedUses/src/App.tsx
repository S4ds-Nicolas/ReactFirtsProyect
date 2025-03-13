import { createContext, useContext, useState } from 'react'
import './App.css'

interface ThemeButton {
  theme: string;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeButton | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeButton() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeButton must be used within a ThemeProvider');
  }

  const { theme, toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Cambiar tema
    </button>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemeButton />
    </ThemeProvider>
  );
}

export default App;
