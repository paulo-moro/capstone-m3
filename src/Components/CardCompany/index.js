import {CardContainer, StyledWaste} from "./style"
import Button from "../Global/Button"
import company1 from "./../../Images/company1.webp"

import { useWasteData } from "../../Providers/WasteData"
import { useModal } from "../../Providers/Modal"
import { useUserWaste } from "../../Providers/UserRes"
import { useUser } from "../../Providers/user"

const CardCompany = ({companies}) => { 

  const {wasteData,setWasteData} = useWasteData()
  const {closeModal} = useModal()
  const {changeWasteProps} = useUserWaste()
  const {user} = useUser()

 

  const handleChose = (company) => {
    
    const requestData = {
      collector_id:user.id,
      destiny:company,
      status:"Reservado" 
    }
    const finishReserve = () =>{
      changeWasteProps(wasteData.id, requestData) 
      closeModal()  
    }
    company.materials.includes(wasteData.category)?
      finishReserve()
    :( console.log("escolha uma empresa que atenda o material a ser reciclado"))//modal
    
   
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
              (<StyledWaste background="var(--blue)" key={index}><p>{material}</p></StyledWaste>)
              :
              material === "Plastico" ?
              (<StyledWaste background="var(--red)" key={index}><p>{material}</p></StyledWaste>)
              :
              material === "Vidro" ?
              (<StyledWaste background="var(--green3)" key={index}><p>{material}</p></StyledWaste>)
              :
              material === "Óleo" ?
              (<StyledWaste background="var(--orange)" key={index}><p>{material}</p></StyledWaste>)
              :
              material === "Madeira" ?
              (<StyledWaste background="var(--brown)" key={index}><p>{material}</p></StyledWaste>)
              :
              material === "Eletronicos" ?
              (<StyledWaste background="var(--black)" key={index}><p>{material}</p></StyledWaste>)
              :
              material === "Metal" &&
              (<StyledWaste background="var(--yellow)" key={index}><p>{material}</p></StyledWaste>)
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






