import { yupResolver } from "@hookform/resolvers/yup";
import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../Button";
import { StyledForm } from "../FormLogin/style";

const FormRegister = () => {
	const { enqueueSnackbar } = useSnackbar();
    
	const schema = yup.object().shape({
        name: yup.string().required('Digite seu nome completo!').min(3, "Digite seu nome com ao menos 03 caracteres!"),
        city: yup.string().required('Digite sua cidade!'),
        email: yup.string().required('Digite seu Email!').email('Email não é válido').oneOf([yup.ref('email')], 'os Emails não são iguais!'),

        pass: yup.string().required('Digite sua Senha!').matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
         "Deve conter 08 caracteres sendo uma letra maiúscula, uma minúscula, um número e um caractere especial(!,@,#,$,%,&...)"
        ),
        passCheck: yup.string().required('Confirme sua senha!').oneOf([yup.ref('pass')], 'As senhas não são iguais!'),
        cpfCnpj: yup.string().required().min(11,'O CPF/CNPJ deve conter no mínimo 11 caracteres')
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
    <StyledForm  inputPadding='15px' onSubmit={handleSubmit(submit)}>
        <h2>Cadastre-se</h2>
        <input type="text" required placeholder="Digite seu nome" {...register('name')}/>
        <input type="text" required  placeholder="Digite sua cidade"  {...register('city')} />
        <input type="email" required  placeholder="Digite seu e-mail"  {...register('email')} />
        <input type="password" required placeholder="Digite sua senha"  {...register('pass')}/>
        <input type="password" required placeholder="Confirme sua senha"  {...register('passCheck')} />
        <input type="number" required  placeholder="Digite seu CPF ou CNPJ"  {...register('cpfCnpj')}/>
        <Button type="submit">Realizar Cadastro</Button>
    </StyledForm>
  )
}

export default FormRegister