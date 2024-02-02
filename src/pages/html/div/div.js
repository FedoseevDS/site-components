import React from 'react';

import styles from './styles.module.scss';

export const Div = ({ data }) => {
  console.log('data', data);

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.name}>{data.name}</h1>
      <h2>Описание:</h2>
      <div className={styles.discription}>{data.discription}</div>
      <h2>Атрибуты:</h2>
      <div className={styles.attributes}>
        {/* <div>
          <h4>{data.atr1}</h4>
          <div>{data.atrDiscription1}</div>
        </div> */}
        <div>
          <h4>{data.atr2}</h4>
          <div>{data.atrDiscription2}</div>
        </div>
        {/* <div>
          <h4>{data.atr3}</h4>
          <div>{data.atrDiscription3}</div>
        </div> */}
      </div>
    </div>
  );
};
