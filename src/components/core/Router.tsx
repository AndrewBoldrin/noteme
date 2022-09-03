import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../../App';
import { Index } from '../../pages/Index';

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Index />} />
      </Route>
    </Routes>
  );
};
