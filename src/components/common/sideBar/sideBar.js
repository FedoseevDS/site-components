import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const SideBar = ({ path }) => {
  console.log('path', path);

  return (
    <div className={styles.wrapper}>
      {path?.map(({ path, name, id }) => (
        <div key={id}>
          <Link to={path} className={styles.link}>
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};
