import { IconDot } from '@/assets/icons/IconDot'
import { CardWrapper } from './aboutCard.style'
import { BaseDescription } from '@/shared/ui/typography'
import { FC } from 'react'

interface AboutCardProps {
	year: string
	description: string
}

export const AboutCard: FC<AboutCardProps> = ({ description, year }) => {
	return (
		<CardWrapper>
			<span>{year}</span>
			<IconDot />
			<BaseDescription>{description}</BaseDescription>
		</CardWrapper>
	)
}
