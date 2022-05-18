import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("@Ecoleta_User"))  || "")


    const addUser = (person) => {
        setUser(person)
    }

    const rmvUser = () => {
        setUser("")
    }

    return(
        <UserContext.Provider value={{user, setUser, addUser, rmvUser}}>
            {children}
        </UserContext.Provider>

    )
}

export const useUser = () => useContext(UserContext)



