import { Modal } from '../../ui/Modal'

import './style.scss'

export const ReportStudents = ({ className, students, thumbnail }) => {
  const elements = students.map((student, i) => {
    let studentInfo = `${++i}. ${student.lastName} ${student.firstName}`
    return (
      <li
        className={`single-report__li ${
          student.detected ? '' : 'single-report__li-false'
        }`}
        key={student.id}
      >
        <div className='single-report__name'>{studentInfo}</div>
        <div className='single-report__detected'>
          {student.detected ? 'присутсвует' : 'отсутсвует'}
        </div>
      </li>
    )
  })

  return (
    <div className={`single-report ${className}`}>
      <img
        src={process.env.PUBLIC_URL + `images/${thumbnail}`}
        alt='students'
        className='single-report__img'
      ></img>
      <Modal type='report'>
        <ul className='single-report__ul'>{elements}</ul>
      </Modal>
    </div>
  )
}
