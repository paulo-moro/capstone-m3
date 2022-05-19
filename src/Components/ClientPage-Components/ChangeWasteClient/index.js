
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
import Button from "../../Global/Button"

const ChangeWasteClient = () => {
  const { changeWasteProps, rmvClientWaste, getUserWaste, userWaste } = useUserWaste()
  const { infoWaste } = useInfoWaste()
  const {closeSecondModal, secondModal} = useSecondModal()
  const {user} = useUser()
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    getUserWaste(user)
  }, [secondModal])


  const schema = yup.object().shape({
    measure: yup.number().required("Campo obrigatório")
  })

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const changeWaste = (data) => {
    closeSecondModal()
    changeWasteProps(infoWaste.id, data)
    enqueueSnackbar("Resíduo alterado", {
      variant: "success",
      autoHideDuration: 2000,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'right',
    },
  })

  }

  const removeWaste = () => {
    closeSecondModal()
    rmvClientWaste(user, infoWaste.id)
  
    

  }

  return (
    <FormChange onSubmit={handleSubmit(changeWaste)}>
      <input type="url" defaultValue={infoWaste.image} {...register("image")} />
      <select defaultValue={infoWaste.category} {...register("category")}>
        <option>Papel</option>
        <option>Plastico</option>
        <option>Eletronico</option>
        <option>Óleo</option>
        <option>Metal</option>
        <option>Vidro</option>
      </select>
      <input defaultValue={infoWaste.measure} type="number" {...register("measure")} />
      <div>
        <Button type="submit" width='200px' padding='10px' fontSize='15px'>Alterar Informações</Button>
        <button className='delButton' onClick={() => removeWaste()}>Excluir Resíduo</button>
      </div>
    </FormChange>
  )
}
export default ChangeWasteClient