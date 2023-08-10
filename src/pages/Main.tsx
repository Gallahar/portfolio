import { Hero } from '@/modules/Hero'
import { Projects } from '@/modules/Projects'
import { MainWrapper } from './main.style'
import { Technologies } from '@/modules/Technologies'
import { ScrollTop } from '@/components/ScrollTop'

export const Main = () => {
	return (
		<MainWrapper>
			<Hero />
			<Projects />
			<Technologies />
			<ScrollTop />
		</MainWrapper>
	)
}
