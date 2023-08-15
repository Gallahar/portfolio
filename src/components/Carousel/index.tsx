import { FC } from 'react'
import {
	CarouselContent,
	CarouselControl,
	CarouselControlRight,
	CarouselItem,
	CarouselTrack,
	CarouselWrapper,
	CloseButton,
} from './carousel.style'

import { useCarousel } from './useCarousel'
import { IconArrowLeft } from '@/assets/icons/IconArrowLeft'
import { IconArrowRight } from '@/assets/icons/IconArrowRight'
import { IconCross } from '@/assets/icons/IconCross'

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
			<CloseButton as='button' onClick={closeCarousel}>
				<IconCross />
			</CloseButton>
			<CarouselContent
				onMouseLeave={handleMouseLeave}
				onMouseEnter={handleMouseEnter}
			>
				<CarouselControl
					as='button'
					$isVisible={isControlsVisible}
					onClick={handlePrev}
				>
					<IconArrowLeft />
				</CarouselControl>
				<CarouselTrack $multiplier={activeSlide}>
					{slides.map((slide) => (
						<CarouselItem $url={slide} key={slide} />
					))}
				</CarouselTrack>
				<CarouselControlRight
					as='button'
					$isVisible={isControlsVisible}
					onClick={handleNext}
				>
					<IconArrowRight />
				</CarouselControlRight>
			</CarouselContent>
		</CarouselWrapper>
	)
}
