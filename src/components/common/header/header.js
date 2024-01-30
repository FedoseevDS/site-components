import React from 'react';

import { Link } from 'react-router-dom';

import logo from 'assets/img/logo.png';

import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={logo} alt='Логотип' />
      </div>
      <div className={styles.centralBlock}>
        <h1>Авторский проект - создание сайта с 0 до размещения в мировой паутине</h1>
        <div>
          <Link to={'/'}>Главная</Link>
          <Link to='html'>HTML</Link>
          {/* <Link to='#'>SCSS</Link>
          <Link to='#'>JavaScript</Link>
          <Link to='#'>Frameworks</Link>
          <Link to='#'>Библиотеки</Link>
          <Link to='#'>Компоненты</Link>
          <Link to={'test'}>Тестовые задания</Link> */}
        </div>
      </div>
    </div>
  );
};
