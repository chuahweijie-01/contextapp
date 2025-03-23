import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

const AuthContextProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)

    function toggleAuth() {
        setAuth(!auth)
    }

    return (
        <AuthContext.Provider value={{ auth, toggleAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider