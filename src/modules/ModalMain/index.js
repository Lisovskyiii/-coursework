import styled from 'styled-components'
import * as Yup from 'yup'

import { ReportForm } from '../../components/ReportForm'

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 5;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.56);
`
const ReportFormStyled = styled(ReportForm)`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`

export const ModalMain = ({ activeModal, onCloseModal, className }) => {
  const validateSchema = Yup.object({
    subject: Yup.string()
      .required('Обязательное поле')
      .min(2, 'Минимум 2 символа'),
    group: Yup.string()
      .required('Обязательное поле')
      .min(2, 'Минимум 2 символа'),
    classes: Yup.string().required('Выберите вид занятия'),
    audience: Yup.number()
      .required('Обязательное поле')
      .moreThan(1, 'Такой аудитории нету')
      .lessThan(550, 'Такой аудитории нету'),
    file: Yup.string().required('Загрузите фотографию')
  })

  return (
    <Overlay className={className}>
      <ReportFormStyled
        activeModal={activeModal}
        onCloseModal={onCloseModal}
        validateSchema={validateSchema}
      />
    </Overlay>
  )
}
