
import { useUserWaste } from "../../../Providers/UserRes"
import { useInfoWaste } from "../../../Providers/InfoWaste"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FormChange } from "./style"
import { useUser } from "../../../Providers/user"
import { useEffect } from "react"
import { useSecondModal } from "../../../Providers/SecondModal"

const ChangeWasteClient = () => {
  const {changeWasteProps, rmvClientWaste, getUserWaste, userWaste} = useUserWaste()
  const { infoWaste } = useInfoWaste()
  const {closeSecondModal, secondModal} = useSecondModal()
  const {user} = useUser()

  useEffect(()=> {
    getUserWaste(user)
  }, [secondModal])


  const schema = yup.object().shape({
    measure: yup.number().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const changeWaste = async(data) => {
    closeSecondModal()
    await changeWasteProps(infoWaste.id, data)
    // snackBar
    // Item Alterado
  }

  const removeWaste = () => {
    closeSecondModal()
    rmvClientWaste(user, infoWaste.id)
    // snackBar
    // Item Removido

  }

  return(
    <FormChange onSubmit={handleSubmit(changeWaste)}>
      <input type="url" defaultValue={infoWaste.image} {...register("image")}/>
      <select defaultValue={infoWaste.category} {...register("category")}>
        <option>Papel</option>
        <option>Plastico</option>
        <option>Eletronico</option>
        <option>Óleo</option>
      </select>
      <input defaultValue={infoWaste.measure} type="number" {...register("measure")}/>
      <button type="submit">Alterar informações</button>
      <span>ou</span>
      <button  onClick={()=>removeWaste()}>excluir Resíduo</button>
    </FormChange>
  )
}
export default ChangeWasteClient