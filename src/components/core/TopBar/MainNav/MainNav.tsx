import { Box, Button } from '@mui/material';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { pages } from '../../../../helpers/pagesConfig';

export const MainNav = (): ReactElement => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Button
          key={page.name}
          onClick={() => navigate('/')}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          {page.name}
        </Button>
      ))}
    </Box>
  );
};
