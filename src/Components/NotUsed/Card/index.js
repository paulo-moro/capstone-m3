import { useSnackbar } from "notistack"
import Button from "../../Global/Button"
import { useModal } from "../../../Providers/Modal"
import { useModalType } from "../../../Providers/ModalTypes"
import { useUser } from "../../../Providers/user"
import { useUserWaste } from "../../../Providers/UserRes"
import { useWasteData } from "../../../Providers/WasteData"
import { StyledCard, StyledWaste } from "./style"

import company1 from "./../../../Assets/Images/company1.webp"


export const Card = ({listItem, type}) =>{
  const {image,category, measure, name, city , materials, status } = listItem
  const {wasteData} = useWasteData()
  const {closeModal} = useModal()
  const {changeWasteProps} = useUserWaste()
  const {user} = useUser()
  const {enqueueSnackbar} = useSnackbar()
  const {changeModal} = useModalType()
  const {addWasteData} = useWasteData()

  const handleChoseCompany = (company) => {
    
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
  

  const handleOpenCompanyModal = () =>{
    changeModal("companies")
    addWasteData(listItem)
  }

  return(
 
  type === "companies"?
  
  ( 
    <StyledCard>      
      <figure>
        <img src={company1} alt={name}/>
      </figure>
      <section>
        <h3>{name}</h3> 
        <p>{city}</p>
      </section>
      <div className="materials--container">
        
        {materials?.map((material,index)=>(
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
        ))}
      </div>
      <Button width="small" onClick={()=>handleChoseCompany(listItem)}>Escolher</Button>
    </StyledCard>    
    )
  :type === "waste" &&(
    <StyledCard>  
      <figure><img src={image} alt={category}/></figure>
      <section className="info">
        <h3>{category}</h3>
        <p>{measure} {category === "Óleo"?"Litros":"Kg"} {city}</p> 
      </section>              
      <Button width="small" onClick={handleOpenCompanyModal} >{status}</Button>
    </StyledCard>    
  )
  )
}