// historico dos residuos do usuario
import { createContext, useContext, useEffect, useState } from "react";
import Api from "../../Api";
import { useAuth } from "../IsAuth";
export const UserWasteContext = createContext()


export const UserWasteProvider = ({children}) => {
  const {auth} = useAuth()
  const [userWaste, setUserWaste] = useState([])

  const ShowUserWaste = ({id,type}) => {
    useEffect(()=>{
      type === "client" ?
      Api.get(`/waste`,{headers:{"Authorization":`Bearer ${auth}`}})
      .then(res=>setUserWaste(res.data.filter((waste)=>{
        return waste.client_id === id
      })))
      .catch(err=>err)
      :type === "collector" && 
      Api.get(`/waste`)
      .then(res=>setUserWaste(res.data.filter((waste)=>{
        return waste.collector_id === id || waste.status === "pendente"
      })))
      .catch(err=>err)
    },[])    
  }

  const rmvUserWaste =({id,type}, wasteId )=>{
    const newList = userWaste.filter((waste)=>{
      return waste.id !== wasteId        
    })
    
    if(type === "client"){    
      setUserWaste(newList)
      Api.delete(`waste/${wasteId}`,{
        headers:
        {"Authorization":`Bearer ${auth}`}
      })
    }
    else if(type === "collector"){
      setUserWaste(newList)
      Api.patch(`waste/${wasteId}`,{status:"pendente", collector_id:id},{
        headers:
        {"Authorization":`Bearer ${auth}`}
      })
    }
  }


  return(
    <UserWasteContext.Provider value={{userWaste, ShowUserWaste,rmvUserWaste}}>
      {children}
    </UserWasteContext.Provider>

  )
}

export const useUserWaste = () => useContext(UserWasteContext)