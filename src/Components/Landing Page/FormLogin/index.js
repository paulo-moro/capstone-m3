import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Button from '../Button';
import { StyledForm } from "./style";

const FormLogin = () => {
  const { enqueueSnackbar } = useSnackbar();
    
	const schema = yup.object().shape({
        email: yup.string().required('Digite seu Email!').email('Email não é válido').oneOf([yup.ref('email')], 'os Emails não são iguais!'),
        pass: yup.string().required('Digite sua Senha!').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Deve conter 08 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial(!,@,#,$,%,&...)"
        )
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
    

    const submit = (data) => {
     console.log(data)
    }

  return (
    <StyledForm inputPadding='20px' onSubmit={handleSubmit(submit)}>
       <h2>Já tem cadastro?</h2>
        <input type="email" placeholder="Digite seu e-mail" required {...register('email')} />
        <input type="password"  placeholder="Digite sua senha" required {...register('pass')}/>
        <Button type='submit'>Entrar</Button>
    
      <Link>Não tem uma conta? <span>Cadastre-se</span></Link>
    </StyledForm>
  )
}

export default FormLogin