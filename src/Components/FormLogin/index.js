import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Api from "../../Api";
import { useAuth } from "../../Providers/IsAuth";
import { useModal } from "../../Providers/Modal";
import { useUser } from "../../Providers/user";
import Button from '../Button';
import { StyledForm, StyledContainer } from "./style";

const FormLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  
  const {openModal} = useModal()
  const {handleAuth} = useAuth()
  const {addUser} = useUser()

  const history = useHistory()

	const schema = yup.object().shape({
        email: yup.string().required('Digite seu Email!').email('Email não é válido'),
        pass: yup.string().required('Digite sua Senha!')
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
            autoHideDuration: 5000
        })
      }
}, [errors])
    

    const submit = ({email, pass}) => {
      enqueueSnackbar("Realizando login, aguarde.", {
				variant: "info",
				autoHideDuration: 2000,
			});

     Api.post('/login', {
       email: email,
       password: pass
     })
     .then((res) => {
       console.log(res.data)
       localStorage.setItem('@Ecoleta_token', JSON.stringify(res.data.accessToken))
       handleAuth()
       addUser(res.data.user)

       enqueueSnackbar("Login realizado, redirecionando para sua home.", {
				variant: "success",
				autoHideDuration: 2000
      })

      setTimeout(() => {
        history.push(`/${res.data.user.type}`)
      }, 2000)
    })
     .catch((err) => {
      enqueueSnackbar("Ops! algo deu errado, tente novamente.", {
        variant: "error",
        autoHideDuration: 2000,
      });
     })

    }

  return (
    <StyledContainer>
    <StyledForm inputPadding='20px' onSubmit={handleSubmit(submit)}>
       <h2>Já tem cadastro?</h2>
        <input type="email" placeholder="Digite seu e-mail" required {...register('email')} />
        <input type="password"  placeholder="Digite sua senha" required {...register('pass')}/>
        <Button type='submit'>Entrar</Button>
    </StyledForm>
       <button className="register" onClick={openModal}>Não tem uma conta? <span>Cadastre-se</span></button>
    </StyledContainer>
  )
}

export default FormLogin



/* .matches(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
"Deve conter 08 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial(!,@,#,$,%,&...)"
) */