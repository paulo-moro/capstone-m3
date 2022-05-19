import styled from "styled-components"

export const FormChange = styled.form`
	height: 200px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	margin: 40px 0;
	gap: 5px;


	input {
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
    width:84%;
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

.delButton {
	width: 150px;
  font-size: 15px ;
  border: none;
  border-radius: 8px;
  background-color: var(--red);
  color: white;
  font-weight: bold;
	:hover {
		filter: brightness(110%)
	}
}

div {
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	width: 85%;
}
`