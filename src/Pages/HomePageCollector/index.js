import  Api  from "../../Api"
import { useEffect, useState  } from "react"
import { useHeader } from "../../Providers/Header"
import { CollectorHome } from "./style"
import ModalCompany from "../../Components/ModalCompany"
import ModalWaste from "../../Components/ModalWaste"
import {FaWallet, FaMapMarkerAlt} from "react-icons/fa"
import { useUserWaste } from "../../Providers/UserRes"
import { useUser } from "./../../Providers/user"
import { useAuth } from "./../../Providers/IsAuth"
import { useModalCompany } from "../../Providers/openModalCompany"




const HomeCollector = () => {

  const { getUserWaste, changeWasteProps, userWaste } = useUserWaste()
  const { user, addUser } = useUser()
  const { handleAuth, auth } = useAuth()
  const {changeHeader} = useHeader() 
  
  const {modalCompany, openCompanyModal} = useModalCompany()
  const [openModalCompany, setOpenModalCompany] = useState(false)
  const [openModalWaste, setOpenModalWaste] = useState(false)  
  const [filtered,setFiltered] = useState()

  localStorage.setItem("@Ecoleta_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlQHRlc3RlMS5jb20iLCJpYXQiOjE2NTI3NDEwNTAsImV4cCI6MTY1Mjc0NDY1MCwic3ViIjoiNSJ9.nsXJwXsmp0jjbVxMRz9JWRLDvK8z6KpZ9zhQSXXkXbA")
  console.log(modalCompany)
 

  const HandleOpenModalWaste = () => {
    setOpenModalWaste(true)
  }

  
 
  useEffect(() => {
    handleAuth()
    getUserWaste(user)
    changeHeader('homeCollector')   
    setFiltered(userWaste)
  }, [])
       
    const filterByStatus = (event)=>{
      setFiltered(userWaste.filter((waste)=>{
        return event.target.value === waste.category
      }))
    } 

  return(
    <CollectorHome>      
      <section className="containerHomeCollector">
        <div className="containerBtnHomeCollector">
          <button className="btnHomeCollector" onClick={openCompanyModal}>Empresas</button>
          <button className="btnHomeCollector" onClick={HandleOpenModalWaste}>Coletas</button>       
          
        </div>  
        {
          modalCompany && <ModalCompany/>
        }  
        {
          openModalWaste && <ModalWaste/>
        }

        {         
          <div className="userContainerInformation">
            <div className="containerUserInformationH2">
                <h2 className="userInformationH2"><FaWallet/> R${user.wallet},00</h2>
                <h2 className="userInformationH2 userInformationH2Single"><FaMapMarkerAlt/> {user.city}</h2>
              </div>      
            <h1 className="welcomeUser">Bem vindo, {user.name}!</h1>                 
            <h3 className="userInformationH3">Minhas coletas:</h3>
            <ul>
              {filtered?.map(({id,category,status})=>(
                <li key={id}>
                  <h2>{category}</h2>

                  <span>{status}</span> 
                </li>
              ))}  
            </ul>     
          </div>                
        }        
      </section>      
    </CollectorHome>      
  )
}

export default HomeCollector