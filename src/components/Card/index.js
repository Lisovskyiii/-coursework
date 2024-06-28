import './style.scss'

export const Card = ({
  subject,
  date,
  time,
  place,
  group,
  classes,
  thumbnail
}) => {
  return (
    <li className='card'>
      <img src={`images/${thumbnail}`} alt={group} />
      <div className='card__descr'>
        <div className='card__group'>{group}</div>
        <div className='card__subject'>{subject}</div>
        <div className='card__classes'>{classes}</div>
        <div className='card__place'>{place}</div>
        <div className='card__time'>{time}</div>
        <div className='card__date'>{date}</div>
      </div>
    </li>
  )
}
