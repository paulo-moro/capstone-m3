import {CardContainer} from "./style"
import Button from "../Button"

const CardCompany = ({company}) => {
  
  return (
    <>        
      <CardContainer key={company.id}>
        <img src={company.image} alt={company.name}/>
        <h2>{company.name}</h2>
        <div>
          {
          company.materials?.map((material, index) => 
          (
            <span key={index}><p>{material}</p></span>
          ))
        }
        </div>        
        <Button>Entregue</Button>
      </CardContainer>
    </>
  )
}

export default CardCompany