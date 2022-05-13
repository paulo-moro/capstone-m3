import styled from 'styled-components'

export const StyledMain = styled.main`

width: 100%;
max-width: 1000px;
margin: 50px auto;
display: flex;
flex-flow: row nowrap;
justify-content: center;
align-items: center;

.display {
    display: none;
}



@media (min-width: 970px) {
    & {
        margin: 0 auto;
        justify-content: space-between;
        max-width: 1050px;
        
    }

    .display {
        margin-top: 50px;
        display: block;
        position: relative;
        width: 50%;
        min-height: 550px;
        min-width: 600px;
    }
    img {
        min-width: 600px;
    }

    .display__paragraph {
        position: absolute;
        top: 30px;
        right: -30px;
        text-align: end;
        display: flex;
        flex-direction: column;
        gap: 35px;

    }

    p {
        font-family: 'Inika', serif;
        font-weight: bold;
        font-size: 40px;
        width: 450px;
    }

    .p1 {
    

    }

    .p2 {
      
    

    }

    .p3 {

       
    }
}
`