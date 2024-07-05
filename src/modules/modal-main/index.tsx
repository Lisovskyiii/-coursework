import cn from 'classnames';
import { validateSchemaReportForm } from 'utils/ValidateForm';

import { ReportForm } from '../../components/report-form';

import styles from './style.module.scss';

interface IModalProps {
  onCloseModal: () => void;
  className?: string;
}

export const ModalMain = ({ onCloseModal, className }: IModalProps): JSX.Element => (
  <div className={cn(styles.overlay, className)}>
    <ReportForm
      className={styles.reportForm}
      onCloseModal={onCloseModal}
      validateSchema={validateSchemaReportForm}
    />
  </div>
);
