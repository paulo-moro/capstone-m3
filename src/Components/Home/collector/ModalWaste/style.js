import styled from "styled-components"

export const WasteModal = styled.section`
display:flex;
flex-direction: column;
align-items: center;
padding-top: 15px;
width: 100%;

  @media (min-width: 768px) {
    padding-top: 175px;
  }
  .titleModalWaste{
    text-align: center;
  }
  .containerModalWaste {
    width: 95%;
    max-width: 350px;
    font-size: 13px;
    text-align: center;  
    border-radius: 5px;
    background-color: var(--white);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
    padding: 10px;    
    justify-content: center;
    align-items: center;
  

    @media (min-width: 768px) {
      margin-top: -155px;

    }
  }

  .containerHeaderWaste {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .titleModalWaste {
    font-size: 15px;
    font-weight: bold;

    @media (min-width: 768px) {
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 30px;
    }

    @media (min-width: 1440px) {
      font-size: 40px;
    }  
  }

  .btnCloseModalWaste, 
  .btnWasteModalWaste {
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border: var(--green1) 2px solid;
    color: var(--green1);
    cursor: pointer;
  }

  .btnCloseModalWaste {
    width: 30px;
    height: 30px;    
    border-radius: 15px;    
  }  

  .containerBtnModalWaste {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;

  
  }

  .btnWasteModalWaste {    
    width: 80px;
    height: 25px;
    text-align: center;    
    border-radius: 15px;   
    font-size :12px ;

    @media (min-width: 600px) {
      width: 90px;
      font-size: 15px;
    }
  }
`

export const CardContainerWaste = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 15px;
  width: 100%;
  height: 80%;
  background-color: var(--white);
  border-radius: 10px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    background-color: var(--grey1);
    height: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--grey2);    
    border-radius: 5px;
  }

  li {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  width: 240px;
  height: 280px;
  padding: 15px;
  background-color: var(--grey2);
  list-style: none;
  border-radius: 10px;
  margin: 0 auto;
  }

  img {
    width: 90%;
    height: 140px;
    border-radius: 10px;
  }

  h2 {
    font-weight: bold;
    font-size: 150%;
  }

  h3 {
    font-size: 100%;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 0.3rem;
    width: 100%;
  }

  /* div>span {
    background-color: red;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 5px;
    width: 35%;
  } */

  div>span>p {
    font-weight: 700;
    font-size: 80%;
    color: var(--white);
  }
`
