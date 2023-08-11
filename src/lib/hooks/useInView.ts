import { useRef, useEffect } from 'react'
import { useIntersectionContext } from './useIntersectionContext'

export const useInView = () => {
	const sectionRef = useRef<HTMLElement>(null)
	const { setIntersectingSection, intersectingSection } =
		useIntersectionContext()

	useEffect(() => {
		const handleIntersection = ([entry]: IntersectionObserverEntry[]) => {
			if (entry.isIntersecting) {
				setIntersectingSection(entry.target.id)
			}
		}

		const observer = new IntersectionObserver(handleIntersection, {
			threshold: 0.3,
		})
		if (!sectionRef.current) return
		observer.observe(sectionRef.current)

		return () => {
			if (!sectionRef.current) return
			observer.unobserve(sectionRef.current)
		}
	}, [])

	return { intersectingSection, sectionRef }
}
