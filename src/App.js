import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'components/common/header/header';

import { Html } from 'pages/html/html';
import { Main } from 'pages/main/main';

import styles from 'styles/styles.module.scss';

import './styles/global.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='html/*' element={<Html />} />
      </Routes>
    </div>
  );
}

export default App;
