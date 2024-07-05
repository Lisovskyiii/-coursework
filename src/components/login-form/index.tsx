import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ValidateSchemaLoginType } from 'utils/ValidateForm';

import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Modal } from '../../ui/modal';

import styles from './style.module.scss';

interface ILoginFormProps {
  className: string;
  onLogin: (values: { email: string; password: string }) => void;
  validateSchema: ValidateSchemaLoginType;
}

export const LoginForm = ({ className, validateSchema, onLogin }: ILoginFormProps): JSX.Element => (
  <Modal className={className} type="loginForm">
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validationSchema={validateSchema}
      onSubmit={(values, { setSubmitting }) => {
        onLogin(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 3000);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={styles.loginForm}>
          <h2 className={styles.title}>Авторизация</h2>
          <label className={styles.label} htmlFor="email">
            Логин
          </label>
          <Field name="email" type="text" autoComplete="username" as={Input} />
          <ErrorMessage name="email" className={styles.error} component="div" />

          <label className={styles.label} htmlFor="password">
            Пароль
          </label>
          <Field name="password" type="password" autoComplete="current-password" as={Input} />

          <ErrorMessage name="password" className={styles.error} component="div" />

          <Button className={styles.btn} type="submit" disabled={isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  </Modal>
);
