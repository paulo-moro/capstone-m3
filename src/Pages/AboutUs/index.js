import { useState } from "react";
import caminhao from "../../Assets/img/caminhao.png";
import ecocoins from "../../Assets/img/ecocoins.png";
import recicle from "../../Assets/img/recicle.png";
import { NavSelection } from "../../Components/Global/NavSelection";
import { useHeader } from "../../Providers/Header";
import { StyledFooter, StyledMain } from "./style";
import logo_3 from "../../Assets/Images/logo_3.png"
const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([
    {
      id: 2,
      img: recicle,
      title: "O Ecoleta",
      description:
        "O Ecoleta traz uma forma de haver ganhos tanto para o cliente, quanto para o trabalhador logístico",
    },
    {
      id: 1,
      img: logo_3,
      title: "Gestão de Resíduos",
      description:
        "A gestão de resíduos é um problema atual, que ocorre em pequenas e grandes cidades. Existe uma grande complexidade em atrair pessoas/empresas para o movimento do tratamento desses resíduos. Além de uma demanda grande de trabalhadores que fazem a logística necessária para o resíduo chegar à estação de tratamento",
    },    
    {
      id: 3,
      img: ecocoins,
      title: "Ecopoints",
      description:
        "O cliente receberá ecoPoints a cada pedido de coleta feito no App, onde futuramente poderão ser trocados por dinheiro ou cupons de desconto",
    }
    //,
    //{
      //id: 4,
      //img: chat,
      //title: "Diferencial",
      //description:
      //  "O Ecoleta possui de centralizar a comunicação entre cliente e trabalhador dentro do App",
    //},
  ]);
  const { changeHeader } = useHeader();
  changeHeader("video");
  return (
    <>
      <StyledMain>
        <h1>Sobre Nós</h1>
        <ul className="aboutUs--container">
          {aboutUs?.map(({ title, img, description, id }) => (
            <li key={id}>
              <section>
                <div className="img">
                  <img src={img} alt=''></img>
                </div>
                <div className="text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </section>
            </li>
          ))}
        </ul>
      </StyledMain>
      <StyledFooter>
        <NavSelection location={"video"} />
      </StyledFooter>
    </>
  );
};

export default AboutUs;
