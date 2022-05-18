import { createContext, useContext, useState } from "react";

export const WasteDataContext = createContext()

export const WasteDataProvider = ({children}) => {   
    
    
    const [wasteData, setWasteData] = useState()

    const addWasteData = (waste)=>{
        setWasteData(waste)
    }

 

    return(
        <WasteDataContext.Provider value={{wasteData, addWasteData, setWasteData}}>
            {children}
        </WasteDataContext.Provider>

    )
}

export const useWasteData = () => useContext(WasteDataContext)

