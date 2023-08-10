import { FC } from 'react'
import {
	InfoWrapper,
	ProgressBarThumb,
	ProgressBarTrack,
} from './technologyCard.style'

interface ProgressCardProps {
	title: string
	level: string
	progress: number
	delay: number
}

export const TechnologyCard: FC<ProgressCardProps> = ({
	title,
	level,
	progress,
	delay,
}) => {
	return (
		<div>
			<InfoWrapper>
				<h4>{title}</h4>
				<span>{level}</span>
			</InfoWrapper>
			<ProgressBarThumb>
				<ProgressBarTrack $delay={delay} $maxSize={progress} />
			</ProgressBarThumb>
		</div>
	)
}
