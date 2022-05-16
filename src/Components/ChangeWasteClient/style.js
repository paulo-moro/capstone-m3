import styled from "styled-components"

export const FormChange = styled.form`
	height: 200px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	align-items:center;
	margin: 40px 0;

	input, select{
		border: 1px solid #000;
		height:30px;
		width:90%;
	}
`