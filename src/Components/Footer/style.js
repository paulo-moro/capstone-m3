import styled from 'styled-components'

export const StyledFooter = styled.footer`
width: 100%;
padding: 20px;
margin-top: auto;
background-color: var(--green2);
box-shadow: 0px -1px 15px 5px rgba(0,0,0,0.17);

section {
    position: relative;
    width: 100%;
    max-width: 1050px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    gap: 20px;
    justify-content: space-evenly;
}

.team {
    width: 60px;
    position: absolute;
    top: -20px;
    left: -10px;
    font-weight: bold;
}

`