import {CardContainerWaste} from "./style"
import Button from "../Button"
import waste1 from "../../Images/waste1.webp"
// import Api  from "../../Api"

const CardWaste = ({wastes}) => {

  // const handleStatusWaste = (id) => {

  //   Api.patch(`/waste/${id}`, {headers: {Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImVjb2NvbGV0b3JAZ21haWwuY29tIiwiaWF0IjoxNjUyNjY1MjQ2LCJleHAiOjE2NTI2Njg4NDYsInN1YiI6IjQifQ.kaA1Xq43MFijUQv7dhKgPCyylxYR8NJva_JjdYakgAk`}}, {body: {status: "reservado", collector_id: "4"}})
  //   .then((res) => {
  //     wastes?.map((waste) => {
  //       if(waste.id === res.data.id){
          
  //       }
  //     }) 
  //     console.log(res)
  //   })
  // }
  
  return (
    <CardContainerWaste>  
      {
        wastes?.map((waste) => (
            <li key={waste.id}>
            <img src={waste1} alt={waste.category}/>
            <h2>{waste.category}</h2>
            <h3>{waste.height}</h3>
            <Button >{waste.status}</Button>
            </li>))          
      }         
    </CardContainerWaste>
  )
}

export default CardWaste


