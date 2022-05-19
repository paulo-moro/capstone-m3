import styled from 'styled-components'

export const RegisterWasteStyle = styled.form`
  height:200px;
  display: flex;
  flex-direction:column;
  margin: 40px 0;
  justify-content:space-between;
  align-items:center;
  gap: 10px;

  input{
    width:80%;
    min-height: 40px;
    border-radius:8px;
    border:none;
    background-color: var(--grey1);
    padding-left:10px;
    text-align: center;
    border: 2px solid transparent;

    ::placeholder{
      padding-left:10px;
      
    }
    :focus {
      outline: none;
      border: 2px solid var(--green1)
    }
  }

  select{
    text-align: center;
    width:83%;
    min-height: 45px;
    border-radius:8px;
    border:none;
    background-color: var(--grey1);
    padding-left:10px;
    cursor: pointer;
    border: 2px solid transparent;

    :focus {
     outline: none;
     border: 2px solid var(--green1)
   }
  }

button {
  margin-top: 10px;
}
`