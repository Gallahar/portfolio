import { ReactNode, createContext, useState } from 'react'
import { IntersectionProps } from './interface'

const initialState: IntersectionProps = {
	intersectingSection: '',
	setIntersectingSection: () => {},
}

export const IntersectionContext = createContext(initialState)

export const IntersectionProvider = ({ children }: { children: ReactNode }) => {
	const [intersectingSection, setIntersectingSection] = useState('')

	return (
		<IntersectionContext.Provider
			value={{ intersectingSection, setIntersectingSection }}
		>
			{children}
		</IntersectionContext.Provider>
	)
}
