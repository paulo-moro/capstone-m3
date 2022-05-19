
import { useEffect, useState } from "react"
import { FaMapMarkerAlt, FaWallet } from "react-icons/fa"
import Api from "../../Api"
import RawModal from "../../Components/LandingPage-Components/RegisterModal"
import { useCompany } from "../../Providers/Companies"
import { useHeader } from "../../Providers/Header"
import { useModal } from "../../Providers/Modal"
import { useModalType } from "../../Providers/ModalTypes"
import { useUserWaste } from "../../Providers/UserRes"
import { useWasteData } from "../../Providers/WasteData"
import { useAuth } from "./../../Providers/IsAuth"
import { useUser } from "./../../Providers/user"
import { CollectorHome, StatusBox, WasteHistoryList } from "./style"





const HomeCollector = () => {
  const { user, addUser } = useUser()
  const { handleAuth,auth } = useAuth()
  const {changeHeader} = useHeader() 
  const {addWasteData} = useWasteData()
  const {openModal,modal,closeModal}= useModal()
  const {modalType, changeModal} = useModalType()
  const { userWaste,setUserWaste } = useUserWaste() 
  const {setCompanies} = useCompany() 

  const [filtered,setFiltered] = useState()


  useEffect(() => {    
    user && localStorage.setItem("@Ecoleta_User", JSON.stringify(user))
    addUser(JSON.parse(localStorage.getItem("@Ecoleta_User")))
    auth && Api.get("/waste",{
      headers:
      {"Authorization":`Bearer ${auth}`}}).then(res=> setUserWaste(res.data)) 
    auth && Api.get("/companies",{headers: {Authorization: `Bearer ${auth}`}}).then((res)=>setCompanies(res.data))  
      
    handleAuth()
    auth && closeModal()
    auth && changeHeader('homeCollector')      
    }, [])

  useEffect(()=>{
    setFiltered(userWaste.filter((waste)=> waste.collector_id === user.id).sort((a,b)=> b.status<a.status))
  },[userWaste])

  const filterByStatus = (event)=>{
    setFiltered(filtered.filter((waste)=>{
      return event.target.value === waste.category
    }))
  }     

  const handleWasteModal = () =>{
    openModal()
    changeModal("waste")   

  }
  
  const handleFinishModal = (waste) =>{
    openModal()
    changeModal("finish")
    addWasteData(waste)

  }
  
  return(
    <CollectorHome>      
      <section className="containerHomeCollector">
        
        {
          modal && <RawModal type={modalType}/>
        }        
        
        {         
          <div className="userContainerInformation">
            <h1 className="welcomeUser">Bem vindo, {user.name}!</h1>                 
            <div className="containerUserInformationH2">
                <h2 className="userInformationH2"><FaWallet/> R${user.wallet},00</h2>
                <h2 className="userInformationH2 userInformationH2Single"><FaMapMarkerAlt/> {user.city}</h2>
            </div>  
          <div className="containerBtnHomeCollector">            
            <button className="btnHomeCollector" onClick={handleWasteModal}>Coletas</button>         
          </div>      
              <h3 className="userInformationH3">Minhas coletas</h3>
            <WasteHistoryList>
              {filtered?.map((waste)=>(
                <li key={waste.id} onClick={()=>handleFinishModal(waste)}>
                  <h2>{waste.category}</h2>
                  {waste.status === "Pendente"?<StatusBox background={"var(--yellow)"}>{waste.status}</StatusBox>
                  :waste.status === "Reservado"?<StatusBox background={"var(--orange)"}>{waste.status}</StatusBox>
                  :waste.status === "Entregue"?<StatusBox background={"var(--green1)"}>{waste.status}</StatusBox>
                  :<StatusBox background={"var(--red)"}>{waste.status}</StatusBox>
                  }                   
                </li>              
              ))}  
                
            </WasteHistoryList>     
          </div>                
        }        
      </section>      
    </CollectorHome>      
  )
}

export default HomeCollector