import { Children, createContext, useContext, useState } from 'react'
import './App.css'

const ThemeContext = createContext();

function ThemeProvider(children){
  const [theme, setTheme] = useState("light")

  const toggleTheme = () =>{
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
  }

  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext>
  )
}

function ThemeButtton(){
  const {theme, toggleTheme} = useContext(ThemeContext);

  return(
    <button onClick={toggleTheme}
    style={{
      backgroundColor:theme === "light" ? "#fff" : "#333",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      Cambiar tema
    </button>
  )
}


function App() {

  return (
    <>
    <ThemeProvider>
      <ThemeButtton></ThemeButtton>
    </ThemeProvider>
    </>
  )
}

export default App
