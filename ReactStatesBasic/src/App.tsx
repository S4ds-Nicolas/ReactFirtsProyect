import { createContext, useContext, useState } from 'react'
import './App.css'


type ThemeContextType = {
  theme : String ;
  toggleTheme:  () => void;
}

const ThemeContext = createContext<ThemeContextType>;

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