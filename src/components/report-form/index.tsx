import { FormField } from 'components/form-field';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from 'ui/button';
import { Modal } from 'ui/modal';
import { ValidateSchemaReportType } from 'utils/ValidateForm';

import close from '../../assets/icons/close.svg';

import styles from './style.module.scss';
import { toFormatDateForInput, formatDateToDMY } from 'utils/time.utils';
import { group } from 'console';

interface IReportFormProps {
  className?: string;
  onCloseModal: () => void;
  setDate: (values: string) => void;
  schedule: any[] | null;
  validateSchema: ValidateSchemaReportType;
}

const generateOptions = (schedule: any[]) => {
  return schedule.map((schedule, i) => {
    schedule.fullTitle = `${++i}. ${schedule.timeStart}-${schedule.timeEnd} ${schedule.title} (${schedule.type}), ${schedule.address}, ${schedule.room} `;
    return schedule;
  });
};

const generateGroupsOptions = (schedule: any, lessonId: string) => {
  const lesson = schedule?.find((lesson: any) => lesson.id === lessonId);
  return lesson?.groups;
};

export const ReportForm = ({
  className,
  validateSchema,
  setDate,
  schedule,
  onCloseModal
}: IReportFormProps): JSX.Element => {
  console.log(schedule);
  const dataOptions = schedule && generateOptions(schedule);
  const dataGroupOptions = schedule;

  return (
    <Modal className={className} type="addForm">
      <Formik
        initialValues={{
          dateStart: toFormatDateForInput(),
          subject: '',
          file: null,
          group: ''
        }}
        validationSchema={validateSchema}
        onSubmit={(values) => {
          const submitValues = {...values, subject: schedule?.find((lesson) => lesson.id === values.subject)};
          
          const formData = new FormData();
  
          // Добавляем простые поля
          formData.append('dateStart', submitValues.dateStart);
          formData.append('groupId', submitValues.group);
          formData.append('subject', submitValues.subject);
            // formData.append('file', submitValues.file);

          console.log(formData)
        }}
      >
        {({ isSubmitting, resetForm, values }) => (
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

            <FormField
              onChangeInput={(value: string) => setDate(formatDateToDMY(value))}
              classInput={styles.input}
              name="dateStart"
              type="date"
            />

            {schedule && schedule.length !== 0 ? (
              <>
                <Field className={styles.classes} placeholder="Email" name="subject" as="select">
                  <option value="" disabled hidden>
                    Выберите предмет
                  </option>
                  {dataOptions?.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.fullTitle}
                    </option>
                  ))}
                </Field>

                <ErrorMessage name="subject" className={styles.error} component="div" />

                <FormField classInput={styles.file} type="file" name="file" />
              </>
            ) : (
              <div>В данный день нету занятий</div>
            )}

            {values.subject && (
              <Field className={styles.classes} placeholder="Группа" name="group" as="select">
                <option value="" disabled hidden>
                  Выберите группу
                </option>
                {generateGroupsOptions(schedule, values.subject)?.map((option: any) => (
                  <option key={option.id} value={option.id}>
                    {option.title}
                  </option>
                ))}
              </Field>
            )}

            <Button
              className={styles.button}
              type="submit"
              disabled={isSubmitting || schedule?.length === 0}
            >
              Отправить
            </Button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};
