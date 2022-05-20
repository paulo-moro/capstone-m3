import { createContext, useContext, useState } from "react";

export const SecondModalContext = createContext()

export const SecondModalProvider = ({children}) => {
    
    const [secondModal, setSecondModal] = useState(false)

    const openSecondModal = () => {
        setSecondModal(true)
    }

    const closeSecondModal = () => {
        setSecondModal(false)
    }

    return(
        <SecondModalContext.Provider value={{secondModal, openSecondModal, closeSecondModal}}>
            {children}
        </SecondModalContext.Provider>

    )
}

export const useSecondModal = () => useContext(SecondModalContext)

