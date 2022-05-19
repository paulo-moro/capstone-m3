import { useEffect, useState } from "react"
import { FaMapMarkerAlt } from 'react-icons/fa'
import { RiCoinsFill } from 'react-icons/ri'
import Api from "../../Api"
import ChangeWasteClient from "../../Components/ClientPage-Components/ChangeWasteClient"
import { ClientListWaste } from "../../Components/ClientPage-Components/ClientWaste"
import { CustomerHistory } from '../../Components/ClientPage-Components/CustomerHistory'
import RegisterAndChangeModal from '../../Components/ClientPage-Components/RegisterAndChangeModal'
import FormRegisterWaste from "../../Components/ClientPage-Components/registerWaste"
import Button from "../../Components/Global/Button"
import { useHeader } from "../../Providers/Header"
import { useAuth } from "../../Providers/IsAuth"
import { useModal } from "../../Providers/Modal"
import { useSecondModal } from "../../Providers/SecondModal"
import { useUser } from "../../Providers/user"
import { useUserWaste } from "../../Providers/UserRes"
import { ClientDiv, ContainerPageClient } from "./style"



const HomeClient = () => {
  const {changeHeader} = useHeader()
  const {modal, openModal, closeModal} = useModal()
  const {secondModal, openSecondModal, closeSecondModal} = useSecondModal()
  const {user, setUser, addUser} = useUser()
  const {getUserWaste, userWaste} = useUserWaste()
  const {auth} = useAuth()
  const [isColeta, setIsColeta] = useState(true)
  const [inputCity, setInputCity] = useState(false)
  const [newCity, setNewCity] = useState("")

  useEffect(() => {
    changeHeader('homeClient')
    closeModal()
    getUserWaste(user)
  }, [])


  const changeCity = (city) => {
    const changeCity = {
      city: city
    }
    Api.patch(`/users/${user.id}`, changeCity, {headers: {"Authorization": `Bearer ${auth}`}})
    .then((res)=> {
      setUser(res.data)
      localStorage.setItem("@Ecoleta_User", JSON.stringify(res.data))
    })
    // SnackBar => falha al alterar a cidade
    .catch((err)=> console.log(err)) 
  }

  useEffect(()=> {
    addUser(JSON.parse(localStorage.getItem("@Ecoleta_User")))
    Api.get(`/users/${user.id}`)
    .then((res)=> {
      addUser(res.data)
      localStorage.setItem("@Ecoleta_User", JSON.stringify(res.data))
    })


  }, [userWaste.length])


  return(
    <>
      <ClientDiv>
        <ContainerPageClient>
          <div className="userInfo">
            <h3>Olá, {user.name} Bem vindo !</h3>
            <div className="icons">
              <span className="city" onClick={()=> setInputCity(!inputCity)}><FaMapMarkerAlt/>{user.city}</span>
              <span><RiCoinsFill/> EcoPoints: {user.wallet}</span>
            </div >
            {inputCity && 
              <div className='city_container'>
              <input className='city_input' value={newCity} placeholder="Cidade atual" onChange={e => setNewCity(e.target.value)}/>
              <Button width='small' padding='10px' onClick={()=> changeCity(newCity)}>Enviar</Button>
              </div>
            }
          </div>
          <section>
            <Button onClick={()=> openModal()} width={"250px"} padding={"15px"} fontSize={"12px"} whiteButton >Cadastrar Coleta</Button>
          </section>
          <div className="buttons">
            <button onClick={()=> setIsColeta(true)}>Coletas</button>
            <button onClick={()=> setIsColeta(false)}>Historico</button>
          </div>
          {isColeta ? 
            <ClientListWaste/>
            :
            <CustomerHistory isColeta={isColeta}/>
          }
        </ContainerPageClient>
      </ClientDiv>
      <RegisterAndChangeModal modal={modal} open={openModal} close={closeModal}>
        <FormRegisterWaste/>
      </RegisterAndChangeModal>
      <RegisterAndChangeModal modal={secondModal} open={openSecondModal} close={closeSecondModal}>
        <ChangeWasteClient/>
      </RegisterAndChangeModal>
    </>
  )
}

export default HomeClient