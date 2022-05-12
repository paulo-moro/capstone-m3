import styled from 'styled-components'

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 1rem;
  width: 20%;
  height: 390px;
  padding: 15px;
  background-color: var(--grey2);
  list-style: none;
  border-radius: 10px;

  img {
    width: 90%;
    height: 140px;
    border-radius: 10px;
  }

  h2 {
    font-weight: bold;
    font-size: 150%;
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

  div>span {
    background-color: red;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    padding: 5px;
    width: 35%;
  }

  div>span>p {
    font-weight: 700;
    font-size: 80%;
    color: var(--white);
  }
`