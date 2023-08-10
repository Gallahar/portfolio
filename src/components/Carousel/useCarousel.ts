import { useLockScroll } from '@/lib/hooks/useLockScroll'
import { useState } from 'react'

export const useCarousel = (length: number) => {
	const [isControlsVisible, setIsControlsVisible] = useState(false)
	const [activeSlide, setActiveSlide] = useState(0)
	useLockScroll()

	const handleMouseLeave = () => {
		setIsControlsVisible(false)
	}

	const handleMouseEnter = () => {
		setIsControlsVisible(true)
	}

	const handleNext = () => {
		if (activeSlide >= length - 1) {
			return setActiveSlide(0)
		}

		setActiveSlide((prev) => prev + 1)
	}

	const handlePrev = () => {
		if (activeSlide === 0) {
			return setActiveSlide(length - 1)
		}

		setActiveSlide((prev) => prev - 1)
	}

	return {
		handleMouseEnter,
		handleMouseLeave,
		handleNext,
		handlePrev,
		isControlsVisible,
		activeSlide,
	}
}
