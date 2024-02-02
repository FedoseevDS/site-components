import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

export const SideBar = ({ data }) => {
  console.log('data', data);

  const showPanel = () => {
    return data.map(({ path, name, id }) => {
      return (
        <div key={id} className={styles.link}>
          <div>
            <Link to={path}>{name}</Link>
          </div>
        </div>
      );
    });
  };

  return <div className={styles.wrapper}>{showPanel()}</div>;
};
