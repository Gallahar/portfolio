import { Button } from './scrollTop.style'
import { useScrollTop } from './useScrollTop'

export const ScrollTop = () => {
	const { handleScrollTop, isVisible } = useScrollTop()

	return (
		<Button onClick={handleScrollTop} $isVisible={isVisible}>
			&#x2191;
		</Button>
	)
}
