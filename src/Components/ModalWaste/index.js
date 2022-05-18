import CardWaste from "../CardWaste"
import {CardContainerWaste, WasteModal} from "./style"
import {useState} from "react"
import { useUserWaste } from "../../Providers/UserRes"



const ModalWaste = () => {
  const { userWaste } = useUserWaste()

  const [filteredWaste, setFilteredWaste] = useState([])
  const [searchCategory, setSearchCategory] = useState(false)
 
  const userAvailableWaste = () =>{
    return userWaste.filter((waste)=>{      
      return waste.status === "Pendente"})
  }
  const WasteFind = (material) => {
    
    const filterByMaterial = userWaste.filter((waste) =>  material === waste.category )    
    filterByMaterial.length > 0?  setSearchCategory(true) :setFilteredWaste(userAvailableWaste)
    setFilteredWaste(filterByMaterial)
  } 
 

 

  return (
    <WasteModal>
    <div className="containerModalWaste">
      <div className="containerHeaderWaste">
        <h1 className="titleModalWaste">Coletas disponiveis:</h1>
        
      </div>       
      <div className="containerBtnModalWaste">
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Plástico")}>Plástico</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Papel")}>Papel</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Vidro")}>Vidro</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Metal")}>Metal</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Eletronico")}>Eletrônico</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Oleo")}>Óleo</button>
        <button className="btnWasteModalWaste" onClick={() => setSearchCategory(false)}>Todos</button>
      </div>
       <CardContainerWaste>
         
        {
        searchCategory?
        filteredWaste.length > 0?
        filteredWaste?.map((waste)=><CardWaste key={waste.id} waste={waste} />)
        :filteredWaste.length === 0 && <li>Não há itens com esse valor de filtro</li>
        :userAvailableWaste()?.map((waste)=><CardWaste key={waste.id} waste={waste} />)
        
        
        }
       </CardContainerWaste>
        
    </div>      
  </WasteModal>    
  )
} 

export default ModalWaste


