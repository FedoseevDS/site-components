import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Main } from './pages/main/main';
import './styles/global.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
    </Routes>
  );
}

export default App;
