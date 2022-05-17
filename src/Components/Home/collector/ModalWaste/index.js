import CardWaste from "../CardWaste"
import {WasteModal} from "./style"
import {useState} from "react"
import { useUserWaste } from "./../../../../Providers/UserRes"
import { useModalWaste } from "./../../../../Providers/openModalWaste"



const ModalWaste = () => {
  
  const { userWaste } = useUserWaste()
  const {closeWasteModal} = useModalWaste()

  const [filteredWaste, setFilteredWaste] = useState([])
  const [searchCategory, setSearchCategory] = useState(false)
 
  const userAvailableWaste = () =>{
    return userWaste.filter((waste)=>waste.status === "pendente")
  }

  const WasteFind = (material) => {
    const filterByMaterial = userWaste.filter((waste) =>  material === waste.category )  
    setFilteredWaste(filterByMaterial) 
    setSearchCategory(true)        
  } 

  return (
    <WasteModal>
    <div className="containerModalWaste">
      <div className="containerHeaderWaste">
        <h1 className="titleModalWaste">Coletas:</h1>
        <button className="btnCloseModalWaste" onClick={closeWasteModal}>X</button>
      </div>       
      <div className="containerBtnModalWaste">
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Plástico")}>Plástico</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Papel")}>Papel</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Vidro")}>Vidro</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Metal")}>Metal</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Madeira")}>Madeira</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Óleo")}>Óleo</button>
        <button className="btnWasteModalWaste" onClick={() => setSearchCategory(false)}>Todos</button>
      </div>
      {
        searchCategory?
        (<CardWaste wastes={filteredWaste}/>)
        :
        (<CardWaste wastes={()=>userAvailableWaste()}/>)
      }             
    </div>      
  </WasteModal>    
  )
} 

export default ModalWaste


