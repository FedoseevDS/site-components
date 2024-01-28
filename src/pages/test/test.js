import React, { useState } from 'react';

import { PageContent } from 'components/common/pageContent/pageContent';
import { Calculator } from 'components/tests/calculator/calculator';
import { Cinema } from 'components/tests/cinema/cinema';

import styles from './styles.module.scss';

export const Test = () => {
  const [isCalculator, setIsCalculator] = useState(false);
  const [isCinema, setIsCinema] = useState(false);

  const onCalculatorHandler = () => {
    setIsCalculator(!isCalculator);
    setIsCinema(false);
  };

  const onCinemaHandler = () => {
    setIsCinema(!isCinema);
    setIsCalculator(false);
  };

  return (
    <PageContent>
      <div className={styles.wrapper}>
        <div className={styles.button}>
          <button onClick={onCinemaHandler}>калькулятор валют</button>
          <button onClick={onCalculatorHandler}>кинотеатр</button>
        </div>
        {isCinema && <Cinema />}
        {isCalculator && <Calculator />}
      </div>
    </PageContent>
  );
};
