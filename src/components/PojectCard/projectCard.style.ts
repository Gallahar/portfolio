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
		transform: translateY(-20px);
		box-shadow: 0px 0px 20px 0px #fff;
	}
`
export const CardImage = styled('img')`
	border-radius: 8px;
	max-height: 266px;
	object-fit: contain;
	&:hover {
		cursor: pointer;
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
