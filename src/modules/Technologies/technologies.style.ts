import { BaseSection } from '@/shared/ui/Containers'
import { BaseTitle } from '@/shared/ui/typography'
import { styled } from 'styled-components'

export const TechnologiesSection = styled(BaseSection)`
	display: flex;
	flex-direction: column;
	gap: 133px;
`

export const ProgressCardsWrapper = styled('div')`
	display: grid;
	grid-template-columns: 1fr;
	gap: 55px;
	padding-top: 108px;
	padding-left: 108px;
`

export const AdditionalTechnologiesTitle = styled(BaseTitle)`
	font-size: 4.8rem;
`

export const AdditionalTechnologiesList = styled('ul')`
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 400px));
	gap: 32px 0;
	justify-content: space-between;
	padding-top: 83px;
	padding-left: 108px;

	> li {
		font-size: 3.6rem;
		&::before {
			content: '• ';
			color: var(--text-primary);
		}
	}
`
