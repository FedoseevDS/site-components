import React from 'react';

import { SideBar } from 'components/common/sideBar/sideBar';

import styles from './styles.module.scss';

export const Main = () => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div>Poov puroom</div>
    </div>
  );
};
