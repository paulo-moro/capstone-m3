
import { useModal } from "../../../../Providers/Modal"
import { useUserWaste } from "../../../../Providers/UserRes"
import { useWasteData } from "../../../../Providers/WasteData"
import Api from "../../../../Api"
import { useAuth } from "../../../../Providers/IsAuth"
import { useUser } from "../../../../Providers/user"
import { StyledContainer, StyledForm } from "../../../FormLogin/style"
import Button from "../../../Button"
import { useState } from "react"
import { StyledImg } from "./style"


export const FinishingModal = () =>{
  const {changeWasteProps} = useUserWaste()  
  const {closeModal} = useModal()
  const {wasteData} = useWasteData()
  const {auth} = useAuth()
  const {addUser, setUser, user} = useUser()
  const {getUserWaste} = useUserWaste()  

  const userChangeRequest = (userId, request) =>{
    Api.patch(`/users/${userId}`, request, {headers:{"Authorization":`Bearer ${auth}`}} )
    .then(res=>{
      addUser(res.data)
      localStorage.setItem("@Ecoleta_user", res.data)
    })
  }   

  const handleDeliver = (event) =>{
    event.preventDefault()

    const requestData = {
      status:"Entregue"
    }

    wasteData.status !== "Entregue" &&
    changeWasteProps(wasteData.id, requestData)   
    
  
    const collectorWalletRequest = {
      wallet:user.wallet+1,
      userId: user.id
    }

    userChangeRequest(user.id, collectorWalletRequest)  
    closeModal()

  }
  const handleAbandon = (event) =>{
    event.preventDefault()
    const requestData = {
      status:"Pendente",
      destiny:"",
      collector_id:""
    }
    wasteData.status !== 'Entregue' && changeWasteProps(wasteData.id, requestData) && getUserWaste(user)
    closeModal()
  }

  return(
    <StyledContainer>
      
      <StyledForm>
        <figure><StyledImg src={wasteData.image} alt="imagem do residuo"/></figure>
        <input value={wasteData.category} disabled/>
        <input value={`${wasteData.measure} ${wasteData.category==="Óleo"?"Litros":"Kg"}` } disabled/>
        <Button className="Btn__Form Btn__Form--deliver" onClick={handleDeliver}>Entregar</Button><Button whiteButton className="Btn__Form Btn__Form--abandon" onClick={handleAbandon}>Abandonar</Button>
      </StyledForm>
    </StyledContainer>
  )
}