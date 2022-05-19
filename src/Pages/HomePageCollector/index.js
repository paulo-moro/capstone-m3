
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
import { CollectorHome, StatusBox, StyledFooter, WasteHistoryList } from "./style"





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
  const [history, setHistory] = useState(false)


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
    <>
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
              <div className="historic__type historic__type--container">
                <input type="radio" id="currentCollect" name="chosingList" className="current__collections current__collection--input" onChange={()=>setHistory(false)}/>
                <label htmlFor="currentCollect" className="current__collection--label">Em andamento</label> 
                <input type="radio" id="historicCollect" name="chosingList" className="historic__collections current__collection--input" onClick={()=>setHistory(true)}/>
                <label htmlFor="historicCollect" className="current__collection--label">Historico</label>
              </div>      
            <WasteHistoryList>
              {!history && filtered?.map((waste)=>(
                waste.status !== "Entregue" &&
                <li key={waste.id} onClick={()=>handleFinishModal(waste)}>
                  <h2>{waste.category}</h2>
                  {waste.status === "Pendente"?<StatusBox background={"var(--yellow)"}>{waste.status}</StatusBox>
                  :waste.status === "Reservado"?<StatusBox background={"var(--orange)"}>{waste.status}</StatusBox>
                  :<StatusBox background={"var(--red)"}>{waste.status}</StatusBox>
                  }                   
                </li>              
              ))}  
              {
                history && filtered?.map((waste)=>(
                  waste.status === "Entregue" &&
                  <li key={waste.id} onClick={()=>handleFinishModal(waste)}>
                    <h2>{waste.category}</h2>
                    {
                      <StatusBox background={"var(--green1)"}>{waste.status}</StatusBox>
                    }

                  </li>
                ))}
                
            </WasteHistoryList>     
          </div>                
        }        
      </section>      
    </CollectorHome>
    <StyledFooter><button>Pegar nova entrega</button></StyledFooter> 
    </>     
  )
}

export default HomeCollector