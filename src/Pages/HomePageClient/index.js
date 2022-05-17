import { useEffect, useState} from "react"
import { useHeader } from "../../Providers/Header"
import { useModal } from "../../Providers/Modal"
import { useUser } from "../../Providers/user"
import { ClientDiv } from "./style"
import { ClientListWaste } from "../../Components/ClientPage-Components/ClientWaste"
import FormRegisterWaste from "../../Components/ClientPage-Components/registerWaste"
import Button from "../../Components/Global/Button"
import RegisterAndChangeModal from '../../Components/ClientPage-Components/RegisterAndChangeModal'
import ChangeWasteClient from "../../Components/ClientPage-Components/ChangeWasteClient"
import {CustomerHistory} from '../../Components/ClientPage-Components/CustomerHistory'
import {RiCoinsFill} from 'react-icons/ri'
import {FaMapMarkerAlt} from 'react-icons/fa'
import { useUserWaste } from "../../Providers/UserRes"



const HomeClient = () => {
	const {changeHeader} = useHeader()
	const {modal, openModal, closeModal, secondModal, openSecondModal, closeSecondModal} = useModal()
	const {user} = useUser()
	const {getUserWaste} = useUserWaste()
	const [isColeta, setIsColeta] = useState(true)
	const [inputCity, setInputCity] = useState(false)

	useEffect(() => {
		changeHeader('homeClient')
		closeModal()
		getUserWaste(user)
	}, [])


	const changeCity = () => {
		setInputCity(true)
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