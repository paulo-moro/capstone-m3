import styled from "styled-components"

export const WasteModal = styled.section`
width: 100vw;
height: 100vh;
position: fixed;
z-index: 1001;
inset: 0;
background-color: var(--grey1);
padding-top: 15px;

  @media (min-width: 768px) {
    padding-top: 175px;
  }

  .containerModalWaste {
    width: 75%;
    font-size: 13px;
    text-align: center;  
    margin: 0 auto;
    border-radius: 5px;
    position: relative;
    background-color: var(--grey1);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;

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
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: flex-start;
    }
  }

  .btnWasteModalWaste {    
    width: 90px;
    height: 25px;
    text-align: left;    
    padding-left: 10px;    
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 15px;    

    @media (min-width: 600px) {
      width: 83px;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`


