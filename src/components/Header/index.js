import { useNavigate } from 'react-router-dom'

import { VscAccount } from 'react-icons/vsc'
import './style.scss'

export const Header = ({ isMenu, name, children, className }) => {
	const navigate = useNavigate()

	return (
		<header className={className ? `header ${className}` : 'header'}>
			<div className='header__container'>
				<h1 className='header__title' onClick={() => navigate('/')}>
					История <span>отчётов</span>
				</h1>
				<div onClick={isMenu} className='header__menu'>
					<div className='header__account-name'>{name}</div>
					<VscAccount size={28} className='header__account-icon' />
				</div>
			</div>
			{children}
		</header>
	)
}
