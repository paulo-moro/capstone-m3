// historico dos residuos do usuario
import axios from "axios";
import { useSnackbar } from "notistack";
import { createContext, useEffect,  useState, useContext } from "react";
import { useAuth } from "../IsAuth";
import { useUser } from "../user";



export const UserWasteContext = createContext()


export const UserWasteProvider = ({children})=> {
  const {auth} = useAuth()
  const [userWaste, setUserWaste] = useState([])
  const {user,addUser} = useUser()
  const {enqueueSnackbar} = useSnackbar()

  useEffect(()=>{
    auth && addUser(JSON.parse(localStorage.getItem("@Ecoleta_User")))
    auth && getUserWaste(user)

  },[userWaste.length])
 

  const  getUserWaste = async ({id,type}) => {
     
    type === "client" ?
    await axios.get(`https://api-capstone-m3.herokuapp.com/waste`,{headers:{"Authorization":`Bearer ${auth}`}})
    .then(res=>{setUserWaste(res.data.filter((waste)=>{  
         
      return waste.client_id === id
    }))})
    .catch(err=>err)
    :type === "collector" &&     
    await axios.get(`https://api-capstone-m3.herokuapp.com/waste`,{headers:{"Authorization":`Bearer ${auth}`}})
    .then(res=>setUserWaste(res.data.filter((waste)=>{ 
      
      return waste.collector_id === id || waste.status.toLowerCase() === "pendente"
    })))
    .catch(err=>err)
      
  }//função que busca na api os residuos do cliente ou coletor, no caso do coletor pega também coletas pendentes
  

  const rmvClientWaste =({type}, wasteId )=>{
    const newList = userWaste.filter((waste)=>{
      return waste.id !== wasteId        
    })
    
    if(type === "client"){    
      setUserWaste(newList)
      axios.delete(`https://api-capstone-m3.herokuapp.com/waste/${wasteId}`,{
        headers:
        {"Authorization":`Bearer ${auth}`}
      })
      .then((res)=> {
        enqueueSnackbar("Item removido", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        },
      })
      })
    
  
  }
    
    
  }//função para deletar waste da lista do cliente, função somente para cliente

  const changeWasteProps =  (wasteId,data)=>{   
        
    axios.patch(`https://api-capstone-m3.herokuapp.com/waste/${wasteId}`,data,{
      headers:
      {"Authorization":`Bearer ${auth}`}
    })
    .then((res) => {
      getUserWaste(user)
      enqueueSnackbar("Item alterado", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      },
    })

    })
    
  } //Função para modificar propriedades, tanto para cliente quanto coletor, vc deve passar o id do residuo e depois o objeto com as alterações


  return(
    <UserWasteContext.Provider value={{userWaste, getUserWaste,rmvClientWaste,changeWasteProps,setUserWaste}}>
      {children}
    </UserWasteContext.Provider>

  )
}

export const useUserWaste = () => useContext(UserWasteContext)