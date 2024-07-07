import { fieldsReport } from 'constants/FieldConstants';

import { FormField } from 'components/form-field';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'ui/button';
import { Modal } from 'ui/modal';
import { ValidateSchemaReportType } from 'utils/ValidateForm';

import close from '../../assets/icons/close.svg';

import styles from './style.module.scss';

interface IReportFormProps {
  className?: string;
  onCloseModal: () => void;
  validateSchema: ValidateSchemaReportType;
}

export const ReportForm = ({
  className,
  validateSchema,
  onCloseModal
}: IReportFormProps): JSX.Element => (
  <Modal className={className} type="addForm">
    <Formik
      initialValues={{
        subject: '',
        group: '',
        classes: 'лек',
        audience: '',
        file: ''
      }}
      validationSchema={validateSchema}
      onSubmit={(values) => {
        // Здесь должна быть логика обработки данных формы
        console.log(values);
      }}
    >
      {({ isSubmitting, resetForm }) => (
        <Form className={styles.reportForm}>
          <h2 className={styles.title}>Заполните форму</h2>
          <button
            type="button"
            className={styles.close}
            onClick={() => {
              onCloseModal();
              resetForm();
            }}
            onKeyDown={() => {
              onCloseModal();
              resetForm();
            }}
          >
            <img src={close} alt="close" />
          </button>

          {fieldsReport.map(({ label, name, type }) => (
            <FormField
              key={name}
              classInput={styles.input}
              classLabel={styles.label}
              type={type}
              name={name}
              label={label}
            />
          ))}

          <label className={styles.label} htmlFor="classes">
            Вид занятия
          </label>
          <Field className={styles.classes} name="classes" as="select">
            <option value="лек">лекция</option>
            <option value="практ">практическое занятие</option>
            <option value="лаб">лабораторное занятие</option>
            <option value="сем">семинар</option>
          </Field>
          <ErrorMessage name="classes" className={styles.error} component="div" />

          <FormField classInput={styles.file} type="file" name="file" />

          <Button className={styles.button} type="submit" disabled={isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  </Modal>
);
