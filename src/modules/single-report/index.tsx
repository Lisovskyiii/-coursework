import { ReportStudents } from '../../components/report-students';
import { selectById } from '../../store/slices/card-list-slices';
import { store } from '../../store/store';

import styles from './style.module.scss';

interface ISingleReport {
  id: number;
}

export const SingleReport = ({ id }: ISingleReport): JSX.Element => {
  const report = selectById(store.getState(), id);

  const { students, thumbnail } = report;

  return (
    <ReportStudents className={styles.singleReport} students={students} thumbnail={thumbnail} />
  );
};
