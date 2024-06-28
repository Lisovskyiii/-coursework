import img from '../../assets/icons/add-btn.svg'
import './style.scss'

export const AddReport = ({ className, onAddReport }) => {
  return (
    <div
      className={className ? `btn-report ${className}` : 'btn-report'}
      onClick={onAddReport}
    >
      <img src={img} alt='add-button' />
      <h3 className='btn-report__title'>Добавить отчёт</h3>
    </div>
  )
}
