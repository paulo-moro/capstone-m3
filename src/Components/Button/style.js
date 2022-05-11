import styled from 'styled-components'

export const StyledButton = styled.button`
    background-color: ${props => props.whiteButton ? 'var(--white)' : 'var(--green1)'};
    width: ${props => props.width || '220px'};
    padding: ${props => props.padding || '15px'};
    font-size: ${props => props.fontSize || '20px'};
    border: 2px solid var(--green1);
    border-radius: 10px;
    color: ${props => props.whiteButton ? 'var(--green1)' : 'var(--white)'};
    font-weight: bold;


    &:hover {
       filter: brightness(110%);

    }
`