import styled from 'styled-components'

import { CardList } from '../../modules/CardList'
import { AddReport } from '../../components/AddReport'

const CardListStyled = styled(CardList)`
	margin: 80px auto 0 auto;
`

const AddReportStyled = styled(AddReport)`
	margin: 0 auto;
`

export const MainPage = () => {
	return (
		<>
			<AddReportStyled></AddReportStyled>
			<CardListStyled></CardListStyled>
		</>
	)
}
