import styled from 'styled-components'

export const StyledHeader = styled.header`
width: 100%;
height: 70px;
border-bottom: 2px solid var(--grey2);
box-shadow: 0px 6px 14px -4px rgba(0,0,0,0.12);
display: flex;
padding: 0 20px 0 20px;
    a {
        text-decoration: none;
        color: inherit
    }

    h1 {
        font-weight: bold;
        color: var(--green2);
        font-size: 35px;
        text-align: center;
        cursor: pointer;
        border-bottom: 2px solid transparent;
    }
    h1>a>span {
        color: var(--black);
    }

    h1>a>img {
        width: 35px;
    }
    section {
        width: 100%;
        max-width: 1050px;
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

    .navItem {
        cursor: pointer;
        padding: 10px 0 10px 0;
        border-bottom: 2px solid var(--grey1);
       text-align: center;
    
    }

    .navItem:hover {
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
            height: 90px;
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