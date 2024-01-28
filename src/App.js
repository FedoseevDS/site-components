import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'components/common/header/header';

import { Main } from 'pages/main/main';
import { Test } from 'pages/test/test';

import styles from 'styles/styles.module.scss';

import './styles/global.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
