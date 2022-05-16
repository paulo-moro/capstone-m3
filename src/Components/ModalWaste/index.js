import CardWaste from "../CardWaste"
import {WasteModal} from "./style"
import {useState} from "react"
import { useModal } from "../../Providers/Modal"
import { useUserWaste } from "../../Providers/UserRes"



const ModalWaste = ({wastes, setOpenModalWaste}) => {
  const [findWaste, setFindWaste] = useState([])
  const { closeModal } = useModal()
  const { getUserWaste } = useUserWaste()

  const closeModalWaste = () => {
    setOpenModalWaste(false)
  }

  const WasteFind = (material) => {
    const found = wastes.filter((waste) => material === waste.category) 
    setFindWaste(found) 
    console.log(material)
  } 

  return (
    <WasteModal>
    <div className="containerModalWaste">
      <div className="containerHeaderWaste">
        <h1 className="titleModalWaste">Coletas:</h1>
        <button className="btnCloseModalWaste" onClick={closeModalWaste}>X</button>
      </div>       
      <div className="containerBtnModalWaste">
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Plástico")}>Plástico</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Papel")}>Papel</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Vidro")}>Vidro</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Metal")}>Metal</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Madeira")}>Madeira</button>
        <button className="btnWasteModalWaste" onClick={() => WasteFind("Óleo")}>Óleo</button>
      </div>
      {
        findWaste.length > 0 ?
        (<CardWaste wastes={findWaste}/>)
        :
        (<CardWaste wastes={wastes}/>)
      }             
    </div>      
  </WasteModal>    
  )
} 

export default ModalWaste


