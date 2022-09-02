import { Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import NoteIcon from '@mui/icons-material/Note';

export const Logo = (): ReactElement => {
  return (
    <>
      <NoteIcon sx={{ display: 'flex', mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: 'flex',
          flexGrow: { xs: 1, md: 0 },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        NOTEME
      </Typography>
    </>
  );
};
