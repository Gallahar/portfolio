import { useContext } from 'react'
import { IntersectionContext } from 'src/providers/IntersectionProvider'

export const useIntersectionContext = () => {
	const { intersectingSection, setIntersectingSection } =
		useContext(IntersectionContext)

	return { intersectingSection, setIntersectingSection }
}
