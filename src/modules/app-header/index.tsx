import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxTypedHook';

import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { useAuth } from '../../hooks/useAuth';

import styles from './style.module.scss';
import { RootState } from 'store/store';

export const AppHeader = (): JSX.Element | null => {
  const { isAuth } = useAuth();
  const user = useAppSelector((state: RootState) => state.user);
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const isMenu = (): void => {
    setActive(!active);
  };

  return isAuth ? (
    <Header className={styles.appHeader} isMenu={isMenu} name={user.name}>
      <Menu
        className={cn(styles.appMenu, { [styles.active]: active })}
        isMenu={isMenu}
        dispatch={dispatch}
      />
    </Header>
  ) : null;
};
