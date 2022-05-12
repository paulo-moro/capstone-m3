import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState("")

    const addUser = (person) => {
        setUser(person)
    }

    const rmvUser = () => {
        setUser("")
    }

    return(
        <UserContext.Provider value={{user, addUser, rmvUser}}>
            {children}
        </UserContext.Provider>

    )
}

export const useUser = () => useContext(UserContext)



