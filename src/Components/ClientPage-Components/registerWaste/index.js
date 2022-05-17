import { useState } from "react"
import { useForm } from "react-hook-form"
import { useUser } from "../../../Providers/user"
import { useAuth } from "../../../Providers/IsAuth"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { RegisterWasteStyle } from "./style"
import Api from "../../../Api"
import Button from "../../Global/Button"
import axios from "axios"

const FormRegisterWaste = () => {
  const [isOleo, setIsOleo] = useState(false)
	const {user} = useUser()
	const {auth} = useAuth()

	const schema = yup.object().shape({
		category: yup.string().required("oscolha uma opção"),
		measure: yup.number().required("Campo obrigatório")
	})

  const {register, handleSubmit, formState:{errors}} = useForm({
		resolver: yupResolver(schema)
	})

	const cadastrar = (data) => {
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
		.then((res)=> console.log(res))
		.catch((err)=> console.log(err))
	}


	
	
	
	return (
		<RegisterWasteStyle onSubmit={handleSubmit(cadastrar)}>
			<input type="file" placeholder="file" {...register("image")}/>
			<select onClick={(e)=> e.target.value === "Óleo" ? setIsOleo(true): setIsOleo(false)} {...register("category")}>
				<option>Papel</option>
				<option>Plastico</option>
				<option>Eltetronico</option>
				<option>Óleo</option>
			</select>
			<input type="number" placeholder={isOleo ? "litros" : "peso"} {...register("measure")}/> 
			<Button width={"100%"} padding={"10px"} fontSize={"15px"} >Cadastrar</Button>
		</RegisterWasteStyle>
	)
}

export default FormRegisterWaste