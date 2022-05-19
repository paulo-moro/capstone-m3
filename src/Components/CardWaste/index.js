
import Button from "../Global/Button"
import waste1 from "./../../Images/waste1.webp"

import { useWasteData } from "../../Providers/WasteData"
import { useModalType } from "../../Providers/ModalTypes"



const CardWaste = ({waste}) => {
  const {changeModal} = useModalType()
  const {addWasteData} = useWasteData()
  
  const handleOpenCompanyModal = () =>{
    changeModal("companies")
    addWasteData(waste)
  }
  
  
  return (    
    <li>
      <img src={waste.image} alt={waste.category}/>
      <h2>{waste.category}</h2>
      <h3>{waste.measure} {waste.category === "Óleo"?"Litros":"Kg"}</h3>
      <Button onClick={handleOpenCompanyModal} >{waste.status}</Button>
    </li>        
    
  )
}

export default CardWaste


