import React from 'react'
import { useTheme } from '../contexts/themecontext'

const ThemeToggle = () => {
    const { toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme}>Toggle Theme</button>
    )
}

export default ThemeToggle