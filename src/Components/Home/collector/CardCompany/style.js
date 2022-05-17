import styled from 'styled-components'

export const CardContainer = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 15px;
  width: 100%;
  background-color: var(--green5);
  border-radius: 10px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    background-color: var(--green4);
    height: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--green1);    
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
  height: 390px;
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

  div>span>p {
    font-weight: 700;
    font-size: 80%;
    color: var(--white);
  }
`

export const StyledWaste = styled.span`
    background-color: ${props => props.background};
    width: 35%;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    border-radius: 20px;
    color: var(--white);
    font-weight: bold;   
`


