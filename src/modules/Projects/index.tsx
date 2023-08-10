import { BaseSection, Container } from '@/shared/ui/Containers'
import { BaseTitle } from '@/shared/ui/typography'
import { CardsWrapper } from './projects.style'
import { ProjectCard } from '@/components/PojectCard'
import { projectsList } from './data'
import { useState } from 'react'
import { Carousel } from '@/components/Carousel'

export const Projects = () => {
	const [slides, setSlides] = useState<null | string[]>(null)

	return (
		<BaseSection id='Projects'>
			<Container>
				<BaseTitle>Projects</BaseTitle>
				<CardsWrapper>
					{projectsList.map((projectData) => (
						<ProjectCard
							onClickImg={()=>setSlides(projectData.slides)}
							key={projectData.title}
							{...projectData}
						/>
					))}
				</CardsWrapper>
			</Container>
			{slides && (
				<Carousel closeCarousel={() => setSlides(null)} slides={slides} />
			)}
		</BaseSection>
	)
}
