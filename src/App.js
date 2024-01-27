import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './styles/global.scss';
import styles from './styles/styles.module.scss'
import { Header } from './components/common/header/header';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      {/* <Routes> */}
        {/* <Route path='/' element={<Main />} /> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
