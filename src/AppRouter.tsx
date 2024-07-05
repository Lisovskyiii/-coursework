import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import { privateRoutes, publicRoutes } from './routes';

export const AppRouter = (): JSX.Element => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(
    () => {
      if (isAuth) {
        navigate('');
      } else {
        navigate('login');
      }
    }, // eslint-disable-next-line
    [isAuth]
  );

  return isAuth ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};
