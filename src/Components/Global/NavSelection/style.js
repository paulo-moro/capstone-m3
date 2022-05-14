import styled from "styled-components"



export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  
  .navegacao{
    font-size: 50px;
    color: var(--black);
  }
  .navegacao svg:hover{
    cursor: pointer;
  }
  .navOpt{
    padding: 5px;
    background-color: var(--white);
    border-radius: 8px 8px 0px 0px;
    position: absolute;
  }
  .navOpt li{
    color: var(--grey2);
    background-color: var(--white);
    padding: 5px;
    

  }
  .navChoice--container{
    position: relative;
  }
  
`
