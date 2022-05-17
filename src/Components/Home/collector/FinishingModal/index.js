import { useModal } from "../../../../Providers/Modal"
import { useTakeWaste } from "../../../../Providers/takeWaste"
import { useUserWaste } from "../../../../Providers/UserRes"
import { useWasteData } from "../../../../Providers/WasteData"



export const FinishingModal = () =>{
  const {changeWasteProps} = useUserWaste()
  const {changeToDelivered, wasteRequest,changeToPending} = useTakeWaste()
  const {closeModal} = useModal()
  const {wasteData} = useWasteData()

  const handleDeliver = () =>{
    changeToDelivered()
    changeWasteProps(wasteData.id, wasteRequest)
  }
  const handleAbandon = () =>{
    changeToPending()
    changeWasteProps(wasteData.id, wasteRequest)
  }

  return(
    <div >
      <button onClick={closeModal}>X</button>
      <form>
        <input value={wasteData.category} disabled/>
        <input value={`${wasteData.measure} ${wasteData.category==="Óleo"?"Litros":"Kg"}` } disabled/>
        <button onClick={handleDeliver}>Entregar</button><button onClick={handleAbandon}>Abandonar</button>
      </form>
    </div>
  )
}