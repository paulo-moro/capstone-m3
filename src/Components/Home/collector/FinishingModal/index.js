
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
import { useSnackbar } from "notistack"

export const FinishingModal = () =>{
  const {changeWasteProps} = useUserWaste()  
  const {closeModal} = useModal()
  const {wasteData} = useWasteData()
  const {auth} = useAuth()
  const {addUser,  user} = useUser()
  const {getUserWaste} = useUserWaste()  
  const {enqueueSnackbar}= useSnackbar()

  const [client, setClient] = useState()

  const userChangeRequest = (userId, request,type) =>{
    Api.patch(`/users/${userId}`, request, {headers:{"Authorization":`Bearer ${auth}`}} )
    .then(res=>{
      if(type==="collector"){
        addUser(res.data) 
        localStorage.setItem("@Ecoleta_User", JSON.stringify(res.data))
      }      
    
    })
  }   
  useEffect(()=>{
    Api.get(`/users/${wasteData.client_id}`).then((res)=>{
  
      setClient(res.data)      
    })

  },[])

  const handleDeliver = (event) =>{
    event.preventDefault()

    const requestData = {
      status:"Entregue"
    }

    
    changeWasteProps(wasteData.id, requestData)   
    
   
    const collectorWalletRequest = {
      wallet: user.wallet+1,
      userId: user.id
    }
    const clientWalletRequest = {
      wallet:client.wallet+1
    }    
    enqueueSnackbar("Entrega realizada com sucesso para a empresa.", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
  }})
  
    userChangeRequest(user.id, collectorWalletRequest, "collector") 
    userChangeRequest(wasteData.client_id, clientWalletRequest, "client")
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