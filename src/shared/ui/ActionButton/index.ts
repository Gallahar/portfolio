import { styled, css } from 'styled-components'
import { ButtonProps } from './interface'
const sizes = {
	md: css`
		padding: 1.5rem 5.2rem;
		font-size: 2rem;
	`,
	lg: css`
		padding: 1.9rem 6.3rem;
		font-size: 2.8rem;
	`,
}

export const ActionButton = styled('a')<ButtonProps>`
	${({ size }) => sizes[size]}
	background: var(--main-gr);
	border-radius: 83px;
	cursor: pointer;
	background-size: 100%;
	transition: background-size 0.2s ease-in;

	&:hover {
		background-size: 150%;
	}
`
