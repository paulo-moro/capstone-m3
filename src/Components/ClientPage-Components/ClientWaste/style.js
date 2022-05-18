import styled from 'styled-components'

export const ListWasteClient = styled.ul`
	width: 100%;
	height:59vh;
	display:flex;
	justify-content:flex-start;
	flex-wrap:wrap;
	overflow-y:scroll;
	gap: 1rem;


	li{
		width:calc((100% - 1rem)/ 2);
		max-width:170px;
		height:250px;
		display:flex;
		flex-direction:column;
		justify-content:space-between;
		padding: 10px;
		border-radius: 8px;
		background-color: var(--green3);
		cursor: pointer;


		.div-img{
			height:120px;
			text-align:center;
			border-radius:8px;
			background-color:#fff;

			img{
				width:100%;
				height:100%;
				border-radius:8px ;
			}
		}

		.info{
			height:80px;
			display:flex;
			flex-direction:column;
			justify-content:space-evenly;
			background-color:transparent;
		}
			
	}


	@media (min-width: 550px){
		li{
			width: calc((100% - 2rem) / 3);
		}
	}

	@media (min-width: 768px){
		overflow-y: hidden;
		
		li{
			width: 170px;
		}
	}
`