import { FC } from 'react'
import {
	CarouselContent,
	CarouselControl,
	CarouselControlRight,
	CarouselTrack,
	CarouselWrapper,
	CloseButton,
} from './carousel.style'

import { useCarousel } from './useCarousel'

interface CarouselProps {
	slides: string[]
	closeCarousel: () => void
}

export const Carousel: FC<CarouselProps> = ({ slides, closeCarousel }) => {
	const {
		activeSlide,
		handleMouseEnter,
		handleMouseLeave,
		handleNext,
		handlePrev,
		isControlsVisible,
	} = useCarousel(slides.length)

	return (
		<CarouselWrapper>
			<CloseButton onClick={closeCarousel}>&#10007;</CloseButton>
			<CarouselContent onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter}>
				<CarouselControl $isVisible={isControlsVisible} onClick={handlePrev}>
					&#8617;
				</CarouselControl>
				<CarouselTrack $multiplier={activeSlide}>
					{slides.map((slide) => (
						<li key={slide}>
							<img src={slide} />
						</li>
					))}
				</CarouselTrack>
				<CarouselControlRight
					$isVisible={isControlsVisible}
					onClick={handleNext}
				>
					&#8618;
				</CarouselControlRight>
			</CarouselContent>
		</CarouselWrapper>
	)
}
