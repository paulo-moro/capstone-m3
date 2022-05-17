import styled from 'styled-components'

export const ListWasteClient = styled.ul`

overflow:scroll;



li{
    display:flex;
    justify-content:space-between;
    padding:15px 10px;;
    margin: 5px;
    background-color: var(--green1);
    border-radius: 8px;
    
    
    
    .qtd{
        
        width: 25%;
    }

    h3{
        width:30%;
    }


}

`