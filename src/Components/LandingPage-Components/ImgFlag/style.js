import styled, {css} from 'styled-components'


export const StyledFlag = styled.div`
    ${props => {
        if(props.fade){
            return css`
                animation: fadeOut 2s forwards;
            `
        } else {
            return css`
                animation: none;
            `
        }
    }}  

@keyframes fadeOut{
        from{
            opacity: 1;
        } to {

            opacity: 0;
        }   
    }
`