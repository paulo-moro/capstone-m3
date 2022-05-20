import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    
    const [auth, setAuth] = useState(localStorage.getItem("@Ecoleta_token")||false)

    const handleAuth=()=>{
        setAuth(localStorage.getItem("@Ecoleta_token")||false)
    }
   
    return(
        <AuthContext.Provider value={{auth,handleAuth}}>
            {children}
        </AuthContext.Provider>

    )
}

export const useAuth = () => useContext(AuthContext)