import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src='' alt='Логотип' />
      </div>
      <div className={styles.centralBlock}>
        <h1>Заголовок страницы</h1>
        <div>
          <Link to={'/'}>Главная</Link>
          <Link to={''}>Кнопка 2</Link>
          <Link to={''}>Кнопка 3</Link>
          <Link to={''}>Кнопка 4</Link>
          <Link to={''}>Кнопка 5</Link>
          <Link to={''}>Кнопка 6</Link>
          <Link to={''}>Кнопка 7</Link>
          <Link to={''}>Тестовые задания</Link>
        </div>
      </div>
    </div>
  )
}