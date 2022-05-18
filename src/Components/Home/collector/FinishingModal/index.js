
import { useEffect, useState } from "react"
import Api from "../../../../Api"
import Button from "../../../../Components/Global/Button"
import { useAuth } from "../../../../Providers/IsAuth"
import { useModal } from "../../../../Providers/Modal"
import { useUser } from "../../../../Providers/user"
import { useUserWaste } from "../../../../Providers/UserRes"
import { useWasteData } from "../../../../Providers/WasteData"
import { StyledContainer, StyledForm } from "../../../LandingPage-Components/FormLogin/style"
import { StyledImg } from "./style"


export const FinishingModal = () =>{
  const {changeWasteProps} = useUserWaste()  
  const {closeModal} = useModal()
  const {wasteData} = useWasteData()
  const {auth} = useAuth()
  const {addUser, setUser, user} = useUser()
  const {getUserWaste} = useUserWaste()  

  const [client, setClient] = useState()

  const userChangeRequest = (userId, request,type) =>{
    Api.patch(`/users/${userId}`, request, {headers:{"Authorization":`Bearer ${auth}`}} )
    .then(res=>{
      if(type==="collector"){
        addUser(res.data) 
        localStorage.setItem("@Ecoleta_User", JSON.stringify(res.data))
      } else if(type === "client"){
        console.log(res.data)
      }      
    
    })
  }   
  useEffect(()=>{
    Api.get(`/users/${wasteData.client_id}`).then((res)=>{
      console.log(res.data.wallet)
      setClient(res.data)      
    })

  },[])

  const handleDeliver = (event) =>{
    event.preventDefault()

    const requestData = {
      status:"Entregue"
    }

    wasteData.status !== "Entregue" &&
    changeWasteProps(wasteData.id, requestData)   
    
   
    const collectorWalletRequest = {
      wallet: user.wallet+1,
      userId: user.id
    }
    const clientWalletRequest = {
      wallet:client.wallet+1
    }

      console.log(client.wallet+1)

    console.log(clientWalletRequest)
  
    wasteData.status !== "Entregue" && userChangeRequest(user.id, collectorWalletRequest) 
    wasteData.status !== "Entregue" && userChangeRequest(wasteData.client_id, clientWalletRequest)
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
        {wasteData.status !== "Entregue" && <Button className="Btn__Form Btn__Form--deliver"  onClick={handleDeliver} >Entregar</Button>} {wasteData.status !== "Entregue" &&  <Button whiteButton className="Btn__Form Btn__Form--abandon" onClick={handleAbandon}>Abandonar</Button>}
      </StyledForm>
    </StyledContainer>
  )
}