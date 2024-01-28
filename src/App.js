import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { Header } from 'components/common/header/header';

import { Main } from 'pages/main/main';

import styles from 'styles/styles.module.scss';
import './styles/global.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
