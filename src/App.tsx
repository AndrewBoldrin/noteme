import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { TopBar } from './components/core/TopBar/TopBar';
import { StyledContainer } from './components/core/StyledContainer/StyledContainer';

function App(): React.ReactElement {
  return (
    <>
      <TopBar />
      <StyledContainer>
        <Outlet />
      </StyledContainer>
    </>
  );
}

export default App;
