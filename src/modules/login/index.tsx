import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useAppDispatch } from 'hooks/useReduxTypedHook';
import { validateSchemaLoginForm } from 'utils/ValidateForm';

import { LoginForm } from '../../components/login-form';
import { setUser } from '../../store/slices/user-slices';

import styles from './style.module.scss';

interface IOnLoginParams {
  email: string;
  password: string;
}

export const Login = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const auth = getAuth();
  const navigate = useNavigate();

  const onLogin = ({ email, password }: IOnLoginParams) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken
          })
        );
        navigate('');
      })
      .catch(() => alert('Неверные данные'));
  };

  return (
    <LoginForm
      className={styles.login}
      onLogin={onLogin}
      validateSchema={validateSchemaLoginForm}
    />
  );
};
