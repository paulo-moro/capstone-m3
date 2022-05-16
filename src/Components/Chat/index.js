const { useState } = require("react")
const { useUser } = require("../../Providers/user")



export const Chat = () =>{
  const [message, setMessage] = useState("")
  const [messages,setMessages] = useState([])
  const {user,addUser} = useUser()

  const keyGen = () =>{
    return Math.floor(Math.random()*100000*Date.now())
  }
  
  const handleSubmit= event =>{
    event.preventDefault()
    
    if(message.trim()){
      setMessages([...messages,{
        id:keyGen(),
        userId:user.id,
        message
      }])
      setMessage("")
    }
  }

  const handleInputChange = event =>{
    setMessage(event.target.value)
  }

 
  return(
    <>
      <ul>
        {messages?.map(({id,userId,message})=>(
          <li key={id}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          className="form__messageField"
          placeholder="Digite uma nova mensagem"
          value={message} 
          type="text"
          onChange={handleInputChange}/>
      </form>
      <button onClick={()=>addUser({
        id:1,
        nome:"Paulo",
      })}>Add user</button>
    </>
  )
}

