import styled from 'styled-components'
import { ReportStudents } from '../../components/ReportStudents'
import { selectById } from '../../store/slices/CardListSlices'
import { store } from '../../store/store'

const ReportStudentsStyled = styled(ReportStudents)`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const SingleReport = ({ id }) => {
  const report = selectById(store.getState(), id)

  const { students, thumbnail } = report

  return (
    <ReportStudentsStyled
      students={students}
      thumbnail={thumbnail}
    ></ReportStudentsStyled>
  )
}
