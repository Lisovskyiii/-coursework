import { Formik, Field, Form, ErrorMessage } from 'formik'

import { Modal } from '../../ui/Modal'
import './style.scss'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import close from '../../assets/icons/close.svg'

export const ReportForm = ({ className, validateSchema, onCloseModal }) => {
	return (
		<Modal className={className} type='addForm'>
			<Formik
				initialValues={{
					subject: '',
					group: '',
					classes: 'лек',
					audience: '',
					file: ''
				}}
				validationSchema={validateSchema}
			>
				{({ isSubmitting, resetForm }) => (
					<Form className='report-form'>
						<h2 className='report-form__title'>Заполните форму</h2>
						<img
							src={close}
							className='report-form__close'
							alt='close'
							onClick={() => {
								onCloseModal()
								resetForm()
							}}
						></img>
						<label className='report-form__label' htmlFor='subject'>
							Дисциплина
						</label>
						<Field name='subject' type='text' as={Input}></Field>
						<ErrorMessage name='subject' className='error' component='div' />
						<label className='report-form__label' htmlFor='group'>
							Учебная группа
						</label>
						<Field name='group' type='text' as={Input}></Field>
						<ErrorMessage name='group' className='error' component='div' />

						<label className='report-form__label' htmlFor='audience'>
							Номер аудитории
						</label>
						<Field name='audience' type='number' as={Input}></Field>
						<ErrorMessage name='audience' className='error' component='div' />

						<label className='report-form__label' htmlFor='classes'>
							Вид занятия
						</label>
						<Field className='report-form__classes' name='classes' as='select'>
							<option value='лек'>лекция</option>
							<option value='практ'>практическое занятие</option>
							<option value='лаб'>лабораторное занятие</option>
							<option value='сем'>семинар</option>
						</Field>
						<ErrorMessage name='classes' className='error' component='div' />

						<Field
							className='report-form__file'
							name='file'
							type='file'
						></Field>
						<ErrorMessage name='file' className='error' component='div' />

						<Button
							className='report-form__button'
							type={'submit'}
							disabled={isSubmitting}
						>
							Отправить
						</Button>
					</Form>
				)}
			</Formik>
		</Modal>
	)
}
