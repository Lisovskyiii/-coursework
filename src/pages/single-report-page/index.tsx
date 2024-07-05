import { useParams } from 'react-router-dom';

import error from '../../assets/error.gif';
import { SingleReport } from '../../modules/single-report';

interface IUserParams extends Record<string, string | undefined> {
  id: string | undefined;
}

export const SingleReportPage = (): JSX.Element => {
  const { id } = useParams<IUserParams>();

  const reportId = id ? Number(id) : null;

  return reportId ? <SingleReport id={reportId} /> : <img src={error} alt="empty" />;
};
