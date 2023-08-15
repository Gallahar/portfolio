import styled, { keyframes } from 'styled-components'

const soaring = keyframes`
0%{
    transform: translateY(-10px);
}

100%{
    transform: translateY(10px);
}
`

export const Button = styled('button')<{ $isVisible: boolean }>`
	opacity: ${(props) => (props.$isVisible ? 1 : 0)};
	visibility: ${(props) => (props.$isVisible ? 'visible' : 'hidden')};
	position: fixed;
	font-size: 8rem;
	right: 1em;
	bottom: 0.5em;
	color: var(--text-primary);
	border-radius: 8px;
	padding: 0.1em 0.1em;
	line-height: 100%;
	background: var(--main-gr);
	animation: ${soaring} 1s infinite ease-in alternate;
	background-size: 100%;
	transition: all 0.2s ease-in;
	z-index: 2;
	&:hover {
		background-size: 150%;
		text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
	}
	&:active {
		padding-bottom: 0.05em;
	}
`
