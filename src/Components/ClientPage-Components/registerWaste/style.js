import styled from 'styled-components'

export const RegisterWasteStyle = styled.form`
  height:200px;
  display: flex;
  flex-direction:column;
  margin: 40px 0;
  justify-content:space-between;
  align-items:center;

  input{
    width:80%;
    height: 40px;
    border-radius:8px;
    border:none;
    background-color: var(--grey1);
    padding-left:10px;
    ::placeholder{
      padding-left:10px;
    }
  }

  select{
    width:83%;
    height: 40px;
    border-radius:8px;
    border:none;
    background-color: var(--grey1);
    padding-left:10px;
    cursor: pointer;
  }

  

`