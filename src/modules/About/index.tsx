import { BaseSection, Container } from '@/shared/ui/Containers'
import { AboutTitle, CardsWrapper } from './about.style'
import { dataList } from './data'
import { AboutCard } from '@/components/AboutCard'

export const About = () => {
	return (
		<BaseSection>
			<Container>
				<AboutTitle>About</AboutTitle>
				<CardsWrapper>
					{dataList.map((data) => (
						<AboutCard key={data.year} {...data} />
					))}
					<span />
				</CardsWrapper>
			</Container>
		</BaseSection>
	)
}
