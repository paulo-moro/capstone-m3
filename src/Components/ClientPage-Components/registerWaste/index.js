import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useUser } from "../../../Providers/user"
import { useAuth } from "../../../Providers/IsAuth"
import {useModal} from "../../../Providers/Modal"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { RegisterWasteStyle } from "./style"
import Api from "../../../Api"
import Button from "../../Global/Button"
import { useUserWaste } from "../../../Providers/UserRes"
import { useSnackbar } from "notistack"

const FormRegisterWaste = () => {
  const [isOleo, setIsOleo] = useState(false)
	const {user} = useUser()
	const {auth} = useAuth()
	const {closeModal} = useModal()
	const {getUserWaste, userWaste} = useUserWaste()
	const [openClose, setOpenClose] = useState(false)
	const {enqueueSnackbar} = useSnackbar()

	const schema = yup.object().shape({
		category: yup.string().required("oscolha uma opção"),
		measure: yup.number().required("Campo obrigatório")
	})

  const {register, handleSubmit, formState:{errors}} = useForm({
		resolver: yupResolver(schema)
	})
 
	const successRegister = () => {
		getUserWaste(user)
		closeModal()
		enqueueSnackbar("Resíduo cadastrado", {
			variant: "success",
			autoHideDuration: 2000,
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right',
		},
	})

	}


	const registerWaste = (data) => {
		const dataBase= {
			category: data.category,
			measure: data.measure,
			image: data.image,
			client_id: user.id,
			status: "Pendente"
		}


		Api.post("/waste", dataBase,
		{headers: {
			"Authorization": `Bearer ${auth}`
		}})
		.then(()=> successRegister())
	}

	return (
		<RegisterWasteStyle onSubmit={handleSubmit(registerWaste)}>
			<input type="text" required placeholder="Insira a url da imagem" {...register("image")}/>
			<select onClick={(e)=> e.target.value === "Óleo" ? setIsOleo(true): setIsOleo(false)} {...register("category")}>
				<option>Papel</option>
				<option value="Plastico">Plástico</option>
				<option value="Eletronicos">Eletrônico</option>
				<option>Óleo</option>
				<option>Vidro</option>
				<option>Metal</option>
			</select>
			<input type="number" required placeholder={isOleo ? "Litros" : "Peso"} {...register("measure")}/> 
			<Button width={"60%"} padding={"15px"} fontSize={"15px"}  onClick={()=> setOpenClose(!openClose)}>Cadastrar</Button>
		</RegisterWasteStyle>
	)
}

export default FormRegisterWaste