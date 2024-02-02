import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { SideBar } from 'components/common/sideBar/sideBar';

import { dataHtml } from './const';
import { divConfig } from './div/config';
import { Div } from './div/div';
import styles from './styles.module.scss';

export const Html = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <SideBar data={dataHtml} />
      </div>
      <Routes>
        <Route path='/div' element={<Div data={divConfig} />} />
      </Routes>
    </div>
  );
};
