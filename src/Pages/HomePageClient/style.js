import styled from 'styled-components'
import img from "../../Assets/img/simbolo-reciclagem-1.png"

export const ClientDiv = styled.div`
height:100%;


section{
    width:100%;
    max-width:400px;
    height: 170px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:10px;
    position:relative;

    p{
        position:absolute;
    }
}

.image{
    width:100%;
    height:100%;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 80% 130px;
    background-position:top;
    opacity: 0.1;

}

.buttons{
    display:flex;
    justify-content:space-around;
    margin-bottom: 20px;
    
    button{
        width: 40%;
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


`