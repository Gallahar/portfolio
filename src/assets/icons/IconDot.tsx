import { FC, SVGProps } from 'react'

export const IconDot: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='32'
			height='32'
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='16' cy='16' r='16' fill='white' />
		</svg>
	)
}
