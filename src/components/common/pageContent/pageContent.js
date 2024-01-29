import React from 'react';

import { SideBar } from 'components/common/sideBar/sideBar';

import styles from './styles.module.scss';

export const PageContent = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
