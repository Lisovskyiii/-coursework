import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch } from 'hooks/useReduxTypedHook';

import close from '../../assets/icons/close.svg';
import { removeUser } from '../../store/slices/user-slices';

import styles from './style.module.scss';

interface IMenuProps {
  className?: string;
  isMenu: () => void;
  dispatch: ReturnType<typeof useAppDispatch>;
}

export const Menu = ({ className, isMenu, dispatch }: IMenuProps): JSX.Element => (
  <div className={cn(styles.menu, className)}>
    <div role="button" tabIndex={0} onKeyDown={isMenu} className={styles.close} onClick={isMenu}>
      <img src={close} alt="close" />
    </div>
    <nav>
      <ul className={styles.list}>
        <li className={cn(styles.link, styles.help)}>
          <a href="mailto:lisovskij_ka_21@grsu.by">Поддержка</a>
        </li>
        <li className={cn(styles.link, styles.settings)}>
          <a href="#">Настройки</a>
        </li>
        <li className={cn(styles.link, styles.exit)}>
          <Link onClick={() => dispatch(removeUser())} to="/login">
            Выйти
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);
