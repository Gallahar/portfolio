import { throttle } from '@/lib/utils/throttle'
import { useState, useEffect, useCallback } from 'react'

export const useScrollTop = () => {
	const [isVisible, setIsVisible] = useState<boolean>(
		window.scrollY > document.body.clientHeight / 3
	)

	const handleScrollTop = useCallback(() => {
		window.scrollTo(0, 0)
		setIsVisible(false)
	}, [])

	useEffect(() => {
		setIsVisible(window.scrollY > document.body.clientHeight / 3)
		const handleScroll = () => {
			if (window.scrollY > 1000) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}
		const throttledScroll = throttle(handleScroll, 100)

		window.addEventListener('scroll', throttledScroll)

		return () => window.removeEventListener('scroll', throttledScroll)
	}, [window.scrollY])

	return { isVisible, handleScrollTop }
}
