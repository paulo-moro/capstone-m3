import { Card } from "../Card"






export const CardList = ({list, type}) =>{

  return(
    <ul>
      {list.length > 0 ?list?.map((listItem)=>{
        const {id} = listItem
        return(
          <Card type={type} key={id} listItem={listItem}/>
        )

      }):<li><h3>Não foi encontrado itens com esse filtro</h3></li>}


    </ul>
  )
}