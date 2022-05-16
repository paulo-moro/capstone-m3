import styled from 'styled-components'


export const StyledForm = styled.form`
        display: flex;
        flex-flow: column nowrap;

        align-items: center;
    
        justify-content: center;
        gap: 20px;


        h2 {
            font-weight: bold;
            font-size: 27px;
        }
    input {
        border: none;
        background-color: var(--grey3);
        padding: ${props => props.inputPadding};
        width: 100%;
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
        color: var(--black)
    }
    input:valid {
        border: 2px solid var(--green1)
    }
    div {
        width: 108%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div>label {
        font-weight: bold;
    }
    select {
        width: 100%;
        padding: ${props => props.inputPadding};
        border: none;
        background-color: var(--grey3);
        border-radius: 12px;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        color: var(--black);
        border: 2px solid var(--green1)
    }

    select:focus {
        border: 2px solid var(--green1)
    }
`


export const StyledContainer = styled.div`
    background-color: var(--white);
    width: 60%;
    min-width: 300px;
    border-radius: 10px;
    gap: 20px;

    display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: center;
        padding: 30px;

.register {
        color: var(--black);
        font-weight: bold;
        font-size: 13px;
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    .register>span {
        color: var(--blue);
    }

    .register:hover {
        filter: brightness(120%);
    }

    @media (min-width: 970px) {
       & {
          width: 350px;
        height: 430px; 
       } 
    }
`