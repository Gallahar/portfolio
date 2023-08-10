import { Container } from '@/shared/ui/Containers'
import {
	AdditionalTechnologiesList,
	AdditionalTechnologiesTitle,
	ProgressCardsWrapper,
	TechnologiesSection,
} from './technologies.style'
import { TechnologyCard } from '@/components/TechnologyCard'
import { technologiesList } from './data'
import { BaseTitle } from '@/shared/ui/typography'

export const Technologies = () => {
	return (
		<TechnologiesSection id='Technologies'>
			<Container>
				<BaseTitle>Technologies</BaseTitle>
				<ProgressCardsWrapper>
					{technologiesList.map((technology, i) => (
						<TechnologyCard key={technology.title} delay={i} {...technology} />
					))}
				</ProgressCardsWrapper>
			</Container>
			<Container>
				<AdditionalTechnologiesTitle>
					Additional technologies and skills
				</AdditionalTechnologiesTitle>
				<AdditionalTechnologiesList>
					<li>React-hook-Form</li>
					<li>Redux</li>
					<li>Quick learning</li>
					<li>English B2</li>
					<li>Teamwork</li>
					<li>WebSockets</li>
					<li>Axios</li>
					<li>Material-Mui</li>
				</AdditionalTechnologiesList>
			</Container>
		</TechnologiesSection>
	)
}
