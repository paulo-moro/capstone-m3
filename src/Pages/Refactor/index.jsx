import { useEffect } from "react"
import { CardList } from "../../Components/NotUsed/CardList"
import { useCompany } from "../../Providers/Companies"
import { useUserWaste } from "../../Providers/UserRes"



export const RefactorPage =()=>{
  const {userWaste} = useUserWaste()
  const {companies, Companies} =  useCompany()

  useEffect(()=>{ Companies()},[])

  console.log(userWaste)
  console.log(companies)
  return(
    <>
      <h3>ola</h3>
      <CardList list={userWaste} type="waste"/>
      <CardList list={companies} type="companies"/>
    </>
  )
}