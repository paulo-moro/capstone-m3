import styled from 'styled-components'

export const StyledInput = styled.input`
border: 2px solid var(--green1);
color: var(--green1);
padding: 10px 20px;
border-radius: 8px;
font-weight: bold;

&:focus {
    outline: none;
    border: 2px solid var(--green2);
}

&::placeholder {
    color: var(--green1);
}
`