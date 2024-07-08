import { ROUTES } from 'constants/RoutesConstants';

import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from 'hooks/useReduxTypedHook';
import { Report } from 'types/ReportType';

import error from '../../assets/error.gif';
import { Card } from '../../components/card';
import { fetchReports, selectAll } from '../../store/slices/card-list-slices';
import { store } from '../../store/store';
import Spinner from '../../ui/spinner';

import styles from './style.module.scss';

interface ICardListProps {
  className?: string;
}

export const CardList = ({ className }: ICardListProps): JSX.Element => {
  const reports = selectAll(store.getState());
  const reportsLoadingStatus = useAppSelector((state) => state.reports.reportsLoadingStatus);
  const dispatch = useAppDispatch();

  useEffect(
    () => {
      dispatch(fetchReports());
    }, // eslint-disable-next-line
    []
  );

  if (reportsLoadingStatus === 'loading') {
    return <Spinner />;
  }
  if (reportsLoadingStatus === 'error') {
    return (
      <div className={cn(styles.error, className)}>
        <img src={error} alt="error" />
        <h5>Что-то пошло не так :&#40;</h5>
      </div>
    );
  }

  const renderReportsList = (arr: Report[]): JSX.Element[] | JSX.Element => {
    if (arr.length === 0) {
      return (
        <div className={cn(styles.empty, className)}>
          <img src={error} alt="empty" />
          <h5 className={styles.warning}>Упс! Пусто!</h5>
        </div>
      );
    }

    return arr.map((props) => (
      <Link
        key={props.id}
        to={ROUTES.REPORT.replace(':id', props.id.toString())}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card {...props} />
      </Link>
    ));
  };

  const elements = renderReportsList(reports);

  return Array.isArray(elements) ? (
    <ul className={cn(styles.wrapper, className)}>{elements}</ul>
  ) : (
    elements
  );
};
