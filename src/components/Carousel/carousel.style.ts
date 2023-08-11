import styled from 'styled-components'
import { appear, scaleIn } from '@/shared/ui/animations'

interface CarouselTrackProps {
	$multiplier: number
}

export const CarouselWrapper = styled('div')`
	position: fixed;
	top: 0;
	z-index: 3;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, 0.5);

	animation: ${appear} 0.2s ease-in forwards;
`

export const CarouselContent = styled('div')`
	overflow: hidden;
	position: relative;
	height: 80%;
	width: 80%;

	animation: ${scaleIn} 0.3s ease-in forwards;
`

export const CarouselTrack = styled('ul')<CarouselTrackProps>`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	overflow: unset;
	width: 100%;
	transition: transform 0.4s ease-in-out;
	transform: translate3d(${(props) => -100 * props.$multiplier}%, 0, 0);

	> li {
		flex-shrink: 0;
		flex-grow: 1;
		width: 100%;
	}
`

export const CarouselControl = styled('button')<{ $isVisible: boolean }>`
	position: absolute;
	opacity: ${(props) => (props.$isVisible ? 1 : 0)};
	z-index: 4;
	color: #6978d1;
	border-radius: 0 20px 20px 0;
	background-color: rgba(0, 0, 0, 0.5);
	backdrop-filter: blur(20px);
	font-size: 6rem;
	padding: 0.5em;
	top: 50%;
	transform: translateY(-50%);
	transition: opacity 0.2s ease-in, color 0.1s ease-in;

	&:hover {
		color: inherit;
	}
`

export const CarouselControlRight = styled(CarouselControl)`
	right: 0;
	border-radius: 20px 0 0 20px;
`

export const CloseButton = styled('button')`
	position: fixed;
	font-size: 10rem;
	z-index: 4;
	top: 0.3em;
	right: 0.5em;
	color: #6978d1;
	transition: all 0.2s ease-in;
	line-height: 70%;
	&:hover {
		transform: scale(1.2);
		color: inherit;
	}
`
