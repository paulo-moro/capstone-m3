
import { useUserWaste } from "../../../Providers/UserRes"
import { useUser } from "../../../Providers/user"
import { ListWasteClient } from "./style"
import { useModal } from "../../../Providers/Modal"
import { useInfoWaste } from "../../../Providers/InfoWaste"



export const ClientListWaste = () => {
  const {user} = useUser()
  const {getUserWaste, userWaste} = useUserWaste()
  const {openSecondModal} = useModal()
  const {addInfoWaste} = useInfoWaste()

  getUserWaste(user)

  const changeWaste = (item) => {
    addInfoWaste(item)
    openSecondModal()
  }


  return(
    <ListWasteClient>
      {userWaste.map((item, index)=> 
      item.status === "Pendente" &&
        <li onClick={()=> changeWaste(item)} key={index}>
          {/* <img src={item.image}/> */}
          <h3>{item.category}</h3>
          <p>{item.measure} {item.category === "Óleo" ? "Litros" : "Kg"}</p>          
          <p>{item.status}</p>
        </li> 
      )}
    </ListWasteClient>
  )
}
