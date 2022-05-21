import styled from "styled-components"




export const StyledWaste = styled.span`
    background-color: ${props => props.background};
    padding: 5px;
		font-size: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    border-radius: 20px;
    color: var(--white);
    font-weight: bold;   
`

export const StyledCard = styled.li`
   
	width:calc((100% - 1rem)/ 2);
	max-width: 170px;
	height:220px;
	display:flex;
	flex-direction:column;
	justify-content:space-between;
	padding: 10px;
	border-radius: 8px;
	background-color: var(--grey2);
	border: 1px solid transparent;
	-webkit-box-shadow: 2px 3px 15px -3px rgba(0,0,0,0.47); 
	box-shadow: 2px 3px 15px -3px rgba(0,0,0,0.47);	
	cursor: pointer;
	:hover {
		border: 1px solid var(--green2);

		figure {
			border: 1px solid var(--green2);
		}
	}

	figure{
		height:120px;
		text-align:center;
		border-radius:8px;
		background-color:#fff;
		border: 1px solid var(--white);

		img{
			width:100%;
			height:100%;
			border-radius:8px ;
		}
	}

	.info{
		display:flex;
		flex-direction:column;
		justify-content:space-evenly;
		background-color:transparent;
		align-items: center;
		gap: 10px;
	}
	.info>h3 {
		font-size: 20px;
	}
	.materials--container{
		display: flex;
		width: 95%;
		justify-content: space-around;
	}
	@media (min-width: 550px){
	width: calc((100% - 2rem) / 3);
		
	}

	@media (min-width: 768px){
	width: 170px;

	} 

`