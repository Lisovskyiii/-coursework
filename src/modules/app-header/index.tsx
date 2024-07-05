import { useState } from 'react';
import cn from 'classnames';
import { useAppDispatch } from 'hooks/useReduxTypedHook';

import { Header } from '../../components/header';
import { Menu } from '../../components/menu';
import { useAuth } from '../../hooks/useAuth';

// eslint-disable-next-line import/order
import styles from './style.module.scss';

export const AppHeader = (): JSX.Element | null => {
  const { isAuth } = useAuth();
  const [active, setActive] = useState(false);
  const dispatch = useAppDispatch();

  const isMenu = (): void => {
    setActive(!active);
  };

  return isAuth ? (
    <Header className={styles.appHeader} isMenu={isMenu} name="Лисовский К.А">
      <Menu
        className={cn(styles.appMenu, { [styles.active]: active })}
        isMenu={isMenu}
        dispatch={dispatch}
      />
    </Header>
  ) : null;
};
