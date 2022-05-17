import { createContext, useContext, useState } from "react";
import { useUser } from "../user";

export const WasteDataContext = createContext()

export const WasteDataProvider = ({children}) => {
    
    
    
    
    const [wasteData, setWasteData] = useState({        
        "category": "Oleo",
		"volume": "10",
		"client_id": "1",
		"image": "url.img",
		"status": "pendente",
		"id": 3,
        "collector_id" : 4
    })

    const addWasteData = (waste)=>{
        setWasteData(waste)
    }

 

    return(
        <WasteDataContext.Provider value={{wasteData, addWasteData}}>
            {children}
        </WasteDataContext.Provider>

    )
}

export const useWasteData = () => useContext(WasteDataContext)

