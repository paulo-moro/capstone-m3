import styled from 'styled-components'

export const ListWasteClient = styled.ul`
	width: 100%;
	height:59vh;
	display:flex;
	justify-content:flex-start;
	flex-wrap:wrap;
	overflow-y:scroll;
	gap: 1rem;
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  & {
    scrollbar-width: auto;
    scrollbar-color: var(--green1) transparent;
  }

  /* Chrome, Edge, and Safari */
  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--green1);
    border-radius: 5px;
    border: 3px solid transparent;
  }

	li{
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

			.div-img {
				border: 1px solid var(--green2);
			}
		}

		.div-img{
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
	}

	h2 {
		width: 100%;
		text-align: center;
		font-size: 20px;
		font-weight: bold;
		margin-top: 30px;
	}

	@media (min-width: 550px){
		li{
			width: calc((100% - 2rem) / 3);
		}
	}

	@media (min-width: 768px){
		
		li{
			width: 170px;
		}
	}
`