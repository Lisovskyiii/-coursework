import { ReportCard } from 'types/ReportType';

import styles from './style.module.scss';

export const Card = ({
  subject,
  date,
  time,
  place,
  group,
  classes,
  thumbnail
}: ReportCard): JSX.Element => (
  <li className={styles.card}>
    <img className={styles.img} src={`images/${thumbnail}`} alt={group} />
    <div className={styles.descr}>
      <div className={styles.group}>{group}</div>
      <div className={styles.subject}>{subject}</div>
      <div className={styles.classes}>{classes}</div>
      <div className={styles.place}>{place}</div>
      <div className={styles.time}>{time}</div>
      <div className={styles.date}>{date}</div>
    </div>
  </li>
);
