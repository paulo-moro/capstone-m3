import styled from 'styled-components'

export const StyledDev = styled.div`
display: flex;
align-items: center;
flex-direction: column;

&:hover {
    filter: brightness(110%);
}

    img {
        width: 300px;
        border-radius: 8px;
        height: 300px;
        border: 2px solid var(--green1);
    }
    p {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        margin: 0 0 5px 0;
    }
    span {
        width: 100%;
        text-align: center;
        font-size: 16px;
        margin-bottom: 10px;
        color: var(--green3);
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    }
    .links {
        display: flex;
        flex-direction: row;
        gap: 60px;
    }
    a {
        text-decoration: none;
        color: var(--black);
    }

    a:hover {
        color: var(--green1)
    }
`