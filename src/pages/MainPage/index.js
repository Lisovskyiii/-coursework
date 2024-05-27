import styled from 'styled-components'
import { useState } from 'react'

import { CardList } from '../../modules/CardList'
import { AddReport } from '../../components/AddReport'
import { ModalMain } from '../../modules/ModalMain/index'

const CardListStyled = styled(CardList)`
	margin: 50px auto 0 auto;

	@media (max-width: 620px) {
		margin: 50px 10px 0 10px;
	}
`

const AddReportStyled = styled(AddReport)`
	margin: 0 auto;
`

const ModalMainStyled = styled(ModalMain)`
	display: ${props => (props.activeModal ? 'block' : 'none')};
`

export const MainPage = () => {
	const [activeModal, setActiveModal] = useState(false)

	const onAddReport = () => {
		setActiveModal(true)
	}

	const onCloseModal = () => {
		setActiveModal(false)
	}

	return (
		<>
			<ModalMainStyled
				activeModal={activeModal}
				onCloseModal={onCloseModal}
			></ModalMainStyled>
			<AddReportStyled onAddReport={onAddReport}></AddReportStyled>
			<CardListStyled></CardListStyled>
		</>
	)
}
