import { styled } from 'styled-components'

export const Card = styled('div')`
	padding: 2.5em 2.5em 4.5em;
	display: grid;
	grid-template-columns: 1fr;
	gap: 2.5em;
	border-radius: 50px 0px;
	box-shadow: 0px 0px 12px 0px #fff;

	transition: all 0.4s ease-in-out;

	&:hover {
		transform: scale(1.03);
		box-shadow: 0px 0px 20px 0px #fff;
	}
`
export const CardImage = styled('div')<{ $url: string }>`
	border-radius: 8px;
	width: 100%;
	height: 266px;
	background-image: url(${({ $url }) => $url});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: grid;

	grid-template-columns: 100%;
	grid-template-rows: 0%;
	transition: all 0.5s ease-in-out;

	> span {
		opacity: 0;
		display: grid;
		place-items: center;
		font-size: 3rem;
		transition: all 0.5s ease-in-out;
		background-color: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(10px);
	}

	&:hover {
		cursor: pointer;
		grid-template-rows: 100%;
		> span {
			opacity: 1;
		}
	}
`

export const CardTitle = styled('h3')`
	font-size: 3.6rem;
	line-height: 88.5%;
	text-align: center;
`

export const CardDivider = styled('span')`
	max-width: 300px;
	width: 100%;
	margin: 0 auto;
	height: 4px;
	background: var(--main-gr);
	border-radius: 83px;
`
export const ButtonsWrapper = styled('div')`
	align-self: end;
	display: flex;
	justify-content: space-between;
`
