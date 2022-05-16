import { createContext, useContext, useState } from "react";

export const ModalWasteContext = createContext()

export const ModalWasteProvider = ({children}) => {
    
    const [modalWaste, setModalWaste] = useState(false)

    const openWasteModal = () => {
        setModalWaste(true)
    }

    const closeWasteModal = () => {
        setModalWaste(false)
    }

    return(
        <ModalWasteContext.Provider value={{modalWaste, openWasteModal, closeWasteModal}}>
            {children}
        </ModalWasteContext.Provider>

    )
}

export const useModalWaste = () => useContext(ModalWasteContext)



