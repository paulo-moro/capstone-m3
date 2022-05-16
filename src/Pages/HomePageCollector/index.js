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



const HomeCollector = () => {

  const { getUserWaste, changeWasteProps, userWaste } = useUserWaste()
  const { user, addUser } = useUser()
  const { handleAuth, auth } = useAuth()
  

  const [openModalCompany, setOpenModalCompany] = useState(false)
  const [openModalWaste, setOpenModalWaste] = useState(false)
  const [companies, setCompanies] = useState([])
  

  localStorage.setItem("@Ecoleta_token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVjb2NvbGV0b3JAZ21haWwuY29tIiwiaWF0IjoxNjUyNzE1MDI4LCJleHAiOjE2NTI3MTg2MjgsInN1YiI6IjQifQ.ZoRIC8nWQWeckF84vyxS9I5ZpKW05OLFDKz_hx8wH1Y")

  
  const Companies = Api.get("/companies", {headers: {Authorization: `Bearer ${auth}`}})
  .then((res) => {
    setCompanies(res.data)})
  
  // Api.get("/waste", {headers: {Authorization: `Bearer ${auth}`}})
  // .then((res) => {
  //   const filteredWaste = res.data.filter((waste) => waste.status === "pendente")
  //   setWastes(filteredWaste)    

    // const userHistory = res.data.filter((waste) => waste.id === )
  // })
      
  const HandleOpenModalCompany = () => {
    setOpenModalCompany(true)
  }

  const HandleOpenModalWaste = () => {
    setOpenModalWaste(true)
  }

  const {changeHeader} = useHeader()

  useEffect(() => {
    addUser({
      "email": "ecocoletor@gmail.com",
      "name": "ecocoletor",
      "image": "url.img",
      "city": "lugar nenhum",
      "type": "coletor",
      "wallet": 1,
      "id": 4
    })
    handleAuth()
    getUserWaste(user)
    changeHeader('homeCollector')     
    }, [])
    
    console.log(userWaste)

  return(
    <CollectorHome>      
      <section className="containerHomeCollector">
        <div className="containerBtnHomeCollector">
          <button className="btnHomeCollector" onClick={HandleOpenModalCompany}>Empresas</button>
          <button className="btnHomeCollector" onClick={HandleOpenModalWaste}>Coletas</button>
          
          <button className="btnHomeCollector" onClick={() => getUserWaste(user)}>Residuos</button>
        </div>  
        {
          openModalCompany && <ModalCompany companies={companies} setOpenModalCompany={setOpenModalCompany} />
        }  
        {
          openModalWaste && <ModalWaste getUserWaste={getUserWaste} setOpenModalWaste={setOpenModalWaste}/>
        }

        {         
          <div className="userContainerInformation">
            <div className="containerUserInformationH2">
                <h2 className="userInformationH2"><FaWallet/> R${user.wallet},00</h2>
                <h2 className="userInformationH2 userInformationH2Single"><FaMapMarkerAlt/> {user.city}</h2>
              </div>      
            <h1 className="welcomeUser">Bem vindo, {user.name}!</h1>                 
            <h3 className="userInformationH3">Minhas coletas:</h3>     
          </div>                
        }        
      </section>      
    </CollectorHome>      
  )
}

export default HomeCollector