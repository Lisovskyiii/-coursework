import { useAppSelector } from './useReduxTypedHook';

export const useAuth = () => {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    token,
    id,
    email
  };
};
