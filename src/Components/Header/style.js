import styled from 'styled-components'

export const StyledHeader = styled.header`
width: 100%;
height: 70px;
border-bottom: 2px solid var(--grey2);
box-shadow: 0px 6px 14px -4px rgba(0,0,0,0.12);
display: flex;
padding: 5px 20px 0 20px;


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
       text-align: center;
    
    }

    li:hover {
        color: var(--green2);
        border-bottom: 2px solid var(--green1);
    }

    nav {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 20px;
        margin-left: 10px;
    }

    .profilePic {
        width: 60px;
        height: 60px;
        border-radius: 100%;
        border: 2px solid var(--green1);
        cursor: pointer;
    }

    .profilePic:hover {
        filter: brightness(110%);
    }

    @media (max-width: 600px) {
        & {
            height: 80px;
        }
        section {
          align-items: center;
          justify-content: center;
        }

        h1 {
            font-size: 28px;
        }

    }
    
`