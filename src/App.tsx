import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

function App(): React.ReactElement {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default App;
