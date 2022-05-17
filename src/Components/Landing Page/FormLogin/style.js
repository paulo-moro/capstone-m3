import styled from 'styled-components'


export const StyledForm = styled.form`
        display: flex;
        flex-flow: column nowrap;
        width: 350px;
        align-items: center;
        background-color: var(--white);
        border-radius: 10px;
        justify-content: center;
        gap: 20px;
        padding: 30px;


        h2 {
            font-weight: bold;
            font-size: 27px;
        }
    input {
        border: none;
        background-color: var(--grey3);
        padding: ${props => props.inputPadding};
        width: 90%;
        border: 2px solid transparent;
        border-radius: 12px;
        text-align: center;
        font-size: 16px;
    }

    input:focus {
        outline: none;
        border: 2px solid var(--green1)
    }
    input::placeholder {
        font-weight: bold;
        font-size: 16px;
        text-align: center;
    }
    input:valid {
        border: 2px solid var(--green1)
    }
    a {
        text-decoration: none;
        color: var(--black);
        font-weight: bold;
        font-size: 13px;
    }

    a>span {
        color: var(--blue);
    }

    a:hover {
        filter: brightness(120%);
    }
`