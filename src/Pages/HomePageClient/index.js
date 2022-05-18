import { useEffect, useState} from "react"
import { useHeader } from "../../Providers/Header"
import { useModal } from "../../Providers/Modal"
import { useUser } from "../../Providers/user"
import { ClientDiv } from "./style"
import { ClientListWaste } from "../../Components/ClientWaste"
import FormRegisterWaste from "../../Components/registerWaste"
import Button from "../../Components/Button"
import RegisterAndChangeModal from '../../Components/RegisterAndChangeModal'
import ChangeWasteClient from "../../Components/ChangeWasteClient"
import { CustomerHistory } from "../../Components/CustomerHistory"
import {RiCoinsFill} from 'react-icons/ri'
import {FaMapMarkerAlt} from 'react-icons/fa'

// testes
import Api from "../../Api"
import axios from "axios"



const HomeClient = () => {
	const {changeHeader} = useHeader()
	const {modal, openModal, closeModal, secondModal, openSecondModal, closeSecondModal} = useModal()
	const [isColeta, setIsColeta] = useState(true)
	const [inputCity, setInputCity] = useState(false)

	useEffect(() => {
		changeHeader('homeClient')
		closeModal()
	}, [])

	const changeCity = () => {
		setInputCity(true)
	}

	 // FUNÇAÕ TESTES
	const {user, addUser} = useUser()

  const userAndAuth = (user, authUser) => {
		addUser(user)
		localStorage.setItem("@Ecoleta_token", authUser)
  }

	const login = () => {
    Api.post("/login", {
      email: "client@gmail.com",
      password: "123456"
    })
    .then((res)=> userAndAuth(res.data.user, res.data.accessToken))
    .catch((err)=> console.log(err))
  }

	

	return(
		<>
			<ClientDiv>
				<div>
					<span><RiCoinsFill/> {user.wallet}</span>
					<span onClick={()=> changeCity()}><FaMapMarkerAlt/>{user.city}</span>
					{inputCity && 
					<form>
					<input placeholder="Cidade atual"/>
					<button>Enviar</button>
					</form>
					}
					
				</div>
				<button onClick={login}>login</button>
				<button>listar Resíduo</button>
				<section>
					<div className="image"></div>
					<p>Solicite uma nova coleta</p>
					<Button onClick={()=> openModal()} width={"150px"} padding={"5px"} fontSize={"12px"} whiteButton >Cadastrar Coleta</Button>
				</section>
				<div className="buttons">
					<button onClick={()=> setIsColeta(true)}>Coletas</button>
					<button onClick={()=> setIsColeta(false)}>Historico</button>
				</div>
				<div className="description">
					<p>Categoria</p>
					<p>Quantidade</p>
					<p>Status</p>
				</div>
				{isColeta ? 
					<ClientListWaste/>
					:
					<CustomerHistory/>
				}
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






