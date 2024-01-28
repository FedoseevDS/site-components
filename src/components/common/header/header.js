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
          <Link to={'/'}>Инструкция</Link>
          <Link to={''}>HTML</Link>
          <Link to={''}>SCSS</Link>
          <Link to={''}>JavaScript</Link>
          <Link to={''}>React</Link>
          <Link to={''}>React-router-dom</Link>
          <Link to={''}>Redux</Link>
          <Link to={''}>Тестовые задания</Link>
        </div>
      </div>
    </div>
  );
};
