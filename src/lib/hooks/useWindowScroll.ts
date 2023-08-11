import { useEffect, useState } from 'react'
import { throttle } from '../utils/throttle'

export const useWindowScroll = (amount: number, frequency?: number) => {
	const [isVisible, setIsVisible] = useState<boolean>(window.scrollY > amount)

	useEffect(() => {
		setIsVisible(window.scrollY > amount)
		const handleScroll = () => {
			if (window.scrollY > amount) {
				setIsVisible(true)
			} else {
				setIsVisible(false)
			}
		}
		const throttledScroll = throttle(handleScroll, frequency ?? 100)

		window.addEventListener('scroll', throttledScroll)

		return () => window.removeEventListener('scroll', throttledScroll)
	}, [])

	return { isVisible, setIsVisible }
}
