import styled from 'styled-components'


export const StyledMain = styled.main`
width: 100%;
max-width: 1000px;
margin: 30px auto;
display: flex;
flex-direction: column;
gap: 25px;

h1 {
    font-size: 25px;
    font-weight: bold;

}

section {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: 25px;
    justify-content: center;
    border-bottom: 2px solid var(--grey2);
    padding-bottom: 20px;
    padding: 20px;
}
section:nth-child(even) {
  flex-direction: row-reverse;
}

.video {
    width: 60%;
}
.text {

    width: 35%;
}

h3 {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
}
 p {
     text-align: flex-start;
 }


 @media (max-width: 1000px) {
     section {
         flex-direction: column-reverse;
     }
     h1 {
        padding-left: 20px;
     }
     .video {
         width: 100%;
         max-width: 700px;
     }
    section:nth-child(even) {
    flex-direction: column-reverse;
    }
     .text {
         width: 100%;
         max-width: 700px;
     }
 }
`