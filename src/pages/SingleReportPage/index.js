import { useParams } from 'react-router-dom'

import { SingleReport } from '../../modules/SingleReport'

export const SingleReportPage = props => {
  let { id } = useParams()

  return <SingleReport id={id}></SingleReport>
}
