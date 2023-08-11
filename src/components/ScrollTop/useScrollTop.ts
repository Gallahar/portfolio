import { useWindowScroll } from '@/lib/hooks/useWindowScroll'
import { useCallback } from 'react'

export const useScrollTop = () => {
	const { isVisible, setIsVisible } = useWindowScroll(
		document.body.clientHeight / 3
	)

	const handleScrollTop = useCallback(() => {
		window.scrollTo(0, 0)
		setIsVisible(false)
	}, [])

	return { isVisible, handleScrollTop }
}
