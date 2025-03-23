import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext)
}

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    })

    function toggleTheme() {
        setTheme({
            ...theme,
            isLightTheme: !theme.isLightTheme
        })
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider