import { Card } from "../Card"






export const CardList = ({list, type}) =>{

  return(
    <>
    <h3>/</h3>
    <ul>
      {list.length > 0 ?list?.map((listItem)=>{
        const {id} = listItem
        return(
          <Card type={type} key={id} listItem={listItem}/>
        )

      }):<li><p>Não foi encontrado itens com esse filtro</p></li>}


    </ul>
    </>
  )
}