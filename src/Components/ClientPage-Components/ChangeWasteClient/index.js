
import { useUserWaste } from "../../../Providers/UserRes"
import { useInfoWaste } from "../../../Providers/InfoWaste"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup'
import { FormChange } from "./style"
import { useUser } from "../../../Providers/user"
import { useEffect } from "react"
import { useSecondModal } from "../../../Providers/SecondModal"
import { useSnackbar } from "notistack"

const ChangeWasteClient = () => {
  const {changeWasteProps, rmvClientWaste, getUserWaste, userWaste} = useUserWaste()
  const { infoWaste } = useInfoWaste()
  const {closeSecondModal, secondModal} = useSecondModal()
  const {user} = useUser()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(()=> {
    getUserWaste(user)
  }, [secondModal])


  const schema = yup.object().shape({
    measure: yup.number().required("Campo obrigatório")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const changeWaste = (data) => {
    closeSecondModal()
    changeWasteProps(infoWaste.id, data)
    enqueueSnackbar("Item alterado", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    });
  }

  const removeWaste = () => {
    closeSecondModal()
    rmvClientWaste(user, infoWaste.id)
    enqueueSnackbar("Item removido", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
    });
    

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