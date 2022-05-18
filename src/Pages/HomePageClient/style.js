import styled from 'styled-components'
import img from "../../Assets/img/simbolo-reciclagem-1.png"

export const ClientDiv = styled.div`

  h3{
    font-weight:bold;
    max-width:320px;
  }

  section{
    width:100%;
    height: 170px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    position:relative;
    margin: 0 auto;

    p{
      position:absolute;
    }
  }

  .icons{
    display:flex;
    justify-content:space-between;
    margin: 20px 0;

    span{
      font-weight:bold;
    }

    .city{
      cursor: pointer;
    }
  }

  .image{
    width:100%;
    max-width:450px;
    height:100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 80% 130px;
    background-position:top;
    opacity: 0.1;
  }

  .buttons{
    display:flex;
    justify-content:space-between;
    margin-bottom: 20px;
      
    button{
      width: 40%;
      max-width:250px;
      font-size: 15px;
      font-weight:bold;
      border:none;
      border-bottom: 2px solid var(--green1);
      background-color:transparent;
      :hover{
        border-bottom:2px solid var(--green2);
      }
    }
  }

  .description{
    display:flex;
    justify-content:space-between;
    padding: 0 10px;
  }


  @media (min-width: 768px){

    .buttons{
      justify-content:space-evenly;
    }

    h3{
      max-width: 1000px;
    }
    
  }


`

export const ContainerPageClient = styled.div`
	width:100%;
	max-width:1000px;
	margin: 0 auto;
  padding:0 20px;


  @media (min-width: 768px){
    padding:0px;
  }
  
`

