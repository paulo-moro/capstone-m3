import { useEffect, useState } from "react"
import { useUser } from "../../Providers/user"
import { useUserWaste } from "../../Providers/UserRes"
import { ClientHistoric } from "./style"


export const CustomerHistory = () => {

	const {user} = useUser()
	const {getUserWaste, userWaste} =useUserWaste()
	const [historic, setHistoric] = useState([])

	getUserWaste(user)

	useEffect(()=>{
		const filter = userWaste.filter((item)=> item.status !== "pendente")
		setHistoric(filter)
	},[])

	return(
		<>
		<ClientHistoric>
			{historic.length > 0 ? historic.map((item, index) => {
				return(
					<li key={index}>
						<h3>{item.category}</h3>
						<p>{item.measure} {item.category === "Óleo" ? "Litros" : "Kg"} </p>
						<p>{item.status}</p>
					</li>
			)})
			:
			<h2>Histórico vazio</h2>}
		</ClientHistoric>
		</>
	)
}