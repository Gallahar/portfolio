import { ActionButton } from '@/shared/ui/ActionButton'
import {
	ButtonsWrapper,
	Card,
	CardDescription,
	CardDivider,
	CardImage,
	CardTitle,
} from './projectCard.style'
import { FC } from 'react'

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
			<CardDescription>{description}</CardDescription>
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
