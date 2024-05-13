import image from '../../assets/img/photo1.jpg'

import './style.scss'

export const Card = ({
	subject,
	date,
	time,
	place,
	group,
	id,
	classes,
	thumbnail
}) => {
	return (
		<li key={id} className='card'>
			<img src={image} alt='image1' />
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
