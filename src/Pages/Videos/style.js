import styled from 'styled-components'


export const StyledMain = styled.main`
  width: 100%;
  align-items: center ;
  margin-top:10px;
  display: flex;
  flex-direction: column;

  
  h1 {
    font-size: 20px;
    font-weight: bold;    
  }
  .videosList--container{
    display: flex;
    overflow: hidden;
    overflow-x: scroll;
    width: 95%;
    border-bottom: 2px solid var(--grey2);  
    margin-top:20px ;
  }
  section {
    width: 380px;
    display: flex;   
    flex-direction :column-reverse ;
    align-items: center;   
    justify-content: space-between;
    padding-bottom: 20px;
    padding: 10px;
    height: 500px;
  }
  .video {
    width: 100%;
    max-width: 700px;
  }
  h3 {    
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
    font-family: 'Inter';
  }
  p {
      text-align: flex-start;
      text-align: center;
  }

  
 @media(min-width:1000px){
  .videosList--container{
    flex-wrap: wrap;
  }
  p{
    width: 300px;
  }
  h1{
    padding: 10px 0px 10px 20px;
  }
  section{
    width: 100%;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
  }
  li:nth-child(even) section{
    flex-direction: row-reverse;
  }
  li{
    width: 100%;
    border-bottom: 2px var(--grey2) solid;
  }
  .video{
    max-width: 450px;
  }
 }
`

export const StyledFooter = styled.footer`
  padding: 10px;
  background-color: var(--grey3);
  border-top:2px var(--grey2) solid;
  @media(min-width:1000px){
    display: none;
  }
` 