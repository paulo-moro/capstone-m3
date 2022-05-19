import styled from "styled-components"

export const CollectorHome = styled.main`
  background-color: var(--gray1);
  height: 71vh;
  width: 100%;
  max-width: 1050px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .containerHomeCollector {
    width: 100%;
    height: 510px ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }  

  .containerBtnHomeCollector {
    display: flex;
    justify-content: center;
  }



  .userContainerInformation {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 460px;
    height: 70%;
    justify-content:space-around ;
  }  
  .userContainerInformation h3{
    text-align: center;
    margin:5px 0px 5px 0px;
    font-family: 'Inter';
    font-weight: 700;

  }
  .historic__type--container{
    display: flex;
    width:90%;
    justify-content: space-around;
    margin: 5% 0 
  }
  .current__collection--input{
    display: none;
  }
  .current__collection--label:hover{
    cursor: pointer;
  }
  .current__collection--input:checked+label{
    color: var(--green2);
    border-bottom: 2px var(--green2) solid;

  }
    

  .welcomeUser {
    font-size: 140%;
    font-weight:700;
    text-align: start;
    width: 100%;

    
  }

  .containerUserInformationH2 {
    margin-top: 10px;
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    justify-content: space-between;

    @media (min-width:600px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      width: 100%;
    }
  }

  .userInformationH2 {
    font-size:20px;
    color: var(--green3);
    text-align: initial;
    display: flex;
    gap: 0.5rem;

    @media(min-width:550px){
      .containerHomeCollector {
      
      }
    }
    @media (min-width: 1024px) {
      font-size: 30px;
    }

    @media (min-width: 1440px) {
      font-size: 30px;
    }
  }

  .userInformationH2Single {
    /* text-align: end; */
  }

  .userInformationH3 {
    text-align: left;
    font-size: 20px;
    padding-top: 20px;

    
  }
`

export const StatusBox = styled.span`
  padding: 5px;
  background-color: ${props=>props.background};
  border-radius: 4px;
  color:var(--white);
  font-family: 'Inter';
  font-weight: 500;
`

export const WasteHistoryList = styled.ul`
  padding: 10px;
  background-color: var(--white);
  height: 60vh;
  max-height: 60vh;
  overflow: hidden;
  overflow-y: scroll;
  width: 100%;
  border-radius: 5px;
  max-width: 1050px;

  
  & {
    scrollbar-width: auto;
    scrollbar-color: var(--green1) #ffffff;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #ffffff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--green1);
    border-radius: 10px;
    border: 1px solid #ffffff;
  }

  li{
    background-color: var(--grey2);
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;    
    align-items: center;
    border-radius: 5px;
    margin: 10px 0px;
    border: 2px solid transparent;

    cursor: pointer;
    :hover {
      border: 2px solid var(--green1);

      h2 {
        color: var(--green2)
      }
    }
  }
  li h2{
    font-family: 'Inter';
    font-weight: 700;

  }
  li span{
    padding: 5px;
    border-radius: 4px;
    color:var(--white);
    font-family: 'Inter';
    font-weight: 500;
  }
  @media(min-width:550px){
  
  }
`
export const StyledFooter = styled.footer`
background-color: var(--green2);
button{
  width: 100%;
  height: 10vh;
  background-color: var(--green2);
  border: var(--green2) 2px solid;
  position: fixed;
  bottom: 0;
  color: var(--white);
  font-size: 20px;
  font-weight: 700;
  @media(min-width:500px){
    display: none;
  }
}

`