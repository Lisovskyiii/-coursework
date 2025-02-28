import { fieldsLogin } from 'constants/FieldConstants';

import { FormField } from 'components/form-field';
import { Form, Formik } from 'formik';
import { Button } from 'ui/button';
import { Modal } from 'ui/modal';
import { ValidateSchemaLoginType } from 'utils/ValidateForm';

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

          {fieldsLogin.map(({ label, name, type, autoComplete }) => (
            <FormField
              key={name}
              classInput={styles.input}
              classLabel={styles.label}
              type={type}
              name={name}
              label={label}
              autoComplete={autoComplete}
            />
          ))}

          <Button className={styles.btn} type="submit" disabled={isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  </Modal>
);
