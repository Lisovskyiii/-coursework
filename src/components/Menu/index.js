import './style.scss'

import close from '../../assets/icons/close.svg'

export const Menu = ({ className, isMenu }) => {
	return (
		<div className={className ? `menu ${className}` : 'menu'}>
			<div className='menu__close' onClick={isMenu}>
				<img src={close} alt='close' />
			</div>
			<nav>
				<ul className='menu__list'>
					<li className='menu__link menu__link-help'>
						<a href='#'>Поддержка</a>
					</li>
					<li className='menu__link menu__link-settings'>
						<a href='#'>Настройки</a>
					</li>
					<li className='menu__link menu__link-exit'>
						<a href='#'>Выйти</a>
					</li>
				</ul>
			</nav>
		</div>
	)
}
