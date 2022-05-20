import {CardContainer, StyledWaste} from "./style"
import Button from "../../../Global/Button"
import company1 from "./../../../../Assets/Images/company1.webp"
import { useWasteData } from "./../../../../Providers/WasteData"
import { useModal } from "./../../../../Providers/Modal"
import { useUserWaste } from "./../../../../Providers/UserRes"
import { useUser } from "./../../../../Providers/user"
import { useSnackbar } from "notistack"

const CardCompany = ({companies}) => { 

  const {wasteData} = useWasteData()
  const {closeModal} = useModal()
  const {changeWasteProps} = useUserWaste()
  const {user} = useUser()
  const {enqueueSnackbar} = useSnackbar()
 

  const handleChose = (company) => {
    
    const requestData = {
      collector_id:user.id,
      destiny:company,
      status:"Reservado" 
    }
    const finishReserve = () =>{
      changeWasteProps(wasteData.id, requestData) 
      closeModal()  
      enqueueSnackbar("Reserva Realizada com sucesso.", {
				variant: "success",
				autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
    }})
    }

    company.materials.includes(wasteData.category)?
      finishReserve()
    :( enqueueSnackbar("Selecione uma empresa que atenda esse tipo de resíduo.", {
				variant: "error",
				autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
    }}))
    
   
  }
  
  
  return (
    <CardContainer>  
      {        
        companies?.map((company) => (
        <li key={company.id}>
          <img src={company1} alt={company.name}/>
          <h2>{company.name}</h2>
          <h3>{company.city}</h3>
          <div>
            {                
            company.materials?.map((material, index) => {
              return (
                material === "Papel" ?             
              (<StyledWaste background="var(--blue)" key={index}><p>Papel</p></StyledWaste>)
              :
              material === "Plastico" ?
              (<StyledWaste background="var(--red)" key={index}><p>Plástico</p></StyledWaste>)
              :
              material === "Vidro" ?
              (<StyledWaste background="var(--green3)" key={index}><p>Vidro</p></StyledWaste>)
              :
              material === "Óleo" ?
              (<StyledWaste background="var(--orange)" key={index}><p>Óleo</p></StyledWaste>)
              :
              material === "Eletronicos" ?
              (<StyledWaste background="var(--black)" key={index}><p>Eletrônico</p></StyledWaste>)
              :
              material === "Metal" &&
              (<StyledWaste background="var(--yellow)" key={index}><p>Metal</p></StyledWaste>)
              )})              
            }
          </div>        
            <Button onClick={()=>handleChose(company)}>Escolher</Button>
        </li>))          
      }         
    </CardContainer>
  )
}

export default CardCompany






