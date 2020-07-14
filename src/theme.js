import React from "react"

// set the defaults
const ThemeContext = React.createContext({
  theme: "light",
  setTheme: () => { }
})

export default ThemeContext
