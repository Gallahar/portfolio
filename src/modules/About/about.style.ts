import { BaseTitle } from '@/shared/ui/typography'
import { styled } from 'styled-components'

export const AboutTitle = styled(BaseTitle)`
	padding-left: 0.5em;
`

export const CardsWrapper = styled('div')`
	--padding: 8em;
	position: relative;
	padding-top: var(--padding);
	display: grid;
	justify-content: space-between;
	align-items: start;
	gap: 2em 0;
	grid-template-columns: repeat(auto-fill, minmax(200px, 394px));

	> span {
		background-color: var(--text-primary);
		height: 1.2em;
		width: 75%;
		position: absolute;
		margin: 0 auto;
		top: calc(var(--padding) + 6.5em);
		right: 0;
		left: 0;

		@media (max-width: 1482px) {
			display: none;
		}
	}
`
