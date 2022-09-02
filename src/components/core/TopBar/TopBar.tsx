import React, { ReactElement } from 'react';
import { AppBar, Toolbar, Container } from '@mui/material';
import { Logo } from './Logo/Logo';
import { MainNav } from './MainNav/MainNav';
import { ResponsiveMainNav } from './MainNav/ResponsiveMainNav';

export const TopBar = (): ReactElement => {
  return (
    <AppBar position="static" color="secondary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ResponsiveMainNav />
          <Logo />
          <MainNav />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
