import { Dispatch, SetStateAction } from 'react'

export interface IntersectionProps {
	intersectingSection: string
	setIntersectingSection: Dispatch<SetStateAction<string>>
}
