import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { PageContent } from 'components/common/pageContent/pageContent';

import { dataHtml } from './const';

export const Html = () => {
  return (
    <PageContent path={dataHtml}>
      <Routes>
        {dataHtml.map(({ id, ...props }) => (
          <Route key={id} {...props}></Route>
        ))}
      </Routes>
    </PageContent>
  );
};
