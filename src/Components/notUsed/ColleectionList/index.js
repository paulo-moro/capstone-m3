import { useState } from "react"



export const ListWaste = (arr, idClient, status, type) => {

  const [filter] = useState(arr.filter((item)=> item.client_id === idClient))



  // const filterArr = () => {
  //   setfilter(...filter, ) 
  // }


  return (
  <>
  {type === "client" && filter.map((item)=> <ul>
    <listclient></listclient>
  </ul>)}
  </>
  )

}

// sera responsavel por renderizar os residuos tanto para o client quanto para o coletor

// tera que ter uma verificação para se for coletor vai renderizar todos os residuos pendentes e se for client renderizar somente
// aqueles que tem o userid igual ao id do usuario


// 
// 