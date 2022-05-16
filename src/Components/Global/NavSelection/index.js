import { useAuth } from "../../../Providers/IsAuth"
import {AiOutlineProfile} from "react-icons/ai"
import { useHistory } from 'react-router-dom'
import {CgProfile} from "react-icons/cg"
import { useUser } from "../../../Providers/user"
import { NavOptions } from "../Options"
import { StyledNavList } from "./style"




export const NavSelection = ({location})=>{
  const {auth} = useAuth()
  const {user} = useUser()
  const history = useHistory()
  
  const handleRedirect=()=>{
    const {type} = user

    return(
      type === "client"?history.push("/client")
      :type === "collector"?history.push("/collector")
      :!auth && history.push("/")
    )
  }
  
  return(
    location === "video"?
      (<nav>
        <StyledNavList >
          <li onClick={handleRedirect} className="navegacao"><CgProfile/></li>
          <NavOptions location={"video"} ><AiOutlineProfile className="navegacao"/></NavOptions>
        </StyledNavList>
      </nav>)    
    :location === "homeClient"?
      (<nav>
        <ul>
          <li>
            <AiOutlineProfile/>
          </li>
          <li>
            <CgProfile/>
          </li>
        </ul>        
      </nav>)
    :location === "homeCollector" &&
      (<nav>
        <ul>
          <li>
            <AiOutlineProfile/>
          </li>
          <li>
            <CgProfile/>
          </li>
        </ul>
      </nav>)
    
  )
}