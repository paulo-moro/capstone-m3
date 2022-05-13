import { useState } from 'react'
import ReactPlayer from 'react-player'
import { StyledMain } from './style'

function Videos() {
  const [videos,setVideos] = useState([{
    videoUrl:"https://www.youtube.com/watch?v=hwxIoW3cj4U",
    title:"Plastico",
    description:"Curiosidades e informações interessantes sobre o plástico e a reciclagem do mesmo, além de umas dicas importantes de reciclagem."
  },{
    videoUrl:"https://www.youtube.com/watch?v=R8OvQVV5BtM",
    title:"Vidro",
    description:"O vidro é incrivel e versátil, pense em tudo o que se faz com vidro, desde maravilhosas garrafas de bebidas geladinhas, até criações arquitetônicas, mesmo frágil, pode ser remoldado em outro vidro novamente, vem dar uma olhada como que funciona a reciclagem de vidro e algumas curiosidades sobre."
  },{
    videoUrl:"https://www.youtube.com/watch?v=xouKg3XwrxY",
    title:"Metal",
    description:"Opa sabia que a caixinha de metal também é de materiais reciclaveis? da uma coferida no video para ver a importancia da reciclagem desse tipo de recurso e os tipos de metais"
  },{
    videoUrl:"https://www.youtube.com/watch?v=1VGjNjfF9yM",
    title:"Aluminio",
    description:"O Brasil é um exemplo de reciclagem de aluminio, venha conferir como é feito esse processo"
  },{
    videoUrl:"https://www.youtube.com/watch?v=rjUaQW0VG0k",
    title:"Papel",
    description: "Antes uma grande forma de vida, ela é picada, processada, transformada, em um agente que ajudou muito a humanidade a se comunicar e registrar sua história, hoje além de poder ser simplesmente descartado, esse papel pode ser novamente moido, processado e transformado, e quase renascido como uma fênix, para servir novamente à humanidade."
  },{
    videoUrl:"https://www.youtube.com/watch?v=1HccDJzA4fU",
    title:"Oléo de cozinha",
    description:"Chegou um colega que nos ajuda muito na culinaria, você sabia que o óleo de cozinha precisa de descarte correto? não? então vem conferir esse video da prefeitura de Presidente Prudente, nele rapidamente é explicado sobre o descarte e como esse óleo pode ser reutilizado."
  },{
    videoUrl:"https://www.youtube.com/watch?v=42rzbf_Txug",
    title:"E-lixo(Eletroeletrônicos)",
    description:"Já parou para pensar o que é lixo Eletroeletrônico?Se sim ou se não, vale a pena dar uma conferida nesse video!"
  },{
    videoUrl:"https://www.youtube.com/watch?v=tswmX6N8N-4",
    title:"Pilhas e Baterias, o que fazer?",
    description:"Pilhas e baterias nos ajudam muito na hora que precisamos daquela carga, mas já parou para pensar em como descartar esse resíduo, nós do Ecoleta não podemos lidar com isso, mas nesse video tras algumas dicas de como lidar com esse recurso."
  }])

  const keyGen = () =>{
    return Math.floor(Date.now()+Math.random()*10000)
  }
    return (
    <StyledMain>
        <h1>Saiba mais sobre reciclagem:</h1>
      {
        videos?.map(({title,videoUrl,description})=>(
          <section key={keyGen}>
            <div className="video">
            <ReactPlayer url={videoUrl} width='100%'/>
            </div>
            <div className='text'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
          </section>
        ))
      }
           
    </StyledMain>

  )
}

export default Videos