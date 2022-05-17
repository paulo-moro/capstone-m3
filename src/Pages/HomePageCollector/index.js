
import { useEffect, useState  } from "react"
import { useHeader } from "../../Providers/Header"
import { CollectorHome, StatusBox, WasteHistoryList } from "./style"
import ModalCompany from "../../Components/Home/collector/ModalCompany"
import ModalWaste from "../../Components/Home/collector/ModalWaste"
import {FaWallet, FaMapMarkerAlt} from "react-icons/fa"
import { useUserWaste } from "../../Providers/UserRes"
import { useUser } from "./../../Providers/user"
import { useAuth } from "./../../Providers/IsAuth"
import { useModalCompany } from "../../Providers/openModalCompany"
import { useModalWaste } from "../../Providers/openModalWaste"
import { useModal } from "../../Providers/Modal"
import { FinishingModal } from "../../Components/Home/collector/FinishingModal"
import { useWasteData } from "../../Providers/WasteData"




const HomeCollector = () => {

  const { getUserWaste, userWaste } = useUserWaste()
  const { user } = useUser()
  const { handleAuth, auth } = useAuth()
  const {changeHeader} = useHeader()   
  const {modalCompany, openCompanyModal} = useModalCompany()
  const {modalWaste, openWasteModal} = useModalWaste()
  const {openModal,modal}= useModal()
  const {addWasteData} = useWasteData()

  const [filtered,setFiltered] = useState()
  
  localStorage.setItem("@Ecoleta_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlMS5jb20iLCJpYXQiOjE2NTI3ODMxMDIsImV4cCI6MTY1Mjc4NjcwMiwic3ViIjoiNCJ9.fU_JJlD2KliBSrOdgtOdB7YbubpiBl7qQ4-0KlAH03M")
  
 
 
  useEffect(() => {
    handleAuth()
    getUserWaste(user)
    changeHeader('homeCollector')   
    setFiltered(userWaste.filter((waste)=> waste.collector_id === user.id))
  }, [])
       
    const filterByStatus = (event)=>{
      setFiltered(userWaste.filter((waste)=>{
        return event.target.value === waste.category
      }))
    } 

    const handleFinishModal = () =>{
      openModal()
      addWasteData()

    }

  return(
    <CollectorHome>      
      <section className="containerHomeCollector">
        
        {
          modalCompany && <ModalCompany/>
        }  
        {
          modalWaste && <ModalWaste/>
        }
        {
          modal && <FinishingModal/>
        }
        
        {         
          <div className="userContainerInformation">
            <h1 className="welcomeUser">Bem vindo, {user.name}!</h1>                 
            <div className="containerUserInformationH2">
                <h2 className="userInformationH2"><FaWallet/> R${user.wallet},00</h2>
                <h2 className="userInformationH2 userInformationH2Single"><FaMapMarkerAlt/> {user.city}</h2>
            </div>  
          <div className="containerBtnHomeCollector">
            <button className="btnHomeCollector" onClick={openCompanyModal}>Empresas</button>
            <button className="btnHomeCollector" onClick={openWasteModal}>Coletas</button>         
          </div>      
              <h3 className="userInformationH3">Minhas coletas:</h3>
            <WasteHistoryList>
              {filtered?.map(({id,category,status})=>(
                <li key={id} onClick={handleFinishModal}>
                  <h2>{category}</h2>
                  {status === "pendente"?<StatusBox background={"var(--yellow)"}>{status}</StatusBox>
                  :status === "reservado"?<StatusBox background={"var(--orange)"}>{status}</StatusBox>
                  :status === "entregue"?<StatusBox background={"var(--green1)"}>{status}</StatusBox>
                  :<StatusBox background={"var(--red)"}>{status}</StatusBox>
                  }                   
                </li>
              ))}  
              <li onClick={handleFinishModal}><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>
              <li><h2>Exemplo</h2> <span>Reservado</span></li>  
            </WasteHistoryList>     
          </div>                
        }        
      </section>      
    </CollectorHome>      
  )
}

export default HomeCollector