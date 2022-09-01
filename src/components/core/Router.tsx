import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import App from '../../App';

export const Router = (): ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};
