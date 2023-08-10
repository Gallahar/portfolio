import { styled } from 'styled-components'

export const IconLink = styled('a')`
	svg {
		transition: all 0.2s ease-in-out;
	}
	&:hover svg {
		filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.7));
		transform: scale(1.1);
	}
`

export const TextLink = styled('a')`
	white-space: pre-line;
	transition: color 0.2s ease-in-out;
	&:hover {
		color: #13adc7;
	}
`
