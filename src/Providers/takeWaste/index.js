import { createContext, useContext, useState } from "react";
import { useUser } from "../user";

export const TakeWasteContext = createContext()

export const TakeWasteProvider = ({children}) => {
    const {user} = useUser()
    
    
    
    const [wasteRequest, setWasteRequest] = useState({        
        collector_id:user.id,
        status:"reservado"
    })

    const choseCompany = (company)=>{
        setWasteRequest({...wasteRequest, destiny:company})
    }

   

 

    return(
        <TakeWasteContext.Provider value={{wasteRequest, choseCompany}}>
            {children}
        </TakeWasteContext.Provider>

    )
}

export const useTakeWaste = () => useContext(TakeWasteContext)



