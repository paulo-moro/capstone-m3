import { createContext, useContext, useState } from "react";

export const ModalCompanyContext = createContext()

export const ModalCompanyProvider = ({children}) => {
    
    const [modalCompany, setModalCompany] = useState(false)

    const openCompanyModal = () => {
        setModalCompany(true)
    }

    const closeCompanyModal = () => {
        setModalCompany(false)
    }
    
    return(
        <ModalCompanyContext.Provider value={{modalCompany, openCompanyModal, closeCompanyModal}}>
            {children}
        </ModalCompanyContext.Provider>

    )
}

export const useModalCompany = () => useContext(ModalCompanyContext)



