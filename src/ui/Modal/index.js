import './style.scss'

export const Modal = ({ className, children, type }) => {
	let extraClass

	switch (type) {
		case 'report':
			extraClass = 'modal__report'
			break
		case 'addForm':
			extraClass = 'modal__add-form'
			break
		case 'loginForm':
			extraClass = 'modal__login-form'
			break
		default:
			extraClass = null
	}

	return (
		<div
			className={
				className ? `modal ${extraClass} ${className}` : `modal ${extraClass}`
			}
		>
			{children}
		</div>
	)
}
