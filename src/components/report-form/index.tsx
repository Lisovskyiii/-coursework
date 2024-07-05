import { ErrorMessage, Field, Form, Formik } from 'formik';
import { ValidateSchemaReportType } from 'utils/ValidateForm';

import close from '../../assets/icons/close.svg';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Modal } from '../../ui/modal';

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
          <label className={styles.label} htmlFor="subject">
            Дисциплина
          </label>
          <Field name="subject" type="text" as={Input} />
          <ErrorMessage name="subject" className={styles.error} component="div" />
          <label className={styles.label} htmlFor="group">
            Учебная группа
          </label>
          <Field name="group" type="text" as={Input} />
          <ErrorMessage name="group" className={styles.error} component="div" />

          <label className={styles.label} htmlFor="audience">
            Номер аудитории
          </label>
          <Field name="audience" type="number" as={Input} />
          <ErrorMessage name="audience" className={styles.error} component="div" />

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

          <Field className={styles.file} name="file" type="file" />
          <ErrorMessage name="file" className={styles.error} component="div" />

          <Button className={styles.button} type="submit" disabled={isSubmitting}>
            Отправить
          </Button>
        </Form>
      )}
    </Formik>
  </Modal>
);
