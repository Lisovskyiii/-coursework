import { Link } from 'react-router-dom'

import { removeUser } from '../../store/slices/UserSlices'
import './style.scss'
import close from '../../assets/icons/close.svg'

export const Menu = ({ className, isMenu, dispatch }) => {
  return (
    <div className={className ? `menu ${className}` : 'menu'}>
      <div className='menu__close' onClick={isMenu}>
        <img src={close} alt='close' />
      </div>
      <nav>
        <ul className='menu__list'>
          <li className='menu__link menu__link-help'>
            <a href='mailto:lisovskij_ka_21@grsu.by'>Поддержка</a>
          </li>
          <li className='menu__link menu__link-settings'>
            <a href='#'>Настройки</a>
          </li>
          <li className='menu__link menu__link-exit'>
            <Link onClick={() => dispatch(removeUser())} to='/login'>
              Выйти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
