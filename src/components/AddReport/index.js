import img from '../../assets/icons/add-btn.svg'
import './style.scss'

export const AddReport = ({ className }) => {
	return (
		<div
			className={className ? `btn-report ${className}` : 'btn-report'}
			style={{ margin: '0 auto' }}
		>
			<img src={img} alt='add-button' />
			<h5>Добавить отчёт</h5>
		</div>
	)
}
