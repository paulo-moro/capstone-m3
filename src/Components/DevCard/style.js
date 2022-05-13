import styled from 'styled-components'

export const StyledDev = styled.div`
display: flex;
align-items: center;
flex-direction: column;

&:hover {
    filter: brightness(110%);
}

    img {
        width: 100px;
        border-radius: 100%;
        height: 100px
    }
    p {
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        margin: 0;
    }
    span {
        width: 100%;
        text-align: center;
        font-size: 12px;
        margin-bottom: 5px;
    }

    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
   a {
       text-decoration: none;
       color: var(--black);
   }
    .links {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    a:hover {
        color: var(--green1)
    }
`