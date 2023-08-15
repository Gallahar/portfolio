import styled from 'styled-components'
import { appear, scaleIn } from '@/shared/ui/animations'
import { IconLink } from '@/shared/ui/links'

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
	background-color: rgba(0, 0, 0, 0.8);

	animation: ${appear} 0.2s ease-in forwards;
`

export const CarouselContent = styled('div')`
	overflow: hidden;
	position: relative;
	display: flex;
	align-items: center;
	height: 90%;
	width: 90%;

	animation: ${scaleIn} 0.3s ease-in forwards;
`

export const CarouselTrack = styled('ul')<CarouselTrackProps>`
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	overflow: unset;
	height: 100%;
	width: 100%;
	transition: transform 0.4s ease-in-out;
	transform: translate3d(${(props) => -100 * props.$multiplier}%, 0, 0);
`

export const CarouselItem = styled('li')<{ $url: string }>`
	background-image: url(${({ $url }) => $url});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center center;
	flex-shrink: 0;
	flex-grow: 1;
	height: 100%;
	width: 100%;
`

export const CarouselControl = styled(IconLink)<{ $isVisible: boolean }>`
	position: absolute;
	opacity: ${(props) => (props.$isVisible ? 1 : 0)};
	z-index: 4;
	border-radius: 0 20px 20px 0;
	background-color: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(20px);
	top: 50%;
	transform: translateY(-50%);
	transition: opacity 0.2s ease-in;
	cursor: pointer;
	> svg {
		width: 100px;
		height: 100px;
		> path {
			stroke: var(--text-primary);
		}
	}
`

export const CarouselControlRight = styled(CarouselControl)`
	right: 0;
	border-radius: 20px 0 0 20px;
`

export const CloseButton = styled(IconLink)`
	position: fixed;
	z-index: 4;
	top: 0.3em;
	right: 0.5em;
`
