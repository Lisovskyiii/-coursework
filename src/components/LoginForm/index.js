import { Formik, Field, Form, ErrorMessage } from 'formik'

import { Modal } from '../../ui/Modal'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'

import './style.scss'

export const LoginForm = ({ className, validateSchema, onLogin }) => {
  return (
    <Modal className={className} type='loginForm'>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validateSchema}
        onSubmit={(values, { setSubmitting }) => {
          onLogin(values)
          setTimeout(() => {
            setSubmitting(false)
          }, 3000)
        }}
      >
        {({ isSubmitting }) => (
          <Form className='login-form'>
            <h2 className='login-form__title'>Авторизация</h2>
            <label className='login-form__label' htmlFor='email'>
              Логин
            </label>
            <Field
              name='email'
              type='text'
              autoComplete='username'
              as={Input}
            ></Field>
            <ErrorMessage name='email' className='error' component='div' />

            <label className='login-form__label' htmlFor='password'>
              Пароль
            </label>
            <Field
              name='password'
              type='password'
              autoComplete='current-password'
              as={Input}
            ></Field>

            <ErrorMessage name='password' className='error' component='div' />

            <Button
              className='login-form__btn'
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
