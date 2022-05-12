import { useContext } from "react";
import { createContext, useState } from "react";


export const HeaderContext = createContext()

export const HeaderProvider = ({children}) => {
    const [headerType, setHeaderType] = useState('landing')

    const changeHeader = (type) => setHeaderType(type)


    return (
        <HeaderContext.Provider value={{headerType, changeHeader}}>{children}</HeaderContext.Provider>
    )
}

export const useHeader = () => useContext(HeaderContext)