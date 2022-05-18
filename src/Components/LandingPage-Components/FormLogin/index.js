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
import Button from '../../Global/Button';
import { StyledContainer, StyledForm } from "./style";

const FormLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
  
  const {openModal} = useModal()
  const {handleAuth} = useAuth()
  const {addUser} = useUser()

  const history = useHistory()

	const schema = yup.object().shape({
        email: yup.string().required('Digite seu Email!').email('Email não é válido'),
        pass: yup.string().required('Digite sua Senha!').min(4, 'A senha deve ter no mínimo 04 caracteres')
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
          },
        })
      }
}, [errors])
    

    const submit = ({email, pass}) => {
      console.log(email, pass)
      enqueueSnackbar("Realizando login, aguarde.", {
				variant: "info",
				autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      },
			});
      
     Api.post('/login', {
       email: email,
       password: pass
     })
     .then((res) => {
       localStorage.setItem('@Ecoleta_token', res.data.accessToken)
<<<<<<< HEAD:src/Components/LandingPage-Components/FormLogin/index.js
        handleAuth()
        addUser(res.data.user)
        localStorage.setItem("@Ecoleta_User", JSON.stringify(res.data.user))
=======
       handleAuth()
       addUser(res.data.user)
       console.log(res.data)

>>>>>>> feat/homeCollector:src/Components/FormLogin/index.js
       
       enqueueSnackbar("Login realizado, redirecionando para sua home.", {
				variant: "success",
				autoHideDuration: 2000,
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      },
      })

      setTimeout(() => {
        history.push(`/${res.data.user.type}`)
      }, 2000)
    })
     .catch((err) => {
      enqueueSnackbar("Ops! algo deu errado, tente novamente.", {
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