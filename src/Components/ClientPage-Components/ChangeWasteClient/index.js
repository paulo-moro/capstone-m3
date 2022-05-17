
import { useUserWaste } from "../../../Providers/UserRes"
import { useInfoWaste } from "../../../Providers/InfoWaste"
import { useModal } from "../../../Providers/Modal"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FormChange } from "./style"
import { useUser } from "../../../Providers/user"

const ChangeWasteClient = () => {
  const {changeWasteProps, rmvClientWaste} = useUserWaste()
  const { infoWaste } = useInfoWaste()
	const {closeSecondModal} = useModal()
  const {user} = useUser()

  const schema = yup.object().shape({
    measure: yup.number().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const changeWaste = (data) => {
    changeWasteProps(infoWaste.id, data)
    closeSecondModal()
  }

  const removeWaste = () => {
    rmvClientWaste(user, infoWaste.id)
    closeSecondModal()

  }



  return(
    <FormChange onSubmit={handleSubmit(changeWaste)}>
      <input type="file"/>
      <select defaultValue={infoWaste.category} {...register("category")}>
        <option>Papel</option>
        <option>Plastico</option>
        <option>Eltetronico</option>
        <option>Óleo</option>
      </select>
      <input defaultValue={infoWaste.measure} type="number" {...register("measure")}/>
      <button type="submit">Alterar informações</button>
      <span>ou</span>
      <button  onClick={removeWaste}>excluir Resíduo</button>
    </FormChange>
  )
}
export default ChangeWasteClient