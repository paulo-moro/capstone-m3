import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
    
    const [modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
        console.log("fechou o modal")
    }


    return(
        <ModalContext.Provider value={{modal, openModal, closeModal}}>
            {children}
        </ModalContext.Provider>

    )
}

export const useModal = () => useContext(ModalContext)



