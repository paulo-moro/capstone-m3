import { useHeader } from "../../Providers/Header"
import { StyledMain } from "./style"




export const AboutEcoleta = ()=>{
  const {changeHeader}  = useHeader()
  changeHeader('SobreEco')
  return(
    <>
      <StyledMain>
        <article>
        <h2>E-coleta</h2>
        <section>
          <h3>Sobre nós</h3>
          <p>Uma grande problematica atual, é a gestão de resíduos reclicláveis, no Brasil, 
            temos exemplos excelentes e modelos preocupantes sobre a gestão dos mesmo, 
            o alumínio é recolhido em mais de 80% no brasil, enquanto ainda temos um problema 
            grave com o plástico que ainda é reciclado em menos de 20%. Esses produtos retornando
            para a industria, representa economia de recursos, e pode auxiliar as gerações futuras
            com os desafios de nossa sociedade.
            O Ecoleta, vem com uma proposta de democratizar, e incentivar a participação mais ativa
            da população na reciclagem de materiais</p>
          <p>
            
          </p>
        </section>
        </article>

      </StyledMain>
    </>
  )
}