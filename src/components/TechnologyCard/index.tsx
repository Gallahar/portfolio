import { FC } from 'react'
import {
	InfoWrapper,
	ProgressBarThumb,
	ProgressBarTrack,
} from './technologyCard.style'
import { useIntersectionContext } from '@/lib/hooks/useIntersectionContext'

interface ProgressCardProps {
	title: string
	level: string
	progress: number
	delay: number
	isIntersecting: boolean
}

export const TechnologyCard: FC<ProgressCardProps> = ({
	title,
	level,
	progress,
	delay,isIntersecting
}) => {
	return (
		<div>
			<InfoWrapper>
				<h4>{title}</h4>
				<span>{level}</span>
			</InfoWrapper>
			<ProgressBarThumb>
				<ProgressBarTrack
					$isIntersecting={isIntersecting}
					$delay={delay}
					$maxSize={progress}
				/>
			</ProgressBarThumb>
		</div>
	)
}
