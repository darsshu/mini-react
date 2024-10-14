import React, { useState } from 'react'

export const Theme = React.createContext()
const ThemeContext = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light")
    let toggleTheme = () => {
        themeMode == "light" ? setThemeMode("dark") : setThemeMode("light")
    }
    return (
        <Theme.Provider value={{ themeMode, toggleTheme }}>
            <div className={`${themeMode == "dark" ? "bg-black text-white" :
                "bg-gray-600 text-black"} min-h-screen transition-all duration-300`}>
                {children}
            </div>

        </Theme.Provider>
    )
}

export default ThemeContext