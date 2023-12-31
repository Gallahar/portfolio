import * as Styled from './header.style'
import { navData, socialsData } from './data'
import { IconLogo } from 'src/assets/icons/IconLogo'
import { IconLink, TextLink } from '@/shared/ui/links'
import { useRef } from 'react'
import { useWindowScroll } from '@/lib/hooks/useWindowScroll'

export const Header = () => {
	const headerRef = useRef<HTMLElement>(null)

	const { isVisible: isSticky } = useWindowScroll(
		headerRef.current?.clientHeight || 60,
		10
	)

	return (
		<Styled.HeaderWrapper $isSticky={isSticky} ref={headerRef}>
			<Styled.HeaderContainer>
				<IconLogo />
				<Styled.Nav>
					{navData.map(({ title, href }) => (
						<TextLink key={title} href={href}>
							{title}
						</TextLink>
					))}
				</Styled.Nav>
				<Styled.Socials>
					{socialsData.map(({ svg, href }) => (
						<IconLink target='blank' key={href} href={href}>
							{svg}
						</IconLink>
					))}
				</Styled.Socials>
			</Styled.HeaderContainer>
		</Styled.HeaderWrapper>
	)
}
