import { BaseTitle } from '@/shared/ui/typography'
import { styled } from 'styled-components'

export const HeroWrapper = styled('section')`
	width: 100%;
	position: relative;
	> svg {
		position: absolute;
		top: 40px;
		right: 0;
	}
`

export const HeroTitle = styled(BaseTitle)`
	font-size: 6.4rem;
`
export const ContentWrapper = styled('div')`
	max-width: 70%;
	> p {
		padding-top: 0.5em;
		padding-left: 2em;
		color: var(--text-secondary);
		font-size: 3.6rem;
	}
	> a {
		margin-top: 2em;
		margin-left: 4em;
	}
`
