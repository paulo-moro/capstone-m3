import { useEffect, useState } from "react"
import { useUser } from "../../../Providers/user"
import { useUserWaste } from "../../../Providers/UserRes"
import { ClientHistoric } from "./style"


export const CustomerHistory = ({isColeta}) => {

	const {user} = useUser()
	const {getUserWaste, userWaste} =useUserWaste()
	const [historic, setHistoric] = useState([])


	useEffect(()=>{
		getUserWaste(user)
		const filter = userWaste.filter((item)=> item.status !== "Pendente")
		setHistoric(filter)
	},[isColeta])

	return(
		<>
		<ClientHistoric>
			{historic.length > 0 ? historic.map((item, index) => {
				return(
					<li key={index}>
						<div className="div-img">
							<img src={item.image}/>
						</div>
						<div className="info">
							<h3>{item.category}</h3>
							<p>{item.measure} {item.category === "Óleo" ? "Litros" : "Kg"} </p>
							<p>{item.status}</p>
						</div>
					</li>
			)})
			:
			<h2>Histórico vazio</h2>}
		</ClientHistoric>
		</>
	)
}