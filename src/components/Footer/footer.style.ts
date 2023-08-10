import { BaseSection, Container } from '@/shared/ui/Containers'
import { styled } from 'styled-components'

export const StyledFooter = styled(BaseSection)`
	margin-top: 200px;
	padding: 8em 0;
`

export const FooterContainer = styled(Container)`
	max-width: 1400px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	> a {
		font-size: 3.2rem;
	}
`
export const IconsWrapper = styled('div')`
	display: flex;
	align-items: center;
	gap: 65px;
	svg {
		width: 72px;
		height: 72px;
	}
`
