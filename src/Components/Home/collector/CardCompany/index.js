import {CardContainer, StyledWaste} from "./style"
import Button from "./../../../global/Button"
import company1 from "../../../../Images/company1.webp"
import { useTakeWaste } from "../../../../Providers/takeWaste"

const CardCompany = ({companies}) => { 
  const {choseCompany} = useTakeWaste()
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
                material === "Plástico" ?
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
                material === "Metal" &&
                (<StyledWaste background="var(--yellow)" key={index}><p>{material}</p></StyledWaste>)
                )})              
            }
          </div>        
            <Button onClick={()=>choseCompany(company)}>Escolher</Button>
        </li>))          
      }         
    </CardContainer>
  )
}

export default CardCompany






