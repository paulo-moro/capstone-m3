import styled from "styled-components"

export const CompanyModal = styled.section`
width: 100vw;
height: 100vh;
position: fixed;
z-index: 1001;
inset: 0;
background-color: var(--grey1);
padding-top: 90px;

  @media (min-width: 768px) {
    padding-top: 175px;
  }

  .containerModalCompany { 
    width: 75%;
    font-size: 13px;
    text-align: center;  
    margin: -77px auto;
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

  .containerHeaderModalCompany {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;    
    gap: 0.5rem;
    width: 100%;

    @media (min-width: 768px) {
      justify-content: space-between;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }

  .titleModalCompany{
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

  .containerInputButtons {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .searchCompany {
    display: flex;
    width: 100%;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  .inputModalCompany {
    background-color: var(--white);
    border: var(--green1) 2px solid;
    color: var(--black);
    border-radius: 10px 0 0 10px;
    padding: 5px;
    font-size: 90%;
    width: 100%;    
  }

  .btnSearch,
  .btnCloseModalCompany,
  .btnWasteModalCompany {
    border-radius: 15px;
    border: var(--green1) 2px solid;
    color: var(--green1);
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .btnSearch,
  .btnCloseModalCompany {    
    width: 30px;
    height: 30px;    
  }

  .btnSearch {
    background-color: var(--green1);
    color: var(--white);
    border-radius: 0 10px 10px 0;
    width: 35px;
  }

  .containerBtnModalCompany {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    width: 100%;

    @media (min-width: 1024px) {
      justify-content: flex-start;
    }

  }

  .btnWasteModalCompany {    
    width: 90px;
    height: 25px;
    padding-left: 10px;    
    flex-direction: row;
    justify-content: flex-start;
    
    @media (min-width: 600px) {
      width: 83px;
      flex-direction: row;
      flex-wrap: nowrap;
    }
  }
`


  