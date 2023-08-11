import { Container } from '@/shared/ui/Containers'
import { css, keyframes, styled } from 'styled-components'

const slideFromTop = keyframes`
0%{
 transform: translateY(-100%);
}

100%{
	transform: translateY(0);
}
`

const headerSticky = css`
	position: sticky;
	top: 0;
	z-index: 2;
	padding: 2.3em 0;
	box-shadow: 0 2px 12px rgba(255, 255, 255, 0.5);
	animation: ${slideFromTop} 0.7s ease-in;
`
const headerStatic = css`
	padding: 4.6em 0;
`

export const HeaderWrapper = styled('header')<{ $isSticky: boolean }>`
	${({ $isSticky }) => ($isSticky ? headerSticky : headerStatic)}
	font-weight: 500;
	width: 100%;
	background-color: var(--bg-primary);
	transition: all 0.5s ease-in-out;
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
