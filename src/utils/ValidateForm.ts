import * as Yup from 'yup';

export const validateSchemaReportForm = Yup.object({
  subject: Yup.string()
    .required('Обязательное поле')
    .min(2, 'Минимум 2 символа'),
    
  group: Yup.string()
    .required('Обязательное поле'),
    
  dateStart: Yup.string()
    .required('Обязательное поле'),
    
  file: Yup.mixed()
    .required('Загрузите фотографию')
    .test('is-file', 'Должен быть файл', (value) => {
      // Проверяем, что это File объект (в браузере)
      return value instanceof File;
    })
    // .test('file-size', 'Файл слишком большой (макс. 5MB)', (value) => {
    //   return !value || value.size <= 5 * 1024 * 1024; // 5MB
    // })
    // .test('file-type', 'Допустимы только изображения', (value) => {
    //   if (!value) return true;
    //   const supportedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    //   return supportedTypes.includes(value.type);
    // })
});

export const validateSchemaLoginForm = Yup.object({
  email: Yup.string().required('Обязательное поле').email('Неверный формат email'),
  password: Yup.string().required('Обязательное поле')
});

export type ValidateSchemaReportType = typeof validateSchemaReportForm;
export type ValidateSchemaLoginType = typeof validateSchemaLoginForm;
