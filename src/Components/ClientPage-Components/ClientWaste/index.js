

import { useEffect } from "react"
import { useInfoWaste } from "../../../Providers/InfoWaste"
import { useSecondModal } from "../../../Providers/SecondModal"
import { useUserWaste } from "../../../Providers/UserRes"
import { ListWasteClient } from "./style"

export const ClientListWaste = () => {

  const {userWaste} = useUserWaste()
  const {openSecondModal} = useSecondModal()
  const {addInfoWaste} = useInfoWaste()
  
  const changeWaste = (item) => {
    addInfoWaste(item)
    openSecondModal()
  }

  useEffect(()=> {}, [])

  return(
      <ListWasteClient>
      
        {userWaste.map((item, index)=> 
        item.status === "Pendente" &&
          <li onClick={()=> changeWaste(item)} key={index}>
            <div className="div-img">
              <img src={item.image} alt={item.category}/>
            </div>
            <div className="info">
              <h3>{item.category}</h3>
              <p>{item.measure} {item.category === "Óleo" ? "Litros" : "Kg"}</p>          
              <p>{item.status}</p>
            </div>
          </li> 
        )}
        
      </ListWasteClient>
    
  )
}
