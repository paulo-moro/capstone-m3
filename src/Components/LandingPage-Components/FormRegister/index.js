import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import Api from "../../../Api";
import { useAuth } from "../../../Providers/IsAuth";
import { useModal } from "../../../Providers/Modal";
import { useUser } from "../../../Providers/user";
import Button from "../../Global/Button";
import { StyledForm } from "../FormLogin/style";

const FormRegister = () => {
  const history = useHistory()
  const {closeModal} = useModal()
  const {handleAuth} = useAuth()
  const {addUser} = useUser()

	const { enqueueSnackbar } = useSnackbar();

	const schema = yup.object().shape({
        name: yup.string().required('Digite seu nome completo!').min(3, "Digite seu nome com ao menos 03 caracteres!").matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Nome Inválido! ") ,
        city: yup.string().required('Digite sua cidade!'),
        email: yup.string().required('Digite seu Email!').email('Email não é válido'),

        pass: yup.string().required('Digite sua Senha!').min(4, 'A senha deve ter no mínimo 4 digitos'),
        passCheck: yup.string().required('Confirme sua senha!').oneOf([yup.ref('pass')], 'As senhas não são iguais!'),
        cpfCnpj: yup.string().required().min(11,'O CPF/CNPJ deve conter no mínimo 11 caracteres').matches(
          /^([0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}|[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2})$/,
          "CPF ou CNPJ inválido"
        ),
        type: yup.string().required()
    })

    
	const {
        register,
		handleSubmit,
		formState: { errors },
	} = useForm({
        resolver: yupResolver(schema)
    });
    
    useEffect(() => {

          for (let key in errors) {
              enqueueSnackbar(errors[key].message, {
                variant: "error",
                autoHideDuration: 5000,
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right',
              }
            })
          }
    }, [errors])
    

    const submit = ({name, city, pass, cpfCnpj, type, email}) => {
      enqueueSnackbar("Realizando cadastro, aguarde.", {
				variant: "info",
				autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      }
			});
      Api.post('/register', {
          email: email,
          password: pass,
          name: name,
          image: "url.img",
          city: city,
          type: type,
          cpf: cpfCnpj,
          wallet: 1
        
      })
      .then(({data}) => {
      localStorage.setItem('@Ecoleta_token', data.accessToken)
      localStorage.setItem("@Ecoleta_User", JSON.stringify(data.user))
      addUser(data.user)
      console.log(data)
      handleAuth()

      enqueueSnackbar("Cadastro realizado, redirecionando para sua home.", {
				variant: "success",
				autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      }
			});
      setTimeout(() => {
        closeModal()
        history.push(`/${type}`)
      }, 2000)
      })
      .catch((err) => {
        enqueueSnackbar("Ops! E-mail já cadastrado, tente novamente.", {
          variant: "error",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
        }
        });
      })
    }

  
  return (
    <StyledForm  inputPadding='15px' onSubmit={handleSubmit(submit)}>
        <h2>Cadastre-se</h2>
        <input type="text" required placeholder="Digite seu nome" {...register('name')}/>
        <input type="text" required  placeholder="Digite sua cidade"  {...register('city')} />
        <input type="email" required  placeholder="Digite seu e-mail"  {...register('email')} />
        <input type="password" required placeholder="Digite sua senha"  {...register('pass')}/>
        <input type="password" required placeholder="Confirme sua senha"  {...register('passCheck')} />
        <input type="number"  required  placeholder="Digite seu CPF ou CNPJ" {...register('cpfCnpj')}/>
        <div>
        <label htmlFor="type">Selecione como deseja se cadastrar:</label>
        <select {...register('type')} defaultValue='' required>
          <option value="collector">Coletor</option>
          <option value="client">Cliente</option>
        </select>
        </div>
        <Button type="submit">Realizar Cadastro</Button>
    </StyledForm>
  )
}

export default FormRegister