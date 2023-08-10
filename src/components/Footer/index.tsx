import { IconLink, TextLink } from '@/shared/ui/links'
import { FooterContainer, IconsWrapper, StyledFooter } from './footer.style'
import { socialsData } from '../Header/data'

export const Footer = () => {
	return (
		<StyledFooter as='footer'>
			<FooterContainer>
				<TextLink href='tel:+79672916981'>
					{'Call me:\n(967) 291-69-81'}
				</TextLink>
				<TextLink href='mailto:david.kushnir.d@gmail.com?subject=deal&body=name:%0D%0Aemail:'>
					{'Email:\ndavid.kushnir.d@gmail.com'}
				</TextLink>
				<IconsWrapper>
					{socialsData.map(({ href, svg }) => (
						<IconLink target='blank' href={href} key={href}>
							{svg}
						</IconLink>
					))}
				</IconsWrapper>
			</FooterContainer>
		</StyledFooter>
	)
}
