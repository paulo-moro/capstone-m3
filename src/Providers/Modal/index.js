import { createContext, useContext, useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
    
    const [modal, setModal] = useState(false)
    const [secondModal, setSecondModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const openSecondModal = () => {
        setSecondModal(true)
    }

    const closeSecondModal = () => {
        setSecondModal(false)
    }

    return(
        <ModalContext.Provider value={{modal, openModal, closeModal, secondModal, openSecondModal, closeSecondModal}}>
            {children}
        </ModalContext.Provider>

    )
}

export const useModal = () => useContext(ModalContext)



