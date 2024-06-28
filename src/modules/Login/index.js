import styled from 'styled-components'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { setUser } from '../../store/slices/UserSlices'
import { LoginForm } from '../../components/LoginForm'

const LoginFormStyled = styled(LoginForm)`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`

export const Login = () => {
  const dispatch = useDispatch()
  const auth = getAuth()
  const navigate = useNavigate()

  let validateSchema = Yup.object({
    email: Yup.string()
      .required('Обязательное поле')
      .email('Неверный формат email'),
    password: Yup.string().required('Обязательное поле')
  })

  const onLogin = ({ email, password }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken
          })
        )
        navigate('')
      })
      .catch(() => alert('Неверные данные'))
  }

  return (
    <LoginFormStyled
      onLogin={onLogin}
      validateSchema={validateSchema}
    ></LoginFormStyled>
  )
}
