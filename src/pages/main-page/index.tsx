import { useState } from 'react';
import cn from 'classnames';

import { AddReport } from '../../components/add-report';
import { CardList } from '../../modules/card-list';
import { ModalMain } from '../../modules/modal-main';

import styles from './style.module.scss';

export const MainPage = (): JSX.Element => {
  const [activeModal, setActiveModal] = useState(false);

  const onAddReport = (): void => {
    setActiveModal(true);
  };

  const onCloseModal = (): void => {
    setActiveModal(false);
  };

  return (
    <>
      <ModalMain
        className={cn(styles.modalMain, { [styles.active]: activeModal })}
        onCloseModal={onCloseModal}
        activeModal={activeModal}
      />
      <AddReport className={styles.addReport} onAddReport={onAddReport} />
      <CardList className={styles.cardList} />
    </>
  );
};
