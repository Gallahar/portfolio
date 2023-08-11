import { ActionButton } from '@/shared/ui/ActionButton'
import {
	ButtonsWrapper,
	Card,
	CardDivider,
	CardImage,
	CardTitle,
} from './projectCard.style'
import { FC } from 'react'
import { BaseDescription } from '@/shared/ui/typography'

interface CardProps {
	slides: string[]
	title: string
	description: string
	previewUrl: string
	codeUrl: string
	onClickImg: () => void
}

export const ProjectCard: FC<CardProps> = ({
	slides,
	title,
	description,
	codeUrl,
	previewUrl,
	onClickImg,
}) => {
	return (
		<Card>
			<CardImage onClick={onClickImg} src={slides[0]} alt={`${title}-img`} />
			<CardTitle>{title}</CardTitle>
			<CardDivider />
			<BaseDescription>{description}</BaseDescription>
			<ButtonsWrapper>
				<ActionButton size='md' target='blank' href={previewUrl}>
					Look it up
				</ActionButton>
				<ActionButton size='md' target='blank' href={codeUrl}>
					Source code
				</ActionButton>
			</ButtonsWrapper>
		</Card>
	)
}
