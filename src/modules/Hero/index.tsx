import { HeroSVG } from 'src/assets/HeroSVG'
import { ContentWrapper, HeroTitle, HeroWrapper } from './hero.style'
import { ActionButton } from '@/shared/ui/ActionButton'
import { Container } from '@/shared/ui/Containers'

export const Hero = () => {
	return (
		<HeroWrapper>
			<HeroSVG />
			<Container>
				<ContentWrapper>
					<HeroTitle>Hello, im David!</HeroTitle>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
						exercitationem officiis vitae recusandae dolor sapiente ea omnis?
						Accusamus ratione officiis nulla, nihil, sit ea ad ex repellendus
						placeat nisi voluptatibus!
					</p>
					<ActionButton href='#Projects' size='lg'>
						Let's begin
					</ActionButton>
				</ContentWrapper>
			</Container>
		</HeroWrapper>
	)
}
