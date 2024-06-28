import { Login } from '../../modules/Login'
import styled from 'styled-components'

import background from '../../assets/img/log_bg.jpg'

const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: url(${background}) center center/cover no-repeat;
`

export const LoginPage = () => {
  return (
    <Overlay>
      <Login></Login>
    </Overlay>
  )
}
