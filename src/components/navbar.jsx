import React from 'react'
import { useTheme } from '../contexts/themecontext'
import { useAuth } from '../contexts/authcontex'

const NavBar = () => {
    const { theme: { isLightTheme, light, dark } } = useTheme()
    const theme = isLightTheme ? light : dark

    const { auth, toggleAuth } = useAuth()
    
    return (
        <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                You are currently {auth ? 'logged in' : 'logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar