import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const [auth, setAuth] = useState("")

    const haveToken = () => {
        localStorage.getItem("@Ecoleta_token")||[]?setAuth(localStorage.getItem("@Ecoleta_token")):setAuth(false)        
    }
    return(
        <AuthContext.Provider value={{auth, haveToken}}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => useContext(AuthContext)