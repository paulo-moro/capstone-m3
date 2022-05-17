import {CardContainerWaste} from "./style"
import Button from "./../../../global/Button"
import waste1 from "./../../../../Images/waste1.webp"
import { useUserWaste } from "./../../../../Providers/UserRes"
import { useState } from "react"
import { useModalCompany } from "./../../../../Providers/openModalCompany"


const CardWaste = () => {
  const {userWaste} = useUserWaste()
  const {openModalCompany} = useModalCompany()
  const [pendingWastes] = useState(userWaste.filter((waste)=>{
    return waste.status === "pendente"
  }))
  
  
  return (
    <CardContainerWaste>  
      {
        pendingWastes?.map((waste) => (
            <li key={waste.id} onClick={openModalCompany}>
            <img src={waste1} alt={waste.category}/>
            <h2>{waste.category}</h2>
            <h3>{waste.measure} {waste.category === "Óleo"?"Litros":"Kg"}</h3>
            <Button >{waste.status}</Button>
            </li>))          
      }         
    </CardContainerWaste>
  )
}

export default CardWaste


