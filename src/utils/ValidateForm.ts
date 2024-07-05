import * as Yup from 'yup';

export const validateSchemaReportForm = Yup.object({
  subject: Yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа'),
  group: Yup.string().required('Обязательное поле').min(2, 'Минимум 2 символа'),
  classes: Yup.string().required('Выберите вид занятия'),
  audience: Yup.number()
    .required('Обязательное поле')
    .moreThan(1, 'Такой аудитории нету')
    .lessThan(550, 'Такой аудитории нету'),
  file: Yup.string().required('Загрузите фотографию')
});

export const validateSchemaLoginForm = Yup.object({
  email: Yup.string().required('Обязательное поле').email('Неверный формат email'),
  password: Yup.string().required('Обязательное поле')
});

export type ValidateSchemaReportType = typeof validateSchemaReportForm;
export type ValidateSchemaLoginType = typeof validateSchemaLoginForm;
