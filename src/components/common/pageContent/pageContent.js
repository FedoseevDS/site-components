import React from 'react';

import { SideBar } from 'components/common/sideBar/sideBar';

import styles from './styles.module.scss';

export const PageContent = ({ path, children }) => {
  return (
    <div className={styles.wrapper}>
      <SideBar path={path} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
