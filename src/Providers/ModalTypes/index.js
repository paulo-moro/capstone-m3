import { useContext } from "react";
import { createContext, useState } from "react";


export const ModalTypeContext = createContext()

export const ModalTypeProvider = ({children}) => {
    const [modalType, setModalType] = useState('register')

    const changeModal = (type) => setModalType(type)


    return (
        <ModalTypeContext.Provider value={{modalType, changeModal}}>{children}</ModalTypeContext.Provider>
    )
}

export const useModalType = () => useContext(ModalTypeContext)