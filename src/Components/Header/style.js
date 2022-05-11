import styled from 'styled-components'

export const StyledHeader = styled.header`
width: 100%;
height: 70px;
border-bottom: 2px solid var(--grey2);
box-shadow: 0px 6px 14px -4px rgba(0,0,0,0.12);
display: flex;


    h1 {
        font-weight: bold;
        color: var(--green2);
        font-size: 35px;
        text-align: center;
        cursor: pointer;
        border-bottom: 2px solid transparent;
    }
    h1>span {
        color: var(--black);
    }

    h1>img {
        width: 35px;
    }
    section {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: center;
    }

    h1:hover {
        filter: brightness(110%);
 
    }

    ul {
        font-weight: bold;
        display: flex;
        gap: 25px;
    }

    li {
        cursor: pointer;
        padding: 10px 0 10px 0;
        border-bottom: 2px solid var(--grey1);
       
    
    }

    li:hover {
        color: var(--green2);
        border-bottom: 2px solid var(--green1);
    }
`