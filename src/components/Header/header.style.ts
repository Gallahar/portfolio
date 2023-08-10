import { Container } from '@/shared/ui/Containers'
import { styled } from 'styled-components'

export const HeaderWrapper = styled('header')`
	font-weight: 500;
	padding: 4.6em 0;
	width: 100%;
`

export const HeaderContainer = styled(Container)`
	display: flex;
	justify-content: space-between;
`

export const Nav = styled('nav')`
	font-size: 3rem;
	display: flex;
	align-items: center;
	gap: 98px;
`

export const Socials = styled('div')`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 30px;
`
