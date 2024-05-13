import { useState } from 'react'
import styled from 'styled-components'

import { Header } from '../../components/Header'
import { Menu } from '../../components/Menu'

const MenuStyled = styled(Menu)`
	position: absolute;
	z-index: 3;
	top: 0;
	left: -100%;
	transition: 0.5s all ease;
	${props =>
		props.active &&
		`
        display:block;
        left: 0
        `}
`

const HeaderStyled = styled(Header)`
	position: fixed;
	top: 0;
	z-index: 2;
`

export const AppHeader = () => {
	const [active, setActive] = useState(false)

	const isMenu = () => {
		setActive(!active)
	}

	return (
		<>
			<HeaderStyled isMenu={isMenu} name='Лисовский К.А'>
				<MenuStyled active={active} isMenu={isMenu}></MenuStyled>
			</HeaderStyled>
		</>
	)
}
