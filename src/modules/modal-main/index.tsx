import cn from 'classnames';
import { validateSchemaReportForm } from 'utils/ValidateForm';

import { ReportForm } from '../../components/report-form';
import { useEffect, useState } from 'react';

import styles from './style.module.scss';
import { getTeacherSchedule } from 'api/schedule.api';
import { toFormatDate } from 'utils/time.utils';
import { useAppSelector } from 'hooks/useReduxTypedHook';
import { RootState } from 'store/store';

interface IModalProps {
  onCloseModal: () => void;
  className?: string;
  activeModal?: boolean;
}

export const ModalMain = ({ onCloseModal, className, activeModal }: IModalProps): JSX.Element => {
  const [date, setDate] = useState(toFormatDate());
  const [response, setResponse] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useAppSelector((state: RootState) => state.user);

  useEffect(() => {
    const fetchTeacherSchedule = async () => {
      if (activeModal && user.schedule_id) {
        try {
          setIsLoading(true);
          const response = await getTeacherSchedule({
            teacherId: user.schedule_id,
            dateStart: date
          });
          setResponse(response);
        } catch (err) {
          console.error('Failed to fetch schedule:', err);
        } finally {
          setIsLoading(false);
        }
      }
    };

    fetchTeacherSchedule();
  }, [activeModal, date, user.schedule_id]);

  return (
    <div className={cn(styles.overlay, className)}>
      <ReportForm
        setDate={setDate}
        schedule={response ? response.schedule[0]?.lessons : response}
        className={styles.reportForm}
        onCloseModal={onCloseModal}
        validateSchema={validateSchemaReportForm}
      />
    </div>
  );
};
