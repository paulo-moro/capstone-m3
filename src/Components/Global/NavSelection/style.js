import styled from "styled-components"



export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  
  .navegacao{
    font-size: 50px;
    color: var(--green2);
  }
  .navegacao svg:hover{
    cursor: pointer;
  }
  .navOpt{
    padding: 5px;
    background-color: var(--white);
    border-radius: 8px 8px 8px 8px;
    border:2px solid var(--green2);
    position: absolute;
    top: -90px;
    
  }
  .navOpt li{
    color: var(--green2);
    background-color: var(--white);
    padding: 5px;
    height: 25px;
    width: 120px;
    

  }
  .navOpt li:hover{
    cursor: pointer;
  }
  .navChoice--container{
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
  
`
