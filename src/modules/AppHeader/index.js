import { useAuth } from '../../hooks/useAuth'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
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
  const { isAuth } = useAuth()
  const [active, setActive] = useState(false)
  const dispatch = useDispatch()

  const isMenu = () => {
    setActive(!active)
  }

  return (
    isAuth && (
      <>
        <HeaderStyled isMenu={isMenu} name='Лисовский К.А'>
          <MenuStyled
            active={active}
            dispatch={dispatch}
            isMenu={isMenu}
          ></MenuStyled>
        </HeaderStyled>
      </>
    )
  )
}
