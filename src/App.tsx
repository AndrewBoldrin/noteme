import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { TopBar } from './components/core/TopBar/TopBar';

function App(): React.ReactElement {
  return (
    <div>
      <TopBar />
      <Outlet />
    </div>
  );
}

export default App;
