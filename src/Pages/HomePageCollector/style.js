import styled from "styled-components"

export const CollectorHome = styled.main`
  background-color: var(--gray1);
  height: 100vh;
  width: 100vw;
  max-width: 1220px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .containerHomeCollector {
    width: 71%;
    max-width: 250px;
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

  .btnHomeCollector {
    width: 90px;
    height: 25px;
    padding-left: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: var(--green1) 2px solid;
    color: var(--green1);
    font-weight: bold;
    cursor: pointer;
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
    

  .welcomeUser {
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    @media(min-width:550px){
      
    }

    @media (min-width: 768px) {
      font-size: 30px;
    }

    @media (min-width: 1024px) {
      font-size: 40px;
    }

    @media (min-width: 1440px) {
      font-size: 40px;
    }
  }

  .containerUserInformationH2 {
    display: flex;
    flex-direction: column;    
    justify-content: space-around;
    height: 70px;
    width: 100%;

    @media (min-width:600px) {
      display: flex;
      flex-direction: row;
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
        max-width:450px;
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

    /* @media (min-width: 768px) {
      font-size: 30px;
    } */

    @media (min-width: 1024px) {
      font-size: 30px;
    }

    @media (min-width: 1440px) {
      font-size: 30px;
    }
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
  width: 300px;
  padding: 10px;
  background-color: var(--white);
  max-height: 200px;
  height: 50vh;
  overflow: hidden;
  overflow-y: scroll;
 
  border-radius: 5px;
  
  li{
    background-color: var(--grey2);
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;    
    align-items: center;
    border-radius: 5px;
    margin: 5px 0px;
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
    max-width: 450px;
  }
`
