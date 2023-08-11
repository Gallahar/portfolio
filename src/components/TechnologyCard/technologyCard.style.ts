import styled, { keyframes } from 'styled-components'

type ProgressAnimation = {
	$isIntersecting: boolean
	$maxSize: number
	$delay: number
}

export const progressAnimation = ({
	$isIntersecting,
	$maxSize,
}: ProgressAnimation) => keyframes`
0%{
	width: 0%;
}

100%{
	width: ${$isIntersecting ? $maxSize : 0}%;
}
`

export const InfoWrapper = styled('div')`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;

	> h4 {
		font-size: 3.6rem;
	}
	> span {
		font-size: 2.4rem;
	}
`

export const ProgressBarThumb = styled('div')`
	width: 100%;
	height: 32px;
	border-radius: 83px;
	background-color: var(--bg-secondary);
	position: relative;
`

export const ProgressBarTrack = styled('span')<ProgressAnimation>`
	height: 32px;
	background: var(--main-gr) no-repeat;
	top: 0;
	position: absolute;
	border-radius: 83px;
	animation: ${(props) => progressAnimation(props)} 1.5s ease;
	animation-fill-mode: forwards;
	animation-delay: ${(props) => props.$delay}s;
`
