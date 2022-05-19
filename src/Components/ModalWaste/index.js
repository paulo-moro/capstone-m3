import CardWaste from "../CardWaste"
import {CardContainerWaste, WasteModal} from "./style"
import {useEffect, useState} from "react"
import { useUserWaste } from "../../Providers/UserRes"



const ModalWaste = () => {
  const { userWaste } = useUserWaste()

  const [filteredWaste, setFilteredWaste] = useState([])
  const [searchCategory, setSearchCategory] = useState(false)
  
  useEffect(()=>{
    userAvailableWaste()
  },[])



  const userAvailableWaste = () =>{    
    setFilteredWaste( userWaste.filter((waste)=>{               
      return waste.status === "Pendente"}))
      
  }
  
  const findByCategory = (material) => {    
    const filterByMaterial = userWaste.filter((waste) =>  material === waste.category && waste.status === "Pendente" )   
    setFilteredWaste(filterByMaterial)
  } 
 

 

  return (
    <WasteModal>
    <div className="containerModalWaste">
            
      <div className="containerBtnModalWaste">
        <button className="btnWasteModalWaste" onClick={() => findByCategory("Plastico")}>Plástico</button>
        <button className="btnWasteModalWaste" onClick={() => findByCategory("Papel")}>Papel</button>
        <button className="btnWasteModalWaste" onClick={() => findByCategory("Vidro")}>Vidro</button>
        <button className="btnWasteModalWaste" onClick={() => findByCategory("Metal")}>Metal</button>
        <button className="btnWasteModalWaste" onClick={() => findByCategory("Eletronico")}>Eletrônico</button>
        <button className="btnWasteModalWaste" onClick={() => findByCategory("Óleo")}>Óleo</button>
        <button className="btnWasteModalWaste" onClick={() => userAvailableWaste()}>Todos</button>
      </div>
      <h1 className="titleModalWaste">Coletas disponiveis</h1>
       <CardContainerWaste>
         
        { filteredWaste.length > 0? filteredWaste?.map((waste)=><CardWaste key={waste.id} waste={waste} />)  
          :(<li>Não há itens com esse valor de filtro</li>  )  
        }
          
       
       </CardContainerWaste>
        
    </div>      
  </WasteModal>    
  )
} 

export default ModalWaste


